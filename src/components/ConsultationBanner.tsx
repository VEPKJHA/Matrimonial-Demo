import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';

interface ConsultationBannerProps {
  onOpenConsultationModal: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onOpenConsultationModal,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-20">
      <div className="rounded-3xl bg-gradient-to-br from-[#ffdbcf] via-[#f6e1ff] to-[#eddcfe] dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 p-8 sm:p-12 lg:p-14 shadow-xl border border-[#e5d7de]/80 dark:border-zinc-700/60 relative overflow-hidden text-center">
        
        {/* Ambient Subtle Aura */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/40 dark:bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#fdefff]/50 dark:bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-rose-400 font-semibold uppercase block">
            Take the Next Step
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#23162c] dark:text-white font-normal tracking-tight leading-tight">
            Your Journey Starts with a Simple Conversation
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c4a5f] dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Whether you want an in-depth Kundali Milan consultation with our senior Jyotish advisor or personalized family matchmaking assistance, our team is here to support you with discretion and warmth.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919840012345"
              className="inline-flex items-center gap-2 bg-[#415186] hover:bg-[#344479] text-white font-sans text-sm font-medium px-6 py-3.5 rounded-xl transition-all shadow-md shadow-[#415186]/20 shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>(+91) 98400 12345</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 text-[#23162c] dark:text-zinc-100 hover:bg-[#fdefff] dark:hover:bg-zinc-700 font-sans text-sm font-medium px-6 py-3.5 rounded-xl border border-[#e5d7de] dark:border-zinc-700 transition-all shadow-sm shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-[#8b4e38] dark:text-rose-400" />
              <span>Request Confidential Call</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-[#7d6778] dark:text-zinc-400 font-mono flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Strict Client Confidentiality Guaranteed • Zero Spam Policy</span>
          </div>
        </div>

      </div>
    </section>
  );
};
