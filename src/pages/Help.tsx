import React, { useState } from 'react';
import { MessageCircle, Send, ArrowLeft, ChevronDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Help = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      id: 1,
      question: 'How do I track my order?',
      answer: 'You can track your order in the "Messages" section. We send updates as your package ships and arrives.',
    },
    {
      id: 2,
      question: 'What is your return policy?',
      answer: 'We offer 30-day returns on all equipment. Items must be in original condition with packaging.',
    },
    {
      id: 3,
      question: 'Do you accept international orders?',
      answer: 'Yes! We ship worldwide. Shipping costs and times vary by location.',
    },
    {
      id: 4,
      question: 'Is the equipment new or used?',
      answer: 'We sell both new and certified used equipment. Check the listing for condition details.',
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, mobile money, digital wallets, and bank transfers.',
    },
    {
      id: 6,
      question: 'How do I contact customer support?',
      answer: 'You can reach us via WhatsApp, email, or submit a support ticket on this page.',
    },
  ];

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.subject || !ticketForm.message) {
      alert('Please fill all fields');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setTicketForm({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/" className="text-primary hover:text-primary/80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-foreground ml-4">Help Center</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center"
          >
            <MessageCircle size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
            <p className="opacity-90">Get instant support from our team</p>
          </a>

          {/* Email */}
          <a
            href="mailto:support@4staroriginals.com"
            className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center"
          >
            <AlertCircle size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="opacity-90">support@4staroriginals.com</p>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-4 bg-background hover:bg-muted transition flex items-center justify-between"
                >
                  <p className="font-semibold text-foreground text-left">{faq.question}</p>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === faq.id && (
                  <div className="p-4 bg-card border-t border-border">
                    <p className="text-foreground text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Submit a Support Ticket</h2>
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={32} className="text-primary-foreground" />
              </div>
              <p className="text-foreground font-semibold">Ticket submitted successfully!</p>
              <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={ticketForm.name}
                  onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={ticketForm.email}
                  onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your issue..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Submit Ticket
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
