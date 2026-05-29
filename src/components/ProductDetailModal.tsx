import { useState } from 'react';
import { X, Check, Star, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  addToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetailModal({ product, onClose, addToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [addedMessage, setAddedMessage] = useState(false);

  // Since we imported hooks, wait... can we use useState? Oh wait! We must import useState from 'react'!
  // Let's import { useState } from 'react' explicitly.
  
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-deep-forest/40 backdrop-blur-sm"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-coconut-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl z-10 border border-warm-sand/50"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-coconut-cream border border-warm-sand/55 hover:bg-warm-sand/20 hover:text-soft-gold text-deep-forest transition-colors cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Column */}
            <div className="aspect-square md:aspect-auto w-full relative bg-warm-sand overflow-hidden">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                src={product.image}
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-soft-gold text-deep-forest font-sans text-2xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm border border-deep-forest/10">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Product Details Column */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-2">
                  <span className="text-2xs font-bold text-soft-gold uppercase tracking-widest font-sans">
                    {product.size}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-soft-gold text-soft-gold" />
                    <span className="text-xs font-bold text-deep-forest">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-bold text-deep-forest mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-soft-gold mb-6 font-sans">
                  {product.priceStr}
                </p>

                <p className="text-sm font-sans text-charcoal-text/80 leading-relaxed mb-6">
                  {product.longDescription}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-deep-forest mb-3.5 font-sans">
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs text-charcoal-text/80 leading-normal">
                        <Check className="w-4.5 h-4.5 text-soft-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients & Usage Summary */}
                <div className="border-t border-warm-sand/50 pt-5 mb-8">
                  <p className="text-xs text-charcoal-text/80 mb-2 font-sans">
                    <strong className="text-deep-forest">Ingredients:</strong> {product.ingredients}
                  </p>
                </div>
              </div>

              {/* Action and Purchase Sector */}
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  {/* Quantity adjustment */}
                  <div className="flex border border-warm-sand/80 bg-coconut-cream divide-x divide-warm-sand/80 shrink-0 select-none rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 hover:bg-warm-sand/10 text-deep-forest transition-colors cursor-pointer focus:outline-none"
                    >
                      -
                    </button>
                    <span className="px-5 py-2 text-sm font-sans font-semibold text-deep-forest">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 hover:bg-warm-sand/10 text-deep-forest transition-colors cursor-pointer focus:outline-none"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart */}
                  <button
                    onClick={handleAddToCart}
                    disabled={addedMessage}
                    className="flex-grow flex items-center justify-center gap-2.5 bg-deep-forest text-coconut-cream hover:bg-deep-forest/90 font-sans text-xs font-bold uppercase tracking-wider py-3.5 transition-all rounded-sm cursor-pointer border border-transparent focus:outline-none shadow-sm active:translate-y-px"
                  >
                    {addedMessage ? (
                      <>
                        <Check className="w-4 h-4 text-soft-gold" />
                        <span>Added to Circle</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-warm-sand" />
                        <span>Add to Basket</span>
                      </>
                    )}
                  </button>
                </div>

                {/* External Shopping Channels */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <a
                    href="https://shopee.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-warm-sand/35 hover:bg-warm-sand/50 border border-warm-sand text-deep-forest text-2xs font-semibold uppercase tracking-wider transition-colors duration-300 rounded-sm"
                  >
                    <span>Buy on Shopee</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-soft-gold" />
                  </a>
                  <a
                    href="https://lazada.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-warm-sand/35 hover:bg-warm-sand/50 border border-warm-sand text-deep-forest text-2xs font-semibold uppercase tracking-wider transition-colors duration-300 rounded-sm"
                  >
                    <span>Buy on Lazada</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-soft-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
