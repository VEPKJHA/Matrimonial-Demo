import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShaadiQuickMatchCard } from './components/ShaadiQuickMatchCard';
import { BrowseCategoryCards } from './components/BrowseCategoryCards';
import { VipShaadiBannerCard } from './components/VipShaadiBannerCard';
import { PillarsSection } from './components/PillarsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { ShaadiLiveCard } from './components/ShaadiLiveCard';
import { MatchCriteriaWeaver } from './components/MatchCriteriaWeaver';
import { ProfileCard } from './components/ProfileCard';
import { ProfileDrawer } from './components/ProfileDrawer';
import { ShortlistDrawer } from './components/ShortlistDrawer';
import { ChatModal } from './components/ChatModal';
import { BioDataModal } from './components/BioDataModal';
import { MobileAppBannerCard } from './components/MobileAppBannerCard';
import { ConsultationBanner } from './components/ConsultationBanner';
import { ConsultationModal } from './components/ConsultationModal';
import { FooterSection } from './components/FooterSection';
import { ToastProvider, useToast } from './components/Toast';
import { MOCK_PROFILES, CURRENT_USERS } from './data/mockProfiles';
import type { Profile, CurrentUser, FilterCriteria, CareerTier, Religion, LocationTier } from './types/profile';
import { RotateCcw, Search } from 'lucide-react';

const DEFAULT_CRITERIA: FilterCriteria = {
  minAge: 23,
  maxAge: 33,
  minHeightInches: 62, // 5'2"
  maxHeightInches: 74,
  religion: 'Any',
  careerTier: 'Any',
  diet: 'Any',
  locationPref: 'All',
  minGunas: 24,
  manglikPref: 'Any',
  verifiedOnly: false,
  searchQuery: '',
  sortBy: 'matchScore',
};

