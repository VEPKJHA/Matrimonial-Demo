import React from 'react';
import { 
  Heart, 
  Award, 
  GraduationCap
} from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="w-full bg-[#fdefff]/30 dark:bg-zinc-950 py-20 border-b border-[#e5d7de]/60 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Portrait Column matching url-weaver-workshop */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#f0dbf9] dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Chief Matchmaker & Jyotish Counselor"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#23162c]/90 via-[#23162c]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-xs uppercase tracking-wider text-[#fdae92] block mb-1">
                  Senior Relational Counselor & Astrologer
                </span>
                <p className="font-serif text-2xl text-white font-normal">
                  Dr. Meenakshi Sundaram
                </p>
                <p className="font-sans text-xs text-zinc-300 opacity-90 mt-1">
                  Ph.D. Relational Psychology (NIMHANS) & Certified Vedic Jyotish Vidwan
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-rose-400 font-semibold uppercase block">
                Relational Depth & Modern Autonomy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#23162c] dark:text-zinc-100 font-normal leading-tight">
                Where Vedic Astrological Wisdom Meets Equal, Progressive Partnership
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#5c4a5f] dark:text-zinc-300 leading-relaxed">
              In modern India and the global diaspora, matrimonial matchmaking often swings between two extremes: impersonal algorithms that disregard cultural roots, or rigid orthodox systems that ignore personal autonomy and emotional resonance.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#5c4a5f] dark:text-zinc-300 leading-relaxed">
              <strong>Sangam Weaver</strong> bridges this divide. We treat marriage as both a sacred meeting of two family ecosystems and a modern partnership of equals. Every candidate profile is evaluated with scientific rigor, complete privacy protection, and genuine human empathy.
            </p>

            {/* Three Pillar Values */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#eddcfe] dark:bg-rose-500/20 flex items-center justify-center text-[#5b4e6a] dark:text-rose-300 mb-2">
                  <Award className="w-4 h-4 text-[#8b4e38] dark:text-rose-400" />
                </div>
                <h4 className="font-semibold text-xs text-[#23162c] dark:text-white">Cultural Authenticity</h4>
                <p className="text-[11px] text-[#5c4a5f] dark:text-zinc-400 mt-1">Respecting ancestral lineage and family values.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#ffdbcf] dark:bg-indigo-500/20 flex items-center justify-center text-[#8b4e38] dark:text-indigo-300 mb-2">
                  <GraduationCap className="w-4 h-4 text-[#8b4e38] dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-xs text-[#23162c] dark:text-white">Professional Parity</h4>
                <p className="text-[11px] text-[#5c4a5f] dark:text-zinc-400 mt-1">Curated candidates with high intellectual ambition.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#f0dbf9] dark:bg-emerald-500/20 flex items-center justify-center text-[#5b4e6a] dark:text-emerald-300 mb-2">
                  <Heart className="w-4 h-4 text-[#8b4e38] dark:text-emerald-400" />
                </div>
                <h4 className="font-semibold text-xs text-[#23162c] dark:text-white">Mutual Empathy</h4>
                <p className="text-[11px] text-[#5c4a5f] dark:text-zinc-400 mt-1">Building sanctuaries of warmth, trust, and shared laughter.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
