import { useEffect } from "react";

const PARTICLE_COUNT = 12;
const PARTICLE_SIZE_PX = 3;
const PARTICLE_DURATION_MS = 600;

function createParticle(x: number, y: number, hue: number) {
  const particle = document.createElement("span");
  particle.className = "click-spark-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.width = `${PARTICLE_SIZE_PX}px`;
  particle.style.height = `${PARTICLE_SIZE_PX}px`;
  particle.style.backgroundColor = `hsl(${hue} 85% 55%)`;

  const angle = Math.random() * Math.PI * 2;
  const velocity = 24 + Math.random() * 24; // px
  const dx = Math.cos(angle) * velocity;
  const dy = Math.sin(angle) * velocity;

  particle.style.setProperty("--dx", `${dx}px`);
  particle.style.setProperty("--dy", `${dy}px`);
  particle.style.setProperty("--dur", `${PARTICLE_DURATION_MS}ms`);

  document.body.appendChild(particle);

  const remove = () => {
    particle.removeEventListener("animationend", remove);
    if (particle.parentNode) particle.parentNode.removeChild(particle);
  };

  particle.addEventListener("animationend", remove);
}

function createRing(x: number, y: number, hue: number) {
  const ring = document.createElement("span");
  ring.className = "click-spark-ring";
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  ring.style.borderColor = `hsl(${hue} 85% 55% / 0.5)`;
  ring.style.setProperty("--dur", `${PARTICLE_DURATION_MS}ms`);

  document.body.appendChild(ring);

  const remove = () => {
    ring.removeEventListener("animationend", remove);
    if (ring.parentNode) ring.parentNode.removeChild(ring);
  };

  ring.addEventListener("animationend", remove);
}

const ClickSpark = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Ignore right-click or modifier-clicks
      if (event.button !== 0) return;

      const x = event.clientX;
      const y = event.clientY;

      // Choose a hue close to the brand primary
      const baseHue = 210; // matches --primary base in index.css
      const hue = baseHue + (Math.random() * 20 - 10);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        createParticle(x, y, hue);
      }

      createRing(x, y, hue);
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick as EventListener);
    };
  }, []);

  return null;
};

export default ClickSpark;



