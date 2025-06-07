// NAVIGATION
export const NAV_LINKS = [
    
  { 
    href: '/',
    key: 'Home',
    label: 'Home',
    icon:'/homeicon.svg'
    },
    { 
      href: '/about',
      key: 'About Us', 
      label: 'About Us',
      icon:'/abouticon.svg'
    },
    { 
      href: '/contact', 
      key: 'Contact US',
      label: 'Contact US',
      icon:'/contacticon.svg' 
    },
   
  ];

// BENEFITS SECTION  
export const BENEFITS = [
  {
    title: 'For SMEs',
    benefits: [
      {
        title: 'Diverse Funding Access',
        icon: '/FundingIcon.svg',
        description:
          'Availability of financial support from various sources like banks, investors, and grants, ensuring flexibility and stability.',
      },
      {
        title: 'Growth-Focused Finance',
        icon: '/GrowthIcon.svg',
        description:
          'Having financial support from various sources like banks, investors, and grants, ensuring flexibility and stability.',
      },
      {
        title: 'Regulated Investment Ecosystem',
        icon: '/InvestmentIcon.svg',
        description:
          'A financial environment ensuring investments adhere to legal and regulatory standards for security and transparency.',
      },
   
    ],
  },
  {
    title: 'For Investors',
    benefits: [
      {
        title: 'High-Return Investments',
        icon: '/ReturnIcon.svg',
        description:
          'Profitable investment opportunities with strong growth potential, high returns, and sustainable financial success.',
      },
      {
        title: 'Smart Risk Analysis',
        icon: '/AnalysisIcon.svg',
        description:
          'Risk evaluation based on data and analytics to enhance decision-making and minimize uncertainties.',
      },
      {
        title: 'Smooth & Secure Transactions',
        icon: '/TransactionsIcon.svg',
        description:
          'Effortless and protected financial transactions ensuring reliability and user confidence.',
      },
    ],
  },
];

// WHYCHOOSE SECTION  
export const WHYCHOOSE = [
      {
        title: 'Innovative Funding Model',
        number: '/1.svg',
        image:'/Innovative.svg',
        description:
          'Transforming SME financing with equity-based solutions.',
      },
      {
        title: 'Security & Transparency',
        number: '/2.svg',
        image: '/Security.svg',
        description:
          'Blockchain-backed transactions for trust and compliance.',
      },
      {
        title: 'Scalability & Growth',
        number: '/3.svg',
        image: '/Scalability.svg',
        description:
          'Partnerships with accelerators, financial institutions, and regulatory bodies.',
      },
     
      {
        title: 'Strategic Advantage',
        number: '/4.svg',
        image: '/Strategic.svg',
        description:
          'Data-driven insights for smarter investment decisions.',
      },
    ]
  
// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Equity Crowdfunding',
    icon: '/CrowdfundingIcon.svg',
    variant: "#E9038A",
    description:
      'Unlock growth capital from global investors.',
  },
  {
    title: 'AI-Powered Risk Analytics',
    icon: '/AnalyticsIcon.svg',
    variant: "#93278F",
    description:
      "Smarter investment decisions with data insights.",
  },
  {
    title: 'Blockchain Security',
    icon: '/BlockchainIcon.svg',
    variant: "#404A93",
    description:
      'Encrypted and transparent financial transactions.',
  },
  {
    title: 'Strategic Partnerships',
    icon: '/StrategicIcon.svg',
    variant: "#1688CC",
    description:
      'Collaborations with financial institutions & tech leaders.',
  },
 

]
// SOCIALS SECTION
export const SOCIALS = [
  {
    title: 'Email',
    icon: '/footerEmailSocial.svg',
    link: "support@uniest.om",
  },
  {
    title: 'WhatsApp',
    icon: '/footerwhatsapp.svg',
    link: "+968 93696741",
  },
  {
    title: 'linkedIn',
    icon: '/linkedIn.svg',
    link: "https://www.linkedin.com/company/uniest-om/?originalSubdomain=om",
  },
  // {
  //   title: 'youtube',
  //   icon: '/youtube.svg',
  //   link: "/",
  // },
];

