import { motion } from 'motion/react';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Star, Quote } from 'lucide-react';
import { Product } from '../types';
import { HOME_PRODUCTS, PRODUCTS } from '../data';

interface HomeViewProps {
  setView: (view: string) => void;
  onSelectProduct: (product: Product) => void;
}

export default function HomeView({ setView, onSelectProduct }: HomeViewProps) {
  const testimonials = [
    {
      text: "The flavor of this cold-pressed oil is unlike anything else. It smells exactly like fresh shredded coconut and has completely transformed my baking.",
      author: "Eleanor Vance",
      role: "Organic Baker & Patissier"
    },
    {
      text: "As a nutritionist, I look for purity first. No stabilizers, no gums, just clean plant extraction. One Organic milk is a staple in my kitchen.",
      author: "Marcus Vance",
      role: "Holistic Health Therapist"
    }
  ];

  const handleProductSelect = (id: string) => {
    const p = PRODUCTS.find(prod => prod.id === id);
    if (p) {
      onSelectProduct(p);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Block */}
      <section className="relative min-h-screen bg-deep-forest text-coconut-cream flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Aesthetic radial glow or graphic rings in the background */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-soft-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute left-1/10 bottom-1/10 w-[350px] h-[350px] rounded-full bg-warm-sand/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Headline Text column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-8 bg-soft-gold" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-soft-gold">
                NATURE'S GOLD, CRAFTED IN PURE WHOLENESS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              One Organic. Ethically-Sourced, Cold-Pressed Pure Coconut Nectar and Clean Oils.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-coconut-cream/85 leading-relaxed max-w-xl font-light"
            >
              Harvested within 4 hours from pristine, community-aligned groves. Our extraction maintains vital nutrients, offering direct soil-to-table traceability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-6"
            >
              <button
                onClick={() => setView('products')}
                className="group flex items-center gap-3 bg-soft-gold text-deep-forest hover:bg-soft-gold/90 transition-all font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-sm cursor-pointer shadow-md"
              >
                <span>Explore Harvest</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Promoted Product Featured Frame column */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-sm bg-warm-sand/10 border border-warm-sand/20 rounded-sm p-4 backdrop-blur-sm self-center justify-self-center overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-soft-gold text-deep-forest text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                  USDA ORGANIC
                </span>
              </div>
              <img
                alt="Extra Virgin Coconut Oil Teaser"
                className="w-full h-full object-cover rounded-sm transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5USS3LClNEKXE2W2066UDjbWK9qzxPF_DuvEvcCUztjj86h8vI90RAEt9SEG9P9EBdTDArK0CwjS5T97CPUk_Am9kwcKBfYFXqu6cQXyV99FQHR0fwxSOjkhpLrdBgflah86HniE_qHJD8VLIYwjbCC4kO7MLxxEGVKkIj3kI2ejXvGnSdYjWZBLtAoPqaRht1VNPpwRtCO1e4boff1ANgpigqoFjNec4FiEHC2UBE_0dxwpRFEXifFITROC9zKYeveNJZVL6Qf4"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-deep-forest/90 via-deep-forest/50 to-transparent pt-12">
                <p className="font-serif text-lg font-bold text-coconut-cream">Extra Virgin Coconut Oil</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-semibold text-soft-gold">$28.00</p>
                  <button
                    onClick={() => handleProductSelect('coconut-oil')}
                    className="text-xs font-bold uppercase tracking-wider text-coconut-cream hover:text-soft-gold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Pure Oils</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Indicator Section (Eco, Nutrition, Circle) */}
      <section className="py-24 px-6 md:px-12 bg-coconut-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans">
              Our Foundations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-forest">
              What it means to be "One" with nature
            </h2>
            <p className="font-sans text-sm text-charcoal-text/75 leading-relaxed">
              We operate beneath high bio-security thresholds to secure our forest groves, ensuring we protect the planet while nourishing your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1 */}
            <div className="p-8 border border-warm-sand/60 bg-coconut-cream hover:border-soft-gold/50 hover:shadow-lg transition-all duration-300 rounded-sm space-y-4">
              <div className="w-12 h-12 bg-deep-forest text-soft-gold rounded-full flex items-center justify-center border border-soft-gold/25">
                <Leaf className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-deep-forest">
                Regenerative Farm practices
              </h3>
              <p className="font-sans text-sm text-charcoal-text/75 leading-relaxed">
                We feed and replenish our soil dynamically. Every palm is cared for using clean compost structures and rainwater collection, completely omitting nitrogenous artificial inputs.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 border border-warm-sand/60 bg-coconut-cream hover:border-soft-gold/50 hover:shadow-lg transition-all duration-300 rounded-sm space-y-4">
              <div className="w-12 h-12 bg-deep-forest text-soft-gold rounded-full flex items-center justify-center border border-soft-gold/25">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-deep-forest">
                Uncompromising Purity
              </h3>
              <p className="font-sans text-sm text-charcoal-text/75 leading-relaxed">
                No stabilizers, thickeners, or preservatives. Our products remain exactly as they exist in the jungle seed: raw, vibrant, organic, and loaded with essential MCFA.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 border border-warm-sand/60 bg-coconut-cream hover:border-soft-gold/50 hover:shadow-lg transition-all duration-300 rounded-sm space-y-4">
              <div className="w-12 h-12 bg-deep-forest text-soft-gold rounded-full flex items-center justify-center border border-soft-gold/25">
                <Heart className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-deep-forest">
                Socio-Economic Integrity
              </h3>
              <p className="font-sans text-sm text-charcoal-text/75 leading-relaxed">
                We work directly with artisanal farming families, securing fair-trade margins that stimulate rural schooling and healthy cooperative life in our heritage grove coordinates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Highlight Banner (Strict Alignment with Mockup 1 styling) */}
      <section className="py-24 px-6 md:px-12 bg-warm-sand/25 border-y border-warm-sand/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans">
                Curated Collection
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-deep-forest">
                Pristine Coconut Products
              </h2>
            </div>
            <button
              onClick={() => setView('products')}
              className="text-xs font-bold uppercase tracking-widest text-deep-forest hover:text-soft-gold transition-colors flex items-center gap-2 cursor-pointer pb-1 border-b border-deep-forest/30"
            >
              <span>View Full Harvesting Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_PRODUCTS.map((teaser) => (
              <div
                key={teaser.id}
                className="group bg-coconut-cream border border-warm-sand/60 hover:border-soft-gold transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Images framing */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-warm-sand">
                  {teaser.tag && (
                    <span className="absolute top-4 left-4 z-10 bg-deep-forest text-coconut-cream font-sans text-3xs font-bold uppercase tracking-widest px-2.5 py-1">
                      {teaser.tag}
                    </span>
                  )}
                  <img
                    alt={teaser.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={teaser.image}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info and button drawer */}
                <div className="p-6.5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-deep-forest mb-1.5 group-hover:text-soft-gold transition-colors">
                      {teaser.name}
                    </h3>
                    <p className="font-sans text-xs font-bold text-charcoal-text/60">
                      Unrefined Small-Batch Natural Yield
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-warm-sand/35">
                    <span className="font-sans text-base font-bold text-deep-forest">
                      {teaser.priceStr}
                    </span>
                    <button
                      onClick={() => handleProductSelect(teaser.id)}
                      className="text-2xs font-bold uppercase tracking-widest text-deep-forest hover:text-soft-gold transition-all flex items-center gap-1 cursor-pointer focus:outline-none"
                    >
                      <span>Inquire Detail</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Block */}
      <section className="py-24 px-6 md:px-12 bg-coconut-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto border-l-2 border-soft-gold pl-8 md:pl-12 space-y-8 py-4">
            <Quote className="w-10 h-10 text-soft-gold/45" />
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="space-y-4">
                  <p className="font-serif text-lg md:text-xl text-deep-forest font-medium italic leading-relaxed">
                    "{t.text}"
                  </p>
                  <p className="font-sans text-xs text-charcoal-text/80 tracking-wide">
                    — <strong className="text-deep-forest font-bold">{t.author}</strong>, {t.role}
                  </p>
                  {idx < testimonials.length - 1 && <div className="h-px bg-warm-sand/30 my-6" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Subscribe "Join Inner Circle" Sector */}
      <section className="py-24 px-6 md:px-12 bg-deep-forest text-coconut-cream border-t border-warm-sand/30 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans">
            Circle Club
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            Nourish Your Inward Connection
          </h2>
          <p className="font-sans text-sm text-coconut-cream/80 leading-relaxed font-light">
            Join our mailing circle list. Get privileged access to custom harvesting schedules, organic baking guides, and early batches of single-origin yields.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for joining our Inner Circle! We will keep you updated on the latest harvests.");
            }}
            className="flex flex-col sm:flex-row gap-3 pt-4 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full sm:max-w-xs px-5 py-3.5 bg-coconut-cream/10 border border-warm-sand/20 text-coconut-cream text-xs outline-none focus:border-soft-gold transition-colors focus:bg-coconut-cream/15 rounded-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-soft-gold text-deep-forest hover:bg-soft-gold/90 font-sans text-2xs font-bold uppercase tracking-widest rounded-sm transition-all focus:outline-none cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
