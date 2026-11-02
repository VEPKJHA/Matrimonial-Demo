export type Religion = 'Hindu' | 'Sikh' | 'Jain' | 'Muslim' | 'Christian' | 'Interfaith' | 'Any';

export type CareerTier = 
  | 'Tech / Engineering'
  | 'Medicine / Healthcare'
  | 'Civil Services'
  | 'Finance & Banking'
  | 'Creative & Business'
  | 'Any';

export type DietType = 'Vegetarian' | 'Eggetarian' | 'Non-Veg' | 'Vegan' | 'Any';

export type LocationTier = 'All' | 'Bangalore' | 'Mumbai / Pune' | 'Delhi NCR' | 'Hyderabad' | 'NRI (USA/UK/Canada)' | 'Tier-1 Metro';

export type ManglikType = 'Any' | 'Non-Manglik' | 'Anshik Manglik' | 'Manglik';

export interface AshtakootaMetric {
  name: string;
  points: number;
  max: number;
  meaning: string;
  matched: boolean;
}

export interface KundaliDetails {
  gunaScore: number; // out of 36
  manglikStatus: 'Non-Manglik' | 'Anshik Manglik' | 'Manglik';
  nakshatra: string;
  rashi: string;
  gotra: string;
  charan: number;
  birthPlace: string;
  birthTime: string;
  ashtakoota: AshtakootaMetric[];
}

export interface FamilyDetails {
  type: 'Nuclear' | 'Joint';
  values: 'Liberal' | 'Moderate' | 'Traditional';
  fatherOccupation: string;
  motherOccupation: string;
  siblings: string;
  familyHometown: string;
  aboutFamily: string;
  affluenceTier: 'Upper Middle Class' | 'High Affluence' | 'Affluent Business';
}

export interface Profile {
  id: string;
  fullName: string;
  age: number;
  gender: 'Female' | 'Male';
  height: string;
  heightInInches: number;
  religion: 'Hindu' | 'Sikh' | 'Jain' | 'Muslim' | 'Christian' | 'Interfaith';
  community: string;
  motherTongue: string;
  location: {
    city: string;
    state: string;
    country: string;
    isNRI: boolean;
    settlementPref: string;
  };
  nativePlace: string;
  careerTier: 'Tech / Engineering' | 'Medicine / Healthcare' | 'Civil Services' | 'Finance & Banking' | 'Creative & Business';
  profession: string;
  employer: string;
  education: {
    degree: string;
    university: string;
    field: string;
  };
  incomeRange: string;
  incomeValueLakhs: number; // for sorting/filtering
  diet: 'Vegetarian' | 'Eggetarian' | 'Non-Veg' | 'Vegan';
  lifestyle: {
    smoking: 'Non-Smoker' | 'Occasional';
    drinking: 'Non-Drinker' | 'Social' | 'Regular';
    fitness: string;
    pets: string;
    interests: string[];
  };
  verified: {
    aadhaarOrPassport: boolean;
    incomeVerified: boolean;
    educationVerified: boolean;
  };
  photos: string[];
  bio: string;
  partnerExpectations: string[];
  family: FamilyDetails;
  kundali: KundaliDetails;
  tags: string[];
  baseMatchScore: number;
  badge?: string;
}

export interface CurrentUser {
  id: string;
  fullName: string;
  age: number;
  gender: 'Male' | 'Female';
  profession: string;
  location: string;
  seekingGender: 'Female' | 'Male';
  avatar: string;
  kundaliSummary: string;
}

export interface FilterCriteria {
  minAge: number;
  maxAge: number;
  minHeightInches: number;
  maxHeightInches: number;
  religion: Religion;
  careerTier: CareerTier;
  diet: DietType;
  locationPref: LocationTier;
  minGunas: number;
  manglikPref: ManglikType;
  verifiedOnly: boolean;
  searchQuery: string;
  sortBy: 'matchScore' | 'gunaScore' | 'ageAsc' | 'incomeDesc';
}

