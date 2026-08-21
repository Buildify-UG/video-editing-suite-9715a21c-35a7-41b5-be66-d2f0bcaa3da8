import React, { useState } from 'react';
import { Mail, MessageCircle, Bell, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'Support Team',
      subject: 'Your order #ORD-2024-001 has shipped',
      preview: 'Your camera equipment is on the way...',
      date: '2 hours ago',
      unread: true,
      type: 'order',
    },
    {
      id: 2,
      from: '4STAR ORIGINALS',
      subject: 'New equipment arrived in stock',
      preview: 'Check out the latest Sony cinema cameras...',
      date: '1 day ago',
      unread: true,
      type: 'promo',
    },
    {
      id: 3,
      from: 'Support Team',
      subject: 'Your return has been processed',
      preview: 'Refund of $299 has been issued...',
      date: '3 days ago',
      unread: false,
      type: 'order',
    },
  ]);

  const handleDelete = (id: number) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-primary hover:text-primary/80">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-foreground ml-4">Messages</h1>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Mail size={24} className="text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition relative">
              <Bell size={24} className="text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button className="px-4 py-2 font-semibold text-primary border-b-2 border-primary">
            All Messages
          </button>
          <button className="px-4 py-2 font-semibold text-muted-foreground hover:text-foreground">
            Orders
          </button>
          <button className="px-4 py-2 font-semibold text-muted-foreground hover:text-foreground">
            Promotions
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-2">
          {messages.length > 0 ? (
            messages.map(message => (
              <div
                key={message.id}
                className={`p-4 border border-border rounded-lg hover:bg-muted/50 transition cursor-pointer ${
                  message.unread ? 'bg-primary/5 border-primary/30' : 'bg-card'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        {message.type === 'order' ? (
                          <MessageCircle size={20} className="text-primary-foreground" />
                        ) : (
                          <Bell size={20} className="text-primary-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold ${message.unread ? 'text-foreground font-bold' : 'text-foreground'}`}>
                          {message.from}
                        </p>
                        <p className="text-sm text-muted-foreground">{message.date}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-foreground mb-1">{message.subject}</p>
                    <p className="text-sm text-muted-foreground">{message.preview}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="ml-4 p-2 hover:bg-destructive/10 rounded-lg transition text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Mail size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No messages yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
