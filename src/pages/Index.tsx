import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  {
    id: 1,
    name: '4K Professional Camera',
    category: 'Cameras',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Ultra Wide Lens 14mm',
    category: 'Lenses',
    price: 899,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 3,
    name: 'Professional Tripod',
    category: 'Accessories',
    price: 249,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: '8K Video Camera',
    category: 'Cameras',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 412,
  },
  {
    id: 5,
    name: 'Gimbal Stabilizer Pro',
    category: 'Accessories',
    price: 799,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 203,
  },
  {
    id: 6,
    name: 'LED Ring Light Kit',
    category: 'Lighting',
    price: 349,
    image: 'https://images.unsplash.com/photo-1578926314433-e2789879f90e?w=400&h=300&fit=crop',
    rating: 4.4,
    reviews: 178,
  },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CineGear</h1>
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
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
              <h3 className="text-lg font-bold mb-4">CineGear</h3>
              <p className="text-sm opacity-90">Professional video equipment for creators</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Cameras</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Lenses</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Contact</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">FAQ</a></li>
                <li><a href="#" className="opacity-90 hover:opacity-100">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-90 hover:opacity-100">Privacy</a></li>
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
