import React from 'react';
import { 
  ShieldCheck, 
  Scroll, 
  CheckCircle2, 
  Lock, 
  Users
} from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="w-full py-20 bg-[#fdefff]/60 dark:bg-zinc-900/60 border-b border-[#e5d7de]/60 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-rose-400 font-semibold uppercase block mb-2">
            Astrological Precision & Modern Dignity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#23162c] dark:text-zinc-100 font-normal">
            Two Foundational Pillars of Care
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c4a5f] dark:text-zinc-400 mt-3 leading-relaxed">
            Where ancient Vedic astronomical science meets modern emotional intelligence and privacy protection.
          </p>
        </div>

        {/* 2 Big Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Ashtakoota Horoscope Milan */}
          <div className="bg-[#f9e8ff]/70 dark:bg-zinc-950/80 rounded-3xl p-8 sm:p-10 border border-[#e5d7de] dark:border-zinc-800 shadow-lovable flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#eddcfe] dark:bg-amber-500/20 flex items-center justify-center text-[#5b4e6a] dark:text-amber-300 mb-6 shadow-sm">
                <Scroll className="w-7 h-7 text-[#8b4e38] dark:text-amber-400" />
              </div>
              <span className="text-[11px] font-mono text-[#8b4e38] dark:text-amber-400 font-semibold uppercase tracking-wider">
                Primary Astrological Modality
              </span>
              <h3 className="font-serif text-2xl text-[#23162c] dark:text-white mt-1.5 mb-3 font-normal">
                Ashtakoota 36-Guna Kundali Milan
              </h3>
              <p className="font-sans text-sm text-[#5c4a5f] dark:text-zinc-300 mb-6 leading-relaxed">
                Rather than treating horoscope matching as rigid dogma, our engine weaves ancient Vedic principles into a holistic psychological and genetic resonance assessment across 8 vital life coordinates:
              </p>

              {/* 8 Pillars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#23162c] dark:text-zinc-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Varna (1 pt)</strong>: Spiritual & ego parity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Vashya (2 pts)</strong>: Mutual attraction bond</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Tara (3 pts)</strong>: Health & longevity sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Yoni (4 pts)</strong>: Intimacy & temperament</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Graha Maitri (5 pts)</strong>: Deep friendship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Gana (6 pts)</strong>: Behavioral harmony</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Bhakoot (7 pts)</strong>: Family emotional joy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                  <span><strong>Nadi (8 pts)</strong>: Genetic vital strength</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e5d7de]/70 dark:border-zinc-800 flex items-center justify-between text-xs text-[#5c4a5f] dark:text-zinc-400 font-mono">
              <span>Scientific Vedic Calculations</span>
              <span className="text-[#8b4e38] dark:text-amber-400 font-semibold">28+ Gunas: Ati-Uttam</span>
            </div>
          </div>

          {/* Card 2: Privacy Shield & Authenticated Lineage */}
          <div className="bg-[#f9e8ff]/70 dark:bg-zinc-950/80 rounded-3xl p-8 sm:p-10 border border-[#e5d7de] dark:border-zinc-800 shadow-lovable flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#ffdbcf] dark:bg-emerald-500/20 flex items-center justify-center text-[#8b4e38] dark:text-emerald-400 mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-[#8b4e38] dark:text-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-[#8b4e38] dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Identity & Discretion Pillar
              </span>
              <h3 className="font-serif text-2xl text-[#23162c] dark:text-white mt-1.5 mb-3 font-normal">
                Privacy Shield & Verified Lineage
              </h3>
              <p className="font-sans text-sm text-[#5c4a5f] dark:text-zinc-300 mb-6 leading-relaxed">
                Respecting personal autonomy and family honor. We ensure candidates never experience unwanted contact or unsolicited image sharing:
              </p>

              <div className="space-y-3.5 text-xs text-[#23162c] dark:text-zinc-200">
                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#8b4e38] dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm">Client-Side Photo Masking</strong>
                    <span className="text-[#5c4a5f] dark:text-zinc-400 leading-normal">
                      Photos remain blurred behind a cryptographic shield until mutual connection interest is granted.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#8b4e38] dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm">Aadhaar & Passport Authentication</strong>
                    <span className="text-[#5c4a5f] dark:text-zinc-400 leading-normal">
                      Government identification, university credentials, and annual compensation brackets are pre-authenticated.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#8b4e38] dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm">Family Roots & Ancestral Integrity</strong>
                    <span className="text-[#5c4a5f] dark:text-zinc-400 leading-normal">
                      Gotra, family occupation, native place, and values are transparently cataloged without bias.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e5d7de]/70 dark:border-zinc-800 flex items-center justify-between text-xs text-[#5c4a5f] dark:text-zinc-400 font-mono">
              <span>Zero Unsolicited Contact</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">100% Consent-Driven</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
