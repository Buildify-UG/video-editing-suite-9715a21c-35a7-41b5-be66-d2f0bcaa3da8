import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Shop = () => {
  const cameraTypes = [
    {
      title: 'DSLR (Digital Single-Lens Reflex)',
      description: 'Uses a moving mirror to show the image through an optical viewfinder. Great for battery life and lens choices.'
    },
    {
      title: 'Mirrorless',
      description: 'Lacks a mirror, making them smaller and lighter with fast digital screens and electronic viewfinders.'
    },
    {
      title: 'Smartphone',
      description: 'Pocket-sized mobile devices with built-in multi-lens setups and smart software. Best for quick, everyday sharing.'
    },
    {
      title: 'Action Camera',
      description: 'Small, tough, and waterproof devices designed to mount on helmets, bikes, or boards for fast sports.'
    },
    {
      title: 'Cinema Camera',
      description: 'High-end heavy gear built for Hollywood movies, TV shows, and big commercials.'
    },
    {
      title: 'Point-and-Shoot',
      description: 'Simple, fixed-lens compact cameras made for easy travel and family snapshots.'
    },
    {
      title: 'Medium Format',
      description: 'Massive sensor cameras used by fashion and studio pros for extreme detail and huge prints.'
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
          <h1 className="text-3xl font-bold">Shop Guide</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-8">Common Camera Types</h2>
        
        <div className="grid gap-6">
          {cameraTypes.map((type, idx) => (
            <div key={idx} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent rounded-lg text-accent-foreground">
          <h3 className="text-lg font-semibold mb-4">Need Help Choosing?</h3>
          <ul className="space-y-2">
            <li>• Which camera type is best for a specific budget</li>
            <li>• The differences between mirrorless and DSLR</li>
            <li>• Recommendations for vlogging or wildlife</li>
          </ul>
          <p className="mt-4">Contact our support team to learn more!</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
