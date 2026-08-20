import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-invert max-w-none">
        <div className="text-foreground space-y-6">
          <p className="text-lg">Welcome to 4STAR ORIGINALS. We respect your privacy. This policy explains how we collect, use, and share your personal information when you buy camera gear and video equipment from us.</p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
                <p className="text-muted-foreground">Name, email address, phone number, and shipping address when you create an account or buy items.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Payment Info</h3>
                <p className="text-muted-foreground">Credit card details and billing address processed securely through our payment partners.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Device Data</h3>
                <p className="text-muted-foreground">IP address, device type, and app usage data to help us improve your shopping experience.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Order Fulfillment</h3>
                <p className="text-muted-foreground">To process payments, ship your cameras and video gear, and send order updates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground">To answer your questions and handle returns or warranties.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">App Improvement</h3>
                <p className="text-muted-foreground">To fix bugs and see which products people look at most.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Service Providers</h3>
                <p className="text-muted-foreground">We share data with shipping companies and payment processors to complete your purchase.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Legal Compliance</h3>
                <p className="text-muted-foreground">We may share information if the law requires it to protect our rights or safety.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">We use secure servers and encryption to protect your personal and payment details. No method of transmission over the internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <p className="text-muted-foreground">You can update your account details or ask us to delete your personal data by contacting our support team.</p>
          </div>

          <div className="bg-accent text-accent-foreground p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>If you have questions about this policy, please contact us at:</p>
            <p className="font-semibold mt-2">Email: 4starfourstar7@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