// TABS in ABOUT SECTION
export  const TABS = [
  { 
    id: 1, 
    label: "About UNIEST", 
    DefaultImage: "/About Icon - default.svg",
    ActiveImage:"/About Icon - Colored.svg",
    description:"UNIEST is an Oman based online shopping destination which offers a wide variety of products at affordable price. We aim to offer a full range of products to the residents of Oman to act as the one stop solution for all their shopping requirements. This is a multi-vendor platform which enables the retailers and customers to meet at UNIEST.",
    image:"/About.svg"
  },
  { 
    id: 2,
    label: "Our Vision", 
    DefaultImage: "/Vision Icon - default.svg",
    ActiveImage:"/Vision Icon -  Colored.svg" ,
    description:"Our Vision is to revolutionize SME funding by creating a trusted, technology-driven investment ecosystem that fuels entrepreneurship, drives economic impact, and enhances financial accessibility for businesses worldwide. Through continuous innovation and strategic development, we aim to reshape the future of SME investment.",
    image:"/vision.svg"
  },
  {
     id: 3, 
     label: "Our Mission", 
     DefaultImage: "/Mission Icon - default.svg",
    ActiveImage:"/Mission Icon - Colored.svg",
    description:"Our Mission is to bridge the gap between SMEs and investors by providing a secure, compliant, and data-driven platform that facilitates seamless funding, empowers business growth, and ensures long-term financial success. By integrating cutting-edge solutions and fostering strategic collaboration, we enable sustainable investment opportunities.",
    image:"/mission.svg"
   },
];


// Contact SECTION  // with social media
// export const ContactInfos = [
//   {
//     title: 'social',
//     contacts: [
//       {
//         title: 'Facebook/Uniest',
//         icon: '/fbIcon.svg',
//         url:'/',
//       },
//       {
//         title: 'LinkedIn/Uniest',
//         icon: '/inIcon.svg',
//         url:'https://www.linkedin.com/company/uniest-om/?originalSubdomain=om',
//       },
//       {
//         title: 'Instagram/Uniest',
//         icon: '/instaIcon.svg',
//         url:'https://www.instagram.com/uniest.om/',
//       },
//     ],
//   },
//   {
//     title: 'contact',
//     contacts: [
//       {
//         title: 'Support@Uniest.om',
//         icon: '/emailIcon.svg',
//         url:'',
//       },
//       {
//         title: '+968 91234567',
//         icon: '/WhatsappIcon.svg',
//         url:'',
//       },
//     ],
//   },
//   {
//     title: 'address',
//     contacts: [
//       {
//         title: 'Bawshar, Masqaţ, Oman',
//         icon: '/address.svg',
//         url:'',
//       },
    
//     ],
//   },
// ];

// // Contact SECTION  // without social media
export const ContactInfos = [
 
  {
    title: 'social',
    contacts: [
      {
        title: 'support@uniest.om',
        icon: '/emailIcon.svg',
        url:'',
      },
      {
        title: '+968 93696741',
        icon: '/WhatsappIcon.svg',
        url:'',
      },
      {
        title: 'LinkedIn/Uniest',
        icon: '/inIcon.svg',
        url:'https://www.linkedin.com/company/uniest-om/?originalSubdomain=om',
      },
    ],
  },
  {
    title: 'address',
    contacts: [
      {
        title: 'Bawshar, Masqaţ, Oman',
        icon: '/address.svg',
        url:'',
      },
    
    ],
  },
];
// Ecosystem SECTION
export const Ecosystems = [
  {
    title: 'SMEs',
    icon: '/SMEsIcon.svg',
    description:
      'Growth-focused businesses seeking equity-based investments to scale operations, drive innovation, improve competitiveness, and access smart, tech-enabled funding solutions tailored for expansion.',
  },
  {
    title: 'Investors',
    icon: '/investorIcon.svg',
    description:
      "Includes individuals, angels, venture capitalists, private equity firms, and institutions actively backing high-potential ventures with capital, mentorship, strategic market guidance, and long-term vision.",
  },
  {
    title: 'Regulatory Bodies',
    icon: '/RegulatoryIcon.svg',
    description:
      'Ensure full compliance with international standards, including strict AML/KYC protocols, data protection, investor safeguards, and transparent governance frameworks across all jurisdictions.',
  },
  {
    title: 'Technology Partners',
    icon: '/TechnologyIcon.svg',
    description:
      'Collaborate with blockchain, AI, and cybersecurity experts to enhance platform security, scalability, automation, user experience, and long-term technological innovation and resilience.',
  },
 

]

// Partnership SECTION
export const Partnership = [
  {
    title: 'Financial Institutions',
    icon: '/FinancialIcon.svg',
    description:
      'Partnerships with banks and fintechs to deliver enhanced liquidity solutions, flexible funding options, and seamless capital flows.',
  },
  {
    title: 'Accelerators & Incubators',
    icon: '/AcceleratorsIcon.svg',
    description:
      "Collaborations to identify, onboard, and support high-potential SMEs with resources, mentorship, and funding readiness.",
  },
  {
    title: 'Tokenization Platforms',
    icon: '/TokenizationIcon.svg',
    description:
      'Integration to enable fractional ownership, improve asset liquidity, and broaden global investor access to equity opportunities.',
  },
]

