import type { Profile, CurrentUser } from '../types/profile';

export const CURRENT_USERS: CurrentUser[] = [
  {
    id: 'user-rohan',
    fullName: 'Rohan Sharma',
    age: 30,
    gender: 'Male',
    profession: 'Senior Product Manager @ Stripe',
    location: 'Bangalore, KA',
    seekingGender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    kundaliSummary: 'Vashya: 2/2 • Gana: Deva • Manglik: No'
  },
  {
    id: 'user-pooja',
    fullName: 'Dr. Pooja Malhotra',
    age: 28,
    gender: 'Female',
    profession: 'Pediatric Specialist @ Fortis',
    location: 'Mumbai, MH',
    seekingGender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    kundaliSummary: 'Vashya: 2/2 • Gana: Manushya • Manglik: Anshik'
  }
];

export const MOCK_PROFILES: Profile[] = [
  {
    id: 'sangam-101',
    fullName: 'Aishwarya Sen',
    age: 27,
    gender: 'Female',
    height: `5'6"`,
    heightInInches: 66,
    religion: 'Hindu',
    community: 'Bengali Brahmin (Kulin)',
    motherTongue: 'Bengali / Hindi',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      isNRI: false,
      settlementPref: 'Open to Bangalore, Delhi NCR, or Relocation to EU/US'
    },
    nativePlace: 'Kolkata, West Bengal',
    careerTier: 'Tech / Engineering',
    profession: 'Senior UI/Frontend Architect',
    employer: 'Stripe India',
    education: {
      degree: 'B.Tech in Computer Science',
      university: 'BITS Pilani',
      field: 'Software Engineering & HCI'
    },
    incomeRange: '₹42 - 50 LPA',
    incomeValueLakhs: 46,
    diet: 'Eggetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Daily Yoga & Pilates enthusiast',
      pets: 'Dog lover (has a golden retriever)',
      interests: ['Generative AI', 'Indie Acoustic Music', 'Specialty Coffee', 'Himalayan Treks']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Passionate frontend engineer obsessed with typography, polished micro-interactions, and high-performance design systems. On weekends you will find me cupping single-origin pour-overs or planning mountain hikes. Looking for an intellectually curious, emotionally grounded partner with mutual respect for career ambitions and family ties.',
    partnerExpectations: [
      'Progressive mindset with high empathy and emotional intelligence',
      'Career-driven professional in Tech, Finance, or Design',
      'Believes in 50-50 partnership in life and household duties',
      'Appreciates travel, healthy lifestyle, and occasional culinary experiments'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Retired Professor of Physics (Jadavpur University)',
      motherOccupation: 'Senior Editor & Classical Vocalist',
      siblings: '1 Younger Brother (MS at TU Munich, Germany)',
      familyHometown: 'Salt Lake, Kolkata',
      aboutFamily: 'A close-knit, culturally enriched family that values intellectual depth, mutual respect, and modern progressive ethics.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 32,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Rohini (Padam 3)',
      rashi: 'Taurus (Vrishabha)',
      gotra: 'Sandilya',
      charan: 3,
      birthPlace: 'Kolkata, WB',
      birthTime: '06:45 AM, 14-Oct-1998',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual / ego compatibility', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual dominance & attraction', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny & health alignment', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical & intimate harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Psychological rapport & friendship', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Temperament and behavioral sync', matched: true },
        { name: 'Bhakoot', points: 4, max: 7, meaning: 'Emotional warmth & family growth', matched: false },
        { name: 'Nadi', points: 7, max: 8, meaning: 'Genetics, vitality, and progeny', matched: true }
      ]
    },
    tags: ['Tech Architect', 'Non-Manglik', 'Rohini Nakshatra', 'Bangalore Tech', 'High Guna (32/36)'],
    baseMatchScore: 96,
    badge: '⭐ 96% Match • Editor Choice'
  },
  {
    id: 'sangam-102',
    fullName: 'Dr. Ananya Sharma',
    age: 28,
    gender: 'Female',
    height: `5'5"`,
    heightInInches: 65,
    religion: 'Hindu',
    community: 'North Indian Brahmin (Gaur)',
    motherTongue: 'Hindi / English',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      isNRI: false,
      settlementPref: 'Settled in Mumbai; open to Pune or Delhi NCR'
    },
    nativePlace: 'Jaipur, Rajasthan',
    careerTier: 'Medicine / Healthcare',
    profession: 'Consultant Radiologist (MD)',
    employer: 'Apollo Hospitals & Diagnostics',
    education: {
      degree: 'MBBS, MD Radiodiagnosis',
      university: 'KEM Hospital & Seth GS Medical College',
      field: 'Interventional Radiology'
    },
    incomeRange: '₹38 - 48 LPA',
    incomeValueLakhs: 42,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Badminton on weekends, regular gym',
      pets: 'Comfortable with family pets',
      interests: ['Classical Kathak', 'Medical Research', 'Historical Fiction', 'Baking Sourdough']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Dedicated medical specialist with a love for diagnostic puzzles, artistic expression, and meaningful weekend conversations. Raised with rooted moral values and modern outlook. Seeking a well-educated, respectful partner who believes in mutual support, laughter through hectic workdays, and shared family milestones.',
    partnerExpectations: [
      'Doctor, Engineer, or Corporate leader with stable career path',
      'Pure vegetarian lifestyle preferred',
      'Values family unity, festivals, and cultural roots',
      'Warm sense of humor and emotional maturity'
    ],
    family: {
      type: 'Nuclear',
      values: 'Moderate',
      fatherOccupation: 'Executive Director (Retd), Bharat Petroleum',
      motherOccupation: 'Principal, Delhi Public School',
      siblings: '1 Elder Sister (Married, VP at ICICI Bank)',
      familyHometown: 'Jaipur / South Delhi',
      aboutFamily: 'Respected educated family with traditional cultural roots combined with progressive professional careers.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 30,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Uttara Phalguni',
      rashi: 'Virgo (Kanya)',
      gotra: 'Vatsa',
      charan: 2,
      birthPlace: 'Jaipur, RJ',
      birthTime: '11:15 AM, 22-Aug-1997',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual sync', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual compatibility', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 3, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Psychological bond', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Temperament sync', matched: true },
        { name: 'Bhakoot', points: 7, max: 7, meaning: 'Family prosperity', matched: true },
        { name: 'Nadi', points: 3, max: 8, meaning: 'Health & progeny', matched: false }
      ]
    },
    tags: ['MD Radiologist', 'Pure Veg', 'Non-Manglik', 'Mumbai / Jaipur', 'Verified Medical Reg.'],
    baseMatchScore: 93,
    badge: '🩺 Healthcare Star'
  },
  {
    id: 'sangam-103',
    fullName: 'Tanvi Agarwal',
    age: 28,
    gender: 'Female',
    height: `5'7"`,
    heightInInches: 67,
    religion: 'Hindu',
    community: 'Agarwal - Vaishya',
    motherTongue: 'Hindi / English',
    location: {
      city: 'Seattle',
      state: 'Washington',
      country: 'USA',
      isNRI: true,
      settlementPref: 'USA (H1B valid / I-140 approved); open to dual relocations'
    },
    nativePlace: 'Gurugram, Haryana',
    careerTier: 'Tech / Engineering',
    profession: 'Senior Machine Learning Scientist',
    employer: 'Google DeepMind / Cloud AI',
    education: {
      degree: 'MS in AI & Robotics',
      university: 'Carnegie Mellon University (CMU)',
      field: 'Large Language Models'
    },
    incomeRange: '$210,000 - $240,000 / yr',
    incomeValueLakhs: 180,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Bouldering, trail running around Pacific Northwest',
      pets: 'Loves dogs and cats',
      interests: ['Autonomous Agents', 'National Parks', 'Board Games', 'Tabla & Sitar']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'AI researcher by day, outdoor explorer on weekends. Completed my masters at CMU and currently working on next-gen multimodal reasoning models. Value humility, deep conversation over campfire tea, and grounded family connection across time zones. Looking for someone driven, self-aware, and ready for a joyful life partnership.',
    partnerExpectations: [
      'Based in the US or open to settling in North America / West Coast',
      'Tech, Finance, or Academic professional with intellectual curiosity',
      'Values vegetarian diet and clean living',
      'Enjoys outdoor adventures and road trips'
    ],
    family: {
      type: 'Nuclear',
      values: 'Moderate',
      fatherOccupation: 'Managing Director, Industrial Automation Corp',
      motherOccupation: 'Chartered Accountant & Financial Advisor',
      siblings: '1 Younger Sister (B.Tech IIT Delhi)',
      familyHometown: 'Gurugram / South Delhi',
      aboutFamily: 'Established entrepreneurial Agarwal family with modern global outlook and strong cultural roots.',
      affluenceTier: 'High Affluence'
    },
    kundali: {
      gunaScore: 33,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Swati (Padam 2)',
      rashi: 'Libra (Tula)',
      gotra: 'Garg',
      charan: 2,
      birthPlace: 'New Delhi',
      birthTime: '04:12 PM, 19-Nov-1997',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual sync', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual harmony', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Aura and longevity', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Attraction & bond', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Friendship & mutual vision', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Temperament sync', matched: true },
        { name: 'Bhakoot', points: 7, max: 7, meaning: 'Family happiness', matched: true },
        { name: 'Nadi', points: 5, max: 8, meaning: 'Genetics & vital force', matched: true }
      ]
    },
    tags: ['Google AI', 'CMU Alum', 'NRI Match (USA)', 'High Guna (33/36)', 'Non-Manglik'],
    baseMatchScore: 97,
    badge: '🇺🇸 Top NRI Match Tier'
  },
  {
    id: 'sangam-104',
    fullName: 'Meera Venkataraman',
    age: 29,
    gender: 'Female',
    height: `5'4"`,
    heightInInches: 64,
    religion: 'Hindu',
    community: 'Tamil Brahmin (Iyer)',
    motherTongue: 'Tamil / English',
    location: {
      city: 'Delhi NCR',
      state: 'New Delhi',
      country: 'India',
      isNRI: false,
      settlementPref: 'Delhi NCR / Central Government Cadre'
    },
    nativePlace: 'Chennai, Tamil Nadu',
    careerTier: 'Civil Services',
    profession: 'Deputy Secretary (IAS / Group A Services)',
    employer: 'Ministry of Finance / Govt of India',
    education: {
      degree: 'Master of Public Policy & BA Economics',
      university: 'St. Stephen’s College / London School of Economics',
      field: 'Economic Governance & Policy'
    },
    incomeRange: '₹24 - 30 LPA + Official Cadre',
    incomeValueLakhs: 26,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Carnatic vocal practice, brisk walking, swimming',
      pets: 'Admires birds and wildlife',
      interests: ['South Asian Geopolitics', 'Carnatic Music', 'Heritage Architecture', 'Bridge & Chess']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548142813-c348350df52b?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Civil servant dedicated to public infrastructure and fiscal policy. Deeply grounded in Carnatic classical traditions while maintaining a pragmatic, modern worldview. Looking for a partner of high integrity, intellectual camaraderie, and a shared appreciation for simple living, family warmth, and cultural arts.',
    partnerExpectations: [
      'Civil Servant, Lawyer, Consultant, or Tech leader based in Delhi NCR',
      'Respects public service commitments and transfers if applicable',
      'Values Carnatic or classical arts and vegetarian traditions',
      'Compassionate, emotionally secure, and communicative'
    ],
    family: {
      type: 'Nuclear',
      values: 'Traditional',
      fatherOccupation: 'Senior Advocate, Supreme Court of India',
      motherOccupation: 'Prof. of Sanskrit & Comparative Philosophy (Retd)',
      siblings: '1 Elder Brother (Orthopedic Surgeon, AIIMS New Delhi)',
      familyHometown: 'Mylapore, Chennai / Chanakyapuri, New Delhi',
      aboutFamily: 'Highly cultured and distinguished Iyer family with deep roots in legal scholarship and academic excellence.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 31,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Revati (Padam 4)',
      rashi: 'Pisces (Meena)',
      gotra: 'Bharadwaja',
      charan: 4,
      birthPlace: 'Chennai, TN',
      birthTime: '08:20 AM, 05-May-1996',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual alignment', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction resonance', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Vitality & fate', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Intimacy compatibility', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Intellectual sync', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana harmony', matched: true },
        { name: 'Bhakoot', points: 3, max: 7, meaning: 'Prosperity alignment', matched: false },
        { name: 'Nadi', points: 7, max: 8, meaning: 'Nadi match', matched: true }
      ]
    },
    tags: ['Civil Services (IAS)', 'LSE Alum', 'Carnatic Musician', 'Non-Manglik', 'Delhi NCR'],
    baseMatchScore: 91,
    badge: '🏛️ Civil Services Tier'
  },
  {
    id: 'sangam-105',
    fullName: 'Simran Kaur Bhasin',
    age: 27,
    gender: 'Female',
    height: `5'8"`,
    heightInInches: 68,
    religion: 'Sikh',
    community: 'Sikh Khatri',
    motherTongue: 'Punjabi / English / Hindi',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      isNRI: false,
      settlementPref: 'Mumbai, London, or Dubai'
    },
    nativePlace: 'Amritsar / Chandigarh',
    careerTier: 'Finance & Banking',
    profession: 'Vice President, Global M&A',
    employer: 'Goldman Sachs Investment Banking',
    education: {
      degree: 'MBA in Finance & Private Equity',
      university: 'London Business School (LBS) / SRCC',
      field: 'Global Capital Markets'
    },
    incomeRange: '₹55 - 65 LPA',
    incomeValueLakhs: 60,
    diet: 'Non-Veg',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Marathon trainer, HIIT, and tennis player',
      pets: 'Grew up with Labrador Retrievers',
      interests: ['Private Equity', 'Contemporary Art', 'Scuba Diving', 'Gourmet Gastronomy']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Finance professional with a global footprint across London and Mumbai. Love executing complex corporate transactions, and balance it with marathon running and exploring contemporary art galleries. Looking for an ambitious, modern-thinking partner who embraces life with optimism, ambition, and authentic family warmth.',
    partnerExpectations: [
      'Finance, Tech entrepreneur, or Corporate leader',
      'Tall, active lifestyle, enjoys sports and global travel',
      'Broadminded, progressive approach to gender equality',
      'Comfortable in multi-cultural environments'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Managing Partner, Bhasin Capital Holdings',
      motherOccupation: 'Philanthropist & Trustee, Educational Foundation',
      siblings: '1 Younger Brother (Founder of D2C Brand)',
      familyHometown: 'Chandigarh / Bandra, Mumbai',
      aboutFamily: 'Prominent business family in Punjab & Mumbai with a strong emphasis on philanthropy, high ethics, and international education.',
      affluenceTier: 'Affluent Business'
    },
    kundali: {
      gunaScore: 29,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Punarvasu',
      rashi: 'Gemini (Mithuna)',
      gotra: 'Bhasin / Kashyap',
      charan: 1,
      birthPlace: 'Chandigarh',
      birthTime: '01:45 PM, 08-Jan-1998',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual parity', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual pull', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 4, max: 5, meaning: 'Mindset alignment', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Temperament sync', matched: true },
        { name: 'Bhakoot', points: 4, max: 7, meaning: 'Prosperity index', matched: false },
        { name: 'Nadi', points: 5, max: 8, meaning: 'Genetic compatibility', matched: true }
      ]
    },
    tags: ['Goldman Sachs VP', 'LBS MBA', 'Global M&A', 'Sikh Khatri', 'Mumbai Metro'],
    baseMatchScore: 94,
    badge: '💎 Finance & High Affluence'
  },
  {
    id: 'sangam-106',
    fullName: 'Priya Nambiar',
    age: 26,
    gender: 'Female',
    height: `5'5"`,
    heightInInches: 65,
    religion: 'Hindu',
    community: 'Kerala Nair',
    motherTongue: 'Malayalam / English',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      isNRI: false,
      settlementPref: 'Bangalore or Sydney / Melbourne'
    },
    nativePlace: 'Kozhikode, Kerala',
    careerTier: 'Creative & Business',
    profession: 'Lead Product Experience Designer',
    employer: 'Atlassian',
    education: {
      degree: 'Master of Design (Interaction Design)',
      university: 'National Institute of Design (NID) Ahmedabad',
      field: 'Human Computer Interaction'
    },
    incomeRange: '₹36 - 44 LPA',
    incomeValueLakhs: 40,
    diet: 'Eggetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Contemporary dance, pottery, weekend cycling',
      pets: 'Adopted an indie rescue pup named Chutney',
      interests: ['Ceramics & Pottery', 'Scandinavian Interior Design', 'Sci-Fi Novellas', 'Indie Film Festivals']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Product designer shaping collaborative developer tools. I find joy in simple aesthetics, thoughtful conversations, cozy weekend breakfasts, and making ceramics. Looking for someone grounded, kindhearted, and curious who appreciates creativity, empathy, and meaningful everyday rituals.',
    partnerExpectations: [
      'Product Managers, Engineers, or Creative Directors',
      'Emotionally communicative and pet-friendly',
      'Enjoys home aesthetics, music, and quiet getaways',
      'Values mutual equality and independent spaces'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Chief Architect & Town Planner (Retd)',
      motherOccupation: 'Landscape Artist & Botanist',
      siblings: '1 Younger Brother (Sound Designer in Vancouver)',
      familyHometown: 'Kozhikode / Ernakulam',
      aboutFamily: 'A warm, artistic family that encourages personal autonomy, open communication, and lifelong creative learning.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 34,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Hastam',
      rashi: 'Virgo (Kanya)',
      gotra: 'Nambiar / Vishwamitra',
      charan: 3,
      birthPlace: 'Kozhikode, KL',
      birthTime: '07:15 AM, 12-Feb-1999',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual alignment', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Dominance balance', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Harmonious relationship', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Psychological bond', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 7, max: 7, meaning: 'Family happiness', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Physiological balance', matched: true }
      ]
    },
    tags: ['Atlassian Lead', 'NID Ahmedabad', 'Pet Friendly', 'High Guna (34/36)', 'Indranagar BLR'],
    baseMatchScore: 98,
    badge: '🏆 Highest Kundali Match (34/36)'
  },
  {
    id: 'sangam-107',
    fullName: 'Dr. Radhika Iyer',
    age: 30,
    gender: 'Female',
    height: `5'6"`,
    heightInInches: 66,
    religion: 'Hindu',
    community: 'Tamil Brahmin (Vadama)',
    motherTongue: 'Tamil / English',
    location: {
      city: 'Boston',
      state: 'Massachusetts',
      country: 'USA',
      isNRI: true,
      settlementPref: 'USA East Coast (Boston / NYC) or Chennai'
    },
    nativePlace: 'Chennai / Coimbatore',
    careerTier: 'Medicine / Healthcare',
    profession: 'Cardiovascular Fellow & Researcher',
    employer: 'Harvard Medical School / Mass General',
    education: {
      degree: 'MD, Post-Doc Cardiology Fellow',
      university: 'Johns Hopkins / Harvard Medical School',
      field: 'Interventional Cardiology'
    },
    incomeRange: '$195,000 - $220,000 / yr',
    incomeValueLakhs: 170,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Swimming, marathon rowing, morning pranayama',
      pets: 'Loves plants and domestic cats',
      interests: ['Translational Cardiology', 'Violin Playing', 'Museum Tours', 'Sourdough Baking']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1594824813511-6677955519db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Physician-scientist with a deep passion for clinical medicine and cardiovascular innovation. Balancing intensive clinical fellowship with music, quiet Sunday mornings, and connection with family in India. Seeking an intellectually equal, compassionate partner who values shared intellectual growth, kindness, and deep spiritual rootedness.',
    partnerExpectations: [
      'Doctor, Scientist, or Tech Leader residing in USA or willing to relocate',
      'Vegetarian and teetotaler',
      'Warm family orientation with mutual respect for demanding work schedules',
      'Cultured, thoughtful, and communicative'
    ],
    family: {
      type: 'Nuclear',
      values: 'Moderate',
      fatherOccupation: 'Professor of Chemical Engineering (IIT Madras)',
      motherOccupation: 'Senior Biochemist & Sanskrit Scholar',
      siblings: 'None (Single Child)',
      familyHometown: 'Besant Nagar, Chennai',
      aboutFamily: 'A scholarly, deeply respected academic family that prizes intellectual accomplishment, ethical living, and Carnatic heritage.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 31,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Anuradha',
      rashi: 'Scorpio (Vrishchika)',
      gotra: 'Kashyapa',
      charan: 2,
      birthPlace: 'Chennai, TN',
      birthTime: '05:30 AM, 16-Sep-1995',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Ego sync', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction bond', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Vital energy', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Compatibility', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Friendship', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 3, max: 7, meaning: 'Family alignment', matched: false },
        { name: 'Nadi', points: 7, max: 8, meaning: 'Nadi health', matched: true }
      ]
    },
    tags: ['Harvard Fellow', 'Cardiology MD', 'Boston NRI', 'Pure Vegetarian', 'Non-Manglik'],
    baseMatchScore: 92,
    badge: '🎓 Ivy / Harvard Fellow'
  },
  {
    id: 'sangam-108',
    fullName: 'Rituja Deshmukh',
    age: 26,
    gender: 'Female',
    height: `5'4"`,
    heightInInches: 64,
    religion: 'Hindu',
    community: 'Marathi Maratha / Deshastha',
    motherTongue: 'Marathi / Hindi / English',
    location: {
      city: 'Mumbai / Pune',
      state: 'Maharashtra',
      country: 'India',
      isNRI: false,
      settlementPref: 'Pune or Mumbai'
    },
    nativePlace: 'Pune, Maharashtra',
    careerTier: 'Creative & Business',
    profession: 'Clinical Child Psychologist & Author',
    employer: 'MindSpace Clinic & Self-Employed Author',
    education: {
      degree: 'M.Sc. Clinical Psychology',
      university: 'Savitribai Phule Pune University / TISS',
      field: 'Developmental Psychology & Child Therapy'
    },
    incomeRange: '₹22 - 28 LPA',
    incomeValueLakhs: 25,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Ashtanga Yoga practitioner, hiking the Western Ghats',
      pets: 'Loves animals and nature',
      interests: ['Psychology Podcasts', 'Marathi Literature', 'Sahyadri Trekking', 'Organic Gardening']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Empathetic counselor working with children and young adults. I cherish quiet moments, honest conversations, reading by the balcony, and morning temple bells. Looking for an emotionally mature, kind partner who believes in building a harmonious home where both partners find sanctuary.',
    partnerExpectations: [
      'Professional working in Pune, Mumbai, or hybrid remote',
      'Warm, thoughtful, and communicative temperament',
      'Respects traditional values while embracing modern independence',
      'Vegetarian preferences preferred'
    ],
    family: {
      type: 'Nuclear',
      values: 'Traditional',
      fatherOccupation: 'Chief Civil Engineer (Retd, Maharashtra PWD)',
      motherOccupation: 'High School Headmistress (Retd)',
      siblings: '1 Elder Brother (Tech Lead at TCS Pune)',
      familyHometown: 'Kothrud, Pune',
      aboutFamily: 'A grounded, cultured Maharashtrian family upholding integrity, simplicity, and lifelong respect for education.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 28,
      manglikStatus: 'Anshik Manglik',
      nakshatra: 'Moola (Padam 1)',
      rashi: 'Sagittarius (Dhanu)',
      gotra: 'Kashyap',
      charan: 1,
      birthPlace: 'Pune, MH',
      birthTime: '03:40 PM, 18-Nov-1999',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual match', matched: true },
        { name: 'Vashya', points: 1, max: 2, meaning: 'Mutual compatibility', matched: false },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 3, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Mindset balance', matched: true },
        { name: 'Gana', points: 3, max: 6, meaning: 'Temperament sync', matched: false },
        { name: 'Bhakoot', points: 6, max: 7, meaning: 'Prosperity & love', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Vital energy', matched: true }
      ]
    },
    tags: ['Clinical Psychologist', 'Pune Resident', 'Anshik Manglik', 'TISS Alum', 'Yoga Practitioner'],
    baseMatchScore: 89,
    badge: '🌿 Wellness & Mindfulness'
  },
  {
    id: 'sangam-109',
    fullName: 'Sanjana Roy',
    age: 29,
    gender: 'Female',
    height: `5'7"`,
    heightInInches: 67,
    religion: 'Hindu',
    community: 'Bengali Kayastha',
    motherTongue: 'Bengali / Hindi / English',
    location: {
      city: 'Delhi NCR',
      state: 'Haryana',
      country: 'India',
      isNRI: false,
      settlementPref: 'Gurgaon, Delhi NCR, or Singapore'
    },
    nativePlace: 'New Delhi / Kolkata',
    careerTier: 'Creative & Business',
    profession: 'Associate Partner & Strategy Lead',
    employer: 'McKinsey & Company',
    education: {
      degree: 'MBA (Dean’s Honor List)',
      university: 'Indian School of Business (ISB) / SRCC',
      field: 'Corporate Strategy & Transformation'
    },
    incomeRange: '₹58 - 70 LPA',
    incomeValueLakhs: 64,
    diet: 'Non-Veg',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Crossfit 4x a week, certified scuba diver',
      pets: 'Loves dogs and horses',
      interests: ['Clean Energy Transition', 'Modern Art', 'Spanish Guitar', 'Skiing in Switzerland']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Strategy consultant helping leading enterprises transition towards sustainability and digital scale. I love high energy brainstorming as much as quiet book sessions and mountain skiing. Looking for an authentic partner who thinks big, supports ambition unconditionally, and shares laughter in every life chapter.',
    partnerExpectations: [
      'Top-tier Consultant, Tech VP, Founder, or PE Investor',
      'Equal partnership ethos with respect for high mobility',
      'Intellectually sharp, open-minded, and active traveler',
      'Emotionally steady with strong family bonds'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Senior Partner, National Law Firm',
      motherOccupation: 'Author & Non-Profit Director',
      siblings: '1 Younger Brother (Investment Analyst in Singapore)',
      familyHometown: 'Greater Kailash, New Delhi',
      aboutFamily: 'A globally minded, distinguished family rooted in education, law, and progressive social philanthropy.',
      affluenceTier: 'High Affluence'
    },
    kundali: {
      gunaScore: 30,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Chitra (Padam 2)',
      rashi: 'Virgo (Kanya)',
      gotra: 'Kashyap',
      charan: 2,
      birthPlace: 'New Delhi',
      birthTime: '09:50 AM, 11-Jan-1997',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual sync', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction bond', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Intellectual parity', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva/Rakshasa balance', matched: true },
        { name: 'Bhakoot', points: 2, max: 7, meaning: 'Prosperity alignment', matched: false },
        { name: 'Nadi', points: 7, max: 8, meaning: 'Health & progeny', matched: true }
      ]
    },
    tags: ['McKinsey Partner', 'ISB Alum', 'Gurgaon Metro', 'Non-Manglik', 'Global Strategy'],
    baseMatchScore: 95,
    badge: '💼 Strategy & Consulting Leader'
  },
  {
    id: 'sangam-110',
    fullName: 'Natasha Verma',
    age: 28,
    gender: 'Female',
    height: `5'6"`,
    heightInInches: 66,
    religion: 'Hindu',
    community: 'Kayastha / North Indian',
    motherTongue: 'Hindi / English',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      isNRI: false,
      settlementPref: 'Bangalore / Relocation open'
    },
    nativePlace: 'Lucknow, Uttar Pradesh',
    careerTier: 'Tech / Engineering',
    profession: 'Aerospace Systems Engineer',
    employer: 'NewSpace India / Space Propulsion',
    education: {
      degree: 'B.Tech & M.Tech Aerospace',
      university: 'IIT Kanpur',
      field: 'Orbital Mechanics & Propulsion'
    },
    incomeRange: '₹34 - 42 LPA',
    incomeValueLakhs: 38,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Astronomy sky-watching, badminton, trekking',
      pets: 'Passionate about wildlife preservation',
      interests: ['Astrophotography', 'Deep Tech', 'Ukulele Playing', 'Board Games']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Aerospace engineer working on satellite launch propulsion systems. Passionate about space exploration, celestial photography, and warm tea on rainy Bangalore evenings. Seeking a grounded, intelligent partner who loves asking curious questions about the world and sharing life journey together.',
    partnerExpectations: [
      'IIT / BITS / Tier-1 Engineer, Data Scientist, or Researcher',
      'Values curiosity, humble kindness, and shared home life',
      'Vegetarian and healthy habits',
      'Supportive of intensive technical missions'
    ],
    family: {
      type: 'Nuclear',
      values: 'Moderate',
      fatherOccupation: 'Executive Director, HAL (Retd)',
      motherOccupation: 'Botanist & College Lecturer',
      siblings: '1 Elder Sister (Architect in Toronto)',
      familyHometown: 'Hazratganj, Lucknow',
      aboutFamily: 'Cultured UP Kayastha family with high academic standards and deep cultural roots in music and literature.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 31,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Uttarabhadra',
      rashi: 'Pisces (Meena)',
      gotra: 'Kashyap',
      charan: 3,
      birthPlace: 'Lucknow, UP',
      birthTime: '06:10 PM, 24-Dec-1997',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual match', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Mindset balance', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 4, max: 7, meaning: 'Prosperity index', matched: false },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Vital energy', matched: true }
      ]
    },
    tags: ['IIT Kanpur Alum', 'Aerospace Engineer', 'Bangalore Resident', 'Non-Manglik', 'Space Tech'],
    baseMatchScore: 94,
    badge: '🚀 Deep Tech & Aerospace'
  },
  {
    id: 'sangam-111',
    fullName: 'Avani Parekh',
    age: 27,
    gender: 'Female',
    height: `5'5"`,
    heightInInches: 65,
    religion: 'Jain',
    community: 'Jain Shwetambar',
    motherTongue: 'Gujarati / Hindi / English',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      isNRI: false,
      settlementPref: 'Mumbai or Ahmedabad'
    },
    nativePlace: 'Ahmedabad, Gujarat',
    careerTier: 'Creative & Business',
    profession: 'Founder & Creative Director',
    employer: 'Studio Parekh Ethical Jewelry',
    education: {
      degree: 'B.Des & Luxury Brand Management',
      university: 'NIFT Mumbai / Polimoda Florence',
      field: 'Sustainable Luxury & Gemology'
    },
    incomeRange: '₹45 - 55 LPA',
    incomeValueLakhs: 50,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Non-Drinker',
      fitness: 'Reformer Pilates, swimming',
      pets: 'Compassionate animal welfare supporter',
      interests: ['Gemology', 'Contemporary Jewelry', 'Jain Philosophy', 'Architectural Restoration']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Founder of an ethical lab-grown diamond and handcrafted jewelry studio. Raised with Jain ethical traditions and modern aesthetic finesse. Love bringing family together for festive dinners, visiting artisan workshops, and exploring Italian towns. Looking for a warm, enterprising partner with strong values and mutual respect.',
    partnerExpectations: [
      'Enterprising professional or entrepreneur in Mumbai / Gujarat',
      'Jain or Vaishnav vegetarian preferred',
      'Values family unity, integrity, and warmth',
      'Appreciates creative entrepreneurship'
    ],
    family: {
      type: 'Joint',
      values: 'Traditional',
      fatherOccupation: 'Managing Director, Diamond Trading Co',
      motherOccupation: 'Homemaker & Community Trustee',
      siblings: '2 Elder Brothers (Partners in Family Business)',
      familyHometown: 'Paldi, Ahmedabad / Marine Lines, Mumbai',
      aboutFamily: 'A well-established and deeply philanthropic Jain family with multi-generational business heritage in diamond and textiles.',
      affluenceTier: 'Affluent Business'
    },
    kundali: {
      gunaScore: 32,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Pushya',
      rashi: 'Cancer (Karka)',
      gotra: 'Parekh / Gautama',
      charan: 2,
      birthPlace: 'Ahmedabad, GJ',
      birthTime: '10:05 AM, 02-Mar-1999',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual alignment', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual attraction', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Longevity & destiny', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Psychological bond', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 5, max: 7, meaning: 'Prosperity alignment', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Vital energy', matched: true }
      ]
    },
    tags: ['Jain Shwetambar', 'Luxury Founder', 'NIFT Mumbai', 'Pure Veg', 'High Guna (32/36)'],
    baseMatchScore: 93,
    badge: '✨ Enterprising Founder'
  },
  {
    id: 'sangam-112',
    fullName: 'Diya Bhattacharya',
    age: 26,
    gender: 'Female',
    height: `5'3"`,
    heightInInches: 63,
    religion: 'Hindu',
    community: 'Bengali Brahmin',
    motherTongue: 'Bengali / Hindi / English',
    location: {
      city: 'Delhi NCR',
      state: 'New Delhi',
      country: 'India',
      isNRI: false,
      settlementPref: 'Delhi NCR, Kolkata, or European Metro'
    },
    nativePlace: 'Kolkata / Chittaranjan Park, Delhi',
    careerTier: 'Creative & Business',
    profession: 'Conservation Architect & Urban Planner',
    employer: 'INTACH & Urban Heritage Consultancy',
    education: {
      degree: 'Master in Architectural Conservation',
      university: 'School of Planning and Architecture (SPA Delhi)',
      field: 'Heritage Preservation & Sustainable Urbanism'
    },
    incomeRange: '₹20 - 26 LPA',
    incomeValueLakhs: 23,
    diet: 'Non-Veg',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Heritage walks, cycling, Kathak dance',
      pets: 'Proud parent of 2 rescue cats',
      interests: ['Historic Monuments', 'Watercolor Sketching', 'Documentary Cinema', 'Old Delhi Food Trails']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Architect working on safeguarding India’s majestic historic forts and urban heritage. Passionate about art history, sketching quiet courtyards, and weekend culinary explorations. Looking for someone with warmth, intellectual banter, emotional depth, and a collaborative spirit for life.',
    partnerExpectations: [
      'Architect, Planner, Engineer, or Writer / Academician',
      'Artistic sensitivity and respect for cultural heritage',
      'Values warmth, honest communication, and equal partnership',
      'Pet lover is a big plus'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Senior Geologist, Geological Survey of India (Retd)',
      motherOccupation: 'Sitarist & Cultural Archivist',
      siblings: '1 Younger Brother (PhD Scholar in Physics, Cambridge)',
      familyHometown: 'Chittaranjan Park, New Delhi',
      aboutFamily: 'A warm, liberal Bengali home renowned for Sunday musical gatherings, expansive library, and unconditional warmth.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 30,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Magha',
      rashi: 'Leo (Simha)',
      gotra: 'Shandilya',
      charan: 1,
      birthPlace: 'Kolkata, WB',
      birthTime: '02:30 PM, 14-Aug-1999',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual match', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Mutual attraction', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Vital destiny', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Intellectual parity', matched: true },
        { name: 'Gana', points: 4, max: 6, meaning: 'Temperament sync', matched: true },
        { name: 'Bhakoot', points: 5, max: 7, meaning: 'Family prosperity', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Vital energy', matched: true }
      ]
    },
    tags: ['SPA Delhi Alum', 'Conservation Architect', 'Heritage Lover', 'CR Park Delhi', 'Non-Manglik'],
    baseMatchScore: 90,
    badge: '🏛️ Heritage & Architecture'
  },
  {
    id: 'sangam-201',
    fullName: 'Rohan Sharma',
    age: 30,
    gender: 'Male',
    height: `5'11"`,
    heightInInches: 71,
    religion: 'Hindu',
    community: 'North Indian Brahmin (Saraswat)',
    motherTongue: 'Hindi / English',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      isNRI: false,
      settlementPref: 'Bangalore / Open to Global'
    },
    nativePlace: 'Dehradun / Delhi NCR',
    careerTier: 'Tech / Engineering',
    profession: 'Senior Product Manager',
    employer: 'Stripe India',
    education: {
      degree: 'B.Tech (IIT Delhi) & MBA',
      university: 'IIT Delhi / IIM Ahmedabad',
      field: 'Computer Engineering & FinTech'
    },
    incomeRange: '₹55 - 65 LPA',
    incomeValueLakhs: 60,
    diet: 'Vegetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Half marathon runner, morning gym',
      pets: 'Pet friendly',
      interests: ['FinTech Architecture', 'Guitar', 'Trail Running', 'Specialty Coffee']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Product leader focused on modern payment rails and global commerce. Believer in thoughtful conversations, mutual ambition, weekend runs, and exploring new cuisines. Looking for a progressive, empathetic partner with her own dreams and strong family values.',
    partnerExpectations: [
      'Educated professional in Tech, Medicine, or Creative industries',
      'Vegetarian or flexitarian, health conscious',
      'Open-minded, communicative, and warmhearted'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Senior Scientist, DRDO (Retd)',
      motherOccupation: 'Associate Professor of English Literature',
      siblings: '1 Younger Sister (Product Designer in London)',
      familyHometown: 'Dehradun, Uttarakhand',
      aboutFamily: 'A warm, highly educated and close-knit family valuing intellectual integrity, kindness, and modern perspectives.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 33,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Rohini (Padam 2)',
      rashi: 'Taurus (Vrishabha)',
      gotra: 'Vatsa',
      charan: 2,
      birthPlace: 'Dehradun, UK',
      birthTime: '07:30 AM, 15-Sep-1995',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual alignment', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction bond', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Friendship', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana', matched: true },
        { name: 'Bhakoot', points: 6, max: 7, meaning: 'Family happiness', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Genetics match', matched: true }
      ]
    },
    tags: ['IIT Delhi / IIMA', 'Stripe PM', 'Bangalore Resident', 'Non-Manglik', 'High Guna (33/36)'],
    baseMatchScore: 97,
    badge: '⭐ Prime Tech Profile'
  },
  {
    id: 'sangam-202',
    fullName: 'Dr. Vikramaditya Rathore',
    age: 31,
    gender: 'Male',
    height: `6'1"`,
    heightInInches: 73,
    religion: 'Hindu',
    community: 'Rajput',
    motherTongue: 'Hindi / English',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      isNRI: false,
      settlementPref: 'Mumbai or Jaipur'
    },
    nativePlace: 'Jaipur / Jodhpur, Rajasthan',
    careerTier: 'Medicine / Healthcare',
    profession: 'Consultant Orthopedic & Arthroscopy Surgeon (MS, MCh)',
    employer: 'Fortis Memorial & Sports Medicine Institute',
    education: {
      degree: 'MBBS, MS Orthopedics, Fellowship UK',
      university: 'KEM Mumbai / Royal College of Surgeons (RCS)',
      field: 'Sports Medicine & Robotic Knee Replacement'
    },
    incomeRange: '₹48 - 60 LPA',
    incomeValueLakhs: 54,
    diet: 'Eggetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Equestrian polo, swimming, strength training',
      pets: 'Grew up with German Shepherds',
      interests: ['Robotic Surgery', 'Polo & Tennis', 'Heritage Palaces', 'Classic Vinyl']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Orthopedic surgeon passionate about restoring mobility and active lifestyle to patients. Grounded in Rajasthani cultural heritage with a cosmopolitan outlook. Enjoy weekend horse riding, vinyl records, and lively dinners with close friends and family. Looking for a compassionate, ambitious life partner.',
    partnerExpectations: [
      'Doctor, Corporate professional, or Creative Leader',
      'Cultured family background with modern outlook',
      'Tall, active lifestyle, enjoys travel',
      'Mutual understanding for demanding professional schedules'
    ],
    family: {
      type: 'Joint',
      values: 'Traditional',
      fatherOccupation: 'Brigadier, Indian Army (Retd)',
      motherOccupation: 'Heritage Homestay Entrepreneur',
      siblings: '1 Elder Brother (Commercial Airline Captain)',
      familyHometown: 'Jaipur, Rajasthan',
      aboutFamily: 'A storied Rajput military family known for high valor, hospitality, integrity, and warmth.',
      affluenceTier: 'High Affluence'
    },
    kundali: {
      gunaScore: 32,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Uttara Ashadha',
      rashi: 'Capricorn (Makara)',
      gotra: 'Kashyap',
      charan: 3,
      birthPlace: 'Jaipur, RJ',
      birthTime: '08:45 AM, 12-Jul-1994',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual alignment', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction bond', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Longevity match', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Physical harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Mindset balance', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 5, max: 7, meaning: 'Family happiness', matched: true },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Vital energy', matched: true }
      ]
    },
    tags: ['MS Orthopedics', 'RCS Fellow', 'Sports Surgeon', 'Non-Manglik', 'Mumbai / Jaipur'],
    baseMatchScore: 94,
    badge: '🩺 Super Specialist'
  },
  {
    id: 'sangam-203',
    fullName: 'Siddharth Nair',
    age: 29,
    gender: 'Male',
    height: `6'0"`,
    heightInInches: 72,
    religion: 'Hindu',
    community: 'Kerala Nair',
    motherTongue: 'Malayalam / English / Hindi',
    location: {
      city: 'NRI (USA/UK/Canada)',
      state: 'Washington',
      country: 'USA',
      isNRI: true,
      settlementPref: 'Seattle, WA or San Francisco Bay Area'
    },
    nativePlace: 'Thiruvananthapuram, Kerala',
    careerTier: 'Tech / Engineering',
    profession: 'Principal Cloud Distributed Systems Architect',
    employer: 'Amazon Web Services (AWS)',
    education: {
      degree: 'MS in Distributed Systems',
      university: 'University of Washington / NIT Calicut',
      field: 'Cloud Infrastructure & High Availability'
    },
    incomeRange: '$225,000 - $260,000 / yr',
    incomeValueLakhs: 195,
    diet: 'Eggetarian',
    lifestyle: {
      smoking: 'Non-Smoker',
      drinking: 'Social',
      fitness: 'Mountaineering, skiing in Cascade ranges',
      pets: 'Loves dogs',
      interests: ['Distributed Systems', 'Indie Rock', 'Backpacking Cascades', 'Specialty Roasting']
    },
    verified: {
      aadhaarOrPassport: true,
      incomeVerified: true,
      educationVerified: true
    },
    photos: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80'
    ],
    bio: 'Systems engineer building planet-scale cloud infrastructure in Seattle. Love alpine backpacking, exploring micro-roasteries, and acoustic jam sessions. Seeking an adventurous, thoughtful life partner who values authentic communication, personal growth, and creating a warm home together.',
    partnerExpectations: [
      'Tech, Finance, or Medical professional in USA or open to relocating',
      'Active lifestyle with passion for outdoors or travel',
      'Emotionally grounded and family-conscious'
    ],
    family: {
      type: 'Nuclear',
      values: 'Liberal',
      fatherOccupation: 'Executive Director, ISRO VSSC (Retd)',
      motherOccupation: 'Senior Botanist & Environmentalist',
      siblings: '1 Younger Sister (Doctor in Melbourne)',
      familyHometown: 'Kowdiar, Thiruvananthapuram',
      aboutFamily: 'A modern, science-oriented Malayali family that values intellectual curiosity, simple living, and global horizons.',
      affluenceTier: 'Upper Middle Class'
    },
    kundali: {
      gunaScore: 31,
      manglikStatus: 'Non-Manglik',
      nakshatra: 'Hastam',
      rashi: 'Virgo (Kanya)',
      gotra: 'Vishwamitra',
      charan: 2,
      birthPlace: 'Trivandrum, KL',
      birthTime: '10:15 AM, 18-Feb-1996',
      ashtakoota: [
        { name: 'Varna', points: 1, max: 1, meaning: 'Spiritual sync', matched: true },
        { name: 'Vashya', points: 2, max: 2, meaning: 'Attraction bond', matched: true },
        { name: 'Tara', points: 3, max: 3, meaning: 'Destiny resonance', matched: true },
        { name: 'Yoni', points: 4, max: 4, meaning: 'Intimacy harmony', matched: true },
        { name: 'Graha Maitri', points: 5, max: 5, meaning: 'Intellectual match', matched: true },
        { name: 'Gana', points: 6, max: 6, meaning: 'Deva Gana match', matched: true },
        { name: 'Bhakoot', points: 4, max: 7, meaning: 'Prosperity alignment', matched: false },
        { name: 'Nadi', points: 6, max: 8, meaning: 'Genetics match', matched: true }
      ]
    },
    tags: ['AWS Principal', 'Seattle NRI', 'NIT Calicut', 'Non-Manglik', 'Outdoor Hiker'],
    baseMatchScore: 95,
    badge: '🇺🇸 Principal Cloud Architect'
  }
];
