import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  SlidersHorizontal, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Compass,
  Star,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onExploreMatches: () => void;
  onOpenWeaver: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMatches,
  onOpenWeaver,
  onBookConsultation,
}) => {
  // Quick interactive Hero Matcher
  const [selectedRashi, setSelectedRashi] = useState('Taurus (Vrishabha)');
  const [selectedCareer, setSelectedCareer] = useState('Tech / Engineering');
  const [calculatedScore, setCalculatedScore] = useState<number | null>(33);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleQuickMatch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      const score = Math.floor(Math.random() * 5) + 30; // 30 to 34
      setCalculatedScore(score);
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#a3684d', '#415186', '#d4af37'],
      });
    }, 600);
  };

  return (
    <div id="home" className="relative w-full overflow-hidden bg-[#fcf8fa] dark:bg-[#0c0d14] pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-[#e5d7de]/60 dark:border-zinc-800/80 transition-colors">
      
      {/* Background Ambient Celestial Mesh */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-[#ffdbcf]/50 via-[#f0dbf9]/40 to-[#dce1ff]/35 dark:from-rose-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-[#e5d7de] dark:border-zinc-800 text-[#8b4e38] dark:text-amber-300 text-xs font-semibold shadow-sm tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3684d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3684d]" />
              </span>
              <span className="font-sans">Curated Registry of Exceptional Professionals</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ffdbcf]/60 dark:bg-amber-500/20 text-[#8b4e38] dark:text-amber-300">
                Top 1% Verified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-[#1e1325] dark:text-white tracking-tight leading-[1.08] font-normal">
              A More Conscious Path to &nbsp;— <br />
              <span className="italic font-serif text-[#a3684d] dark:text-amber-300">
                Lifelong Partnership
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#554359] dark:text-zinc-300 max-w-xl leading-relaxed">
              Where sacred Vedic Ashtakoota Kundali Milan unites with contemporary intellectual equality. Experience a discreet, privacy-shielded sanctuary designed for accomplished individuals and respected families.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreMatches}
                className="inline-flex items-center justify-center bg-[#415186] hover:bg-[#32406d] text-white font-sans text-sm font-semibold px-6 py-4 rounded-2xl transition-all shadow-lovable hover:shadow-xl gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Explore Verified Candidates</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenWeaver}
                className="inline-flex items-center justify-center bg-white dark:bg-zinc-900 text-[#1e1325] dark:text-zinc-200 font-sans text-sm font-semibold px-5 py-4 rounded-2xl border border-[#e5d7de] dark:border-zinc-800 hover:bg-[#fdefff] dark:hover:bg-zinc-800 transition-all shadow-sm gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#8b4e38] dark:text-amber-400" />
                <span>Weave Match Parameters</span>
              </button>

              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center text-[#554359] dark:text-zinc-400 hover:text-[#1e1325] dark:hover:text-white font-sans text-xs sm:text-sm font-medium px-3 py-2 transition-colors gap-1.5"
              >
                <span>Book 1-on-1 Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust Seals Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#e5d7de]/70 dark:border-zinc-800/80 text-xs font-sans text-[#6c5870] dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-medium">100% Aadhaar & Lineage Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#a3684d] dark:text-amber-400 shrink-0" />
                <span className="font-medium">Client-Side Photo Masking Shield</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Compass className="w-4 h-4 text-[#415186] dark:text-indigo-400 shrink-0" />
                <span className="font-medium">36-Guna Ashtakoota Milan</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Quick-Match Calculator Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative Subtle Shadow Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffdbcf]/60 to-[#eddcfe]/60 dark:from-amber-500/10 dark:to-indigo-500/10 rounded-3xl blur-2xl transform rotate-1 pointer-events-none" />

            <div className="relative rounded-3xl bg-white/95 dark:bg-zinc-900/95 border border-[#e5d7de] dark:border-zinc-700/80 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e5d7de]/70 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#eddcfe] dark:bg-amber-500/20 flex items-center justify-center text-[#8b4e38] dark:text-amber-300">
                    <Sparkles className="w-5 h-5 text-[#8b4e38] dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-[#1e1325] dark:text-white font-normal">
                      Compatibility Quick-Check
                    </h3>
                    <p className="text-[11px] text-[#6c5870] dark:text-zinc-400 font-sans">
                      Test instant Vedic Guna Milan score
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-semibold border border-emerald-300 dark:border-emerald-700/40">
                  Live Engine
                </span>
              </div>

              {/* Form Selectors */}
              <form onSubmit={handleQuickMatch} className="pt-4 space-y-3.5 text-xs">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                    Your Moon Sign (Rashi)
                  </label>
                  <select
                    value={selectedRashi}
                    onChange={(e) => setSelectedRashi(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#fdefff]/60 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
                  >
                    <option value="Taurus (Vrishabha)">Taurus (Vrishabha) • Rohini</option>
                    <option value="Virgo (Kanya)">Virgo (Kanya) • Uttara Phalguni</option>
                    <option value="Libra (Tula)">Libra (Tula) • Swati</option>
                    <option value="Pisces (Meena)">Pisces (Meena) • Revati</option>
                    <option value="Gemini (Mithuna)">Gemini (Mithuna) • Punarvasu</option>
                    <option value="Leo (Simha)">Leo (Simha) • Magha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                    Seeking Career Tier
                  </label>
                  <select
                    value={selectedCareer}
                    onChange={(e) => setSelectedCareer(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#fdefff]/60 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
                  >
                    <option value="Tech / Engineering">Tech / Engineering & AI Architecture</option>
                    <option value="Medicine / Healthcare">Medicine / Healthcare (MD / Specialists)</option>
                    <option value="Civil Services">Civil Services (IAS / Group A)</option>
                    <option value="Finance & Banking">Finance & Private Equity</option>
                    <option value="Creative & Business">Creative Leadership & Founders</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSimulating}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8b4e38] via-[#a3684d] to-[#8b4e38] hover:from-[#763e2c] hover:to-[#763e2c] text-white font-sans text-xs font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSimulating ? (
                    <>
                      <Zap className="w-3.5 h-3.5 animate-spin" />
                      <span>Calculating Ashtakoota Coordinates...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 text-amber-200" />
                      <span>Calculate Instant Guna Milan</span>
                    </>
                  )}
                </button>
              </form>

              {/* Real-time Match Result Box */}
              {calculatedScore !== null && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#fdefff] to-[#ffdbcf]/50 dark:from-zinc-950 dark:to-zinc-900 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 block">
                      Calculated Compatibility
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl font-serif font-bold text-[#8b4e38] dark:text-amber-400">
                        {calculatedScore}
                      </span>
                      <span className="text-xs text-[#6c5870] dark:text-zinc-400 font-mono">/ 36 Gunas</span>
                    </div>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Auspicious Union (Ati-Uttam)
                    </span>
                  </div>

                  <button
                    onClick={onExploreMatches}
                    className="px-3.5 py-2 rounded-xl bg-[#415186] hover:bg-[#344479] text-white text-[11px] font-semibold shadow-sm transition-all flex items-center gap-1"
                  >
                    <span>View Matches</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Floating Social Proof Bar */}
              <div className="mt-4 pt-3 border-t border-[#e5d7de]/60 dark:border-zinc-800 flex items-center justify-between text-[11px] text-[#6c5870] dark:text-zinc-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>4.9/5 from 1,800+ Families</span>
                </span>
                <span className="font-mono text-[#a3684d] dark:text-amber-400">
                  Zero Spam Guarantee
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
