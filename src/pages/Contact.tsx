import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold">Find Us & Contact</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            
            <div className="bg-card rounded-lg p-6 border border-border space-y-4">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">4starfourstar7@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Follow Our Socials</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📷 Instagram: @4staroriginals</p>
                <p>🎵 TikTok: @4staroriginals1</p>
                <p>𝕏 Twitter: @beginner472s</p>
                <p>👍 Facebook: Tj Fourstar</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Store Location</h2>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-primary" size={32} />
                  <p className="text-foreground font-semibold mb-2">Coming Soon</p>
                  <p className="text-muted-foreground text-sm">Physical store location details will be available soon</p>
                </div>
              </div>
            </div>

            <div className="bg-accent text-accent-foreground p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm mb-4">Our team is ready to assist you with any questions about camera and video equipment.</p>
              <p className="text-sm font-semibold">Email us anytime - we respond quickly!</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
          <form className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div>
              <label className="block text-foreground font-semibold mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground" />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Email</label>
              <input type="email" placeholder="Your email" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground" />
            </div>
            <div>
              <label className="block text-foreground font-semibold mb-2">Message</label>
              <textarea placeholder="Your message" rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
