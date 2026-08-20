import React, { useState, useMemo } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  // Cameras - DSLR & Mirrorless
  {
    id: 1,
    name: 'Canon EOS R5 Mirrorless Camera',
    category: 'Cameras',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Sony A7S III Cinema Camera',
    category: 'Cameras',
    price: 3980,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 412,
  },
  {
    id: 3,
    name: 'RED Komodo Cinema Camera 8K',
    category: 'Cameras',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 189,
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max Mobile Video',
    category: 'Cameras',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25e5cefd?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 523,
  },
  
  // Lenses - Prime
  {
    id: 5,
    name: 'Canon RF 50mm f/1.2 Prime Lens',
    category: 'Lenses',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98adc5d42?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 6,
    name: 'Sony FE 35mm f/1.4 Prime Lens',
    category: 'Lenses',
    price: 1998,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 134,
  },
  
  // Lenses - Zoom
  {
    id: 7,
    name: 'Canon RF 24-70mm f/2.8 Zoom Lens',
    category: 'Lenses',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 201,
  },
  {
    id: 8,
    name: 'Sony FE 70-200mm f/2.8 Zoom Lens',
    category: 'Lenses',
    price: 2598,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98adc5d42?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 178,
  },
  
  // Lenses - ND Filters
  {
    id: 9,
    name: 'Haida ND Filter Kit 37-82mm',
    category: 'Lenses',
    price: 149,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 89,
  },
  
  // Stabilization - Tripods
  {
    id: 10,
    name: 'Manfrotto 535 Tripod Pro',
    category: 'Stabilization',
    price: 349,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 267,
  },
  {
    id: 11,
    name: 'Gitzo Systematic Carbon Tripod',
    category: 'Stabilization',
    price: 799,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 145,
  },
  
  // Stabilization - Gimbals
  {
    id: 12,
    name: 'DJI RS 4 Gimbal Stabilizer',
    category: 'Stabilization',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 13,
    name: 'Zhiyun Crane 4S Gimbal',
    category: 'Stabilization',
    price: 899,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 203,
  },
  
  // Stabilization - Sliders
  {
    id: 14,
    name: 'Konova K5 Camera Slider 5ft',
    category: 'Stabilization',
    price: 599,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 98,
  },
  
  // Audio - Shotgun Microphones
  {
    id: 15,
    name: 'Rode NTG3 Shotgun Microphone',
    category: 'Audio',
    price: 449,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 16,
    name: 'Sennheiser MKE 600 Shotgun Mic',
    category: 'Audio',
    price: 299,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 156,
  },
  
  // Audio - Lavalier Microphones
  {
    id: 17,
    name: 'Rode Wireless GO II Lavalier',
    category: 'Audio',
    price: 599,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 412,
  },
  {
    id: 18,
    name: 'Sennheiser EW 112P G4 Lavalier',
    category: 'Audio',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 189,
  },
  
  // Audio - Audio Recorders
  {
    id: 19,
    name: 'Zoom F6 Audio Recorder',
    category: 'Audio',
    price: 699,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: 20,
    name: 'Sound Devices MixPre-6 II Recorder',
    category: 'Audio',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 145,
  },
  
  // Lighting - LED Panels
  {
    id: 21,
    name: 'Neewer RGB LED Panel 600W',
    category: 'Lighting',
    price: 249,
    image: 'https://images.unsplash.com/photo-1578926314433-e2789879f90e?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 312,
  },
  {
    id: 22,
    name: 'Aputure MC 4-Light LED Kit',
    category: 'Lighting',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1578926314433-e2789879f90e?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 203,
  },
  
  // Lighting - Softboxes
  {
    id: 23,
    name: 'Godox SB-FW95 Softbox 95cm',
    category: 'Lighting',
    price: 89,
    image: 'https://images.unsplash.com/photo-1578926314433-e2789879f90e?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 24,
    name: 'Chimera Softbox Pro 48" Kit',
    category: 'Lighting',
    price: 599,
    image: 'https://images.unsplash.com/photo-1578926314433-e2789879f90e?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 234,
  },
  
  // Accessories - Memory Cards
  {
    id: 25,
    name: 'SanDisk Extreme Pro 1TB CF Express',
    category: 'Accessories',
    price: 449,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 26,
    name: 'Lexar Professional 1000x 128GB SD Card',
    category: 'Accessories',
    price: 79,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 412,
  },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const categories = ['Cameras', 'Lenses', 'Accessories', 'Lighting'];
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">4STAR ORIGINALS</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition">
                Cameras
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                Lenses
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                Accessories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition">
                Lighting
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:flex p-2 text-foreground hover:text-primary transition">
                <Search size={20} />
              </button>
              <button className="relative p-2 text-foreground hover:text-primary transition">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-foreground" />
                ) : (
                  <Menu size={24} className="text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-3">
              <a href="#" className="block text-foreground hover:text-primary transition">
                Cameras
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition">
                Lenses
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition">
                Accessories
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition">
                Lighting
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1920&h=800&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Video Equipment
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Everything you need to create stunning content
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Handpicked equipment for professionals</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-border'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(product.id) ? 'fill-secondary text-secondary' : 'text-foreground'}
                  />
                </button>
                <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground font-semibold mb-1">Authentic Products</p>
              <p className="text-muted-foreground text-sm">Genuine equipment from trusted brands</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Fast</div>
              <p className="text-foreground font-semibold mb-1">Free Shipping</p>
              <p className="text-muted-foreground text-sm">On orders over $500</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30-Day</div>
              <p className="text-foreground font-semibold mb-1">Returns</p>
              <p className="text-muted-foreground text-sm">No questions asked guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">4star originals</h3>
              <p className="text-sm opacity-90">Professional video equipment for creators</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Common Camera <br/>TypesDSLR (Digital Single-Lens Reflex): Uses a moving mirror to show the image through an optical viewfinder. Great for battery life and lens choices.<br/>Mirrorless: Lacks a mirror, making them smaller and lighter with fast digital screens and electronic viewfinders.<br/>Smartphone: Pocket-sized mobile devices with built-in multi-lens setups and smart software. Best for quick, everyday sharing.<br/>Action Camera: Small, tough, and waterproof devices designed to mount on helmets, bikes, or boards for fast sports.<br/>Cinema Camera: High-end heavy gear built for Hollywood movies, TV shows, and big commercials.<br/>Point-and-Shoot: Simple, fixed-lens compact cameras made for easy travel and family snapshots.<br/>Medium Format: Massive sensor cameras used by fashion and studio pros for extreme detail and huge prints.<br/>If you'd like, I can tell you:<br/>Which camera type is best for a specific budget<br/>The differences between mirrorless and DSLR<br/>Recommendations for vlogging or wildlifeLet me know what you want to learn next.</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Lenses</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Support -<br/> instagram , 4staroriginals<br/> tiktok , @4staroriginals1<br/> twitter, @beginner472s<br/> facebook, Tj Fourstar<br/><br/></h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Contact</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">FAQ <br/>Here are essential FAQs for your new camera and video equipment app to help your users get started quickly and buy with confidence.<br/>General Questions<br/>What is this app? A mobile store to buy and sell new and used camera bodies, lenses, and video gear.<br/>Who can use the app? Anyone looking to upgrade, buy starter gear, or sell old equipment.<br/>Is it free to download? Yes, the app is free on iOS and Android devices.Buying Gear<br/>How do I pay for items? Use secure mobile money, credit cards, or integrated digital wallets at checkout.<br/>Are the used items tested? Yes, our team or certified sellers check every used item before listing.<br/>Can I track my order? Yes, live tracking updates show your package status until it arrives at your door.Selling Gear<br/>How do I list my camera? Take clear photos, fill out the item details, set your price, and post it in minutes.<br/>Does the app charge a fee to sell? We only take a small percentage fee after your item successfully sells.<br/>When do I get my money? Funds transfer to your account after the buyer confirms delivery and item condition. Shipping and Returns<br/>Where do you ship? We ship locally and internationally depending on the seller and buyer locations.<br/>What if the item is broken? You can request a return and refund within 7 days of receiving your order. If you want to tailor these further, tell me:<br/>What is the app's name? 4STAR ORIOGINALS <br/>Do you offer local pickup or only shipping? I can customize these questions to fit your exact business model.</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Privacy Policy- <br/>Welcome to our app. We respect your privacy. This policy explains how we collect, use, and share your personal information when you buy camera gear and video equipment from us. <br/><br/>Information We Collect;<br/> Personal Data: Name, email address, phone number, and shipping address when you create an account or buy items. <br/>Payment Info: <br/>Credit card details and billing address processed securely through our payment partners. <br/>Device Data:<br/> IP address, device type, and app usage data to help us improve your shopping experience. <br/>How We Use Your Information; <br/>Order Fulfillment: <br/>To process payments, ship your cameras and video gear, and send order updates. Customer Support: To answer your questions and handle returns or warranties. <br/>App Improvement:<br/> To fix bugs and see which products people look at most.<br/> Sharing Your Information, <br/>Service Providers: <br/>We share data with shipping companies and payment processors to complete your purchase. <br/>Legal Compliance: <br/>We may share information if the law requires it to protect our rights or safety. <br/>Data Security ;<br/>We use secure servers and encryption to protect your personal and payment details. No method of transmission over the internet is 100% secure. <br/>Your Choices;<br/> You can update your account details or ask us to delete your personal data by contacting our support team.<br/>Contact Us If you have questions about this policy, please contact us at Email ;4starfourstar7@gmail.com.</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Terms</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 CineGear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
