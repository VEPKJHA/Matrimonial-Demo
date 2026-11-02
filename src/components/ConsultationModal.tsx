import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Phone,
  User
} from 'lucide-react';
import { useToast } from './Toast';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [consultType, setConsultType] = useState('kundali');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    addToast('Consultation Scheduled', 'A senior counselor will reach out within 2 hours', 'success');
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#fff7fd] dark:bg-zinc-950 border border-[#e5d7de] dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden text-[#23162c] dark:text-zinc-100 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5d7de]/70 dark:border-zinc-800 bg-[#fdefff]/50 dark:bg-zinc-900/50 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b4e38] dark:text-rose-400 font-semibold block">
              Confidential Advisory
            </span>
            <h3 className="font-serif text-2xl text-[#23162c] dark:text-white font-normal mt-0.5">
              Book a 1-on-1 Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-600/40 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-normal text-[#23162c] dark:text-white">
              Consultation Request Received
            </h4>
            <p className="text-xs text-[#5c4a5f] dark:text-zinc-400 max-w-xs mx-auto">
              Our Senior Jyotish & Relational Advisor will contact you confidentially on your provided number.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#5c4a5f] dark:text-zinc-400 mb-1">
                Full Name / Family Representative
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#23162c] dark:text-white focus:outline-none focus:border-[#415186]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#5c4a5f] dark:text-zinc-400 mb-1">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#23162c] dark:text-white focus:outline-none focus:border-[#415186]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c4a5f] dark:text-zinc-400 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#23162c] dark:text-white focus:outline-none focus:border-[#415186]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5c4a5f] dark:text-zinc-400 mb-1">
                Advisory Focus
              </label>
              <select
                value={consultType}
                onChange={(e) => setConsultType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#23162c] dark:text-white focus:outline-none focus:border-[#415186]"
              >
                <option value="kundali">Ashtakoota 36-Guna Kundali Milan Analysis</option>
                <option value="nri">NRI Relocation & International Matchmaking</option>
                <option value="family">Private Family Background & Direct Introduction</option>
                <option value="general">Personal Match Criteria Strategy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5c4a5f] dark:text-zinc-400 mb-1">
                Birth Details or Specific Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Include birth date, time, and city for astrological charting..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#23162c] dark:text-white focus:outline-none focus:border-[#415186]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#415186] hover:bg-[#344479] text-white font-sans text-xs font-semibold transition-all shadow-md shadow-[#415186]/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Confidential Consultation Request</span>
              </button>
            </div>

            <div className="text-[11px] text-zinc-500 font-mono text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Zero-Spam Policy • 100% Confidential</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
