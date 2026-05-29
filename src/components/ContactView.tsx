import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle, ArrowUpRight, Send } from 'lucide-react';
import { REGIONAL_MARKETS } from '../data';

export default function ContactView() {
  const [selectedRegion, setSelectedRegion] = useState<'thailand' | 'hongkong'>('thailand');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Thailand',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', country: 'Thailand', message: '' });
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full pt-28 pb-24 px-6 md:px-12 bg-coconut-cream">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Titles */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-soft-gold" />
            <span>Regional Channels</span>
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-forest">
            Connect With Our Groves
          </h1>
          <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed font-light">
            We operate across multiple Asian distribution channels. Whether seeking small home deliveries or premium industrial wholesale orders, choose your region to discover optimized channels.
          </p>
        </div>

        {/* Region Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Channel Selector block (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-warm-sand/20 rounded-sm border border-warm-sand/45 p-6 md:p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-deep-forest">Select Your Territory</h3>
              
              <div className="flex gap-3 font-sans text-xs">
                <button
                  onClick={() => setSelectedRegion('thailand')}
                  className={`flex-1 py-3 px-4 font-bold border rounded-sm tracking-wider uppercase transition-colors cursor-pointer focus:outline-none ${
                    selectedRegion === 'thailand'
                      ? 'bg-deep-forest text-coconut-cream border-deep-forest shadow-sm'
                      : 'bg-transparent text-charcoal-text border-warm-sand/70 hover:border-soft-gold'
                  }`}
                >
                  Thailand 🇹🇭
                </button>
                <button
                  onClick={() => setSelectedRegion('hongkong')}
                  className={`flex-1 py-3 px-4 font-bold border rounded-sm tracking-wider uppercase transition-colors cursor-pointer focus:outline-none ${
                    selectedRegion === 'hongkong'
                      ? 'bg-deep-forest text-coconut-cream border-deep-forest shadow-sm'
                      : 'bg-transparent text-charcoal-text border-warm-sand/70 hover:border-soft-gold'
                  }`}
                >
                  Hong Kong 🇭🇰
                </button>
              </div>

              {/* Thailand details */}
              {selectedRegion === 'thailand' && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="font-sans text-xs sm:text-sm text-charcoal-text/80 leading-relaxed font-light">
                    Our direct client items in Thailand are handled by our central Bangkok hub. Enjoy fast, reliable deliveries via leading regional marketplace channels:
                  </p>
                  
                  <div className="space-y-3 pt-3">
                    <a
                      href={REGIONAL_MARKETS.thailand.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4.5 bg-coconut-cream border border-warm-sand/70 hover:border-soft-gold text-deep-forest transition-all rounded-sm text-xs font-semibold uppercase tracking-wider group"
                    >
                      <span>Direct Shopee Distribution</span>
                      <ArrowUpRight className="w-4 h-4 text-soft-gold group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={REGIONAL_MARKETS.thailand.lazadaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4.5 bg-coconut-cream border border-warm-sand/70 hover:border-soft-gold text-deep-forest transition-all rounded-sm text-xs font-semibold uppercase tracking-wider group"
                    >
                      <span>Direct Lazada Distribution</span>
                      <ArrowUpRight className="w-4 h-4 text-soft-gold group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* Hong Kong details */}
              {selectedRegion === 'hongkong' && (
                <div className="space-y-5 animate-fadeIn">
                  <p className="font-sans text-xs sm:text-sm text-charcoal-text/80 leading-relaxed font-light">
                    Our luxury client orders and large batch organic food services throughout Hong Kong are managed by pre-order agreements. Contact our coordinator directly:
                  </p>
                  
                  <div className="p-5.5 bg-coconut-cream border border-warm-sand/70 rounded-sm">
                    <span className="text-3xs uppercase tracking-widest font-bold text-soft-gold block mb-1">
                      Direct Wholesale Email
                    </span>
                    <a
                      href={`mailto:${REGIONAL_MARKETS.hongkong.email}`}
                      className="text-base font-serif font-bold text-deep-forest hover:text-soft-gold transition-colors block break-all"
                    >
                      {REGIONAL_MARKETS.hongkong.email}
                    </a>
                  </div>
                  <span className="text-3xs text-charcoal-text/50 font-sans uppercase tracking-widest block font-medium">
                    ⚡ Typical response time is under 12 hours.
                  </span>
                </div>
              )}
            </div>

            {/* Offline offices details */}
            <div className="space-y-5.5 font-sans text-xs">
              <h4 className="font-serif text-lg font-bold text-deep-forest">Heritage Offices</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-4.5 h-4.5 text-soft-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-forest">Bangkok Hub:</strong>
                    <span className="block text-charcoal-text/85 mt-0.5 leading-relaxed font-light">
                      Regenerative Commons, 45 Sathorn Rd, Bangkok 10120, Thailand
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <MapPin className="w-4.5 h-4.5 text-soft-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-forest">Pristine Processing Facility:</strong>
                    <span className="block text-charcoal-text/85 mt-0.5 leading-relaxed font-light">
                      Surat Thani Organics Circle Co., Surat Thani 84000, Thailand
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Secure Message Inquiries form (Right Column) */}
          <div className="lg:col-span-7 bg-coconut-cream border border-warm-sand rounded-sm p-8 md:p-10 shadow-sm relative">
            {isSubmitted ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center space-y-5 animate-scaleUp">
                <div className="w-14 h-14 bg-deep-forest text-soft-gold border border-soft-gold/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6.5 h-6.5 animate-pulse" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-deep-forest">Inquiry Processed</h3>
                <p className="font-sans text-xs uppercase tracking-widest font-bold text-soft-gold">
                  Secure Soil Trace Activated
                </p>
                <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed max-w-sm font-light">
                  Thank you, <strong>{formData.name}</strong>. We've logged your request into our sustainable logistics catalog. A regional coordinator will reply to <strong>{formData.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-deep-forest">Digital Soil Inquiry</h3>
                  <p className="text-xs text-charcoal-text/75 font-light leading-relaxed">
                    Have any questions regarding chemical-free processes, harvesting seasons, wholesale coordinates, or delivery times? Send our directors a direct note here.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Marcus Vance"
                      className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-all rounded-sm text-sm"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="marcus@gmail.com"
                      className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-all rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                    Country / Region
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-all rounded-sm text-sm"
                  >
                    <option value="Thailand">Thailand 🇹🇭</option>
                    <option value="Hong Kong">Hong Kong 🇭🇰</option>
                    <option value="Singapore">Singapore 🇸🇬</option>
                    <option value="Singapore">Other Region 🌏</option>
                  </select>
                </div>

                <div>
                  <label className="block text-2xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-1.5 font-sans">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="We wish to request a custom freight organic virgin oil pre-order catalog or soil purity certifications..."
                    className="w-full px-4 py-3 bg-coconut-cream border border-warm-sand/80 focus:border-soft-gold outline-none transition-all rounded-sm text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-deep-forest text-coconut-cream hover:bg-deep-forest/90 font-sans text-xs font-bold uppercase tracking-widest py-4 rounded-sm transition-all shadow-md focus:outline-none cursor-pointer"
                  >
                    <span>Connect Groves</span>
                    <Send className="w-3.5 h-3.5 text-soft-gold" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
