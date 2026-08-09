export interface JobCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string; // Lucide icon identifier
  description: string;
  featuredCount: number;
  color: string;
}

export const CATEGORIES: JobCategory[] = [
  {
    id: 'cat-it',
    name: 'IT & Software',
    slug: 'it-software',
    iconName: 'Code',
    description: 'Software development, cloud architecture, cybersecurity, and data analytics roles across Saudi tech ecosystem.',
    featuredCount: 142,
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'cat-eng',
    name: 'Engineering',
    slug: 'engineering',
    iconName: 'Wrench',
    description: 'Civil, mechanical, electrical, BIM, and structural engineering positions in Vision 2030 giga-projects.',
    featuredCount: 198,
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'cat-health',
    name: 'Healthcare',
    slug: 'healthcare',
    iconName: 'Stethoscope',
    description: 'Doctors, ICU nurses, laboratory technicians, and hospital administration jobs across KSA health clusters.',
    featuredCount: 165,
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 'cat-finance',
    name: 'Accounting & Finance',
    slug: 'accounting-finance',
    iconName: 'Calculator',
    description: 'ZATCA compliance accountants, financial analysts, internal auditors, and banking specialists.',
    featuredCount: 115,
    color: 'from-amber-600 to-yellow-700'
  },
  {
    id: 'cat-const',
    name: 'Construction',
    slug: 'construction',
    iconName: 'Building2',
    description: 'Site managers, HSE officers, quantity surveyors, and project directors for real estate developments.',
    featuredCount: 230,
    color: 'from-orange-600 to-amber-700'
  },
  {
    id: 'cat-sales',
    name: 'Sales & Marketing',
    slug: 'sales-marketing',
    iconName: 'TrendingUp',
    description: 'Digital marketing, performance ads, retail store management, B2B sales, and business development.',
    featuredCount: 175,
    color: 'from-rose-600 to-pink-700'
  },
  {
    id: 'cat-security',
    name: 'Security',
    slug: 'security',
    iconName: 'ShieldCheck',
    description: 'Industrial safety, CCTV operators, facility security supervisors, and HCIS compliance officers.',
    featuredCount: 88,
    color: 'from-slate-700 to-slate-900'
  },
  {
    id: 'cat-driving',
    name: 'Driving & Logistics',
    slug: 'driving',
    iconName: 'Truck',
    description: 'Heavy trailer drivers, delivery couriers, warehouse supervisors, and fleet dispatchers.',
    featuredCount: 140,
    color: 'from-indigo-600 to-purple-700'
  },
  {
    id: 'cat-hosp',
    name: 'Hospitality & Tourism',
    slug: 'hospitality',
    iconName: 'Hotel',
    description: 'Hotel reception, duty managers, chefs, events coordinators, and tourism staff in Makkah, Madinah, and Red Sea.',
    featuredCount: 130,
    color: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'cat-edu',
    name: 'Education & Academic',
    slug: 'education',
    iconName: 'GraduationCap',
    description: 'International school STEM teachers, university lecturers, corporate trainers, and ESL instructors.',
    featuredCount: 94,
    color: 'from-purple-600 to-indigo-700'
  }
];
