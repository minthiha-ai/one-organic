import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
}: CartSidebarProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [shippingForm, setShippingForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const deliveryFee = subtotal === 0 ? 0 : (isFreeShipping ? 0 : 7.5);
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    // Simulate API checkout
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutStep('success');
    }, 1800);
  };

  const handleComplete = () => {
    clearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-forest/40 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-coconut-cream border-l border-warm-sand/50 shadow-2xl flex flex-col h-full"
            >
              {/* Header Box */}
              <div className="p-6 border-b border-warm-sand/50 flex justify-between items-center bg-coconut-cream">
                <h3 className="font-serif text-2xl font-bold text-deep-forest flex items-center gap-2">
                  <ShoppingBag className="w-5.5 h-5.5 text-soft-gold" />
                  <span>Your Basket</span>
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-deep-forest hover:text-soft-gold transition-colors cursor-pointer focus:outline-none"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {checkoutStep === 'success' ? (
                /* Success screen */
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-deep-forest text-soft-gold flex items-center justify-center rounded-full mb-6 shadow-sm border border-soft-gold/30">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-deep-forest mb-2">Order Confirmed!</h4>
                  <p className="font-sans text-xs text-soft-gold uppercase tracking-widest font-semibold mb-4">
                    Pure & Nature is on its way
                  </p>
                  <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed max-w-xs mb-8">
                    Thank you {shippingForm.name || 'valued customer'} for supporting regenerative farming. A confirmation mail has been sent to {shippingForm.email || 'your email'}.
                  </p>
                  <button
                    onClick={handleComplete}
                    className="w-full bg-deep-forest hover:bg-deep-forest/90 text-coconut-cream font-sans text-xs font-bold uppercase tracking-wider py-4 rounded-sm transition-all focus:outline-none shadow-sm cursor-pointer"
                  >
                    Continue Journey
                  </button>
                </div>
              ) : checkoutStep === 'shipping' ? (
                /* Shipping / Payment Mock fields */
                <div className="flex-grow flex flex-col h-full overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() => setCheckoutStep('cart')}
                        className="text-xs font-bold text-soft-gold uppercase tracking-wide hover:underline cursor-pointer"
                      >
                        ← Back to List
                      </button>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-deep-forest">Shipping & Delivery</h4>
                    
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4 font-sans text-xs">
                      <div>
                        <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={shippingForm.name}
                          onChange={handleInputChange}
                          placeholder="Julian Wilde"
                          className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={shippingForm.email}
                          onChange={handleInputChange}
                          placeholder="julian@oneorganic.com"
                          className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={shippingForm.address}
                          onChange={handleInputChange}
                          placeholder="Regenerative Lane, Grove 12"
                          className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={shippingForm.city}
                            onChange={handleInputChange}
                            placeholder="Bangkok"
                            className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            name="zip"
                            required
                            value={shippingForm.zip}
                            onChange={handleInputChange}
                            placeholder="10110"
                            className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={shippingForm.phone}
                          onChange={handleInputChange}
                          placeholder="+66 81 234 5678"
                          className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-colors rounded-sm text-sm"
                        />
                      </div>

                      {/* Mock Payment Details */}
                      <div className="border-t border-warm-sand/50 pt-4 mt-6">
                        <span className="text-2xs font-bold uppercase tracking-widest text-soft-gold block mb-2 font-sans">
                          Payment Method (Secure Sim)
                        </span>
                        <div className="p-3 bg-warm-sand/30 border border-warm-sand text-deep-forest text-2xs rounded-sm flex items-center justify-between">
                          <span>💵 Cash on Delivery / Direct Bank Transfer</span>
                          <span className="text-soft-gold font-bold">Guaranteed</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isCheckingOut}
                        className="w-full flex items-center justify-center gap-2 bg-deep-forest text-coconut-cream hover:bg-deep-forest/90 font-sans text-xs font-bold uppercase tracking-wider py-4 mt-8 rounded-sm transition-all shadow-md focus:outline-none cursor-pointer"
                      >
                        {isCheckingOut ? (
                          <span>Securing Order...</span>
                        ) : (
                          <>
                            <span>Complete Purchase • {total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            <ArrowRight className="w-4 h-4 text-soft-gold" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                /* Item list or empty */
                <div className="flex-grow flex flex-col h-full overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Free shipping goal bar */}
                    {cartItems.length > 0 && (
                      <div className="p-4 bg-warm-sand/35 rounded-sm border border-warm-sand">
                        <p className="font-sans text-xs text-deep-forest leading-relaxed mb-2.5">
                          {isFreeShipping ? (
                            <span className="font-semibold text-deep-forest flex items-center gap-1.5 justify-center">
                              ✨ You unlocked <strong className="text-soft-gold">Free Delivery worldwide!</strong>
                            </span>
                          ) : (
                            <span>
                              Spend{' '}
                              <strong className="text-deep-forest">
                                ${(freeShippingThreshold - subtotal).toFixed(2)}
                              </strong>{' '}
                              more for <strong className="text-soft-gold">Free Delivery!</strong>
                            </span>
                          )}
                        </p>
                        <div className="w-full h-1.5 bg-coconut-cream rounded-full overflow-hidden">
                          <div
                            className="h-full bg-soft-gold transition-all duration-500 ease-out"
                            style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {cartItems.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center pt-16">
                        <div className="p-4 rounded-full bg-warm-sand/20 text-deep-forest/40 mb-4">
                          <ShoppingBag className="w-10 h-10" />
                        </div>
                        <p className="font-sans text-sm text-charcoal-text/60 italic mb-6">
                          Your basket is completely empty.
                        </p>
                        <button
                          onClick={onClose}
                          className="bg-deep-forest text-coconut-cream hover:bg-deep-forest/90 font-sans text-2xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-all focus:outline-none shadow-sm cursor-pointer"
                        >
                          Discover Harvests
                        </button>
                      </div>
                    ) : (
                      <ul className="divide-y divide-warm-sand/40">
                        {cartItems.map((item) => (
                          <li key={item.product.id} className="py-4.5 flex gap-4 first:pt-0">
                            <div className="w-16 h-16 bg-warm-sand rounded-sm overflow-hidden shrink-0">
                              <img
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                                src={item.product.image}
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h4 className="font-serif text-sm font-bold text-deep-forest line-clamp-1">
                                    {item.product.name}
                                  </h4>
                                  <span className="font-sans text-xs font-bold text-deep-forest ml-2 shrink-0">
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                  </span>
                                </div>
                                <p className="font-sans text-3xs text-charcoal-text/50 uppercase tracking-widest mt-0.5">
                                  {item.product.size}
                                </p>
                              </div>

                              <div className="flex justify-between items-center mt-3">
                                <div className="flex border border-warm-sand/80 bg-coconut-cream divide-x divide-warm-sand/80 rounded-sm">
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    className="px-2 py-0.5 hover:bg-warm-sand/10 text-deep-forest transition-colors cursor-pointer focus:outline-none text-xs font-bold"
                                  >
                                    -
                                  </button>
                                  <span className="px-3.5 py-0.5 text-xs font-sans font-semibold text-deep-forest">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    className="px-2 py-0.5 hover:bg-warm-sand/10 text-deep-forest transition-colors cursor-pointer focus:outline-none text-xs font-bold"
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-charcoal-text/40 hover:text-red-600 p-1 cursor-pointer transition-colors focus:outline-none"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    /* Invoice totals block */
                    <div className="p-6 bg-coconut-cream border-t border-warm-sand/55 space-y-4">
                      <div className="space-y-2 font-sans text-xs">
                        <div className="flex justify-between text-charcoal-text/70">
                          <span>Basket Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-charcoal-text/70">
                          <span>Delivery Surcharge</span>
                          <span>{isFreeShipping ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between font-bold text-deep-forest text-sm pt-2 border-t border-warm-sand/30">
                          <span>Grand Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setCheckoutStep('shipping')}
                        className="w-full flex items-center justify-center gap-2.5 bg-deep-forest text-coconut-cream hover:bg-deep-forest/90 font-sans text-xs font-bold uppercase tracking-wider py-4 rounded-sm transition-all focus:outline-none shadow-md cursor-pointer"
                      >
                        <span>Secure Checkout</span>
                        <ArrowRight className="w-4 h-4 text-soft-gold" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
