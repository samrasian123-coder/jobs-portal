export interface CareerArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'CV Advice' | 'Interview Tips' | 'Job Search Safety' | 'Saudi Workplace' | 'Career Growth';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
}

export const CAREER_ARTICLES: CareerArticle[] = [
  {
    id: 'art-1',
    slug: 'how-to-write-saudi-job-cv',
    title: 'How to Write a Professional Saudi Job CV (KSA Standard Guide)',
    excerpt: 'Learn the exact format, key sections, and Saudization keyword optimization required to pass HR screening in Saudi Arabia.',
    category: 'CV Advice',
    author: 'Tariq Al-Mansoor',
    authorRole: 'Senior KSA Talent Acquisition Specialist',
    date: 'August 2026',
    readTime: '6 min read',
    featured: true,
    content: {
      intro: 'Crafting a CV for the Saudi Arabian job market requires an understanding of local hiring practices, government compliance norms, and ATS (Applicant Tracking System) keyword optimization.',
      sections: [
        {
          heading: '1. Clear Header & Essential Contact Information',
          body: 'Your header should be clean and unambiguous. Always state your full name, current city of residence in KSA (e.g. Riyadh, Jeddah, Dammam), phone number with country code, and professional LinkedIn profile link.',
          bulletPoints: [
            'State your current Visa / Iqama status (e.g. Saudi National, Transferable Iqama, Visit Visa).',
            'Include Saudi Council registration numbers if applicable (e.g. SCE for engineers, SCFHS for healthcare, SOCPA for accountants).',
            'Do not list unnecessary personal details such as religion or marital status.'
          ]
        },
        {
          heading: '2. Tailor Your CV for Saudization & ATS Keyword Matching',
          body: 'Saudi employers frequently filter applications based on specific skill sets and accreditation requirements. Ensure your key technical skills match the job listing terms.',
          bulletPoints: [
            'Use standard job titles recognized in the GCC (e.g., BIM Engineer, Financial Analyst, ICU Nurse Specialist).',
            'Highlight project sizes, budgets in SAR, and specific software tool proficiencies.'
          ]
        },
        {
          heading: '3. Highlight Quantifiable Achievements',
          body: 'Instead of listing generic duty descriptions, showcase measurable business outcomes. For example: "Managed SAR 15M infrastructure budget delivering 3 weeks ahead of schedule."'
        }
      ],
      conclusion: 'Keep your CV to 2 pages maximum, saved in standard PDF format. Ensure your formatting is clean with legible fonts like Inter or Arial.'
    }
  },
  {
    id: 'art-2',
    slug: 'saudi-job-interview-tips',
    title: 'Saudi Job Interview Tips: How to Impress Hiring Managers in KSA',
    excerpt: 'Essential advice on cultural etiquette, professional presentation, technical preparation, and salary expectations in SAR.',
    category: 'Interview Tips',
    author: 'Sara Al-Otaibi',
    authorRole: 'HR Director & Career Coach',
    date: 'July 2026',
    readTime: '5 min read',
    featured: true,
    content: {
      intro: 'Securing an interview with a top Saudi enterprise or giga-project contractor is a huge milestone. Here is how to prepare effectively for both virtual and in-person interviews in Saudi Arabia.',
      sections: [
        {
          heading: '1. Professional Presentation & Dress Code',
          body: 'First impressions matter greatly in Saudi corporate culture. Business formal attire is expected across corporate, government, and technical interviews.',
          bulletPoints: [
            'Saudi Nationals: National dress (Thobe, Shemagh/Ghutra) or formal business suit.',
            'Expatriates: Formal business suit for men, conservative professional attire for women.',
            'Punctuality is crucial: Log in 5-10 minutes early for MS Teams/Zoom interviews or arrive 15 minutes prior for site interviews.'
          ]
        },
        {
          heading: '2. Articulate Your Vision 2030 Alignment',
          body: 'Employers in Saudi Arabia are proud of the Kingdom’s rapid modernization under Vision 2030. Demonstrating basic knowledge of how your field aligns with local economic transformation projects creates an immediate positive impression.'
        },
        {
          heading: '3. Understanding Salary Structure Negotiations (SAR)',
          body: 'In Saudi Arabia, salary offers are usually broken down into Base Salary + Housing Allowance (typically 25% or 3 months base) + Transportation Allowance. Ensure you negotiate total monthly compensation in SAR.'
        }
      ],
      conclusion: 'Always follow up within 24 hours with a polite thank-you email reaffirming your enthusiasm for the role and your readiness to contribute to the company’s success in Saudi Arabia.'
    }
  },
  {
    id: 'art-3',
    slug: 'how-to-search-for-jobs-safely',
    title: 'How to Search for Jobs Safely in Saudi Arabia: Avoiding Scams',
    excerpt: 'Crucial safety rules: legitimate KSA employers never ask job candidates to pay money for interviews, visas, or background checks.',
    category: 'Job Search Safety',
    author: 'SaudiJobsHub Safety Team',
    authorRole: 'Platform Compliance Officer',
    date: 'August 2026',
    readTime: '4 min read',
    featured: true,
    content: {
      intro: 'While Saudi Arabia offers vibrant employment opportunities, job seekers must remain vigilant against fraudulent recruitment scams claiming to offer high-paying KSA work visas.',
      sections: [
        {
          heading: 'Rule 1: Never Pay Money for Job Applications or Work Visas',
          body: 'Under Saudi Labor Law, ALL costs associated with recruitment, work visas (Amel Visa), Iqama issuance, medical tests, and airfare MUST be borne by the employer.',
          bulletPoints: [
            'If an agency or individual asks for money via Western Union, wire transfer, or gift cards for "visa processing", it is 100% a scam.',
            'Legitimate platforms like SaudiJobsHub, Qiwa, and official corporate career pages NEVER charge job seekers application fees.'
          ]
        },
        {
          heading: 'Rule 2: Verify Employer Authenticity via Official Portals',
          body: 'Verify company registration using Ministry of Commerce (MC) Commercial Registration (CR) numbers or official Qiwa platform listings.',
          bulletPoints: [
            'Check that communication originates from official corporate email domains (e.g. name@company.com), not generic Gmail or Yahoo accounts.',
            'Be suspicious of job offers sent via WhatsApp without any interview process.'
          ]
        }
      ],
      conclusion: 'Report suspicious listings immediately. Stay informed and rely on verified portals and corporate career sites for safe job applications in Saudi Arabia.'
    }
  },
  {
    id: 'art-4',
    slug: 'common-cv-mistakes-ksa',
    title: '7 Common CV Mistakes That Cost You Job Interviews in Saudi Arabia',
    excerpt: 'Avoid missing city location details, unclear Iqama transferability status, and poorly formatted qualifications on your resume.',
    category: 'CV Advice',
    author: 'Fahad Al-Harbi',
    authorRole: 'Executive Recruiter',
    date: 'June 2026',
    readTime: '5 min read',
    featured: false,
    content: {
      intro: 'Recruiters in Saudi Arabia spend an average of 6 seconds reviewing an initial resume. Avoiding these common blunders will dramatically boost your call-back rate.',
      sections: [
        {
          heading: 'Mistake 1: Not Specifying Your Saudi City Location',
          body: 'Employers often prioritize candidates already located in the city where the vacancy exists (Riyadh, Jeddah, Dammam, etc.) to minimize relocation delays.'
        },
        {
          heading: 'Mistake 2: Leaving Out Accreditation / License Numbers',
          body: 'If you are an engineer, doctor, nurse, or accountant in KSA, omitting your Saudi Council of Engineers (SCE), SCFHS, or SOCPA status forces HR to skip your application.'
        },
        {
          heading: 'Mistake 3: Unclear Work Permit & Transferable Iqama Details',
          body: 'For expatriates in KSA, indicating "Transferable Iqama - Ready for immediate Qiwa transfer" provides immediate peace of mind to hiring managers.'
        }
      ],
      conclusion: 'Review your CV carefully before applying. Use clear bullet points, accurate contact details, and precise professional titles.'
    }
  },
  {
    id: 'art-5',
    slug: 'working-in-saudi-arabia-guide',
    title: 'Living & Working in Saudi Arabia: Ultimate Guide for Expats & Saudis',
    excerpt: 'Everything you need to know about Saudi Labor Law, Qiwa platform transfers, GOSI, end-of-service benefits, and quality of life.',
    category: 'Saudi Workplace',
    author: 'Noura Al-Ghamdi',
    authorRole: 'HR & Labor Law Consultant',
    date: 'May 2026',
    readTime: '7 min read',
    featured: false,
    content: {
      intro: 'Saudi Arabia is undergoing a historic economic transformation. Whether you are a young Saudi professional launching a career or an expatriate relocating to KSA, understanding workplace dynamics is key.',
      sections: [
        {
          heading: '1. The Digital Labor Ecosystem (Qiwa & Muqeem)',
          body: 'Saudi Arabia has digitalized labor contracts through the Qiwa platform. Work contracts are recorded digitally, protecting employee rights regarding probation periods, working hours, and notice periods.',
          bulletPoints: [
            'Probation Period: Maximum 90 days (extendable to 180 days with mutual written consent).',
            'Standard Working Hours: 8 hours per day / 48 hours per week (reduced during Ramadan).'
          ]
        },
        {
          heading: '2. End of Service Award (Gratuity Calculation)',
          body: 'Under Saudi Labor Law Article 84, employees completing service are entitled to an End-of-Service gratuity calculated as half a month base salary for each of the first 5 years, and 1 full month salary for each year thereafter.'
        }
      ],
      conclusion: 'With modern infrastructure, world-class entertainment events, tax-free incomes, and vibrant family communities, working in Saudi Arabia offers unparalleled career growth.'
    }
  }
];
