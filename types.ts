export enum View {
  HOME = 'HOME',
  VELOCITY_SYNC = 'VELOCITY_SYNC',
  WHAT_WE_BUILD = 'WHAT_WE_BUILD',
  GROWTH_SURFACES = 'GROWTH_SURFACES',
  MEDIA_INTELLIGENCE = 'MEDIA_INTELLIGENCE',
  DIGITAL_PLATFORMS = 'DIGITAL_PLATFORMS',
  WHY_VEYE = 'WHY_VEYE',
  INSIGHTS = 'INSIGHTS',
  EXECUTIVE_INSIGHTS = 'EXECUTIVE_INSIGHTS',
  AUDIT = 'AUDIT',
  SYSTEM_DETAIL = 'SYSTEM_DETAIL',
  CONTACT = 'CONTACT',
  START_CONVERSATION = 'START_CONVERSATION',
  SERVICES = 'SERVICES', // Legacy/Support
  ABOUT = 'ABOUT', // Legacy/Support
  BLOG = 'BLOG', // Legacy/Support
  GROWTH_SYSTEMS = 'GROWTH_SYSTEMS' // Legacy/Support
}

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel?: string;
  heroImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  sections: Array<{ heading: string; body: string[] }>;
  cta: { heading: string; body: string; buttonText: string; buttonHref: string };
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

/**
 * ✅ Updated nav types
 * - NavItem.view can be a View enum value or a string (legacy compatibility)
 * - children can optionally include `view` for routing to standalone pages
 */
export interface NavChildItem {
  label: string;
  id: string;
  view?: View | string;
}

export interface NavItem {
  label: string;
  view: View | string;
  isCta?: boolean;
  children?: NavChildItem[];
}

export interface UserSession {
  pageViews: string[];
  lastAction: string | null;
}

export interface AuditFormData {
  name: string;
  company: string;
  role: string;
  website: string;
  message: string;
}

export interface AgenticResponse {
  analysis: string;
  strategicHook: string;
  intentScore: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// --- CMS Types ---

export interface BlogPostContent {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export interface SiteContent {
  global: {
    companyName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    footerDescription: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroSupportingLine: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    visionHeadline: string;
    visionDescription: string;
    systemsHeadline: string;
    systemsSubheadline: string;
    outcome1Title: string;
    outcome1Desc: string;
    outcome2Title: string;
    outcome2Desc: string;
    outcome3Title: string;
    outcome3Desc: string;
    governanceHeadline: string;
    governanceDescription: string;
    finalCtaHeadline: string;
  };
  services: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    ctaHeadline: string;
    ctaDesc: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    missionHeadline: string;
    missionDescription1: string;
    missionDescription2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    formHeadline: string;
    sidebarHeadline: string;
    sidebarDesc: string;
  };
  blog: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    posts: Record<string, BlogPostContent>;
  };
  growthSystems: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    section2Paragraph: string;
    section3Heading: string;
    outcome1Title: string;
    outcome1Desc: string;
    outcome2Title: string;
    outcome2Desc: string;
    outcome3Title: string;
    outcome3Desc: string;
    section4Heading: string;
    section4Paragraph: string;
    section4CtaLine: string;
  };
  growthSurfaces: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    surface1Name: string;
    surface1Desc: string;
    surface2Name: string;
    surface2Desc: string;
    surface3Name: string;
    surface3Desc: string;
    surface4Name: string;
    surface4Desc: string;
    surface5Name: string;
    surface5Desc: string;
    section3Heading: string;
    section3Paragraph: string;
    section4Heading: string;
    section4Paragraph: string;
    section4CtaLine: string;
  };
  mediaIntelligence: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    section2Paragraph: string;
    section3Heading: string;
    intel1Title: string;
    intel1Desc: string;
    intel2Title: string;
    intel2Desc: string;
    intel3Title: string;
    intel3Desc: string;
    intel4Title: string;
    intel4Desc: string;
    section4Heading: string;
    section4Paragraph: string;
    section5Heading: string;
    section5Paragraph: string;
    section5CtaLine: string;
  };
  digitalPlatforms: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    section2Paragraph: string;
    section3Heading: string;
    section3Paragraph: string;
    section4Heading: string;
    section4Paragraph: string;
    section5Heading: string;
    section5Paragraph: string;
    section5CtaLine: string;
  };
  whyVeye: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    section2Paragraph: string;
    section3Heading: string;
    outcome1Title: string;
    outcome1Desc: string;
    outcome2Title: string;
    outcome2Desc: string;
    outcome3Title: string;
    outcome3Desc: string;
    section4Heading: string;
    section4Paragraph: string;
    section5Heading: string;
    section5Paragraph: string;
    section5CtaLine: string;
  };
  executiveInsights: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroSupportingParagraph: string;
    heroCtaPrimaryText: string;
    heroCtaSecondaryText: string;
    section1Heading: string;
    section1Paragraph: string;
    section2Heading: string;
    section2Paragraph: string;
    section3Heading: string;
    section3Paragraph: string;
    section4Heading: string;
    section4Paragraph: string;
    section5Heading: string;
    section5Paragraph: string;
    section5CtaLine: string;
  };
  systems: Record<
    string,
    {
      title: string;
      description: string;
      capabilityHeadline: string;
      capabilityDescription: string;
      feature1Title: string;
      feature1Desc: string;
      feature2Title: string;
      feature2Desc: string;
      integrationHeadline: string;
      integrationDesc: string;
    }
  >;
}

export interface ContentContextType {
  content: SiteContent;
  updateContent: (
    section: keyof SiteContent,
    key: string,
    value: string,
    subKey?: string,
    nestedKey?: string
  ) => void;
  isEditing: boolean;
  toggleEditing: () => void;
  resetContent: () => void;
}
