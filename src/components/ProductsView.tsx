import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductsViewProps {
  onSelectProduct: (product: Product) => void;
  addToCart: (product: Product, quantity: number) => void;
}

export default function ProductsView({ onSelectProduct, addToCart }: ProductsViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'oil' | 'pantry'>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Harvests' },
    { id: 'oil', label: 'Pure Oils & Fats' },
    { id: 'pantry', label: 'Organic Pantry' }
  ] as const;

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="w-full pt-28 pb-24 px-6 md:px-12 bg-coconut-cream">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Head Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans">
            Craft Catalog
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-forest">
            Freshly Exported Yields
          </h1>
          <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed font-light">
            Each small-batch item is filtered with extreme mechanical sensitivity to maintain enzymes, fatty acids, and essential tastes. Select any harvest to see origin certificates.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex justify-center gap-4 mb-16 font-sans text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-deep-forest text-coconut-cream border-deep-forest shadow-sm'
                  : 'bg-transparent text-charcoal-text/75 border-warm-sand-divider hover:text-soft-gold hover:border-soft-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="group bg-coconut-cream border border-warm-sand/55 hover:border-soft-gold transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Image and badges */}
              <div className="aspect-square relative overflow-hidden bg-warm-sand/20 border-b border-warm-sand/35">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-deep-forest text-coconut-cream px-2 py-1 font-sans text-3xs font-bold uppercase tracking-wider rounded-sm">
                    {product.badge}
                  </span>
                )}
                
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={product.image}
                  referrerPolicy="no-referrer"
                />

                {/* Quick actions overlay for desktop */}
                <div className={`hidden md:flex absolute inset-0 bg-deep-forest/20 backdrop-blur-3xs items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredCardId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="p-3.5 bg-coconut-cream rounded-full text-deep-forest hover:text-soft-gold hover:scale-110 transition-all shadow-md focus:outline-none cursor-pointer"
                    title="Add to Basket"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-3.5 bg-coconut-cream rounded-full text-deep-forest hover:text-soft-gold hover:scale-110 transition-all shadow-md focus:outline-none cursor-pointer"
                    title="View Information"
                  >
                    <Eye className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

              {/* Product description brief and detail row */}
              <div className="p-5.5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-center mb-1.5 font-sans text-3xs text-charcoal-text/50 uppercase tracking-wider font-semibold">
                    <span>{product.size}</span>
                    <div className="flex items-center gap-1 text-deep-forest font-bold">
                      <Star className="w-3 h-3 fill-soft-gold text-soft-gold" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-deep-forest group-hover:text-soft-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-text/80 leading-relaxed mt-1.5 font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 pt-4.5 border-t border-warm-sand/35 flex justify-between items-center">
                  <span className="font-sans text-sm font-bold text-deep-forest text-base">
                    {product.priceStr}
                  </span>
                  
                  {/* Small add buttons for mobile */}
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="md:hidden bg-deep-forest hover:bg-soft-gold hover:text-deep-forest text-coconut-cream p-2.5 rounded-sm transition-colors cursor-pointer focus:outline-none"
                    aria-label="Add to Basket"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="hidden md:flex font-sans text-2xs font-bold uppercase tracking-widest text-deep-forest group-hover:text-soft-gold transition-colors items-center gap-1 focus:outline-none"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Sustainability Footer Banner */}
        <div className="mt-20 p-8 md:p-12 border border-warm-sand bg-warm-sand/15 rounded-sm flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-2 max-w-2xl text-left">
            <h4 className="font-serif text-lg md:text-xl font-semibold text-deep-forest flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-soft-gold" />
              <span>Which extraction is right for your home?</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-charcoal-text/80 leading-relaxed font-light">
              Our <strong>Extra Virgin Coconut Oil</strong> is ideal for raw edible ingestives and rich cosmetic therapy. Our canned <strong>Coconut Milk</strong> is tailored purely for cooking, curry base thickening, and gourmet bakery recipes. If you wish to seek specialized wholesale distributions, speak directly to our local regional directors in our contact section.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('top-nav');
              if (element) {
                // Navigate to contact view
                // We'll expose navigation in parent
                const event = new CustomEvent('nav-to-contact');
                window.dispatchEvent(event);
              }
            }}
            className="shrink-0 bg-deep-forest hover:bg-deep-forest/90 text-coconut-cream font-sans text-2xs font-bold uppercase tracking-widest px-6 py-4 rounded-sm transition-colors cursor-pointer border border-transparent shadow-sm"
          >
            Regional Inquiries
          </button>
        </div>

      </div>
    </div>
  );
}
