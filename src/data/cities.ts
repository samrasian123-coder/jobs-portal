export interface SaudiCity {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  region: string;
  landmark: string;
  description: string;
  activeJobsCount: number;
  featuredSectors: string[];
  badgeColor: string;
}

export const SAUDI_CITIES: SaudiCity[] = [
  {
    id: 'city-riyadh',
    name: 'Riyadh',
    arabicName: 'الرياض',
    slug: 'riyadh',
    region: 'Central Region (Capital)',
    landmark: 'Kingdom Centre & KAFD',
    description: 'Saudi Arabia’s bustling capital city and financial hub. Home to headquarters of regional mega-corporations, government ministries, and Vision 2030 giga-project offices.',
    activeJobsCount: 450,
    featuredSectors: ['Finance & Banking', 'IT & Tech', 'Engineering', 'Government'],
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'city-jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    slug: 'jeddah',
    region: 'Western Region (Red Sea)',
    landmark: 'King Fahd Fountain & Al-Balad',
    description: 'The commercial gateway to Saudi Arabia on the Red Sea coast. Vibrant hub for international shipping, e-commerce, digital marketing, tourism, and healthcare.',
    activeJobsCount: 320,
    featuredSectors: ['Sales & Marketing', 'Logistics', 'Healthcare', 'Hospitality'],
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'city-dammam',
    name: 'Dammam',
    arabicName: 'الدمام',
    slug: 'dammam',
    region: 'Eastern Province',
    landmark: 'King Abdulaziz Port & Half Moon Bay',
    description: 'Key industrial and maritime hub of the Eastern Province. Major opportunities in heavy transport, energy equipment, port operations, and manufacturing.',
    activeJobsCount: 280,
    featuredSectors: ['Driving & Transport', 'Oil & Gas', 'Healthcare', 'Construction'],
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300'
  },
  {
    id: 'city-makkah',
    name: 'Makkah',
    arabicName: 'مكة المكرمة',
    slug: 'makkah',
    region: 'Makkah Region',
    landmark: 'Abraj Al-Bait & Sacred Mosque',
    description: 'The holy city experiencing immense urban and hotel infrastructure development (Jabal Omar, Thakher Makkah) to accommodate millions of pilgrims annually.',
    activeJobsCount: 190,
    featuredSectors: ['Hospitality', 'Construction', 'Facility Security', 'Transport'],
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'city-madinah',
    name: 'Madinah',
    arabicName: 'المدينة المنورة',
    slug: 'madinah',
    region: 'Madinah Region',
    landmark: 'Prophet’s Mosque & Quba Mosque',
    description: 'Major pilgrimage destination experiencing significant hotel development, religious tourism expansion, public transit, and medical cluster modernization.',
    activeJobsCount: 160,
    featuredSectors: ['Hospitality & Hotels', 'Healthcare', 'Customer Service', 'Education'],
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300'
  },
  {
    id: 'city-khobar',
    name: 'Khobar',
    arabicName: 'الخبر',
    slug: 'khobar',
    region: 'Eastern Province',
    landmark: 'Khobar Corniche & Water Tower',
    description: 'Modern coastal city famous for oil service headquarters, international schools, financial consultancies, and commercial retail.',
    activeJobsCount: 210,
    featuredSectors: ['Engineering', 'Education', 'IT Consulting', 'Retail'],
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    id: 'city-taif',
    name: 'Taif',
    arabicName: 'الطائف',
    slug: 'taif',
    region: 'Makkah Region (Highlands)',
    landmark: 'Al Hada Mountains & Rose Farms',
    description: 'Picturesque mountain resort city expanding industrial parks, military aviation maintenance, agriculture, and educational institutions.',
    activeJobsCount: 110,
    featuredSectors: ['Security', 'Education', 'Agriculture & Food', 'Services'],
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'city-tabuk',
    name: 'Tabuk',
    arabicName: 'تبوك',
    slug: 'tabuk',
    region: 'Tabuk Region (Northwest)',
    landmark: 'Neom & Red Sea Project Gateway',
    description: 'Rapidly transforming northern region serving as the mainland base for NEOM, The Line, Trojena, and Red Sea destination mega-projects.',
    activeJobsCount: 240,
    featuredSectors: ['IT & Smart Cities', 'BIM Engineering', 'Environmental Science', 'Logistics'],
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300'
  }
];
