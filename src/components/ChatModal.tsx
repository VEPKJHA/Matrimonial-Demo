import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  CheckCheck
} from 'lucide-react';
import type { Profile, CurrentUser } from '../types/profile';

interface ChatModalProps {
  profile: Profile | null;
  currentUser: CurrentUser;
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'candidate';
  text: string;
  timestamp: string;
}

export const ChatModal: React.FC<ChatModalProps> = ({
  profile,
  currentUser,
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (profile && isOpen) {
      // Default welcome context
      setMessages([
        {
          id: 'msg-0',
          sender: 'candidate',
          text: `Namaste ${currentUser.fullName.split(' ')[0]}! Thank you for connecting on Sangam Weaver. I noticed our profiles have a high compatibility score (${profile.baseMatchScore}%). Looking forward to learning more about your journey!`,
          timestamp: 'Just now',
        }
      ]);
    }
  }, [profile, isOpen, currentUser]);

  if (!isOpen || !profile) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const newMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');

    // Simulate candidate typing and reply after 1.5 seconds
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const replyMsg: Message = {
        id: Math.random().toString(),
        sender: 'candidate',
        text: `That sounds wonderful! I'd love to discuss our shared interests and family values. Would you or your family prefer a brief call or coffee this coming weekend?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1800);
  };

  const icebreakers = [
    `Hi ${profile.fullName.split(' ')[0]}, loved your background in ${profile.education.field}!`,
    `Our Kundali Milan shows an auspicious ${profile.kundali.gunaScore}/36 Gunas. Would love to talk!`,
    `Your weekend hiking & travel interests match mine completely.`,
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col h-[580px] overflow-hidden text-zinc-100 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profile.photos[0]}
                alt={profile.fullName}
                className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-700"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-white">{profile.fullName}</h3>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[11px] text-zinc-400 truncate max-w-[240px]">
                {profile.profession} • Active Now
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Security Privacy Notice */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Lock className="w-3 h-3" /> End-to-End Privacy Protected
          </span>
          <span>Contact details protected</span>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-rose-600 text-white rounded-br-xs'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-xs'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-zinc-500 font-mono mt-1 px-1 flex items-center gap-1">
                {msg.timestamp}
                {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-rose-400" />}
              </span>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-150" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-300" />
              <span className="text-[11px] ml-1">{profile.fullName.split(' ')[0]} is typing...</span>
            </div>
          )}
        </div>

        {/* Quick Icebreakers */}
        <div className="px-4 py-2 bg-zinc-900/30 border-t border-zinc-800/60 overflow-x-auto flex items-center gap-2 no-scrollbar">
          <span className="text-[10px] font-mono text-zinc-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-rose-400" /> Prompts:
          </span>
          {icebreakers.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="shrink-0 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[11px] text-zinc-300 hover:text-white transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Message Input Box */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-950 flex items-center gap-2">
          <input
            type="text"
            placeholder="Write a message to start conversation..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-md shadow-rose-600/20 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
