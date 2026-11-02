import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Search, 
  RotateCcw, 
  Sparkles, 
  MapPin, 
  Briefcase, 
  Scroll, 
  ShieldCheck, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Utensils, 
  Compass,
  ArrowUpDown
} from 'lucide-react';
import type { FilterCriteria, Religion, CareerTier, DietType, LocationTier, ManglikType } from '../types/profile';
import { formatHeight } from '../lib/utils';
import { useToast } from './Toast';

interface MatchCriteriaWeaverProps {
  criteria: FilterCriteria;
  onChange: (criteria: FilterCriteria) => void;
  onReset: () => void;
  totalProfilesCount: number;
  filteredCount: number;
}

export const MatchCriteriaWeaver: React.FC<MatchCriteriaWeaverProps> = ({
  criteria,
  onChange,
  onReset,
  totalProfilesCount,
  filteredCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copiedQuery, setCopiedQuery] = useState(false);
  const { addToast } = useToast();

  // Helper to update individual criteria
  const updateCriteria = <K extends keyof FilterCriteria>(key: K, value: FilterCriteria[K]) => {
    onChange({
      ...criteria,
      [key]: value,
    });
  };

  // Quick Preset Handlers
  const applyPreset = (presetName: string) => {
    switch (presetName) {
      case 'tech':
        onChange({
          ...criteria,
          careerTier: 'Tech / Engineering',
          locationPref: 'Bangalore',
          minGunas: 18,
          diet: 'Any',
          religion: 'Any',
          manglikPref: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'Filtered Tech Professionals in Bangalore / Tier-1 Hubs', 'sparkle');
        break;
      case 'nri':
        onChange({
          ...criteria,
          locationPref: 'NRI (USA/UK/Canada)',
          careerTier: 'Any',
          minGunas: 18,
          diet: 'Any',
          religion: 'Any',
          manglikPref: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'Filtered NRI Match Tier (USA / UK / Canada)', 'sparkle');
        break;
      case 'doctors':
        onChange({
          ...criteria,
          careerTier: 'Medicine / Healthcare',
          locationPref: 'All',
          minGunas: 18,
          diet: 'Any',
          religion: 'Any',
          manglikPref: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'Filtered Doctors & Healthcare Specialists', 'sparkle');
        break;
      case 'kundali':
        onChange({
          ...criteria,
          minGunas: 28,
          manglikPref: 'Non-Manglik',
          careerTier: 'Any',
          locationPref: 'All',
          diet: 'Any',
          religion: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'High Horoscope Match: Kundali 28+ Gunas & Non-Manglik', 'sparkle');
        break;
      case 'civil':
        onChange({
          ...criteria,
          careerTier: 'Civil Services',
          locationPref: 'All',
          minGunas: 18,
          diet: 'Any',
          religion: 'Any',
          manglikPref: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'Filtered Civil Services & Public Policy Officers', 'sparkle');
        break;
      case 'veg':
        onChange({
          ...criteria,
          diet: 'Vegetarian',
          careerTier: 'Any',
          locationPref: 'All',
          minGunas: 18,
          religion: 'Any',
          manglikPref: 'Any',
          searchQuery: '',
        });
        addToast('Preset Applied', 'Filtered Pure Vegetarian Profiles', 'sparkle');
        break;
      default:
        break;
    }
  };

  // Generate synthetic query string representation (Lovable URL builder aesthetic)
  const queryString = `weaver://match?age=${criteria.minAge}-${criteria.maxAge}&height=${formatHeight(criteria.minHeightInches)}-${formatHeight(criteria.maxHeightInches)}&gunas>=${criteria.minGunas}&career=${criteria.careerTier.replace(/\s+/g, '')}&location=${criteria.locationPref.replace(/\s+/g, '')}&diet=${criteria.diet}&sort=${criteria.sortBy}`;

  const copyQuery = () => {
    navigator.clipboard.writeText(queryString);
    setCopiedQuery(true);
    addToast('Criteria String Copied', 'Weaver parameters copied to clipboard', 'info');
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  return (
    <div id="weaver-workshop" className="w-full bg-[#fdefff]/80 dark:bg-zinc-900/95 border-y border-[#e5d7de] dark:border-zinc-800 shadow-md backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* Top Control Bar: Title, Search, Live Counter, Presets */}
        <div className="flex flex-col gap-3">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Title & Live Matching Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-rose-400" />
                <h2 className="text-sm font-semibold text-zinc-100 tracking-tight flex items-center gap-2">
                  Match Criteria Weaver
                </h2>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono font-bold text-emerald-400">{filteredCount}</span>
                <span className="text-zinc-400">of {totalProfilesCount} candidates matched</span>
              </div>
            </div>

            {/* Search Input & Expand / Collapse Toggle */}
            <div className="flex items-center gap-2 flex-1 sm:max-w-md justify-end">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search name, company, university, gotra..."
                  value={criteria.searchQuery}
                  onChange={(e) => updateCriteria('searchQuery', e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all font-sans"
                />
                {criteria.searchQuery && (
                  <button
                    onClick={() => updateCriteria('searchQuery', '')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="relative shrink-0 flex items-center gap-1.5 px-2 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-300">
                <ArrowUpDown className="w-3 h-3 text-zinc-400" />
                <select
                  value={criteria.sortBy}
                  onChange={(e) => updateCriteria('sortBy', e.target.value as FilterCriteria['sortBy'])}
                  className="bg-transparent border-0 text-xs text-zinc-200 focus:outline-none cursor-pointer pr-4"
                >
                  <option value="matchScore" className="bg-zinc-900 text-zinc-200">Sort: Compatibility %</option>
                  <option value="gunaScore" className="bg-zinc-900 text-zinc-200">Sort: Kundali Gunas</option>
                  <option value="ageAsc" className="bg-zinc-900 text-zinc-200">Sort: Age (Youngest)</option>
                  <option value="incomeDesc" className="bg-zinc-900 text-zinc-200">Sort: Compensation</option>
                </select>
              </div>

              {/* Collapse/Expand Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 border border-zinc-700/60 transition-colors"
                title={isExpanded ? "Collapse parameters" : "Expand parameters"}
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Reset Button */}
              <button
                onClick={onReset}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 text-xs transition-colors"
                title="Reset all criteria"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Quick Presets Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-rose-400" /> Presets:
            </span>
            <button
              onClick={() => applyPreset('tech')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.careerTier === 'Tech / Engineering' && criteria.locationPref === 'Bangalore'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              💻 Tech in Bangalore
            </button>
            <button
              onClick={() => applyPreset('nri')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.locationPref === 'NRI (USA/UK/Canada)'
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              🇺🇸 NRI Match Tier
            </button>
            <button
              onClick={() => applyPreset('doctors')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.careerTier === 'Medicine / Healthcare'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              🩺 Doctors & Healthcare
            </button>
            <button
              onClick={() => applyPreset('kundali')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.minGunas >= 28 && criteria.manglikPref === 'Non-Manglik'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              ✨ Kundali 28+ Gunas
            </button>
            <button
              onClick={() => applyPreset('civil')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.careerTier === 'Civil Services'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              🏛️ Civil Services
            </button>
            <button
              onClick={() => applyPreset('veg')}
              className={`shrink-0 px-2.5 py-1 rounded-md border transition-all text-xs font-medium ${
                criteria.diet === 'Vegetarian'
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              🥗 Pure Vegetarian
            </button>
          </div>

          {/* Interactive Parameters Drawer (Collapsible) */}
          {isExpanded && (
            <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
              
              {/* Parameter 1: Age & Height Sliders */}
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/90 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    Age Window
                  </span>
                  <span className="font-mono text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    {criteria.minAge} - {criteria.maxAge} yrs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="21"
                    max="36"
                    value={criteria.minAge}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val <= criteria.maxAge) updateCriteria('minAge', val);
                    }}
                    className="w-full accent-rose-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                  <input
                    type="range"
                    min="21"
                    max="38"
                    value={criteria.maxAge}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= criteria.minAge) updateCriteria('maxAge', val);
                    }}
                    className="w-full accent-rose-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-zinc-800/60">
                  <span className="text-zinc-400">Min Height</span>
                  <span className="font-mono text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    ≥ {formatHeight(criteria.minHeightInches)}
                  </span>
                </div>
                <input
                  type="range"
                  min="58" // 4'10"
                  max="74" // 6'2"
                  value={criteria.minHeightInches}
                  onChange={(e) => updateCriteria('minHeightInches', Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Parameter 2: Career & Location Tiers */}
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/90 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-400" /> Career Tier
                  </span>
                </div>
                <select
                  value={criteria.careerTier}
                  onChange={(e) => updateCriteria('careerTier', e.target.value as CareerTier)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-rose-500"
                >
                  <option value="Any">All Professions & Tiers</option>
                  <option value="Tech / Engineering">Tech / Engineering & AI</option>
                  <option value="Medicine / Healthcare">Medicine / Healthcare (MD/MBBS)</option>
                  <option value="Civil Services">Civil Services (IAS/IPS/Group A)</option>
                  <option value="Finance & Banking">Finance & Investment Banking</option>
                  <option value="Creative & Business">Creative, Design & Business Founders</option>
                </select>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-800/60">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Settlement Pref
                  </span>
                </div>
                <select
                  value={criteria.locationPref}
                  onChange={(e) => updateCriteria('locationPref', e.target.value as LocationTier)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
                >
                  <option value="All">All Geographies & Metros</option>
                  <option value="Bangalore">Bangalore (Silicon Hub)</option>
                  <option value="Mumbai / Pune">Mumbai & Pune Metro</option>
                  <option value="Delhi NCR">Delhi NCR & Gurugram</option>
                  <option value="NRI (USA/UK/Canada)">NRI (USA / UK / Canada)</option>
                  <option value="Tier-1 Metro">All Domestic Tier-1 Metros</option>
                </select>
              </div>

              {/* Parameter 3: Horoscope & Kundali Weaver */}
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/90 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-amber-400" /> Min Kundali Guna Milan
                  </span>
                  <span className="font-mono text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    ≥ {criteria.minGunas} / 36
                  </span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="34"
                  value={criteria.minGunas}
                  onChange={(e) => updateCriteria('minGunas', Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>18 (Auspicious)</span>
                  <span>24+ (Good)</span>
                  <span>28+ (Exceptional)</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-800/60">
                  <span className="text-zinc-400 font-medium">Manglik Constraint</span>
                  <select
                    value={criteria.manglikPref}
                    onChange={(e) => updateCriteria('manglikPref', e.target.value as ManglikType)}
                    className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none"
                  >
                    <option value="Any">Any Status</option>
                    <option value="Non-Manglik">Non-Manglik Only</option>
                    <option value="Anshik Manglik">Anshik Manglik</option>
                    <option value="Manglik">Manglik</option>
                  </select>
                </div>
              </div>

              {/* Parameter 4: Religion, Diet & Verification Shield */}
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/90 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Compass className="w-3.5 h-3.5 text-zinc-400" /> Religion / Community
                  </span>
                  <select
                    value={criteria.religion}
                    onChange={(e) => updateCriteria('religion', e.target.value as Religion)}
                    className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none"
                  >
                    <option value="Any">All Communities</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Jain">Jain</option>
                    <option value="Interfaith">Interfaith / Open</option>
                  </select>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-800/60">
                  <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                    <Utensils className="w-3.5 h-3.5 text-zinc-400" /> Diet Habit
                  </span>
                  <select
                    value={criteria.diet}
                    onChange={(e) => updateCriteria('diet', e.target.value as DietType)}
                    className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none"
                  >
                    <option value="Any">Any Diet</option>
                    <option value="Vegetarian">Pure Vegetarian</option>
                    <option value="Eggetarian">Eggetarian</option>
                    <option value="Non-Veg">Non-Veg</option>
                  </select>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300">
                    <input
                      type="checkbox"
                      checked={criteria.verifiedOnly}
                      onChange={(e) => updateCriteria('verifiedOnly', e.target.checked)}
                      className="rounded bg-zinc-900 border-zinc-700 text-rose-500 focus:ring-rose-500"
                    />
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Govt ID Verified Only
                    </span>
                  </label>
                </div>
              </div>

            </div>
          )}

          {/* Synthetic Query String & Developer Workshop bar */}
          <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800/60 text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-zinc-600 select-none">$</span>
              <span className="text-rose-400/90">query</span>
              <span className="text-zinc-500">=</span>
              <span className="text-zinc-300 truncate">{queryString}</span>
            </div>
            <button
              onClick={copyQuery}
              className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors"
              title="Copy Weaver Query String"
            >
              {copiedQuery ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedQuery ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
