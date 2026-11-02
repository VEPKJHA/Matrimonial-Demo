import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  Compass, 
  Languages, 
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Religion } from '../types/profile';

interface ShaadiQuickMatchCardProps {
  onQuickSearch: (params: {
    gender: 'Female' | 'Male';
    minAge: number;
    maxAge: number;
    religion: Religion;
    motherTongue?: string;
  }) => void;
}

export const ShaadiQuickMatchCard: React.FC<ShaadiQuickMatchCardProps> = ({
  onQuickSearch,
}) => {
  const [lookingFor, setLookingFor] = useState<'Female' | 'Male'>('Female');
  const [minAge, setMinAge] = useState(24);
  const [maxAge, setMaxAge] = useState(32);
  const [religion, setReligion] = useState<Religion>('Hindu');
  const [motherTongue, setMotherTongue] = useState('All Mother Tongues');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch({
      gender: lookingFor,
      minAge,
      maxAge,
      religion,
      motherTongue: motherTongue === 'All Mother Tongues' ? undefined : motherTongue,
    });
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.65 },
      colors: ['#a3684d', '#415186', '#e11d48'],
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-30">
      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-2xl p-5 sm:p-7 backdrop-blur-xl">
        
        {/* Top Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#e5d7de]/70 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3684d] animate-pulse" />
            <h3 className="font-serif text-lg sm:text-xl text-[#1e1325] dark:text-white font-normal flex items-center gap-2">
              <span>Find Your Special Someone</span>
              <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-full bg-[#fdefff] dark:bg-zinc-800 text-[#8b4e38] dark:text-amber-300 border border-[#e5d7de] dark:border-zinc-700">
                Shaadi-Grade Search
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans text-[#6c5870] dark:text-zinc-400">
            <span className="hidden md:inline">Over <strong>3,400+ Verified Profiles</strong> looking for lifelong commitment</span>
          </div>
        </div>

        {/* 5-Column Shaadi-style Quick Match Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          
          {/* Col 1: Looking for */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#a3684d]" /> Looking For
            </label>
            <select
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value as 'Female' | 'Male')}
              className="w-full px-3 py-2.5 rounded-xl bg-[#fdefff]/50 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-xs font-medium text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
            >
              <option value="Female">A Bride / Woman</option>
              <option value="Male">A Groom / Man</option>
            </select>
          </div>

          {/* Col 2: Age Range */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#a3684d]" /> Age Window
            </label>
            <div className="flex items-center gap-2">
              <select
                value={minAge}
                onChange={(e) => setMinAge(Number(e.target.value))}
                className="w-1/2 px-2.5 py-2.5 rounded-xl bg-[#fdefff]/50 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-xs font-medium text-[#1e1325] dark:text-white focus:outline-none"
              >
                {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(a => (
                  <option key={a} value={a}>{a} yrs</option>
                ))}
              </select>
              <span className="text-zinc-400 text-xs">to</span>
              <select
                value={maxAge}
                onChange={(e) => setMaxAge(Number(e.target.value))}
                className="w-1/2 px-2.5 py-2.5 rounded-xl bg-[#fdefff]/50 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-xs font-medium text-[#1e1325] dark:text-white focus:outline-none"
              >
                {[28, 29, 30, 31, 32, 33, 34, 35, 36, 38].map(a => (
                  <option key={a} value={a}>{a} yrs</option>
                ))}
              </select>
            </div>
          </div>

          {/* Col 3: Religion */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#a3684d]" /> Religion
            </label>
            <select
              value={religion}
              onChange={(e) => setReligion(e.target.value as Religion)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#fdefff]/50 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-xs font-medium text-[#1e1325] dark:text-white focus:outline-none"
            >
              <option value="Any">All Religions</option>
              <option value="Hindu">Hindu</option>
              <option value="Sikh">Sikh</option>
              <option value="Jain">Jain</option>
              <option value="Interfaith">Interfaith</option>
            </select>
          </div>

          {/* Col 4: Mother Tongue */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-[#a3684d]" /> Mother Tongue
            </label>
            <select
              value={motherTongue}
              onChange={(e) => setMotherTongue(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#fdefff]/50 dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 text-xs font-medium text-[#1e1325] dark:text-white focus:outline-none"
            >
              <option value="All Mother Tongues">All Languages</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Tamil">Tamil</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Marathi">Marathi</option>
              <option value="Gujarati">Gujarati</option>
            </select>
          </div>

          {/* Col 5: Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] hover:from-[#be123c] hover:to-[#9f1239] text-white font-sans text-xs font-bold shadow-lg shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Let's Begin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
