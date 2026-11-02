import React, { useState } from 'react';
import { 
  Video, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { useToast } from './Toast';

export const ShaadiLiveCard: React.FC = () => {
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const { addToast } = useToast();

  const handleRsvp = () => {
    setHasRsvpd(true);
    addToast(
      'Virtual Meetup RSVP Confirmed!', 
      'You will receive calendar invite & private link 30 minutes before the event.',
      'sparkle'
    );
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
      <div className="rounded-3xl bg-gradient-to-r from-[#415186] via-[#35436d] to-[#252f4c] text-white p-6 sm:p-9 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Ambient Ring */}
        <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-rose-500/10 blur-2xl pointer-events-none" />

        {/* Left Information */}
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-300 text-xs font-mono font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <Video className="w-3.5 h-3.5 text-rose-300" />
            <span>Sangam Live • Virtual Speed Meetups</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
            Meet 5 Verified Matches in 30 Minutes
          </h3>

          <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed">
            Experience our 5-minute curated video introductions from the comfort of home. Both candidates must have verified Aadhaar IDs and compatible Kundali coordinates.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300 pt-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-300" /> This Sunday, 6:00 PM IST
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-300" /> 84 Verified Candidates Attending
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" /> Audio & Video Privacy Protected
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0 w-full md:w-auto">
          {hasRsvpd ? (
            <div className="px-6 py-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-sans text-sm font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>RSVP Confirmed • Check Email</span>
            </div>
          ) : (
            <button
              onClick={handleRsvp}
              className="w-full md:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-zinc-100 text-[#415186] font-sans text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>RSVP for Sunday's Meet</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
