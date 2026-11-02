import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  User, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import type { CurrentUser } from '../types/profile';
import { CURRENT_USERS } from '../data/mockProfiles';
import { useToast } from './Toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: CurrentUser) => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialMode = 'login',
}) => {
  const [tab, setTab] = useState<'login' | 'register'>(initialMode);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleDemoLogin = (user: CurrentUser) => {
    onLoginSuccess(user);
    addToast('Welcome Back!', `Logged in successfully as ${user.fullName}`, 'success');
    onClose();
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail) return;
    setOtpSent(true);
    addToast('OTP Sent', 'Use demo OTP: 1234 to log in', 'info');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Default to Rohan or Pooja based on gender
    const defaultUser = gender === 'Male' ? CURRENT_USERS[0] : CURRENT_USERS[1];
    onLoginSuccess(defaultUser);
    addToast('Account Authenticated', `Welcome to Sangam Weaver, ${defaultUser.fullName.split(' ')[0]}!`, 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#fff7fd] dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden text-[#1e1325] dark:text-zinc-100 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5d7de]/70 dark:border-zinc-800 bg-[#fdefff]/60 dark:bg-zinc-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#a3684d] text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold block">
                Member Authentication
              </span>
              <h3 className="font-serif text-2xl text-[#1e1325] dark:text-white font-normal">
                {tab === 'login' ? 'Sign In to Sangam Weaver' : 'Create Free Verified Profile'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white dark:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#e5d7de]/70 dark:border-zinc-800 text-xs font-sans font-semibold bg-white dark:bg-zinc-900">
          <button
            onClick={() => { setTab('login'); setOtpSent(false); }}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              tab === 'login'
                ? 'border-[#415186] text-[#415186] dark:border-rose-400 dark:text-rose-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Member Sign In
          </button>
          <button
            onClick={() => { setTab('register'); setOtpSent(false); }}
            className={`flex-1 py-3 text-center border-b-2 transition-colors ${
              tab === 'register'
                ? 'border-[#415186] text-[#415186] dark:border-rose-400 dark:text-rose-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Register Free
          </button>
        </div>

        <div className="p-6 space-y-5">
          
          {/* Quick Demo Login Pill Section (Super helpful for instant testing!) */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8b4e38] dark:text-amber-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#a3684d]" /> 1-Click Instant Demo Login:
            </span>
            <p className="text-xs text-[#554359] dark:text-zinc-300 leading-snug">
              Select a pre-verified candidate persona to explore full member capabilities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleDemoLogin(CURRENT_USERS[0])}
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-700 hover:border-[#a3684d] text-left transition-all text-xs flex items-center gap-2 group cursor-pointer shadow-sm"
              >
                <img
                  src={CURRENT_USERS[0].avatar}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-300"
                />
                <div className="min-w-0 flex-1">
                  <strong className="block text-[#1e1325] dark:text-white truncate">Rohan Sharma (30)</strong>
                  <span className="text-[10px] text-zinc-500 block truncate">Stripe PM • Bangalore</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleDemoLogin(CURRENT_USERS[1])}
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-700 hover:border-[#a3684d] text-left transition-all text-xs flex items-center gap-2 group cursor-pointer shadow-sm"
              >
                <img
                  src={CURRENT_USERS[1].avatar}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-300"
                />
                <div className="min-w-0 flex-1">
                  <strong className="block text-[#1e1325] dark:text-white truncate">Dr. Pooja M. (28)</strong>
                  <span className="text-[10px] text-zinc-500 block truncate">Pediatrician • Mumbai</span>
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <span className="absolute inset-x-0 h-px bg-[#e5d7de] dark:bg-zinc-800" />
            <span className="relative px-3 bg-[#fff7fd] dark:bg-zinc-950 text-[11px] font-mono text-zinc-400 uppercase">
              Or Sign In with Phone / Email
            </span>
          </div>

          {/* Standard Form */}
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-3.5 text-xs">
              {tab === 'register' && (
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rathore"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
                    />
                  </div>
                </div>
              )}

              {tab === 'register' && (
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                    I am Creating Profile For
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
                    className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none"
                  >
                    <option value="Male">Myself (Groom / Male)</option>
                    <option value="Female">Myself (Bride / Female)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                  Mobile Number / Email Address
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210 or rohan@stripe.com"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#415186] hover:bg-[#344479] text-white font-sans text-xs font-bold transition-all shadow-md shadow-[#415186]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue &mdash; Send Verification Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-3.5 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-300 text-xs flex items-center justify-between">
                <span>Verification OTP sent to <strong>{phoneOrEmail}</strong></span>
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="text-xs underline hover:text-emerald-900"
                >
                  Change
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6c5870] dark:text-zinc-400 mb-1">
                  Enter 4-Digit Code (Demo: 1234)
                </label>
                <input
                  type="text"
                  required
                  maxLength={4}
                  placeholder="1 2 3 4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center tracking-widest font-mono text-lg py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#1e1325] dark:text-white focus:outline-none focus:border-[#415186]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#415186] hover:bg-[#344479] text-white font-sans text-xs font-bold transition-all shadow-md shadow-[#415186]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Verify & Enter Sangam Weaver</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="pt-2 text-center text-[11px] text-zinc-500 font-mono flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Strict Client Confidentiality • Zero Public Search Indexing</span>
          </div>

        </div>

      </div>
    </div>
  );
};
