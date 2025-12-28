import { useEffect, useRef } from 'react';

interface Molecule {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'circle' | 'hexagon' | 'triangle';
}

const MovingMolecules = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moleculesRef = useRef<Molecule[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize molecules
    const initMolecules = () => {
      moleculesRef.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 20000);
      
      for (let i = 0; i < count; i++) {
        moleculesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.6,
          type: ['circle', 'hexagon', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'hexagon' | 'triangle'
        });
      }
    };

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = x + Math.cos(angle) * size;
        const py = y + Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawTriangle = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x - size * 0.866, y + size * 0.5);
      ctx.lineTo(x + size * 0.866, y + size * 0.5);
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      moleculesRef.current.forEach((molecule) => {
        // Update position
        molecule.x += molecule.vx;
        molecule.y += molecule.vy;

        // Wrap around edges
        if (molecule.x < 0) molecule.x = canvas.width;
        if (molecule.x > canvas.width) molecule.x = 0;
        if (molecule.y < 0) molecule.y = canvas.height;
        if (molecule.y > canvas.height) molecule.y = 0;

        // Set style
        ctx.globalAlpha = molecule.opacity;
        ctx.fillStyle = `hsl(210, 85%, 75%)`;
        ctx.strokeStyle = `hsl(150, 60%, 65%)`;
        ctx.lineWidth = 1.5;

        // Draw molecule based on type
        switch (molecule.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(molecule.x, molecule.y, molecule.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'hexagon':
            drawHexagon(molecule.x, molecule.y, molecule.size);
            ctx.stroke();
            break;
          case 'triangle':
            drawTriangle(molecule.x, molecule.y, molecule.size);
            ctx.stroke();
            break;
        }
      });

      // Draw connections between nearby molecules
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = `hsl(210, 85%, 75%)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < moleculesRef.current.length; i++) {
        for (let j = i + 1; j < moleculesRef.current.length; j++) {
          const dx = moleculesRef.current[i].x - moleculesRef.current[j].x;
          const dy = moleculesRef.current[i].y - moleculesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(moleculesRef.current[i].x, moleculesRef.current[i].y);
            ctx.lineTo(moleculesRef.current[j].x, moleculesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    initMolecules();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MovingMolecules;