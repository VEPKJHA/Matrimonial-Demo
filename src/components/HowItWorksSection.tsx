import React from 'react';
import { 
  UserCheck, 
  Compass, 
  Lock, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';

interface HowItWorksSectionProps {
  onRegisterClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onRegisterClick,
}) => {
  const steps = [
    {
      step: '01',
      icon: UserCheck,
      title: 'Create & Authenticate ID',
      tagline: '2-Minute Setup',
      desc: 'Sign up with your phone or email. Our automated system authenticates government ID (Aadhaar or Passport) to ensure an exclusive community of real individuals.'
    },
    {
      step: '02',
      icon: Compass,
      title: 'Weave Kundali & Parameters',
      tagline: 'Scientific Vedic Milan',
      desc: 'Input birth time and astrological coordinates. Our engine immediately calculates the 36-Guna Ashtakoota Milan and overlays career, diet, and lifestyle filters.'
    },
    {
      step: '03',
      icon: Lock,
      title: 'Consent-First Photo & Chat',
      tagline: 'Privacy Shielded',
      desc: 'Your photos remain masked behind the privacy shield. Connect with candidates of mutual interest; only mutual acceptance reveals photos and unlocks encrypted chat.'
    },
    {
      step: '04',
      icon: HeartHandshake,
      title: 'Family Intro & Sacred Union',
      tagline: 'Lifelong Harmony',
      desc: 'Generate ornamental Bio-Data PDFs for extended family elders. Coordinate direct family calls or attend our curated Sunday virtual speed meets.'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-white dark:bg-[#0c0d14] border-b border-[#e5d7de]/70 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold uppercase block">
            The Journey to Companionship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1e1325] dark:text-white font-normal leading-tight">
            How Sangam Weaver Works in 4 Steps
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#554359] dark:text-zinc-400 leading-relaxed">
            A simple, dignified, and scientifically grounded path to finding your life partner.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const StepIcon = s.icon;

            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 bg-[#fdefff]/40 dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#a3684d]/40 dark:text-amber-400/30 group-hover:text-[#a3684d] dark:group-hover:text-amber-400 transition-colors">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-[#e5d7de] dark:border-zinc-700 flex items-center justify-center text-[#415186] dark:text-amber-300 shadow-sm">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b4e38] dark:text-amber-400 font-semibold block mb-1">
                    {s.tagline}
                  </span>

                  <h3 className="font-serif text-lg font-semibold text-[#1e1325] dark:text-white mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#554359] dark:text-zinc-400 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e5d7de]/60 dark:border-zinc-800 text-[11px] font-mono text-[#8b4e38] dark:text-amber-400 flex items-center gap-1 font-medium">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#415186] hover:bg-[#344479] text-white font-sans text-sm font-semibold shadow-lg shadow-[#415186]/20 transition-all cursor-pointer group"
          >
            <span>Begin Your Journey &mdash; Register Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
