import { useState } from 'react';
import { Leaf, ShieldAlert, Award, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data';
import harvestingCoconutsImg from '../../assets/harvesting_coconuts_1780048091931.png';

export default function AboutView() {
  const [activeTab, setActiveTab] = useState<'mission' | 'soil' | 'social'>('mission');

  const milestones = [
    { year: '2021', title: 'Grove Consolidation', desc: 'Acquired 120 hectares of direct ancestral coconut forest in prime micro-climatic zones.' },
    { year: '2022', title: 'Bio-Secured Sourcing', desc: 'Received worldwide USDA organic accreditation and completed our carbon-neutral firewood evaporator structures.' },
    { year: '2024', title: 'Regenerative Zero-Waste Yield', desc: 'Introduced 100% compost loop systems, recycling coconut husks back into local agriculture compost grids.' }
  ];

  return (
    <div className="w-full pt-28 pb-24 px-6 md:px-12 bg-coconut-cream">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Grid section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans flex items-center gap-2">
              <Leaf className="w-4 h-4 text-soft-gold" />
              <span>Deep Ancestral Groves</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-deep-forest leading-tight">
              Regenerative Soil, Unrefined Nourishment.
            </h1>
            <p className="font-sans text-sm sm:text-base text-charcoal-text/80 leading-relaxed font-light">
              One Organic was founded out of a shared belief that food processing should honor, rather than override, the soil's natural intelligence. Standard coconut extractions often boil down raw oil at high temperatures, stripping out subtle antioxidants and beneficial esters.
            </p>
            <p className="font-sans text-sm text-charcoal-text/75 leading-relaxed">
              We operate exclusively below low thermal thresholds. From raw hand-harvested coconuts to safe packaging, every stage is fully completed right at the source: protecting biodiversity, restoring natural topsoils, and delivering complete transparency.
            </p>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            {/* Split visuals */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="aspect-[3/4] bg-warm-sand overflow-hidden rounded-sm relative">
                <img
                  alt="Organic Coconut grove vertical view"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzHdpkvqOfF4Sv9fZZ3WRD5j_7aaBXfFRDkk9aogDeNdGWx0Mfkvvef7eJ6idD4kut-4O-UJKlGD0jBiZBOX47tMfR-YlV7UpMf8zV0JLP478f5xhxVM4Gw-Rj0FpctP1rNHAtaqXH6EGrNvpDA46HaNEXTcrjC1XK_5VWLTXlen-eqRshPsfG6Ma2SiTs94pCslrKqxWId20rHG_tYYo3LUhYwKJrPF1W29nhTmf0C34pIARtXYozVrJdG3NZfcMZoCjnkFbBJo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] bg-warm-sand overflow-hidden rounded-sm relative mt-8">
                <img
                  alt="Harvesting organic fresh coconuts"
                  className="w-full h-full object-cover"
                  src={harvestingCoconutsImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Philosophy Tab Swapper */}
        <div className="py-16 border-y border-warm-sand/55 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-deep-forest">Our Core Standard</h3>
              <div className="flex flex-col gap-2 pt-2 font-sans text-xs font-bold uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`text-left px-4 py-3 rounded-sm transition-all cursor-pointer ${
                    activeTab === 'mission' ? 'bg-deep-forest text-coconut-cream' : 'text-charcoal-text hover:bg-warm-sand/20'
                  }`}
                >
                  Regenerative Mission
                </button>
                <button
                  onClick={() => setActiveTab('soil')}
                  className={`text-left px-4 py-3 rounded-sm transition-all cursor-pointer ${
                    activeTab === 'soil' ? 'bg-deep-forest text-coconut-cream' : 'text-charcoal-text hover:bg-warm-sand/20'
                  }`}
                >
                  Bio-Security & Soil Health
                </button>
                <button
                  onClick={() => setActiveTab('social')}
                  className={`text-left px-4 py-3 rounded-sm transition-all cursor-pointer ${
                    activeTab === 'social' ? 'bg-deep-forest text-coconut-cream' : 'text-charcoal-text hover:bg-warm-sand/20'
                  }`}
                >
                  Community Integrity
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 p-6 md:p-10 bg-warm-sand/20 rounded-sm border border-warm-sand/40 min-h-[220px]">
              {activeTab === 'mission' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-serif text-xl font-bold text-deep-forest">Direct Ancestral Sourcing</h4>
                  <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed font-light">
                    Unlike standard mass manufacturers, we don't buy raw copra from unverified sources. We consolidate deep heritage groves, securing complete traceability of every single droplet. This maintains the traditional ecological wisdom of harvesting only at peak maturity profiles.
                  </p>
                </div>
              )}
              {activeTab === 'soil' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-serif text-xl font-bold text-deep-forest">Bio-Security Bio-Shield</h4>
                  <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed font-light">
                    Every batch of our extra virgin oil complies with severe, non-compromising purity policies. Our soil undergoes routine chemical audits to ensure 100% absence of artificial pesticides, microplastics, or environmental residues. Water used in pressing is pure mountain springwater.
                  </p>
                </div>
              )}
              {activeTab === 'social' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-serif text-xl font-bold text-deep-forest">Small-Holder Family Alliances</h4>
                  <p className="font-sans text-sm text-charcoal-text/80 leading-relaxed font-light">
                    Our team provides high-quality agronomy training and fair premium compensation to over 80 smallholder family partners. By encouraging multi-tier agroforestry, we guarantee that local agricultural communities thrive collaboratively with natural coconut grove ecosystems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Founding Directors Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-soft-gold uppercase tracking-widest font-sans">Our Team</span>
            <h2 className="font-serif text-3xl font-bold text-deep-forest">Meet the Cohort of One</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col p-8 border border-warm-sand bg-coconut-cream rounded-sm space-y-5 shadow-sm"
              >
                <div>
                  <h4 className="font-serif text-xl font-bold text-deep-forest">{member.name}</h4>
                  <p className="font-sans text-xs font-bold text-soft-gold uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="font-sans text-sm text-charcoal-text/85 italic leading-relaxed pt-3 border-t border-warm-sand/35">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Milestones timeline */}
        <div className="p-8 md:p-12 border border-warm-sand bg-warm-sand/15 rounded-sm">
          <h3 className="font-serif text-2xl font-bold text-deep-forest text-center mb-12">
            The Journey to Organic Wholeness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {milestones.map((milestone, i) => (
              <div key={i} className="space-y-3 relative z-10 text-center md:text-left">
                <span className="font-serif text-4xl font-bold text-soft-gold block">
                  {milestone.year}
                </span>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-deep-forest">
                  {milestone.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-charcoal-text/75 leading-relaxed font-light">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
