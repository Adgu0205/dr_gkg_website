import { useState } from 'react';
import { Send, Mail, MessageSquare, User, Phone } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show success message
    setShowMessage(true);

    // Hide message after 1.5 seconds
    setTimeout(() => {
      setShowMessage(false);
      setIsSubmitting(false);
    }, 1500);

    // Netlify will handle the form submission automatically
  };

  return (
    <section className="py-19 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground font-source max-w-2xl mx-auto">
            Interested in collaboration or have questions about pharmaceutical innovation?
            Let's connect and explore opportunities together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form - Left side, takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="card-gradient rounded-2xl p-8 lg:p-12 hover-lift">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Netlify hidden input for form handling */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-montserrat font-semibold text-foreground mb-3">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input w-full px-4 py-4 bg-background border border-border rounded-lg font-source text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-montserrat font-semibold text-foreground mb-3">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input w-full px-4 py-4 bg-background border border-border rounded-lg font-source text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-montserrat font-semibold text-foreground mb-3">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    className="form-input w-full px-4 py-4 bg-background border border-border rounded-lg font-source text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Share your thoughts, collaboration ideas, or questions about pharmaceutical innovation..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group px-8 py-4 bg-gradient-primary text-white font-montserrat font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info - Right side, takes 1 column */}
          <div className="space-y-8">
            {/* Email Tile */}
            <div className="card-gradient rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-montserrat font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:girish.guptgiri@gmail.com"
                className="text-muted-foreground font-source hover:text-primary transition-colors duration-300"
              >
                girish.guptgiri@gmail.com
              </a>
            </div>

            {/* Phone Number Tile */}
            <div className="card-gradient rounded-xl p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-montserrat font-semibold text-foreground mb-2">Phone Number</h3>
              <a
                href="tel:+919819279245"
                className="text-muted-foreground font-source hover:text-primary transition-colors duration-300"
              >
                +91-9819279245
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message Modal with Glassmorphism Overlay */}
      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
          {/* Glassmorphism Background Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          {/* Message Tile */}
          <div className="relative z-10 bg-gradient-card border border-white/20 rounded-2xl p-8 shadow-card max-w-md mx-4 animate-in zoom-in duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-muted-foreground font-source">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