// ModernTools SECTION
export const ModernTool = [
  {
    title: 'AI-Driven Credit Scoring:',
    icon: '/light-bulb.svg',
    description: [
      'a.	Uses ML to assess SME creditworthiness beyond norms.',
      'b. Analyzes real-time performance, transactions, and market trends.',
    ],
  },
  {
    title: 'Seamless Digital Onboarding:',
    icon: '/risk-assessment.svg',
    description: [
      'a.	Quick and hassle-free application process via a user-friendly platform.',
      'b.	Minimal paperwork with real-time approvals for faster, hassle-free funding.',
    ],
  },
  {
    title: 'Risk Management & Security:',
    icon: '/like.svg',
    description: [
      'a. Blockchain-based transaction tracking for transparency.',
      'b. Smart contracts to automate investing and returns.',
    ],
  },
]


// constants/privacySections.ts
export const sections = [
  {
    title: "1. SCOPE AND CONSENT",
    content:
      "By using our platform, you consent to the collection, processing, storage, and disclosure of your personal data as described in this policy and in compliance with Omani law.",
  },
  {
    title: "2. WHAT DATA WE COLLECT",
    subsections: [
      {
        subtitle: "2.1 Personal Data",
        content: "Collected for identity verification and platform access:",
        items: [
          "Name, email, phone number.",
          "National ID/passport (for KYC/AML compliance).",
          "Nationality, job title, and professional profile.",
        ],
      },
      {
        subtitle: "2.2 Business Data (for SMEs, investors, accelerators)",
        items: [
          "Company registration details.",
          "Financial and legal documents.",
          "Investment documents (term sheets, cap tables, etc.).",
        ],
      },
      {
        subtitle: "2.3 Technical & Usage Data",
        items: [
          "Device/browser type.",
          "IP address and login metadata.",
          "Activity logs, message history, and file uploads.",
        ],
      },
    ],
  },
  {
    title: "3. WHY WE COLLECT YOUR DATA",
    content: "We collect and process personal data for the following purposes:",
    items: [
      "To verify user identity and eligibility",
      "To facilitate investment discussions and secure data rooms",
      "To comply with legal obligations, including PDPL and anti-money laundering laws",
      "To improve platform performance and user experience",
      "To communicate with users (platform updates, support)",
    ],
  },
  {
    title: "4. YOUR RIGHTS UNDER OMAN PDPL",
    content: "You have the right to:",
    items: [
      "Access your personal data",
      "Correct or update inaccurate information",
      "Withdraw consent at any time (where applicable)",
      "Request erasure of your data, subject to legal and contractual restrictions",
      "Object to or limit specific types of data processing",
    ],
    note: `To exercise these rights, contact us at <u>support@uniest.om</u>`,
  },
  {
    title: "5. DATA SHARING & THIRD PARTIES",
    content: "Your data may be shared with:",
    items: [
      "Verified counterparties (e.g., investors or SMEs you engage with).",
      "Service providers (e.g., KYC, cloud storage, analytics) under strict data protection contracts.",
      "Regulatory authorities, when legally required (e.g., CMA, MTCIT, or CBO). We do not sell personal data to third parties.",
    ],
  },
  {
    title: "6. CROSS-BORDER DATA TRANSFERS",
    content:
      "Data may be processed outside Oman where necessary. Such transfers will comply with PDPL Article 12, ensuring adequate data protection measures are in place.",
  },
  {
    title: "7. DATA SECURITY",
    content:
      "We use appropriate technical and organizational measures (encryption, role-based access control, monitoring) to secure your data. However, no digital system is 100% secure.",
  },
  {
    title: "8. DATA RETENTION",
    content:
      "We retain data only as long as necessary for the purposes stated above or as required by law. Inactive accounts may be archived or deleted after 36 months.",
  },
  {
    title: "9. CHILDREN’S DATA",
    content:
      "Our platform is not designed for individuals under the age of 18. We do not knowingly collect or process children's data.",
  },
  {
    title: "10. COOKIES & TRACKING",
    content:
      "We use cookies and similar tools for authentication, session management, and analytics. You can control cookie settings through your browser preferences.",
  },
  {
    title: "11. CHANGES TO THIS POLICY",
    content:
      "We may revise this Privacy Policy from time to time. Material updates will be announced via email or in-platform notification.",
  },
  {
    title: "12. CONTACT - DATA PROTECTION OFFICER (DPO)",
    content: `To contact our Data Protection Officer or submit a data rights request, use the details below:<br>Email: <u>support@uniest.om</u>`


  },
];

