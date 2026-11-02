# Sangam Weaver (VowWeaver) - Next-Gen Matrimonial Demo Web Application

A utility-centric matrimonial matchmaking workspace inspired by the modern, developer-grade aesthetic of Lovable apps (such as [URL Weaver Workshop](https://url-weaver-workshop.lovable.app/)).

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Product Highlights & Architecture

### 1. Header & Quick Workspace Bar
- **Brand Identity**: Sangam Weaver with live status indicators and real-time metric pills (`3,400+ Verified Profiles`, `98% Photo Privacy Shield`, `AI Kundali Matcher Active`).
- **Perspective Switcher**: Switch perspective seamlessly between **Rohan Sharma** (Male, 30, Senior Product Manager @ Stripe Bangalore seeking female brides) and **Dr. Pooja Malhotra** (Female, 28, Pediatrician @ Fortis Mumbai seeking male grooms).
- **Global Privacy Shield**: Instant toggle to mask/unmask all photos with a glassmorphism client-side blur and Aadhaar verification badge.
- **Shortlist & Sent Workspace Counter**: Badge counter reflecting persistent saved candidates.
- **Theme Switcher**: Dark slate/zinc mode with warm rose and indigo accents, or clean crisp light mode.

### 2. The "Match Criteria Weaver" (Developer Workshop Parameter Panel)
- **Interactive Match Sliders & Selectors**:
  - Dual Age Range Sliders (21 – 38 yrs)
  - Minimum Height Range Slider (4'10" – 6'2")
  - Religion & Community Filter (Hindu, Sikh, Jain, Interfaith, etc.)
  - Education & Career Tier (Tech / Engineering, Medicine / Healthcare, Civil Services, Finance & Banking, Creative Founders)
  - Diet & Lifestyle Habits (Pure Veg, Eggetarian, Non-Veg)
  - Settlement Preference (Bangalore, Mumbai/Pune, Delhi NCR, NRI USA/UK/Canada, Domestic Metros)
  - Minimum Kundali Guna Milan Slider (18 to 36 Gunas threshold)
  - Manglik constraint selector (Non-Manglik, Anshik, Any)
  - Government ID verification requirement toggle
- **Quick Presets**:
  - `💻 Tech in Bangalore`
  - `🇺🇸 NRI Match Tier`
  - `🩺 Doctors & Healthcare`
  - `✨ Kundali 28+ Gunas`
  - `🏛️ Civil Services`
  - `🥗 Pure Vegetarian`
- **Synthetic Query String & Export**: Generates a live URL-like string (`weaver://match?age=24-32&...`) with a one-click copy button.
- **Live Counter**: Real-time counter of matching candidates with an animated pulse dot.

### 3. Profile Discovery Cards (Rich Grid View)
- **Dynamic Match Score Badge**: High compatibility badge with animated status pulse.
- **Privacy-Safe Photo Display**: Simulates client-side photo blurring with a watermarked lock until mutual interest is confirmed or user unmasks the photo.
- **Verified Identity Badge**: Aadhaar / Passport authenticated indicators.
- **High-Value Snapshot**: Name, Age, Height, Current Designation, Organization, Annual Compensation bracket, Native Roots, and Education.
- **Ashtakoota Milan Highlight**: Overall Guna score (e.g. `32/36 Gunas`) and Manglik status.
- **Micro-Interactions**: Instant connection request button with celebration confetti, shortlist bookmarking heart, and full profile inspection.

### 4. In-Depth Profile Drawer / Slide-Over Modal
- **Tab 1: Overview & Bio**: Personal narrative, lifestyle habits (diet, smoking, drinking, fitness, pets), hobbies cloud, and partner expectations checklist.
- **Tab 2: Career & Education**: Verified degrees, universities, current employer, annual compensation, and relocation roadmap.
- **Tab 3: Family & Roots**: Family structure (Nuclear/Joint), family values (Liberal/Moderate/Traditional), parents' professions, siblings, native hometown, and affluence tier.
- **Tab 4: Horoscope & Kundali Weaver**: Comprehensive Ashtakoota 8-pillar breakdown table:
  - *Varna (1 pt)*, *Vashya (2 pts)*, *Tara (3 pts)*, *Yoni (4 pts)*, *Graha Maitri (5 pts)*, *Gana (6 pts)*, *Bhakoot (7 pts)*, *Nadi (8 pts)*.
  - Astrological coordinates: Nakshatra, Charan/Pada, Rashi, Gotra, birth time, and birth place.
- **Action CTAs**:
  - **Initiate Secure Chat**: Opens a simulated end-to-end encrypted chat dialog with pre-filled conversational icebreakers.
  - **Bio-Data PDF**: Opens an authentic, formatted traditional Indian Matrimonial Bio-Data document ready for one-click printing or PDF export.
  - **Send Connection Interest**: Instant state update and feedback toast.

### 5. Shortlisted & Sent Workspace Drawer
- Persistent view of all saved profiles and connection requests (`localStorage` synced).
- Sub-filters: `All`, `Shortlisted`, `Sent`.
- **Export to JSON** feature to export all saved candidate profiles.
- **Print Summary** quick action.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ Tech Stack
- **React 19**
- **TypeScript**
- **Vite 8**
- **Tailwind CSS 3.4** (with `@tailwindcss/forms` & `@tailwindcss/typography`)
- **Lucide React** (icons)
- **Canvas-Confetti** (micro-interaction celebrations)
- **Local Storage** persistence (zero external database / backend dependencies)
