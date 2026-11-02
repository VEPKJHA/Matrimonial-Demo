import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Send, 
  Trash2, 
  FileDown, 
  Download, 
  CheckCircle2
} from 'lucide-react';
import type { Profile } from '../types/profile';
import { useToast } from './Toast';

interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  shortlistedProfiles: Profile[];
  interestSentProfiles: Profile[];
  onRemoveShortlist: (id: string) => void;
  onInspectProfile: (profile: Profile) => void;
  onSendInterest: (id: string) => void;
}

export const ShortlistDrawer: React.FC<ShortlistDrawerProps> = ({
  isOpen,
  onClose,
  shortlistedProfiles,
  interestSentProfiles,
  onRemoveShortlist,
  onInspectProfile,
  onSendInterest,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'shortlisted' | 'sent'>('all');
  const { addToast } = useToast();

  if (!isOpen) return null;

  // Combine unique profiles
  const allSavedIds = Array.from(
    new Set([...shortlistedProfiles.map(p => p.id), ...interestSentProfiles.map(p => p.id)])
  );
  
  const allProfilesMap = new Map<string, Profile>();
  shortlistedProfiles.forEach(p => allProfilesMap.set(p.id, p));
  interestSentProfiles.forEach(p => allProfilesMap.set(p.id, p));

  const allSavedProfiles = allSavedIds.map(id => allProfilesMap.get(id)!).filter(Boolean);

  const displayProfiles = 
    filterMode === 'shortlisted' ? shortlistedProfiles :
    filterMode === 'sent' ? interestSentProfiles :
    allSavedProfiles;

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allSavedProfiles, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sangam-weaver-shortlists-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    addToast('Shortlists Exported', 'JSON file generated with all candidate profiles', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col text-zinc-100 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-500">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h2 className="font-bold text-base text-white">Shortlist & Sent Workspace</h2>
                <p className="text-xs text-zinc-400">
                  {allSavedProfiles.length} active candidate records
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub-tabs: All, Shortlisted, Interests Sent */}
          <div className="p-3 border-b border-zinc-800/80 bg-zinc-900/40 flex items-center gap-1.5 text-xs font-mono">
            <button
              onClick={() => setFilterMode('all')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                filterMode === 'all'
                  ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All ({allSavedProfiles.length})
            </button>
            <button
              onClick={() => setFilterMode('shortlisted')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                filterMode === 'shortlisted'
                  ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Shortlisted ({shortlistedProfiles.length})
            </button>
            <button
              onClick={() => setFilterMode('sent')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center transition-all ${
                filterMode === 'sent'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Sent ({interestSentProfiles.length})
            </button>
          </div>

          {/* Candidates List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {displayProfiles.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm">No profiles found in this tab</h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto mt-1">
                    Click the heart icon on any profile card to save them to your active shortlist.
                  </p>
                </div>
              </div>
            ) : (
              displayProfiles.map((profile) => {
                const isShort = shortlistedProfiles.some(p => p.id === profile.id);
                const isSent = interestSentProfiles.some(p => p.id === profile.id);

                return (
                  <div
                    key={profile.id}
                    className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 flex items-center gap-3 transition-colors group"
                  >
                    <img
                      src={profile.photos[0]}
                      alt={profile.fullName}
                      className="w-14 h-14 rounded-lg object-cover ring-1 ring-zinc-700 shrink-0 cursor-pointer"
                      onClick={() => onInspectProfile(profile)}
                    />
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onInspectProfile(profile)}>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-sm text-zinc-100 truncate group-hover:text-rose-400">
                          {profile.fullName}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                          • {profile.age}y
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 truncate mt-0.5">
                        {profile.profession}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono mt-1">
                        <span className="text-rose-400 font-semibold">{profile.baseMatchScore}% Match</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-amber-400">{profile.kundali.gunaScore}/36 Gunas</span>
                        {isSent && (
                          <span className="text-emerald-400 ml-auto font-sans font-medium flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Sent
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      {!isSent && (
                        <button
                          onClick={() => onSendInterest(profile.id)}
                          className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors"
                          title="Send Connection Interest"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {isShort && (
                        <button
                          onClick={() => onRemoveShortlist(profile.id)}
                          className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 text-zinc-500 hover:text-rose-400 transition-colors"
                          title="Remove from shortlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with JSON Export & Print Actions */}
          {allSavedProfiles.length > 0 && (
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/60 backdrop-blur-md flex items-center justify-between gap-3">
              <button
                onClick={exportJSON}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono font-medium border border-zinc-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-zinc-400" />
                <span>Export JSON ({allSavedProfiles.length})</span>
              </button>

              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono font-medium border border-zinc-700 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-rose-400" />
                <span>Print Summary</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
