import React, { useState } from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import type { CareerTier, Religion, LocationTier } from '../types/profile';

interface BrowseCategoryCardsProps {
  onSelectCareer: (tier: CareerTier) => void;
  onSelectLocation: (loc: LocationTier) => void;
  onSelectReligion: (rel: Religion) => void;
  onSelectSearchTag: (query: string) => void;
}

export const BrowseCategoryCards: React.FC<BrowseCategoryCardsProps> = ({
  onSelectCareer,
  onSelectLocation,
  onSelectReligion,
  onSelectSearchTag,
}) => {
  const [activeTab, setActiveTab] = useState<'profession' | 'community' | 'location'>('profession');

  const professionCards = [
    {
      title: 'Tech Architects & AI Leads',
      subtitle: 'BITS Pilani, IITs, CMU • Stripe, Google DeepMind, AWS',
      tier: 'Tech / Engineering' as CareerTier,
      badge: '42+ LPA / $200k+',
      icon: '💻',
      color: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      title: 'Doctors & MD Specialists',
      subtitle: 'KEM, AIIMS, Harvard • Apollo, Fortis Hospitals',
      tier: 'Medicine / Healthcare' as CareerTier,
      badge: 'Consultant Tier',
      icon: '🩺',
      color: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      title: 'Civil Services & Public Policy',
      subtitle: 'LSE, St. Stephens • IAS & Central Group A Cadre',
      tier: 'Civil Services' as CareerTier,
      badge: 'Govt Cadre',
      icon: '🏛️',
      color: 'from-sky-500/10 to-blue-500/10'
    },
    {
      title: 'Finance, Banking & M&A',
      subtitle: 'London Business School, ISB • Goldman Sachs, McKinsey',
      tier: 'Finance & Banking' as CareerTier,
      badge: 'High Affluence',
      icon: '💎',
      color: 'from-amber-500/10 to-orange-500/10'
    },
    {
      title: 'Creative Directors & Founders',
      subtitle: 'NID, NIFT, Polimoda • Enterprise & Luxury Studios',
      tier: 'Creative & Business' as CareerTier,
      badge: 'Founders Tier',
      icon: '✨',
      color: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  const communityCards = [
    { name: 'Brahmin (Kulin / Gaur / Vadama)', query: 'Brahmin', count: '1,240+ Profiles', religion: 'Hindu' as Religion },
    { name: 'Punjabi Khatri / Sikh', query: 'Khatri', count: '890+ Profiles', religion: 'Sikh' as Religion },
    { name: 'Agarwal & Vaishya', query: 'Agarwal', count: '760+ Profiles', religion: 'Hindu' as Religion },
    { name: 'Kerala Nair / South Indian', query: 'Nair', count: '620+ Profiles', religion: 'Hindu' as Religion },
    { name: 'Kayastha / North Indian', query: 'Kayastha', count: '540+ Profiles', religion: 'Hindu' as Religion },
    { name: 'Jain Shwetambar & Digambar', query: 'Jain', count: '480+ Profiles', religion: 'Jain' as Religion },
  ];

  const locationCards = [
    { city: 'Bangalore Tech Corridor', tag: 'Bangalore' as LocationTier, flag: '🇮🇳', desc: 'Indiranagar, Whitefield, Koramangala' },
    { city: 'Mumbai Metro & Pune', tag: 'Mumbai / Pune' as LocationTier, flag: '🇮🇳', desc: 'BKC, Bandra, South Mumbai, Kothrud' },
    { city: 'Delhi NCR & Gurugram', tag: 'Delhi NCR' as LocationTier, flag: '🇮🇳', desc: 'Chanakyapuri, GK, Golf Course Road' },
    { city: 'USA East & West Coast', tag: 'NRI (USA/UK/Canada)' as LocationTier, flag: '🇺🇸', desc: 'Seattle, Bay Area, Boston, NYC' },
  ];

  return (
    <section className="w-full py-16 bg-[#fff7fd]/60 dark:bg-zinc-950 border-b border-[#e5d7de]/60 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#e5d7de]/70 dark:border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold uppercase block mb-1">
              Curated Matrimonial Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1e1325] dark:text-white font-normal flex items-center gap-2">
              <span>Browse Matches By Category</span>
            </h2>
            <p className="font-sans text-xs text-[#554359] dark:text-zinc-400 mt-1">
              Filter by verified professional caliber, cultural community, or settlement destination.
            </p>
          </div>

          {/* Sub-Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-sm text-xs font-sans">
            <button
              onClick={() => setActiveTab('profession')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === 'profession'
                  ? 'bg-[#415186] text-white shadow-sm'
                  : 'text-[#554359] dark:text-zinc-400 hover:text-[#1e1325]'
              }`}
            >
              By Profession
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === 'community'
                  ? 'bg-[#415186] text-white shadow-sm'
                  : 'text-[#554359] dark:text-zinc-400 hover:text-[#1e1325]'
              }`}
            >
              By Community
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === 'location'
                  ? 'bg-[#415186] text-white shadow-sm'
                  : 'text-[#554359] dark:text-zinc-400 hover:text-[#1e1325]'
              }`}
            >
              By Cities & NRI
            </button>
          </div>
        </div>

        {/* Tab 1: By Profession Cards */}
        {activeTab === 'profession' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-in fade-in duration-200">
            {professionCards.map((card, i) => (
              <div
                key={i}
                onClick={() => onSelectCareer(card.tier)}
                className="group p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 hover:border-[#a3684d] dark:hover:border-amber-400 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{card.icon}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#fdefff] dark:bg-zinc-800 text-[#8b4e38] dark:text-amber-300 font-semibold border border-[#e5d7de] dark:border-zinc-700">
                      {card.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#1e1325] dark:text-white group-hover:text-[#415186] dark:group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-[#554359] dark:text-zinc-400 mt-1 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e5d7de]/60 dark:border-zinc-800 flex items-center justify-between text-xs text-[#8b4e38] dark:text-amber-400 font-semibold">
                  <span>Explore Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: By Community Cards */}
        {activeTab === 'community' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {communityCards.map((comm, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectReligion(comm.religion);
                  onSelectSearchTag(comm.query);
                }}
                className="group p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 hover:border-[#a3684d] hover:shadow-lg transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-serif text-base text-[#1e1325] dark:text-white font-semibold group-hover:text-[#415186] transition-colors">
                    {comm.name}
                  </h4>
                  <span className="text-[11px] text-[#6c5870] dark:text-zinc-400 font-mono mt-0.5 block">
                    {comm.count} • Gotra & Ashtakoota Milan
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8b4e38] dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: By Cities & NRI Cards */}
        {activeTab === 'location' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            {locationCards.map((loc, idx) => (
              <div
                key={idx}
                onClick={() => onSelectLocation(loc.tag)}
                className="group p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 hover:border-[#415186] hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{loc.flag}</div>
                <h4 className="font-serif text-base text-[#1e1325] dark:text-white font-semibold group-hover:text-[#415186] transition-colors">
                  {loc.city}
                </h4>
                <p className="text-[11px] text-[#554359] dark:text-zinc-400 mt-1">
                  {loc.desc}
                </p>
                <div className="mt-4 pt-2 border-t border-[#e5d7de]/60 dark:border-zinc-800 flex items-center justify-between text-xs text-[#415186] dark:text-indigo-400 font-medium">
                  <span>View Local Registry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