const MainApp: React.FC = () => {
  // Current logged in perspective
  const [currentUser, setCurrentUser] = useState<CurrentUser>(CURRENT_USERS[0]);

  // Persistent shortlists and interest state
  const [shortlistIds, setShortlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sangam_shortlists');
      return saved ? JSON.parse(saved) : ['sangam-101', 'sangam-106'];
    } catch {
      return ['sangam-101', 'sangam-106'];
    }
  });

  const [interestSentIds, setInterestSentIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sangam_interests_sent');
      return saved ? JSON.parse(saved) : ['sangam-103'];
    } catch {
      return ['sangam-103'];
    }
  });

  // Global Photo Shield (Default ON to promote privacy-first approach)
  const [globalPhotoShield, setGlobalPhotoShield] = useState<boolean>(() => {
    const saved = localStorage.getItem('sangam_global_shield');
    return saved !== null ? saved === 'true' : true;
  });

  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('sangam_theme_dark');
    return saved !== null ? saved === 'true' : false;
  });

  // Filter criteria
  const [criteria, setCriteria] = useState<FilterCriteria>(DEFAULT_CRITERIA);

  // Modals & Drawers state
  const [inspectingProfile, setInspectingProfile] = useState<Profile | null>(null);
  const [isShortlistDrawerOpen, setIsShortlistDrawerOpen] = useState(false);
  const [chatProfile, setChatProfile] = useState<Profile | null>(null);
  const [bioDataProfile, setBioDataProfile] = useState<Profile | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const { addToast } = useToast();

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('sangam_shortlists', JSON.stringify(shortlistIds));
  }, [shortlistIds]);

  useEffect(() => {
    localStorage.setItem('sangam_interests_sent', JSON.stringify(interestSentIds));
  }, [interestSentIds]);

  useEffect(() => {
    localStorage.setItem('sangam_global_shield', String(globalPhotoShield));
  }, [globalPhotoShield]);

  useEffect(() => {
    localStorage.setItem('sangam_theme_dark', String(isDarkMode));
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  // Toggle Shortlist handler
  const handleToggleShortlist = (id: string) => {
    setShortlistIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Send Interest handler
  const handleSendInterest = (id: string) => {
    if (!interestSentIds.includes(id)) {
      setInterestSentIds((prev) => [...prev, id]);
    }
  };

  // Reset criteria
  const handleResetCriteria = () => {
    setCriteria({
      ...DEFAULT_CRITERIA,
      minAge: 21,
      maxAge: 36,
      minHeightInches: 58,
      minGunas: 18,
    });
    addToast('Criteria Reset', 'Restored default filter parameters', 'info');
  };

  // Toggle Global Photo Shield
  const handleToggleGlobalShield = () => {
    const nextVal = !globalPhotoShield;
    setGlobalPhotoShield(nextVal);
    addToast(
      nextVal ? 'Privacy Shield Enabled Globally' : 'Privacy Shield Deactivated',
      nextVal ? 'All candidate photos are masked until mutual interest' : 'Candidate photos are revealed',
      'shield'
    );
  };

  // Smooth scroll helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shaadi Quick Search Handler
  const handleShaadiQuickSearch = (params: {
    gender: 'Female' | 'Male';
    minAge: number;
    maxAge: number;
    religion: Religion;
    motherTongue?: string;
  }) => {
    // If searching gender differs from current seeking gender, switch perspective accordingly!
    if (currentUser.seekingGender !== params.gender) {
      const targetUser = CURRENT_USERS.find(u => u.seekingGender === params.gender) || currentUser;
      setCurrentUser(targetUser);
    }

    setCriteria(prev => ({
      ...prev,
      minAge: params.minAge,
      maxAge: params.maxAge,
      religion: params.religion,
      searchQuery: params.motherTongue || '',
    }));

    addToast(
      'Search Criteria Applied',
      `Showing verified ${params.gender === 'Female' ? 'brides' : 'grooms'} aged ${params.minAge}-${params.maxAge}`,
      'sparkle'
    );

    scrollToId('matches');
  };

  // Candidates filtering based on gender seeking and dynamic criteria
  const filteredProfiles = useMemo(() => {
    return MOCK_PROFILES.filter((profile) => {
      // 1. Gender check: Match seeking gender
      if (profile.gender !== currentUser.seekingGender) {
        return false;
      }

      // 2. Age Range
      if (profile.age < criteria.minAge || profile.age > criteria.maxAge) {
        return false;
      }

      // 3. Height
      if (profile.heightInInches < criteria.minHeightInches) {
        return false;
      }

      // 4. Religion
      if (criteria.religion !== 'Any' && profile.religion !== criteria.religion) {
        return false;
      }

      // 5. Career Tier
      if (criteria.careerTier !== 'Any' && profile.careerTier !== criteria.careerTier) {
        return false;
      }

      // 6. Diet
      if (criteria.diet !== 'Any' && profile.diet !== criteria.diet) {
        return false;
      }

      // 7. Location
      if (criteria.locationPref !== 'All') {
        if (criteria.locationPref === 'NRI (USA/UK/Canada)') {
          if (!profile.location.isNRI) return false;
        } else if (criteria.locationPref === 'Tier-1 Metro') {
          const metros = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Chennai'];
          if (!metros.includes(profile.location.city)) return false;
        } else if (!profile.location.city.toLowerCase().includes(criteria.locationPref.toLowerCase())) {
          return false;
        }
      }

      // 8. Min Kundali Guna Milan
      if (profile.kundali.gunaScore < criteria.minGunas) {
        return false;
      }

      // 9. Manglik Status
      if (criteria.manglikPref !== 'Any') {
        if (criteria.manglikPref === 'Non-Manglik' && profile.kundali.manglikStatus !== 'Non-Manglik') {
          return false;
        } else if (criteria.manglikPref === 'Anshik Manglik' && profile.kundali.manglikStatus !== 'Anshik Manglik') {
          return false;
        } else if (criteria.manglikPref === 'Manglik' && profile.kundali.manglikStatus !== 'Manglik') {
          return false;
        }
      }

      // 10. ID Verified
      if (criteria.verifiedOnly && !profile.verified.aadhaarOrPassport) {
        return false;
      }

      // 11. Search query
      if (criteria.searchQuery.trim()) {
        const q = criteria.searchQuery.toLowerCase().trim();
        const matchName = profile.fullName.toLowerCase().includes(q);
        const matchProfession = profile.profession.toLowerCase().includes(q);
        const matchEmployer = profile.employer.toLowerCase().includes(q);
        const matchCollege = profile.education.university.toLowerCase().includes(q);
        const matchCity = profile.location.city.toLowerCase().includes(q);
        const matchGotra = profile.kundali.gotra.toLowerCase().includes(q);
        const matchTongue = profile.motherTongue.toLowerCase().includes(q);
        const matchTags = profile.tags.some(t => t.toLowerCase().includes(q));

        if (!matchName && !matchProfession && !matchEmployer && !matchCollege && !matchCity && !matchGotra && !matchTongue && !matchTags) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (criteria.sortBy === 'gunaScore') {
        return b.kundali.gunaScore - a.kundali.gunaScore;
      }
      if (criteria.sortBy === 'ageAsc') {
        return a.age - b.age;
      }
      if (criteria.sortBy === 'incomeDesc') {
        return b.incomeValueLakhs - a.incomeValueLakhs;
      }
      // default: matchScore
      return b.baseMatchScore - a.baseMatchScore;
    });
  }, [currentUser, criteria]);

  // Profiles arrays for shortlisted & interest sent
  const shortlistedProfiles = useMemo(() => {
    return MOCK_PROFILES.filter(p => shortlistIds.includes(p.id));
  }, [shortlistIds]);

  const interestSentProfiles = useMemo(() => {
    return MOCK_PROFILES.filter(p => interestSentIds.includes(p.id));
  }, [interestSentIds]);

  const candidateGenderLabel = currentUser.seekingGender === 'Female' ? 'Brides' : 'Grooms';

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf8fa] text-[#1e1325] dark:bg-[#0c0d14] dark:text-zinc-100 transition-colors duration-300">
      
      {/* 1. Header & Navigation matching url-weaver-workshop */}
      <Header
        currentUser={currentUser}
        onSelectUser={(u) => {
          setCurrentUser(u);
          addToast('Perspective Switched', `Viewing platform as ${u.fullName}`, 'info');
        }}
        shortlistCount={shortlistIds.length}
        interestsCount={interestSentIds.length}
        onOpenShortlists={() => setIsShortlistDrawerOpen(true)}
        globalPhotoShield={globalPhotoShield}
        onToggleGlobalPhotoShield={handleToggleGlobalShield}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onBookConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection
        onExploreMatches={() => scrollToId('matches')}
        onOpenWeaver={() => scrollToId('weaver-workshop')}
        onBookConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* 3. Iconic Shaadi.com Quick-Match Bar Card */}
      <ShaadiQuickMatchCard
        onQuickSearch={handleShaadiQuickSearch}
      />

      {/* 4. Shaadi-Style "Browse Matches By Category" Banner Cards */}
      <BrowseCategoryCards
        onSelectCareer={(tier: CareerTier) => {
          setCriteria(prev => ({ ...prev, careerTier: tier }));
          addToast('Category Filter Applied', `Showing ${tier}`, 'sparkle');
          scrollToId('matches');
        }}
        onSelectLocation={(loc: LocationTier) => {
          setCriteria(prev => ({ ...prev, locationPref: loc }));
          addToast('Location Filter Applied', `Showing ${loc}`, 'sparkle');
          scrollToId('matches');
        }}
        onSelectReligion={(rel: Religion) => {
          setCriteria(prev => ({ ...prev, religion: rel }));
          addToast('Religion Filter Applied', `Showing ${rel}`, 'sparkle');
          scrollToId('matches');
        }}
        onSelectSearchTag={(tag: string) => {
          setCriteria(prev => ({ ...prev, searchQuery: tag }));
          addToast('Filter Applied', `Filtered by: ${tag}`, 'sparkle');
          scrollToId('matches');
        }}
      />

      {/* 5. VIP Shaadi / Elite Matchmaking Banner Card */}
      <VipShaadiBannerCard
        onInquireVip={() => setIsConsultationModalOpen(true)}
      />

      {/* 6. Two Foundational Pillars of Care */}
      <PillarsSection />

      {/* 7. Matchmaker Philosophy Section */}
      <PhilosophySection />

      {/* 8. Real Unions & Success Stories Showcase */}
      <SuccessStoriesSection />

      {/* 9. Shaadi Live: Curated Virtual Speed Meets Banner */}
      <ShaadiLiveCard />

      {/* 10. The "Match Criteria Weaver" (Workshop Control Bar) */}
      <MatchCriteriaWeaver
        criteria={criteria}
        onChange={setCriteria}
        onReset={handleResetCriteria}
        totalProfilesCount={MOCK_PROFILES.filter(p => p.gender === currentUser.seekingGender).length}
        filteredCount={filteredProfiles.length}
      />

      {/* 11. Candidate Profile Discovery Feed */}
      <main id="matches" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        {/* Section Heading & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#e5d7de]/70 dark:border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#8b4e38] dark:text-amber-400 font-semibold uppercase block mb-1">
              Curated Candidate Registry
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1e1325] dark:text-white font-normal flex items-center gap-3">
              <span>Verified Matching {candidateGenderLabel}</span>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#fdefff] dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 text-[#554359] dark:text-zinc-400">
                {filteredProfiles.length} Candidates
              </span>
            </h2>
            <p className="font-sans text-xs text-[#554359] dark:text-zinc-400 mt-1">
              Candidates evaluated against {currentUser.fullName}'s astrological coordinates, career tier, and values.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#554359] dark:text-zinc-400">
            <span>Photo Shield:</span>
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] ${
              globalPhotoShield 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/50' 
                : 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800'
            }`}>
              {globalPhotoShield ? 'Client-Side Masking ON' : 'Direct Photo Mode'}
            </span>
          </div>
        </div>

        {/* Candidate Grid */}
        {filteredProfiles.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white dark:bg-zinc-900/40 border border-[#e5d7de] dark:border-zinc-800 p-8 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#fdefff] dark:bg-zinc-900 border border-[#e5d7de] dark:border-zinc-800 flex items-center justify-center mx-auto text-[#8b4e38] dark:text-amber-400 shadow-inner">
              <Search className="w-8 h-8" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="font-serif text-xl text-[#1e1325] dark:text-white font-normal">No Matching Profiles for Current Criteria</h3>
              <p className="text-xs text-[#554359] dark:text-zinc-400 leading-relaxed font-sans">
                Try widening your age slider, lowering the minimum Kundali Guna threshold (currently ≥ {criteria.minGunas}), or clearing community/location filters.
              </p>
            </div>
            <button
              onClick={handleResetCriteria}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#415186] hover:bg-[#344479] text-white text-xs font-semibold shadow-md transition-all font-sans cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Criteria</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                isShortlisted={shortlistIds.includes(profile.id)}
                isInterestSent={interestSentIds.includes(profile.id)}
                globalPhotoShield={globalPhotoShield}
                onToggleShortlist={handleToggleShortlist}
                onSendInterest={handleSendInterest}
                onInspectProfile={(p) => setInspectingProfile(p)}
              />
            ))}
          </div>
        )}

      </main>

      {/* 12. Mobile App Download Banner Card */}
      <MobileAppBannerCard />

      {/* 13. Take the Next Step Consultation Banner */}
      <ConsultationBanner
        onOpenConsultationModal={() => setIsConsultationModalOpen(true)}
      />

      {/* 14. Lovable 4-Column Footer */}
      <FooterSection />

      {/* 15. In-Depth Profile Drawer / Slide-Over Modal */}
      <ProfileDrawer
        profile={inspectingProfile}
        isOpen={Boolean(inspectingProfile)}
        onClose={() => setInspectingProfile(null)}
        isShortlisted={inspectingProfile ? shortlistIds.includes(inspectingProfile.id) : false}
        isInterestSent={inspectingProfile ? interestSentIds.includes(inspectingProfile.id) : false}
        onToggleShortlist={handleToggleShortlist}
        onSendInterest={handleSendInterest}
        onOpenChat={(p) => {
          setInspectingProfile(null);
          setChatProfile(p);
        }}
        onOpenBioData={(p) => {
          setBioDataProfile(p);
        }}
        globalPhotoShield={globalPhotoShield}
      />

      {/* 16. Shortlisted & Sent Workspace Drawer */}
      <ShortlistDrawer
        isOpen={isShortlistDrawerOpen}
        onClose={() => setIsShortlistDrawerOpen(false)}
        shortlistedProfiles={shortlistedProfiles}
        interestSentProfiles={interestSentProfiles}
        onRemoveShortlist={handleToggleShortlist}
        onInspectProfile={(p) => {
          setIsShortlistDrawerOpen(false);
          setInspectingProfile(p);
        }}
        onSendInterest={handleSendInterest}
      />

      {/* 17. Simulated Secure Chat Modal */}
      <ChatModal
        profile={chatProfile}
        currentUser={currentUser}
        isOpen={Boolean(chatProfile)}
        onClose={() => setChatProfile(null)}
      />

      {/* 18. Printable Bio-Data Modal */}
      <BioDataModal
        profile={bioDataProfile}
        isOpen={Boolean(bioDataProfile)}
        onClose={() => setBioDataProfile(null)}
      />

      {/* 19. 1-on-1 Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <MainApp />
    </ToastProvider>
  );
};

export default App;
