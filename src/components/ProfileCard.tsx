import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Lock, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Scroll, 
  Send, 
  Check, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  Building,
  Volume2,
  LogIn
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Profile } from '../types/profile';
import { useToast } from './Toast';

interface ProfileCardProps {
  profile: Profile;
  isShortlisted: boolean;
  isInterestSent: boolean;
  globalPhotoShield: boolean;
  onToggleShortlist: (id: string) => void;
  onSendInterest: (id: string) => void;
  onInspectProfile: (profile: Profile) => void;
  isLoggedIn?: boolean;
  onRequireAuth?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  isShortlisted,
  isInterestSent,
  globalPhotoShield,
  onToggleShortlist,
  onSendInterest,
  onInspectProfile,
  isLoggedIn = true,
  onRequireAuth,
}) => {
  // Local photo shield toggle for this specific card
  const [photoUnlocked, setPhotoUnlocked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const { addToast } = useToast();

  const isShieldActive = globalPhotoShield && !photoUnlocked && !isInterestSent;

  const handleSendInterest = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn && onRequireAuth) {
      onRequireAuth();
      return;
    }
    if (!isInterestSent) {
      onSendInterest(profile.id);
      addToast(
        'Connection Interest Sent!', 
        `Your verified profile was shared with ${profile.fullName}. Mutual contact will be revealed upon acceptance.`,
        'success'
      );
      // Trigger subtle celebration confetti
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#a3684d', '#415186', '#d4af37'],
      });
    } else {
      addToast('Interest Already Active', `You have already connected with ${profile.fullName}`, 'info');
    }
  };

  const handleToggleShortlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn && onRequireAuth) {
      onRequireAuth();
      return;
    }
    onToggleShortlist(profile.id);
    if (!isShortlisted) {
      addToast('Added to Shortlist', `${profile.fullName} saved to your review queue`, 'heart');
    } else {
      addToast('Removed from Shortlist', `${profile.fullName} removed`, 'info');
    }
  };

  const handleTogglePhotoShield = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUnlocked(!photoUnlocked);
    addToast(
      photoUnlocked ? 'Photo Shield Applied' : 'Photo Shield Temporarily Unlocked',
      photoUnlocked ? 'Privacy blur re-enabled' : 'Photo revealed for inspection',
      'shield'
    );
  };

  const handleToggleAudioBio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !isPlayingAudio;
    setIsPlayingAudio(next);
    if (next) {
      addToast('Playing Voice Bio', `Listening to ${profile.fullName.split(' ')[0]}'s 15s Introduction`, 'sparkle');
      setTimeout(() => setIsPlayingAudio(false), 8000);
    }
  };

  // Circular gauge math for match score
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (profile.baseMatchScore / 100) * circumference;

  return (
    <div 
      onClick={() => onInspectProfile(profile)}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 hover:border-[#a3684d]/60 dark:hover:border-amber-400/40 hover:shadow-2xl hover:shadow-[#a3684d]/10 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      
      {/* Top Media & Photo Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#faf5f8] dark:bg-zinc-950">
        <img
          src={profile.photos[0]}
          alt={profile.fullName}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isShieldActive ? 'blur-2xl scale-110 brightness-75' : ''
          }`}
          loading="lazy"
        />

        {/* Gradient Overlay for bottom text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

        {/* Top Floating Row: Match Score Gauge & Highlight Badge */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
          
          {/* Circular SVG Compatibility Gauge */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-lg">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6 -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  className="stroke-zinc-700/60"
                  strokeWidth="3"
                  fill="transparent"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  className="stroke-amber-400 transition-all duration-1000 ease-out"
                  strokeWidth="3"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
            </div>
            <span className="font-mono font-bold text-xs text-amber-300">{profile.baseMatchScore}%</span>
          </div>

          {/* Top highlight / category badge if any */}
          {profile.badge && (
            <div className="px-3 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-[#e5d7de] dark:border-zinc-700 text-[11px] font-medium text-[#8b4e38] dark:text-amber-300 truncate max-w-[190px] shadow-sm">
              {profile.badge}
            </div>
          )}
        </div>

        {/* Privacy Shield Watermark Overlay (When blurred) */}
        {isShieldActive && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 pointer-events-none">
            <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-400/60 text-amber-300 mb-2 shadow-2xl">
              <Lock className="w-6 h-6" />
            </div>
            <p className="text-xs font-serif font-semibold text-white tracking-wide drop-shadow">
              Privacy Shield Active
            </p>
            <p className="text-[10px] text-zinc-300 max-w-[200px] mt-0.5 drop-shadow">
              Mutual consent & Aadhaar token protected
            </p>
          </div>
        )}

        {/* Bottom Floating Controls: Voice Intro Pill, Verified Badge, Shield Toggle */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between z-10">
          
          <div className="flex items-center gap-2">
            {/* Verified ID Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-400/50 text-emerald-300 text-[11px] font-medium shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Verified</span>
            </div>

            {/* Interactive 15s Voice Bio Preview Pill */}
            <button
              onClick={handleToggleAudioBio}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md border text-[11px] font-mono transition-all ${
                isPlayingAudio
                  ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-black/60 hover:bg-black/80 text-zinc-200 border-white/20'
              }`}
              title="Listen to 15s Voice Introduction"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 bg-black animate-wave-1 rounded-full" />
                    <span className="w-0.5 bg-black animate-wave-2 rounded-full" />
                    <span className="w-0.5 bg-black animate-wave-3 rounded-full" />
                    <span className="w-0.5 bg-black animate-wave-4 rounded-full" />
                  </div>
                  <span>0:15</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3 text-amber-400" />
                  <span>Voice Bio</span>
                </>
              )}
            </button>
          </div>

          {/* Photo Shield Eye Toggle */}
          <button
            onClick={handleTogglePhotoShield}
            className="p-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-colors"
            title={isShieldActive ? "Click to temporarily unmask photo" : "Click to mask photo with shield"}
          >
            {isShieldActive ? <EyeOff className="w-4 h-4 text-zinc-300" /> : <Eye className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-3 text-[#1e1325] dark:text-zinc-100">
        
        {/* Name, Age, Height & Community */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-serif text-xl text-[#1e1325] dark:text-zinc-100 group-hover:text-[#415186] dark:group-hover:text-amber-300 transition-colors flex items-center gap-1.5 font-normal">
                <span className="font-semibold">{profile.fullName}</span>
                <span className="text-[#6c5870] dark:text-zinc-400 font-normal text-xs font-mono">
                  • {profile.age}y
                </span>
              </h3>
              <p className="text-xs text-[#554359] dark:text-zinc-400 mt-0.5 flex items-center gap-2">
                <span>{profile.height}</span>
                <span>•</span>
                <span className="text-[#3c2a3e] dark:text-zinc-300 font-medium">{profile.community}</span>
              </p>
            </div>

            {/* Bookmark / Shortlist Heart Button */}
            <button
              onClick={handleToggleShortlist}
              className={`p-2.5 rounded-2xl border transition-all shrink-0 ${
                isShortlisted
                  ? 'bg-rose-100 border-rose-300 text-rose-600 dark:bg-rose-500/15 dark:border-rose-500/40 dark:text-rose-500'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-400 hover:text-rose-500 hover:bg-zinc-100 dark:bg-zinc-800/60 dark:border-zinc-700/50 dark:text-zinc-400 dark:hover:text-rose-400'
              }`}
              title={isShortlisted ? "Remove from shortlist" : "Save to shortlist"}
            >
              <Heart className={`w-4 h-4 transition-transform ${isShortlisted ? 'fill-rose-500 scale-110 text-rose-500' : ''}`} />
            </button>
          </div>

          {/* Key Indicators: Profession & Organization */}
          <div className="mt-3 flex flex-col gap-1.5 text-xs text-[#554359] dark:text-zinc-300">
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#8b4e38] dark:text-rose-400 shrink-0" />
              <span className="font-semibold text-[#1e1325] dark:text-zinc-100 truncate">{profile.profession}</span>
            </div>
            <div className="flex items-center gap-2 text-[#6c5870] dark:text-zinc-400">
              <Building className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="truncate">{profile.employer}</span>
              <span className="text-zinc-400 font-mono">•</span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">{profile.incomeRange}</span>
            </div>
            <div className="flex items-center gap-2 text-[#6c5870] dark:text-zinc-400">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="truncate">{profile.education.degree} ({profile.education.university})</span>
            </div>
            <div className="flex items-center gap-2 text-[#6c5870] dark:text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="truncate">{profile.location.city}, {profile.location.state}</span>
              <span className="text-zinc-400">•</span>
              <span className="text-[#554359] dark:text-zinc-400 text-[11px] truncate">Roots: {profile.nativePlace}</span>
            </div>
          </div>
        </div>

        {/* Kundali & Guna Milan Highlight Pill */}
        <div className="p-3 rounded-2xl bg-[#fdefff]/80 dark:bg-zinc-950/70 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Scroll className="w-4 h-4 text-[#8b4e38] dark:text-amber-400 shrink-0" />
            <span className="text-[#1e1325] dark:text-zinc-300 font-medium">Kundali Milan:</span>
            <span className="font-mono font-bold text-[#8b4e38] dark:text-amber-400 text-sm">
              {profile.kundali.gunaScore}/36
            </span>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium font-sans">
              (Auspicious)
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-700/60 text-[#3c2a3e] dark:text-zinc-300">
            {profile.kundali.manglikStatus}
          </span>
        </div>

        {/* Compatibility Tag Pills */}
        <div className="flex flex-wrap gap-1">
          {profile.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-lg bg-[#f0dbf9]/60 dark:bg-zinc-800/80 border border-[#e5d7de] dark:border-zinc-700/50 text-[11px] font-mono text-[#5b4e6a] dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
          {profile.tags.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/40 text-[11px] font-mono text-zinc-400">
              +{profile.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Row: Send Interest + Inspect Full Profile */}
        <div className="pt-3 border-t border-[#e5d7de]/70 dark:border-zinc-800/80 flex items-center gap-2">
          
          {/* Send Interest Button */}
          <button
            onClick={handleSendInterest}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs font-semibold transition-all ${
              isInterestSent
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40 cursor-default'
                : 'bg-gradient-to-r from-[#415186] to-[#344479] hover:from-[#344479] hover:to-[#2b3760] text-white shadow-md shadow-[#415186]/20'
            }`}
          >
            {isInterestSent ? (
              <>
                <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Interest Sent ✓</span>
              </>
            ) : !isLoggedIn ? (
              <>
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In to Connect</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Interest</span>
              </>
            )}
          </button>

          {/* Inspect Profile Drawer button */}
          <button
            onClick={() => onInspectProfile(profile)}
            className="flex items-center justify-center gap-1 py-3 px-3.5 rounded-2xl bg-white dark:bg-zinc-800 hover:bg-[#fdefff] dark:hover:bg-zinc-700 text-[#1e1325] dark:text-zinc-200 text-xs font-semibold border border-[#e5d7de] dark:border-zinc-700 transition-colors"
            title="Inspect Full Kundali & Bio-Data"
          >
            <span>Inspect</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>

        </div>

      </div>

    </div>
  );
};
