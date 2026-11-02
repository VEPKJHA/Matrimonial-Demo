import React from 'react';
import { 
  Smartphone, 
  Star, 
  QrCode, 
  Bell, 
  Check
} from 'lucide-react';

export const MobileAppBannerCard: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
      <div className="rounded-3xl bg-[#fdefff]/80 dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 p-8 sm:p-12 overflow-hidden relative shadow-lg">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-[#e5d7de] dark:border-zinc-700 text-[#8b4e38] dark:text-amber-300 text-xs font-mono font-semibold uppercase">
              <Smartphone className="w-3.5 h-3.5 text-[#a3684d]" />
              <span>Mobile Experience</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#1e1325] dark:text-white font-normal tracking-tight leading-tight">
              Take Sangam Weaver Anywhere with Our Mobile App
            </h3>

            <p className="font-sans text-sm text-[#554359] dark:text-zinc-300 max-w-xl leading-relaxed">
              Receive real-time match alerts, review Kundali Milan coordinates on the go, chat securely with end-to-end privacy, and coordinate family calls directly from your phone.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-sans text-[#1e1325] dark:text-zinc-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Instant Photo Shield Permission Requests</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Live Horoscope Kundali Milan Charting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>End-to-End Encrypted Secure Messaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Bio-Data PDF Export with 1-Click WhatsApp</span>
              </div>
            </div>

            {/* App Store Buttons & QR Code */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => alert("Mobile Demo App link sent to your registered number")}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1e1325] text-white hover:bg-black transition-all shadow-md"
              >
                <AppleLogo className="w-6 h-6 fill-current" />
                <div className="text-left font-sans">
                  <span className="text-[10px] uppercase font-mono block opacity-80 leading-none">Download on the</span>
                  <span className="text-sm font-semibold leading-tight">Apple App Store</span>
                </div>
              </button>

              <button 
                onClick={() => alert("Mobile Demo App link sent to your registered number")}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1e1325] text-white hover:bg-black transition-all shadow-md"
              >
                <PlayStoreLogo className="w-5 h-5 fill-current" />
                <div className="text-left font-sans">
                  <span className="text-[10px] uppercase font-mono block opacity-80 leading-none">Get it on</span>
                  <span className="text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </button>

              <div className="hidden sm:flex items-center gap-2.5 p-2 px-3 rounded-2xl bg-white dark:bg-zinc-800 border border-[#e5d7de] dark:border-zinc-700 text-xs font-mono text-[#554359] dark:text-zinc-300">
                <QrCode className="w-8 h-8 text-[#a3684d]" />
                <span className="text-[11px] leading-tight">Scan to Install<br />Mobile Demo</span>
              </div>
            </div>

          </div>

          {/* Right Simulated Mobile UI Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="w-full max-w-xs rounded-[38px] p-3 bg-zinc-900 border-4 border-zinc-700 shadow-2xl relative">
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-zinc-800 rounded-full mx-auto mb-3" />
              
              <div className="rounded-3xl bg-white dark:bg-zinc-950 p-4 space-y-3 border border-zinc-200 dark:border-zinc-800 text-xs">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-serif font-bold text-sm">Sangam Weaver Mobile</span>
                  </div>
                  <Bell className="w-4 h-4 text-zinc-400" />
                </div>

                {/* Simulated Push Notification 1 */}
                <div className="p-3 rounded-2xl bg-[#fdefff] dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8b4e38]">
                    <span>Kundali Alert</span>
                    <span>Just now</span>
                  </div>
                  <p className="font-semibold text-xs text-[#1e1325] dark:text-white">
                    34 / 36 Gunas Matched!
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    Aishwarya Sen (Rohini Nakshatra) matches your horoscope coordinates.
                  </p>
                </div>

                {/* Simulated Push Notification 2 */}
                <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-600">
                    <span>Photo Shield Unlocked</span>
                    <span>2m ago</span>
                  </div>
                  <p className="font-semibold text-xs text-[#1e1325] dark:text-white">
                    Mutual Connection Confirmed
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    Dr. Ananya Sharma accepted your interest. Full album is now visible.
                  </p>
                </div>

                <div className="pt-2 text-center text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>Rated 4.9 on iOS & Android</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const AppleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.61-.74 1.03-1.77.91-2.8-.89.04-1.97.6-2.61 1.34-.57.65-1.07 1.71-.94 2.72.99.08 2.02-.52 2.64-1.26z" />
  </svg>
);

const PlayStoreLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l13.5 8.5c.67.42.67 1.18 0 1.6L4.6 21.3c-.66.5-1.6.03-1.6-.8z" />
  </svg>
);
