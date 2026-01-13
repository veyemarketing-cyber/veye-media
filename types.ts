export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface ServiceItem {
  name: string;
  description?: string;
}

export interface EventFinding {
  event_name: string;
  date: string;
  location_city: string;
  priority_level: 'High' | 'Medium' | 'Low';
  source_url: string;
  strategic_reason: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  category: 'Strategy' | 'Systems' | 'Media';
  image: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export enum Page {
  Home = '/',
  VelocitySync = '/velocity-sync-engine',
  SystemsWeBuild = '/systems-we-build',
  GrowthSurfaces = '/systems-we-build/growth-surfaces',
  MediaIntelligence = '/systems-we-build/media-intelligence',
  DigitalPresence = '/systems-we-build/digital-presence',
  IntelligentGrowthSystems = '/systems-we-build/intelligent-growth-systems',
  WhoWeWorkWith = '/who-we-work-with',
  WhyVeye = '/why-veye-media',
  Insights = '/insights',
  InsightDetail = '/insights/:slug',
  StartConversation = '/start-a-conversation',
  PrivacyPolicy = '/privacy',
  TermsOfUse = '/terms',
  DataGovernance = '/data-governance',
  Sitemap = '/sitemap'
}
