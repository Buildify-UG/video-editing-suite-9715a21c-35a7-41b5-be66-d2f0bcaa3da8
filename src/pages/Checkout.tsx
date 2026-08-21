import React, { useState } from 'react';
import { CreditCard, Wallet, Smartphone, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);

  const cartItems = [
    { name: 'Canon EOS R5', price: 3899, qty: 1 },
    { name: 'Canon RF 50mm Lens', price: 2299, qty: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">Order #ORD-2024-001 has been placed successfully.</p>
          <p className="text-lg font-semibold text-foreground mb-8">Total: ${total.toFixed(2)}</p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/" className="text-primary hover:text-primary/80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-foreground ml-4">Checkout</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            {/* Order Items */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-background rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                    <p className="font-bold text-primary">${(item.price * item.qty).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Select Payment Method</h2>
              <div className="space-y-3">
                {/* Credit Card */}
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'card'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-background hover:border-primary/50'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard size={20} className="inline mr-3 text-primary" />
                  <span className="font-semibold text-foreground">Credit/Debit Card</span>
                  <p className="text-sm text-muted-foreground mt-1">Visa, Mastercard, American Express</p>
                </label>

                {/* Mobile Money */}
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'mobile'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-background hover:border-primary/50'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="mobile"
                    checked={paymentMethod === 'mobile'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <Smartphone size={20} className="inline mr-3 text-primary" />
                  <span className="font-semibold text-foreground">Mobile Money</span>
                  <p className="text-sm text-muted-foreground mt-1">M-Pesa, Airtel Money, MTN Money</p>
                </label>

                {/* Digital Wallet */}
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'wallet'
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-background hover:border-primary/50'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    checked={paymentMethod === 'wallet'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <Wallet size={20} className="inline mr-3 text-primary" />
                  <span className="font-semibold text-foreground">Digital Wallet</span>
                  <p className="text-sm text-muted-foreground mt-1">PayPal, Google Pay, Apple Pay</p>
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Breakdown */}
          <div>
            <div className="bg-card border border-border rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Price Breakdown</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
              >
                Complete Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
