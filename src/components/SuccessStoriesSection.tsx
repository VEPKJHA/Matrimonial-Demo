import React from 'react';
import { 
  Heart, 
  Sparkles, 
  MapPin, 
  Calendar, 
  ShieldCheck
} from 'lucide-react';

interface Story {
  id: string;
  coupleNames: string;
  photo: string;
  weddingLocation: string;
  weddingDate: string;
  professions: string;
  gunaScore: number;
  quote: string;
  storySnippet: string;
}

const SUCCESS_STORIES: Story[] = [
  {
    id: 'story-1',
    coupleNames: 'Aditya & Dr. Sneha',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    weddingLocation: 'Udaipur, Rajasthan',
    weddingDate: 'December 2025',
    professions: 'Senior AI Staff Engineer @ Google & Pediatric Surgeon @ Apollo',
    gunaScore: 34,
    quote: 'Sangam Weaver made finding a partner feel like a dignified, soulful conversation rather than an exhausting numbers game.',
    storySnippet: 'Matched through the Bangalore-Mumbai corridor. The Ashtakoota compatibility table immediately aligned both family astrologers, while our 1-on-1 private conversations confirmed mutual career ambition.'
  },
  {
    id: 'story-2',
    coupleNames: 'Kunal & Tanya',
    photo: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80',
    weddingLocation: 'Jaipur, Rajasthan',
    weddingDate: 'February 2026',
    professions: 'FinTech Co-Founder (Seattle) & Architectural Designer (New Delhi)',
    gunaScore: 32,
    quote: 'The photo privacy shield was the clincher. In a world of public matrimony portals, having our photos protected until mutual interest gave us unmatched dignity.',
    storySnippet: 'Cross-border NRI union spanning Pacific Northwest and Delhi. Both shared a love for sustainable architecture, mountain trekking, and rooted Indian festival traditions.'
  },
  {
    id: 'story-3',
    coupleNames: 'Rishabh & Devika',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    weddingLocation: 'New Delhi',
    weddingDate: 'March 2026',
    professions: 'Deputy Secretary (IAS Cadre) & Strategy Director @ McKinsey',
    gunaScore: 31,
    quote: 'Our families appreciated the transparent background verification. We found an equal who understands demanding careers and cherishes family warmth.',
    storySnippet: 'Civil services and corporate strategy union. The bio-data generator allowed easy sharing with extended elders, while the modern app interface kept our personal correspondence seamless.'
  }
];

export const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#fdefff]/30 via-[#fff7fd] to-[#fdefff]/40 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 border-b border-[#e5d7de]/60 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold uppercase block">
            Sacred Unions & Verified Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1e1325] dark:text-white font-normal leading-tight">
            Harmonious Partnerships Born on Sangam Weaver
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#554359] dark:text-zinc-400 leading-relaxed">
            Real stories of accomplished professionals who found mutual intellectual equality, deep astrological sync, and lifelong devotion.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="group rounded-3xl bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 shadow-lovable hover:shadow-2xl hover:border-[#a3684d]/40 dark:hover:border-amber-400/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={story.photo}
                  alt={story.coupleNames}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Guna Match Badge Top Right */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-[#e5d7de] dark:border-zinc-700 text-[#8b4e38] dark:text-amber-300 text-xs font-mono font-bold shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#8b4e38] dark:text-amber-400" />
                  <span>{story.gunaScore}/36 Gunas</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-normal leading-tight">
                    {story.coupleNames}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" /> {story.weddingLocation}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" /> {story.weddingDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <p className="text-xs font-mono text-[#8b4e38] dark:text-amber-400/90 font-medium">
                    {story.professions}
                  </p>
                  
                  {/* Quote */}
                  <div className="relative pl-3 border-l-2 border-[#a3684d] dark:border-amber-400/60">
                    <p className="text-xs sm:text-[13px] text-[#1e1325] dark:text-zinc-200 italic leading-relaxed font-serif">
                      "{story.quote}"
                    </p>
                  </div>

                  <p className="text-xs text-[#554359] dark:text-zinc-400 leading-relaxed font-sans">
                    {story.storySnippet}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e5d7de]/70 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-[#6c5870] dark:text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Matrimonial Union
                  </span>
                  <span className="font-mono text-[10px]">#SangamStory</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-xs text-[#554359] dark:text-zinc-300 shadow-sm">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Over <strong>1,840+ verified couples</strong> have celebrated their unions through our platform</span>
          </div>
        </div>

      </div>
    </section>
  );
};
