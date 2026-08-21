import React, { useState } from 'react';
import { Star, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Ratings = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      product: 'Canon EOS R5',
      rating: 5,
      title: 'Excellent camera!',
      text: 'Best investment for my video production. Crystal clear 4K quality.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      product: 'Sony FE 70-200mm Lens',
      rating: 4,
      title: 'Great zoom lens',
      text: 'Very sharp and fast autofocus. Highly recommended for professionals.',
      date: '1 month ago',
    },
  ]);

  const [newReview, setNewReview] = useState({
    product: '',
    rating: 0,
    title: '',
    text: '',
  });

  const handleAddReview = () => {
    if (!newReview.product || newReview.rating === 0 || !newReview.title || !newReview.text) {
      alert('Please fill all fields');
      return;
    }

    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        ...newReview,
        date: 'just now',
      },
    ]);

    setNewReview({ product: '', rating: 0, title: '', text: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/" className="text-primary hover:text-primary/80">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-foreground ml-4">My Ratings & Reviews</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Review Form */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Write a Review</h2>
          
          <div className="space-y-4">
            {/* Product Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Product</label>
              <select
                value={newReview.product}
                onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a product...</option>
                <option value="Canon EOS R5">Canon EOS R5</option>
                <option value="Sony A7S III">Sony A7S III</option>
                <option value="Sony FE 70-200mm">Sony FE 70-200mm</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="transition transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={
                        star <= newReview.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                placeholder="Summarize your experience..."
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Your Review</label>
              <textarea
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                placeholder="Share your detailed experience..."
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              onClick={handleAddReview}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Submit Review
            </Button>
          </div>
        </div>

        {/* Reviews List */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Reviews</h2>
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map(review => (
                <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-foreground">{review.product}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{review.title}</h3>
                  <p className="text-foreground text-sm">{review.text}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <MessageSquare size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg">No reviews yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
