/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ProductDetailModal from './components/ProductDetailModal';
import CartSidebar from './components/CartSidebar';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('oneorganic_basket');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync basket to localStorage
  useEffect(() => {
    localStorage.setItem('oneorganic_basket', JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle custom cross-component navigation event
  useEffect(() => {
    const handleNavToContact = () => {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('nav-to-contact', handleNavToContact);
    return () => window.removeEventListener('nav-to-contact', handleNavToContact);
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            setView={setView}
            onSelectProduct={setSelectedProduct}
          />
        );
      case 'products':
        return (
          <ProductsView
            onSelectProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        );
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setView={setView}
            onSelectProduct={setSelectedProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-coconut-cream select-none antialiased selection:bg-warm-sand selection:text-deep-forest">
      {/* Dynamic top navigation header bar */}
      <Navbar
        currentView={currentView}
        setView={setView}
        cartCount={totalCartCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Main active route transition viewport */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer block */}
      <Footer setView={setView} />

      {/* Detailed product info modal overlay trigger */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      {/* Sliding shopping cart drawer panel */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

