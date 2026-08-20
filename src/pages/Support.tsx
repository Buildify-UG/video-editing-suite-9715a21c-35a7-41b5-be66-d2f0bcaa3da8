import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Twitter, Facebook } from 'lucide-react';

const Support = () => {
  const faqItems = [
    {
      q: 'What is 4STAR ORIGINALS?',
      a: 'A mobile store to buy and sell new and used camera bodies, lenses, and video gear.'
    },
    {
      q: 'Who can use the app?',
      a: 'Anyone looking to upgrade, buy starter gear, or sell old equipment.'
    },
    {
      q: 'Is it free to download?',
      a: 'Yes, the app is free on iOS and Android devices.'
    },
    {
      q: 'How do I pay for items?',
      a: 'Use secure mobile money, credit cards, or integrated digital wallets at checkout.'
    },
    {
      q: 'Are the used items tested?',
      a: 'Yes, our team or certified sellers check every used item before listing.'
    },
    {
      q: 'Can I track my order?',
      a: 'Yes, live tracking updates show your package status until it arrives at your door.'
    },
    {
      q: 'How do I list my camera?',
      a: 'Take clear photos, fill out the item details, set your price, and post it in minutes.'
    },
    {
      q: 'Does the app charge a fee to sell?',
      a: 'We only take a small percentage fee after your item successfully sells.'
    },
    {
      q: 'When do I get my money?',
      a: 'Funds transfer to your account after the buyer confirms delivery and item condition.'
    },
    {
      q: 'Where do you ship?',
      a: 'We ship locally and internationally depending on the seller and buyer locations.'
    },
    {
      q: 'What if the item is broken?',
      a: 'You can request a return and refund within 7 days of receiving your order.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold">Support & FAQ</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Contact Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="bg-card rounded-lg p-6 border border-border mb-6">
            <p className="text-foreground font-semibold mb-2">Email</p>
            <p className="text-muted-foreground">4starfourstar7@gmail.com</p>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a href="https://instagram.com/4staroriginals" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition">
              <Instagram size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a href="https://tiktok.com/@4staroriginals1" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition">
              <span className="text-sm font-medium">TikTok</span>
            </a>
            <a href="https://twitter.com/beginner472s" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition">
              <Twitter size={20} />
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a href="https://facebook.com/TjFourstar" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition">
              <Facebook size={20} />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className="bg-card rounded-lg border border-border p-4 cursor-pointer hover:bg-muted transition">
                <summary className="font-semibold text-foreground">
                  {item.q}
                </summary>
                <p className="text-muted-foreground mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
