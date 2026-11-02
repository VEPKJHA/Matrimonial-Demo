import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Send, 
  Check, 
  Sparkles, 
  Lock, 
  Eye, 
  EyeOff, 
  MessageSquare, 
  FileDown, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Home, 
  Users, 
  Activity, 
  CheckCircle2,
  Clock,
  Compass,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Profile } from '../types/profile';
import { useToast } from './Toast';

interface ProfileDrawerProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
  isShortlisted: boolean;
  isInterestSent: boolean;
  onToggleShortlist: (id: string) => void;
  onSendInterest: (id: string) => void;
  onOpenChat: (profile: Profile) => void;
  onOpenBioData: (profile: Profile) => void;
  globalPhotoShield: boolean;
  isLoggedIn?: boolean;
  onRequireAuth?: () => void;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  profile,
  isOpen,
  onClose,
  isShortlisted,
  isInterestSent,
  onToggleShortlist,
  onSendInterest,
  onOpenChat,
  onOpenBioData,
  globalPhotoShield,
  isLoggedIn = true,
  onRequireAuth,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'career' | 'family' | 'kundali'>('overview');
  const [photoUnlocked, setPhotoUnlocked] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const { addToast } = useToast();

  if (!isOpen || !profile) return null;

  const isShieldActive = globalPhotoShield && !photoUnlocked && !isInterestSent;

  const handleSendInterest = () => {
    if (!isLoggedIn && onRequireAuth) {
      onRequireAuth();
      return;
    }
    if (!isInterestSent) {
      onSendInterest(profile.id);
      addToast('Interest Sent!', `Direct interest sent to ${profile.fullName}`, 'success');
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  const handleToggleShortlist = () => {
    if (!isLoggedIn && onRequireAuth) {
      onRequireAuth();
      return;
    }
    onToggleShortlist(profile.id);
  };

  const handleTogglePhotoShield = () => {
    setPhotoUnlocked(!photoUnlocked);
    addToast(
      photoUnlocked ? 'Photo Shield Enabled' : 'Photo Shield Unlocked',
      photoUnlocked ? 'Privacy blur activated' : 'Full gallery unmasked',
      'shield'
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col text-zinc-100 animate-in slide-in-from-right duration-300">
          
          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between gap-4 bg-zinc-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative">
                <img
                  src={profile.photos[0]}
                  alt={profile.fullName}
                  className={`w-12 h-12 rounded-xl object-cover ring-2 ring-zinc-700 ${
                    isShieldActive ? 'blur-md' : ''
                  }`}
                />
                {isShieldActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                    <Lock className="w-4 h-4 text-emerald-400" />
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg text-white truncate">{profile.fullName}</h2>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
                    {profile.baseMatchScore}% Match
                  </span>
                </div>
                <p className="text-xs text-zinc-400 truncate">
                  {profile.age} yrs • {profile.height} • {profile.profession} • {profile.location.city}
                </p>
              </div>
            </div>

            {/* Quick Actions (Close & Bookmark) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleToggleShortlist}
                className={`p-2 rounded-xl border transition-colors ${
                  isShortlisted
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-500'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
                title={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
              >
                <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-rose-500' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="px-5 border-b border-zinc-800 bg-zinc-900/40 flex items-center gap-2 overflow-x-auto text-xs font-medium no-scrollbar">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-rose-500 text-rose-400 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Overview & Bio
            </button>
            <button
              onClick={() => setActiveTab('career')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'career'
                  ? 'border-rose-500 text-rose-400 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Career & Education
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'family'
                  ? 'border-rose-500 text-rose-400 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Family & Roots
            </button>
            <button
              onClick={() => setActiveTab('kundali')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'kundali'
                  ? 'border-amber-500 text-amber-400 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Horoscope & Kundali Weaver</span>
              <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {profile.kundali.gunaScore}/36
              </span>
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">

            {/* TAB 1: OVERVIEW & BIO */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in">
                
                {/* Photo Gallery & Privacy Blur Controls */}
                <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={profile.photos[activePhotoIdx] || profile.photos[0]}
                      alt={profile.fullName}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isShieldActive ? 'blur-xl scale-110 brightness-75' : ''
                      }`}
                    />
                    {isShieldActive && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                        <Lock className="w-8 h-8 text-emerald-400 mb-2 drop-shadow" />
                        <h4 className="font-bold text-white text-sm">Privacy Shield Enabled</h4>
                        <p className="text-xs text-zinc-300 max-w-xs mt-1">
                          Photos are protected by verified Aadhaar token. Mutual match or direct permission will reveal clear resolution.
                        </p>
                        <button
                          onClick={handleTogglePhotoShield}
                          className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
                        >
                          Temporarily Reveal Photo
                        </button>
                      </div>
                    )}

                    {/* Shield Status Toggle Button Top Right */}
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        onClick={handleTogglePhotoShield}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-xs font-medium text-zinc-200 hover:bg-zinc-900 transition-colors"
                      >
                        {isShieldActive ? (
                          <>
                            <Eye className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Unmask</span>
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Mask Photo</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  {profile.photos.length > 1 && (
                    <div className="p-3 bg-zinc-950 flex items-center gap-2 border-t border-zinc-800/80">
                      {profile.photos.map((photo, i) => (
                        <button
                          key={i}
                          onClick={() => setActivePhotoIdx(i)}
                          className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            activePhotoIdx === i ? 'border-rose-500 scale-105' : 'border-zinc-800 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={photo}
                            alt=""
                            className={`w-full h-full object-cover ${isShieldActive ? 'blur-xs' : ''}`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Personal Statement / Bio */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-rose-400" /> About Me
                  </h3>
                  <p className="text-sm text-zinc-200 leading-relaxed font-sans">
                    {profile.bio}
                  </p>
                </div>

                {/* Lifestyle & Personal Habits */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Lifestyle & Living Habits
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block font-mono">Diet</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.diet}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block font-mono">Smoking</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.lifestyle.smoking}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block font-mono">Drinking</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.lifestyle.drinking}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60 col-span-2">
                      <span className="text-zinc-500 text-[10px] block font-mono">Fitness & Activity</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.lifestyle.fitness}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block font-mono">Pets</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.lifestyle.pets}</span>
                    </div>
                  </div>

                  {/* Interests Pill Cloud */}
                  <div>
                    <span className="text-zinc-500 text-[10px] block font-mono mb-1.5">Passions & Hobbies</span>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.lifestyle.interests.map((interest, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700/60 text-xs text-zinc-300 font-mono"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Partner Expectations */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2.5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Partner Expectations & Values
                  </h3>
                  <div className="space-y-2">
                    {profile.partnerExpectations.map((exp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: CAREER & EDUCATION */}
            {activeTab === 'career' && (
              <div className="space-y-4 animate-in fade-in">
                
                {/* Current Role Card */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-rose-400" /> Current Role & Employer
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Income Verified
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{profile.profession}</h4>
                    <p className="text-sm text-zinc-300 mt-0.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{profile.employer}</span>
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/60 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Annual Compensation Tier</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">{profile.incomeRange}</span>
                  </div>
                </div>

                {/* Academic Background */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-indigo-400" /> Academic Qualifications
                  </span>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/60 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-white">{profile.education.degree}</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        Verified Degree
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{profile.education.university}</p>
                    <p className="text-xs text-indigo-400 font-mono mt-1">Focus: {profile.education.field}</p>
                  </div>
                </div>

                {/* Career Ambitions & Settlement Roadmap */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-zinc-400" /> Settlement & Relocation Intent
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {profile.location.settlementPref}
                  </p>
                  {profile.location.isNRI && (
                    <div className="mt-2 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-indigo-400" />
                      <span>Authorized for residency/work in {profile.location.country}. Open to bilateral relocation with spouse.</span>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 3: FAMILY & ROOTS */}
            {activeTab === 'family' && (
              <div className="space-y-4 animate-in fade-in">
                
                {/* Family Values & Status Card */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Home className="w-4 h-4 text-rose-400" /> Family Overview
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {profile.family.values} Values
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{profile.family.aboutFamily}"
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] font-mono block">Family Structure</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.family.type} Family</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] font-mono block">Affluence Tier</span>
                      <span className="font-semibold text-zinc-200 mt-0.5 block">{profile.family.affluenceTier}</span>
                    </div>
                  </div>
                </div>

                {/* Parents & Siblings Details */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-400" /> Immediate Relations
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60 flex items-start justify-between gap-2">
                      <span className="text-zinc-400">Father</span>
                      <span className="font-medium text-zinc-100 text-right">{profile.family.fatherOccupation}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60 flex items-start justify-between gap-2">
                      <span className="text-zinc-400">Mother</span>
                      <span className="font-medium text-zinc-100 text-right">{profile.family.motherOccupation}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60 flex items-start justify-between gap-2">
                      <span className="text-zinc-400">Siblings</span>
                      <span className="font-medium text-zinc-100 text-right">{profile.family.siblings}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/60 flex items-start justify-between gap-2">
                      <span className="text-zinc-400">Hometown Roots</span>
                      <span className="font-medium text-zinc-100 text-right">{profile.family.familyHometown}</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: HOROSCOPE & KUNDALI WEAVER */}
            {activeTab === 'kundali' && (
              <div className="space-y-5 animate-in fade-in">
                
                {/* Overall Guna Milan Summary Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-zinc-900 to-zinc-900 border border-amber-500/30 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-400" /> Ashtakoota Milan Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-extrabold font-mono text-amber-300">
                          {profile.kundali.gunaScore}
                        </span>
                        <span className="text-sm font-mono text-zinc-400">/ 36 Gunas</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {profile.kundali.gunaScore >= 28 ? 'Auspicious Match (Ati-Uttam)' : 'Favorable Match (Uttam)'}
                      </span>
                      <p className="text-[11px] text-zinc-400 font-mono mt-1">
                        Manglik: <span className="text-white font-medium">{profile.kundali.manglikStatus}</span>
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-950 h-2.5 rounded-full overflow-hidden border border-zinc-800">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-700"
                      style={{ width: `${(profile.kundali.gunaScore / 36) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Astrological Coordinates Grid */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-zinc-400" /> Planetary Coordinates & Janma Patrika
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block">Nakshatra</span>
                      <span className="text-zinc-200 font-semibold">{profile.kundali.nakshatra}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block">Rashi (Moon)</span>
                      <span className="text-zinc-200 font-semibold">{profile.kundali.rashi}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block">Gotra</span>
                      <span className="text-zinc-200 font-semibold">{profile.kundali.gotra}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                      <span className="text-zinc-500 text-[10px] block">Padam / Charan</span>
                      <span className="text-zinc-200 font-semibold">Pada {profile.kundali.charan}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" /> {profile.kundali.birthTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" /> {profile.kundali.birthPlace}
                    </span>
                  </div>
                </div>

                {/* Ashtakoota 8-Pillar Table */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Ashtakoota 8 Koota Breakdown
                  </span>
                  <div className="divide-y divide-zinc-800/80 text-xs">
                    {profile.kundali.ashtakoota.map((koota, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-200">{koota.name}</span>
                            <span className="text-[10px] text-zinc-500 font-mono">({koota.meaning})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 font-mono">
                          <span className={`font-bold ${koota.matched ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {koota.points} / {koota.max}
                          </span>
                          {koota.matched ? (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                              Match
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 text-[10px]">
                              Partial
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Sticky CTA Action Bar in Footer */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
            
            {/* Auxiliary Tools: Chat, Bio-Data PDF, Photo Access */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (!isLoggedIn && onRequireAuth) {
                    onRequireAuth();
                  } else {
                    onOpenChat(profile);
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700 transition-colors"
                title="Initiate simulated chat"
              >
                <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden sm:inline">Secure Chat</span>
              </button>

              <button
                onClick={() => onOpenBioData(profile)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700 transition-colors"
                title="Print or export formatted Bio-Data PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Bio-Data PDF</span>
              </button>
            </div>

            {/* Primary Action: Send Interest */}
            <button
              onClick={handleSendInterest}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold shadow-lg transition-all ${
                isInterestSent
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                  : 'bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white shadow-rose-600/25'
              }`}
            >
              {isInterestSent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Interest Sent ✓</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Interest / Connect</span>
                </>
              )}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};
