import React from 'react';
import { 
  Crown, 
  ArrowRight, 
  CheckCircle2, 
  Lock
} from 'lucide-react';

interface VipShaadiBannerCardProps {
  onInquireVip: () => void;
}

export const VipShaadiBannerCard: React.FC<VipShaadiBannerCardProps> = ({
  onInquireVip,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1c1524] via-[#2a1d35] to-[#140f1a] text-white border border-amber-500/30 shadow-2xl p-8 sm:p-12">
        
        {/* Subtle Ambient Gold Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold tracking-wider uppercase">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Sangam Elite • VIP Matchmaking</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-tight">
              VIP Shaadi &mdash; Bespoke Advisory for Elite Professionals & Families
            </h3>

            <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
              When privacy, high caliber, and discretion are non-negotiable. Experience a white-glove matchmaking service managed personally by senior relationship counselors and certified Jyotish scholars.
            </p>

            {/* 4 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated Senior Relationship Manager (Single POC)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Handpicked & Screened by Jyotish Vidwans</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Confidential Offline Family Introductions</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Public Visibility & Custom Non-Disclosure Agreements</span>
              </div>
            </div>

          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
            <button
              onClick={onInquireVip}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-sans text-sm font-bold shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Inquire for VIP Membership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Strictly by Invitation & Screening</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
