import React from 'react';
import { 
  Check, 
  Crown, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface PricingTiersSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingTiersSection: React.FC<PricingTiersSectionProps> = ({
  onSelectTier,
}) => {
  const plans = [
    {
      name: 'Free Explorer',
      price: '₹0',
      period: 'Forever Free',
      badge: 'Starter',
      description: 'Ideal for getting started, exploring verified candidate profiles, and evaluating baseline compatibility.',
      isPopular: false,
      features: [
        'Aadhaar / Passport Verified Candidate Profile',
        'Basic search filters (Age, Height, Community)',
        'View overall Guna Milan score (e.g. 32/36)',
        '3 Photo Privacy Shield view requests',
        'Receive direct interest invitations'
      ],
      cta: 'Register Free',
      accent: 'border-[#e5d7de] dark:border-zinc-800 bg-white dark:bg-zinc-900',
      btnStyle: 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-[#1e1325] dark:text-white'
    },
    {
      name: 'Sangam Gold',
      price: '₹4,999',
      period: 'for 3 Months (₹1,666/mo)',
      badge: 'Most Popular',
      description: 'For proactive individuals seeking unlimited direct connections, full astrological charts, and private chats.',
      isPopular: true,
      features: [
        'Unlimited Send Interests & Direct Connection requests',
        'Exhaustive Ashtakoota 8-Pillar Kundali breakdown',
        'Unlimited Photo Shield reveals with mutual consent',
        'End-to-End Encrypted 1-on-1 Direct Chat & Voice Notes',
        '1-Click Traditional Matrimonial Bio-Data PDF export',
        'Priority RSVP to Sangam Live Virtual Speed Meets',
        'Verified Contact Number access upon mutual interest'
      ],
      cta: 'Get Sangam Gold',
      accent: 'border-[#a3684d] dark:border-amber-400 bg-gradient-to-b from-[#fdefff]/80 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-2xl scale-105 z-10',
      btnStyle: 'bg-[#415186] hover:bg-[#344479] text-white shadow-lg shadow-[#415186]/25'
    },
    {
      name: 'VIP Select Concierge',
      price: '₹24,999',
      period: 'for 6 Months',
      badge: 'Elite White-Glove',
      description: 'Handcrafted offline matchmaking for busy corporate leaders, civil servants, and prominent families.',
      isPopular: false,
      features: [
        'Dedicated Senior Relationship Manager (Single POC)',
        'Handpicked candidate introductions screened by Jyotish scholars',
        '100% Confidential Offline Family Coordination & Venue booking',
        'Zero public search indexing & Custom Non-Disclosure Agreements',
        'Direct family horoscope consultations with Dr. Meenakshi Sundaram',
        'VIP access to high-profile HNI & NRI registry'
      ],
      cta: 'Inquire for VIP Concierge',
      accent: 'border-amber-400/50 bg-gradient-to-b from-[#1e1526] to-[#120d17] text-white shadow-xl',
      btnStyle: 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 font-bold hover:from-amber-300 hover:to-amber-400'
    }
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-[#fdefff]/30 dark:bg-zinc-950 border-b border-[#e5d7de]/70 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold uppercase block">
            Transparent Memberships
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1e1325] dark:text-white font-normal leading-tight">
            Plans Tailored to Your Marriage Timeline
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#554359] dark:text-zinc-400 leading-relaxed">
            Begin with a verified free account or upgrade for direct connections and personal concierge guidance. No auto-renewals, no hidden fees.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${plan.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                    plan.isPopular 
                      ? 'bg-[#a3684d] text-white' 
                      : plan.name.includes('VIP') 
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                  }`}>
                    {plan.badge}
                  </span>
                  {plan.name.includes('VIP') && (
                    <Crown className="w-5 h-5 text-amber-400" />
                  )}
                </div>

                <h3 className={`font-serif text-2xl font-normal ${
                  plan.name.includes('VIP') ? 'text-white' : 'text-[#1e1325] dark:text-white'
                }`}>
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-2 mt-3 mb-1">
                  <span className={`text-4xl font-serif font-bold ${
                    plan.name.includes('VIP') ? 'text-amber-300' : 'text-[#1e1325] dark:text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-mono ${
                    plan.name.includes('VIP') ? 'text-zinc-400' : 'text-[#6c5870] dark:text-zinc-400'
                  }`}>
                    {plan.period}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mt-2 pb-6 border-b ${
                  plan.name.includes('VIP') 
                    ? 'text-zinc-300 border-zinc-800' 
                    : 'text-[#554359] dark:text-zinc-400 border-[#e5d7de]/70 dark:border-zinc-800'
                }`}>
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <span className={`text-[11px] font-mono uppercase tracking-wider block font-semibold ${
                    plan.name.includes('VIP') ? 'text-amber-300' : 'text-[#6c5870] dark:text-zinc-400'
                  }`}>
                    What is Included:
                  </span>
                  <div className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.name.includes('VIP') ? 'text-amber-400' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={plan.name.includes('VIP') ? 'text-zinc-200' : 'text-[#1e1325] dark:text-zinc-200'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectTier(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-sans text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${plan.btnStyle}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Trust Note */}
        <div className="mt-12 text-center text-xs font-mono text-[#6c5870] dark:text-zinc-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>100% Secure Payment • Instant Activation • Strict Privacy Guarantee</span>
        </div>

      </div>
    </section>
  );
};
