import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ShieldCheck, 
  Scroll
} from 'lucide-react';
import type { Profile } from '../types/profile';
import { useToast } from './Toast';

interface BioDataModalProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BioDataModal: React.FC<BioDataModalProps> = ({
  profile,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  if (!isOpen || !profile) return null;

  const handlePrint = () => {
    window.print();
  };

  const bioDataPlainText = `
=========================================
          MATRIMONIAL BIO-DATA
=========================================
Full Name: ${profile.fullName}
Age & Height: ${profile.age} years | ${profile.height}
Religion & Community: ${profile.religion} (${profile.community})
Mother Tongue: ${profile.motherTongue}
Current City: ${profile.location.city}, ${profile.location.state}
Ancestral Hometown: ${profile.nativePlace}

--- ASTROLOGICAL / KUNDALI DETAILS ---
Guna Milan Score: ${profile.kundali.gunaScore} / 36
Manglik Status: ${profile.kundali.manglikStatus}
Nakshatra: ${profile.kundali.nakshatra} (Pada ${profile.kundali.charan})
Rashi: ${profile.kundali.rashi}
Gotra: ${profile.kundali.gotra}
Birth Details: ${profile.kundali.birthTime} | ${profile.kundali.birthPlace}

--- EDUCATION & OCCUPATION ---
Highest Degree: ${profile.education.degree}
University: ${profile.education.university}
Current Designation: ${profile.profession}
Current Employer: ${profile.employer}
Annual Income: ${profile.incomeRange}

--- FAMILY BACKGROUND ---
Family Structure: ${profile.family.type} (${profile.family.values} values)
Father: ${profile.family.fatherOccupation}
Mother: ${profile.family.motherOccupation}
Siblings: ${profile.family.siblings}
Hometown: ${profile.family.familyHometown}
Family Notes: ${profile.family.aboutFamily}

--- LIFESTYLE & DIET ---
Diet: ${profile.diet}
Habits: Smoking: ${profile.lifestyle.smoking} | Drinking: ${profile.lifestyle.drinking}
Fitness: ${profile.lifestyle.fitness}
Interests: ${profile.lifestyle.interests.join(', ')}

Partner Expectations:
${profile.partnerExpectations.map(e => `• ${e}`).join('\n')}
=========================================
Generated via Sangam Weaver Engine
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(bioDataPlainText);
    setCopied(true);
    addToast('Bio-Data Copied', 'Plaintext bio-data copied to clipboard', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity no-print"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-zinc-100 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="p-4 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Scroll className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-sm text-white">Matrimonial Bio-Data Document</h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Printable Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Bio-Data Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-zinc-950 font-sans text-xs space-y-6 print:bg-white print:text-black">
          
          {/* Traditional Ornamental Top Banner */}
          <div className="text-center border-b-2 border-rose-500/40 pb-4 print:border-rose-700">
            <span className="text-rose-400 font-mono text-xs tracking-widest uppercase block mb-1">
              || ॐ श्री गणेशाय नमः ||
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white print:text-black uppercase">
              MATRIMONIAL BIO-DATA
            </h1>
            <p className="text-zinc-400 text-xs mt-1 print:text-zinc-600">
              Verified Candidate Profile • ID #{profile.id}
            </p>
          </div>

          {/* Section 1: Candidate Overview with Portrait */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 print:bg-zinc-50 print:border-zinc-300">
            <img
              src={profile.photos[0]}
              alt={profile.fullName}
              className="w-24 h-28 object-cover rounded-lg ring-1 ring-zinc-700 print:ring-zinc-400"
            />
            <div className="flex-1 space-y-1.5 text-center sm:text-left">
              <h2 className="text-lg font-bold text-white print:text-black">{profile.fullName}</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-zinc-300 print:text-zinc-800 text-xs">
                <div><span className="text-zinc-500 font-medium">Age:</span> {profile.age} Years</div>
                <div><span className="text-zinc-500 font-medium">Height:</span> {profile.height}</div>
                <div><span className="text-zinc-500 font-medium">Religion:</span> {profile.religion}</div>
                <div><span className="text-zinc-500 font-medium">Community:</span> {profile.community}</div>
                <div><span className="text-zinc-500 font-medium">Mother Tongue:</span> {profile.motherTongue}</div>
                <div><span className="text-zinc-500 font-medium">Current City:</span> {profile.location.city}</div>
              </div>
            </div>
          </div>

          {/* Section 2: Astrological / Horoscope Details */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2 print:bg-zinc-50 print:border-zinc-300">
            <h3 className="font-bold text-amber-400 uppercase tracking-wider text-[11px] font-mono border-b border-zinc-800 pb-1 print:text-amber-700">
              Astrological & Kundali Coordinates
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-zinc-300 print:text-zinc-800">
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Nakshatra</span>
                <span className="font-semibold">{profile.kundali.nakshatra} (Pada {profile.kundali.charan})</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Rashi (Moon Sign)</span>
                <span className="font-semibold">{profile.kundali.rashi}</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Gotra</span>
                <span className="font-semibold">{profile.kundali.gotra}</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Manglik Status</span>
                <span className="font-semibold">{profile.kundali.manglikStatus}</span>
              </div>
            </div>
            <div className="text-[11px] text-zinc-400 pt-1 font-mono print:text-zinc-600">
              Birth Time & Coordinates: {profile.kundali.birthTime} in {profile.kundali.birthPlace}
            </div>
          </div>

          {/* Section 3: Educational & Career Credentials */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2 print:bg-zinc-50 print:border-zinc-300">
            <h3 className="font-bold text-rose-400 uppercase tracking-wider text-[11px] font-mono border-b border-zinc-800 pb-1 print:text-rose-700">
              Education & Professional Career
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300 print:text-zinc-800">
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Highest Qualification</span>
                <span className="font-semibold">{profile.education.degree}</span>
                <span className="text-zinc-400 block text-[11px]">{profile.education.university}</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Current Designation & Organization</span>
                <span className="font-semibold">{profile.profession}</span>
                <span className="text-zinc-400 block text-[11px]">{profile.employer}</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Annual Compensation</span>
                <span className="font-semibold text-emerald-400 print:text-emerald-700">{profile.incomeRange}</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block font-mono">Settlement Preference</span>
                <span className="font-semibold">{profile.location.settlementPref}</span>
              </div>
            </div>
          </div>

          {/* Section 4: Family Details */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2 print:bg-zinc-50 print:border-zinc-300">
            <h3 className="font-bold text-indigo-400 uppercase tracking-wider text-[11px] font-mono border-b border-zinc-800 pb-1 print:text-indigo-700">
              Family Background & Ancestral Roots
            </h3>
            <div className="space-y-1.5 text-zinc-300 print:text-zinc-800">
              <div className="flex justify-between border-b border-zinc-800/60 pb-1">
                <span className="text-zinc-500">Father's Occupation:</span>
                <span className="font-medium">{profile.family.fatherOccupation}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-1">
                <span className="text-zinc-500">Mother's Occupation:</span>
                <span className="font-medium">{profile.family.motherOccupation}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-1">
                <span className="text-zinc-500">Siblings:</span>
                <span className="font-medium">{profile.family.siblings}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-1">
                <span className="text-zinc-500">Family Hometown / Native Place:</span>
                <span className="font-medium">{profile.family.familyHometown}</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 italic pt-1 print:text-zinc-600">
              Family Note: "{profile.family.aboutFamily}"
            </p>
          </div>

          {/* Section 5: Partner Expectations */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2 print:bg-zinc-50 print:border-zinc-300">
            <h3 className="font-bold text-teal-400 uppercase tracking-wider text-[11px] font-mono border-b border-zinc-800 pb-1 print:text-teal-700">
              Partner Preferences & Mutual Expectations
            </h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 print:text-zinc-800">
              {profile.partnerExpectations.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </div>

          {/* Verification Watermark Footer */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 print:border-zinc-300">
            <span className="flex items-center gap-1 text-emerald-400 print:text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4" /> Aadhaar & Identity Authenticated Record
            </span>
            <span>Generated on {new Date().toLocaleDateString()}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
