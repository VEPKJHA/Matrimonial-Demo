import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Video, 
  Scroll, 
  Crown, 
  FileDown, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface PublicWhatWeOfferSectionProps {
  onRegisterClick: () => void;
  onExploreVIP: () => void;
}

export const PublicWhatWeOfferSection: React.FC<PublicWhatWeOfferSectionProps> = ({
  onRegisterClick,
  onExploreVIP,
}) => {
  const [activeOffering, setActiveOffering] = useState<number>(0);

  const offerings = [
    {
      id: 'guna-milan',
      icon: Scroll,
      tag: 'ASTROLOGICAL SCIENCE',
      title: 'Ashtakoota 36-Guna Kundali Weaver',
      tagline: 'Scientific astrological compatibility before you even say hello.',
      description: 'Unlike generic horoscope matching that offers a single opaque score, our engine calculates full Ashtakoota compatibility across all 8 vital pillars (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi). Understand psychological harmony, emotional warmth, and genetic health upfront.',
      highlights: [
        'Automatic Nakshatra, Charan & Rashi calculations',
        'Transparent points breakdown for all 8 Kootas',
        'Dosha detection & traditional Vedic remedies',
        'Shareable astrological summary for family pandits'
      ],
      badge: '98.6% Vedic Accuracy',
      accentColor: 'from-amber-500/20 to-orange-500/20',
      badgeColor: 'text-amber-700 bg-amber-100 dark:text-amber-300 dark:bg-amber-950/60'
    },
    {
      id: 'privacy-shield',
      icon: Lock,
      tag: 'PRIVACY FIRST',
      title: 'Client-Side Photo Privacy Shield',
      tagline: 'Your photos are never public. You decide who sees your face.',
      description: 'We respect personal autonomy and family discretion. Photos remain blurred behind cryptographic client-side shields until mutual connection interest is confirmed, or until you grant explicit permission. No web scraping, no screenshot leaks, no unsolicited sharing.',
      highlights: [
        'Default client-side photo masking for all candidates',
        'Aadhaar & Passport verification token protection',
        'Watermarked profile sharing with view expiry',
        'Zero Google or public search engine indexing'
      ],
      badge: '100% Consent Protected',
      accentColor: 'from-emerald-500/20 to-teal-500/20',
      badgeColor: 'text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/60'
    },
    {
      id: 'verified-registry',
      icon: ShieldCheck,
      tag: '100% AUTHENTICATED',
      title: 'Aadhaar, Degree & Corporate Verification',
      tagline: 'Zero fake profiles. Zero exaggerated compensation claims.',
      description: 'Every single profile on Sangam Weaver undergoes strict multi-tier verification before going live. We verify government identification, university degrees (IITs, BITS, AIIMS, Ivy League), and corporate employer credentials.',
      highlights: [
        'Government ID token authentication (Aadhaar / Passport)',
        'Verified corporate email and LinkedIn sync',
        'Alma mater degree verification',
        'Discreet family native place and gotra checks'
      ],
      badge: 'Zero Spam Guarantee',
      accentColor: 'from-blue-500/20 to-indigo-500/20',
      badgeColor: 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-950/60'
    },
    {
      id: 'virtual-meets',
      icon: Video,
      tag: 'MODERN SPEED DATING',
      title: 'Sangam Live Virtual Meetups',
      tagline: 'Meet 5 compatible matches in 30 minutes from home.',
      description: 'Skip months of endless texting. Attend our curated 5-minute virtual video speed meets held every weekend. Both participants have pre-checked horoscope coordinates and verified IDs, making it safe, fun, and highly efficient.',
      highlights: [
        'Curated 5-minute 1-on-1 video rooms',
        'Private audio/video channels with no phone number exchange',
        'Mutual interest matching at the end of each session',
        'Filter by profession tiers (e.g. Tech & Healthcare mixers)'
      ],
      badge: 'Every Sunday 6 PM',
      accentColor: 'from-rose-500/20 to-pink-500/20',
      badgeColor: 'text-rose-700 bg-rose-100 dark:text-rose-300 dark:bg-rose-950/60'
    },
    {
      id: 'vip-concierge',
      icon: Crown,
      tag: 'WHITE-GLOVE SERVICE',
      title: 'VIP Concierge & Dedicated Relationship Manager',
      tagline: 'Bespoke offline matchmaking for HNIs and busy leaders.',
      description: 'For corporate executives, civil servants, and prominent families who value total discretion. Your dedicated senior counselor manages handpicked candidate shortlists, coordinates family-to-family meetings, and consults Vedic scholars on your behalf.',
      highlights: [
        'Single point-of-contact Senior Relationship Manager',
        'Custom non-disclosure agreements (NDAs) available',
        'Handpicked introductions across global diaspora (USA, UK, Gulf)',
        'Direct family meeting coordination and venue booking'
      ],
      badge: 'By Invitation & Screening',
      accentColor: 'from-amber-600/20 to-yellow-500/20',
      badgeColor: 'text-amber-800 bg-amber-200 dark:text-amber-200 dark:bg-amber-900/60'
    },
    {
      id: 'bio-data-engine',
      icon: FileDown,
      tag: 'TRADITIONAL & CONTEMPORARY',
      title: '1-Click Matrimonial Bio-Data PDF Engine',
      tagline: 'Print-ready traditional Indian bio-data with Sanskrit shlokas.',
      description: 'Indian families still cherish the traditional paper bio-data for extended elders and family consultations. Sangam Weaver generates a formatted, ornamental PDF with astrological coordinates, family roots, and career credentials with one click.',
      highlights: [
        'Traditional || ॐ श्री गणेशाय नमः || ornamental header',
        'Clean printable format optimized for WhatsApp and A4 print',
        'Plain text copy button for instant messaging',
        'Watermarked verification seal for family credibility'
      ],
      badge: 'Free Instant PDF',
      accentColor: 'from-purple-500/20 to-indigo-500/20',
      badgeColor: 'text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-950/60'
    }
  ];

  const current = offerings[activeOffering];
  const IconComponent = current.icon;

  return (
    <section id="what-we-offer" className="w-full py-20 bg-white dark:bg-[#0c0d14] border-b border-[#e5d7de]/70 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdefff] dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#8b4e38] dark:text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#a3684d]" />
            <span>Comprehensive Matrimonial Suite</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1325] dark:text-white font-normal tracking-tight leading-tight">
            What We Offer &mdash; Built for High-Intent Unions
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#554359] dark:text-zinc-400 leading-relaxed">
            We reimagined matchmaking from the ground up: combining deep astrological science, client-side privacy protection, and white-glove family advisory.
          </p>
        </div>

        {/* Interactive 6-Tab Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Feature Selector Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {offerings.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = activeOffering === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveOffering(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#fdefff] dark:bg-zinc-900 border-[#a3684d] dark:border-amber-400 shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-zinc-950 border-[#e5d7de] dark:border-zinc-800 hover:bg-[#faf5f8] dark:hover:bg-zinc-900/60 text-[#554359] dark:text-zinc-400'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isSelected
                      ? 'bg-[#a3684d] text-white shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                  }`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider text-[#8b4e38] dark:text-amber-400 uppercase font-semibold">
                        {item.tag}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#a3684d] dark:bg-amber-400 animate-pulse" />
                      )}
                    </div>
                    <h4 className={`font-serif text-base font-medium mt-0.5 ${
                      isSelected ? 'text-[#1e1325] dark:text-white font-semibold' : 'text-[#3c2a3e] dark:text-zinc-200'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6c5870] dark:text-zinc-400 line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Feature Interactive Deep-Dive Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-br from-[#fff7fd] via-[#fdefff]/60 to-[#f9e8ff]/40 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 border border-[#e5d7de] dark:border-zinc-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
              
              {/* Top Accent Icon & Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e5d7de]/70 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#a3684d] text-white flex items-center justify-center shadow-lg shadow-[#a3684d]/25">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold block">
                      Feature #{activeOffering + 1} of 6
                    </span>
                    <h3 className="font-serif text-2xl text-[#1e1325] dark:text-white font-normal mt-0.5">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${current.badgeColor}`}>
                  {current.badge}
                </span>
              </div>

              {/* Body Description & Highlights */}
              <div className="py-6 space-y-5">
                <p className="font-serif text-lg text-[#1e1325] dark:text-zinc-100 italic leading-snug">
                  "{current.tagline}"
                </p>

                <p className="font-sans text-sm text-[#554359] dark:text-zinc-300 leading-relaxed">
                  {current.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 block font-semibold">
                    Key Capabilities & Benefits:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1e1325] dark:text-zinc-200 font-sans">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 rounded-xl bg-white/70 dark:bg-zinc-950/70 border border-[#e5d7de] dark:border-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bottom Bar */}
              <div className="pt-6 border-t border-[#e5d7de]/70 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6c5870] dark:text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Available on Free & Premium Memberships</span>
                </div>

                <button
                  onClick={current.id === 'vip-concierge' ? onExploreVIP : onRegisterClick}
                  className="px-6 py-3 rounded-xl bg-[#415186] hover:bg-[#344479] text-white font-sans text-xs font-semibold shadow-md transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>{current.id === 'vip-concierge' ? 'Inquire for VIP Concierge' : 'Register Free to Access'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
