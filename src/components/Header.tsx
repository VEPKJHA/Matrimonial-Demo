import React, { useState } from 'react';
import { 
  Heart, 
  Moon, 
  Sun, 
  Users, 
  Lock, 
  Eye, 
  ChevronDown,
  ArrowRight,
  LogIn,
  LogOut,
  Sparkles
} from 'lucide-react';
import type { CurrentUser } from '../types/profile';
import { CURRENT_USERS } from '../data/mockProfiles';

interface HeaderProps {
  isLoggedIn: boolean;
  currentUser: CurrentUser;
  onSelectUser: (user: CurrentUser) => void;
  shortlistCount: number;
  interestsCount: number;
  onOpenShortlists: () => void;
  globalPhotoShield: boolean;
  onToggleGlobalPhotoShield: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onBookConsultation: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogout: () => void;
  onToggleAuthMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  currentUser,
  onSelectUser,
  shortlistCount,
  interestsCount,
  onOpenShortlists,
  globalPhotoShield,
  onToggleGlobalPhotoShield,
  isDarkMode,
  onToggleTheme,
  onBookConsultation,
  onLoginClick,
  onRegisterClick,
  onLogout,
  onToggleAuthMode,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all bg-[#fff7fd]/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-[#e5d7de]/50 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo matching url-weaver-workshop */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none shrink-0">
          <svg className="shrink-0 w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 48 48" fill="none" stroke="#a3684d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 40 C14 30, 22 20, 36 10"></path>
            <path d="M20 31 C17 26, 17 20, 22 17 C26 21, 25 27, 20 31 Z" fill="#a3684d" fillOpacity="0.18"></path>
            <path d="M26 24 C27 18, 33 16, 37 19 C36 24, 30 26, 26 24 Z" fill="#a3684d" fillOpacity="0.18"></path>
            <path d="M16 36 C12 33, 11 27, 15 25 C18 28, 18 33, 16 36 Z" fill="#a3684d" fillOpacity="0.18"></path>
            <path d="M31 16 C33 11, 39 10, 42 13 C41 17, 36 19, 31 16 Z" fill="#a3684d" fillOpacity="0.18"></path>
          </svg>
          <div className="flex flex-col">
            <span className="font-serif italic text-xl sm:text-[25px] text-[#3c2a3e] dark:text-zinc-100 tracking-tight leading-none">
              Sangam Weaver
            </span>
            <span className="text-[9px] text-[#7d6778] dark:text-zinc-400 tracking-[0.2em] uppercase mt-1 font-medium font-sans">
              Matrimonial & Kundali Milan
            </span>
          </div>
        </a>

        {/* Center Nav Links (Public vs Member) */}
        <nav className="hidden lg:flex items-center gap-6 font-sans">
          {!isLoggedIn ? (
            <>
              <a 
                href="#what-we-offer" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#415186] dark:hover:text-amber-300 transition-colors py-1"
              >
                What We Offer
              </a>
              <a 
                href="#how-it-works" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#415186] dark:hover:text-amber-300 transition-colors py-1"
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#415186] dark:hover:text-amber-300 transition-colors py-1"
              >
                Membership Plans
              </a>
              <a 
                href="#matches" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#415186] dark:hover:text-amber-300 transition-colors py-1"
              >
                Browse Candidates
              </a>
              <a 
                href="#pillars" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#415186] dark:hover:text-amber-300 transition-colors py-1"
              >
                Two Pillars
              </a>
              <button 
                onClick={onBookConsultation}
                className="text-[13.5px] font-medium text-[#8b4e38] dark:text-amber-300 hover:text-[#5c4a5f] transition-colors py-1 flex items-center gap-1 cursor-pointer"
              >
                VIP Concierge
              </button>
            </>
          ) : (
            <>
              <a 
                href="#home" 
                className="relative text-[13.5px] font-medium text-[#2d2235] dark:text-zinc-200 hover:text-[#415186] dark:hover:text-rose-400 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#a3684d]"
              >
                Member Home
              </a>
              <a 
                href="#weaver-workshop" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#2d2235] dark:hover:text-zinc-100 transition-colors py-1"
              >
                Match Criteria Weaver
              </a>
              <a 
                href="#matches" 
                className="text-[13.5px] font-medium text-[#5c4a5f] dark:text-zinc-300 hover:text-[#2d2235] dark:hover:text-zinc-100 transition-colors py-1"
              >
                Matching Registry
              </a>
            </>
          )}
        </nav>

        {/* Right Actions: Public vs Authenticated Member */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Demo Switcher Pill: Public vs Member Mode */}
          <button
            onClick={onToggleAuthMode}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono border transition-all bg-amber-500/10 text-[#8b4e38] dark:text-amber-300 border-amber-500/30 hover:bg-amber-500/20 shadow-xs"
            title="Toggle between Public Before-Login View and Member After-Login Dashboard"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a3684d]" />
            <span>Mode: {isLoggedIn ? 'Member (Logged In)' : 'Public (Before Login)'}</span>
          </button>

          {!isLoggedIn ? (
            /* BEFORE LOGIN PUBLIC ACTIONS */
            <>
              <button
                onClick={onLoginClick}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#415186] dark:text-zinc-200 hover:bg-[#fdefff] dark:hover:bg-zinc-800 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>

              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#e11d48] to-[#be123c] hover:from-[#be123c] hover:to-[#9f1239] text-white font-sans text-xs font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-md shadow-rose-600/20 gap-1.5 cursor-pointer"
              >
                <span>Register Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            /* AFTER LOGIN MEMBER ACTIONS */
            <>
              {/* Photo Shield Toggle */}
              <button
                onClick={onToggleGlobalPhotoShield}
                title={globalPhotoShield ? "Privacy Shield Active: Photos blurred client-side" : "Privacy Shield Inactive: Photos visible"}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  globalPhotoShield 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-600/40'
                    : 'bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800'
                }`}
              >
                {globalPhotoShield ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="hidden sm:inline">Photo Shield</span>
                    <span className="px-1 py-0.2 bg-emerald-200 dark:bg-emerald-500/20 rounded text-[10px] font-mono">ON</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Photo Shield</span>
                    <span className="px-1 py-0.2 bg-zinc-200 dark:bg-zinc-800 rounded text-[10px] font-mono">OFF</span>
                  </>
                )}
              </button>

              {/* Shortlist Counter Button */}
              <button
                onClick={onOpenShortlists}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#be123c] border border-[#fecdd3] dark:bg-rose-500/15 dark:hover:bg-rose-500/25 dark:text-rose-300 dark:border-rose-500/30 transition-all shadow-sm group"
              >
                <Heart className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${shortlistCount > 0 ? 'fill-[#be123c] text-[#be123c] dark:fill-rose-500 dark:text-rose-500' : ''}`} />
                <span className="hidden sm:inline">Saved</span>
                <span className="flex items-center justify-center min-w-[18px] h-4.5 px-1 text-[10px] font-mono font-bold rounded-full bg-[#be123c] text-white">
                  {shortlistCount + interestsCount}
                </span>
              </button>

              {/* Perspective Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-[#e5d7de]/70 dark:border-zinc-800 text-xs font-medium text-[#2d2235] dark:text-zinc-200 transition-colors shadow-sm"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.fullName}
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-zinc-300 dark:ring-zinc-700"
                  />
                  <span className="hidden md:inline font-semibold">{currentUser.fullName.split(' ')[0]}</span>
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                    <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-700 shadow-xl p-2 z-50 text-xs">
                      <div className="px-2 py-1.5 text-[10px] uppercase font-mono font-bold text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 mb-1 flex items-center justify-between">
                        <span>Switch Perspective</span>
                        <Users className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      {CURRENT_USERS.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => {
                            onSelectUser(user);
                            setShowUserMenu(false);
                          }}
                          className={`w-full text-left flex items-start gap-2.5 p-2 rounded-xl transition-colors ${
                            user.id === currentUser.id
                              ? 'bg-[#fdefff] dark:bg-rose-500/15 border border-[#e5d7de] dark:border-rose-500/30 text-[#23162c] dark:text-white'
                              : 'hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                          }`}
                        >
                          <img
                            src={user.avatar}
                            alt={user.fullName}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-700 shrink-0 mt-0.5"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                              <span>{user.fullName}</span>
                              <span className="text-[10px] text-zinc-400 font-mono">
                                Seeking {user.seekingGender}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">{user.profession}</p>
                            <p className="text-[10px] text-[#415186] dark:text-indigo-400 font-mono mt-0.5">{user.kundaliSummary}</p>
                          </div>
                        </button>
                      ))}

                      {/* Sign Out Option */}
                      <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            onLogout();
                          }}
                          className="w-full p-2 rounded-xl text-left flex items-center gap-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out to Public Page</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-[#e5d7de]/70 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

        </div>

      </div>
    </header>
  );
};
