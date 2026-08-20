import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-foreground space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>At 4STAR ORIGINALS, we want you to be completely satisfied with your purchase. Here's our returns policy:</p>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Return Window</h3>
                <p>You can request a return and refund within 7 days of receiving your order.</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Condition Requirements</h3>
                <p>Items must be in their original condition with all original packaging and accessories included.</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Return Process</h3>
                <p>Contact our support team to initiate a return. We'll provide a prepaid shipping label for your convenience.</p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Refund Timeline</h3>
                <p>Once we receive and inspect your returned item, refunds are processed within 5-10 business days.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">User Agreement</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>By using 4STAR ORIGINALS, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information during registration and checkout</li>
                <li>Use the app only for lawful purposes</li>
                <li>Not engage in fraudulent or deceptive practices</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not attempt to hack or compromise app security</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Seller Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>If you're selling camera equipment on our platform:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate descriptions of item condition</li>
                <li>Use clear, honest photos from multiple angles</li>
                <li>Disclose any defects or damage</li>
                <li>Ship items promptly after payment</li>
                <li>Cooperate with buyer inquiries and disputes</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Questions About Our Terms?</h3>
            <p>Contact us at 4starfourstar7@gmail.com for clarification on any terms or conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
