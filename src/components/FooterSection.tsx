import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  Globe
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#fdefff]/80 dark:bg-zinc-950 text-[#23162c] dark:text-zinc-200 pt-16 pb-8 border-t border-[#e5d7de]/70 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Layout matching Lovable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 items-start">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg className="shrink-0 w-9 h-9" viewBox="0 0 48 48" fill="none" stroke="#a3684d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 40 C14 30, 22 20, 36 10"></path>
                <path d="M20 31 C17 26, 17 20, 22 17 C26 21, 25 27, 20 31 Z" fill="#a3684d" fillOpacity="0.18"></path>
                <path d="M26 24 C27 18, 33 16, 37 19 C36 24, 30 26, 26 24 Z" fill="#a3684d" fillOpacity="0.18"></path>
                <path d="M16 36 C12 33, 11 27, 15 25 C18 28, 18 33, 16 36 Z" fill="#a3684d" fillOpacity="0.18"></path>
                <path d="M31 16 C33 11, 39 10, 42 13 C41 17, 36 19, 31 16 Z" fill="#a3684d" fillOpacity="0.18"></path>
              </svg>
              <div>
                <span className="font-serif italic text-xl text-[#3c2a3e] dark:text-zinc-100 block leading-tight">
                  Sangam Weaver
                </span>
                <span className="text-[10px] text-[#7d6778] dark:text-zinc-400 uppercase tracking-widest block font-mono">
                  Matrimonial & Kundali Milan
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#5c4a5f] dark:text-zinc-400 leading-relaxed max-w-sm">
              Compassionate relational matchmaking united with ancient Ashtakoota Vedic Kundali Milan for individuals, families, and modern progressive partners.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[#5c4a5f] dark:text-zinc-400">
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-center hover:text-[#415186] transition-colors shadow-sm">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-center hover:text-[#415186] transition-colors shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.92 0-1.66-.74-1.66-1.66 0-.92.74-1.66 1.66-1.66.92 0 1.66.74 1.66 1.66 0 .92-.74 1.66-1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78Z"/></svg>
              </a>
              <a href="mailto:advisor@sangamweaver.com" className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-center hover:text-[#415186] transition-colors shadow-sm">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#23162c] dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#5c4a5f] dark:text-zinc-400">
              <li><a href="#home" className="hover:text-[#23162c] dark:hover:text-white transition-colors">Home Experience</a></li>
              <li><a href="#weaver-workshop" className="hover:text-[#23162c] dark:hover:text-white transition-colors">Match Criteria Weaver</a></li>
              <li><a href="#matches" className="hover:text-[#23162c] dark:hover:text-white transition-colors">Verified Candidate Profiles</a></li>
              <li><a href="#pillars" className="hover:text-[#23162c] dark:hover:text-white transition-colors">Two Pillars of Care</a></li>
              <li><a href="#philosophy" className="hover:text-[#23162c] dark:hover:text-white transition-colors">Matchmaker Philosophy</a></li>
            </ul>
          </div>

          {/* Column 3: Consultation Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#23162c] dark:text-white uppercase tracking-wider">
              Consultation Hubs
            </h4>
            <div className="space-y-2 text-xs text-[#5c4a5f] dark:text-zinc-400">
              <div>
                <strong className="block text-[#23162c] dark:text-zinc-200">Bangalore (HQ)</strong>
                <span>Indiranagar & Whitefield Tech Corridor</span>
              </div>
              <div>
                <strong className="block text-[#23162c] dark:text-zinc-200">Mumbai Metro</strong>
                <span>Bandra Kurla Complex (BKC), MH</span>
              </div>
              <div>
                <strong className="block text-[#23162c] dark:text-zinc-200">North America Desk</strong>
                <span>Seattle, WA & San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Column 4: Confidential Advisory */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#23162c] dark:text-white uppercase tracking-wider">
              Confidential Advisory
            </h4>
            <p className="text-xs text-[#5c4a5f] dark:text-zinc-400 leading-relaxed">
              Have questions regarding horoscope matching, gotra compatibility, or NRI relocation?
            </p>
            <div className="space-y-1 text-xs text-[#23162c] dark:text-zinc-200 font-mono">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8b4e38] dark:text-rose-400" />
                <span>(+91) 98400 12345</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#415186] dark:text-indigo-400" />
                <span>care@sangamweaver.com</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Aadhaar Authenticated Registry</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e5d7de]/60 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d6778] dark:text-zinc-500 font-sans">
          <div>
            © {new Date().getFullYear()} Sangam Weaver • Inspired by Lovable App Elegance. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy Shield Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Vedic Guna Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Client Confidentiality</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
