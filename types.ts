export enum View {
  // Core Views
  HOME = 'HOME',
  VEYE7 = 'VEYE7',
  SOLUTIONS = 'SOLUTIONS',
  TECHNOLOGY = 'TECHNOLOGY',
  INSIGHTS = 'INSIGHTS',
  INSIGHTS_POST = 'INSIGHTS_POST',
  ABOUT = 'ABOUT',
  WHY_VEYE = 'ABOUT',
  CONTACT = 'CONTACT',
  START_CONVERSATION = 'START_CONVERSATION',
  AUDIT = 'AUDIT',
  SYSTEM_DETAIL = 'SYSTEM_DETAIL',

  // Technology Subpages
  TECH_VSE = 'TECH_VSE',
  TECH_SCOUT = 'TECH_SCOUT',
  TECH_PURSUIT = 'TECH_PURSUIT',

  // Solutions Subpages
  SOL_BI_DECISION_SUPPORT = 'SOL_BI_DECISION_SUPPORT',
  SOL_BD_REVENUE = 'SOL_BD_REVENUE',
  SOL_SALES_MARKETING = 'SOL_SALES_MARKETING',
  SOL_MARKET_COMPETITIVE = 'SOL_MARKET_COMPETITIVE',
  SOL_PROCESS_ORCHESTRATION = 'SOL_PROCESS_ORCHESTRATION',
  SOL_GOVERNED_AI_AGENTS = 'SOL_GOVERNED_AI_AGENTS',
  SOL_ENTERPRISE_ARCHITECTURE = 'SOL_ENTERPRISE_ARCHITECTURE',

  // Legacy Services (Backwards compatibility)
  GROWTH_SURFACES = 'GROWTH_SURFACES',
  MEDIA_INTELLIGENCE = 'MEDIA_INTELLIGENCE',
  DIGITAL_PLATFORMS = 'DIGITAL_PLATFORMS',
  SERVICES = 'SERVICES'
}

export interface ChatMessage { id: string; role: 'user' | 'model'; text: string; timestamp: Date; }
export interface AuditFormData { name: string; role: string; company: string; message: string; }
export interface AgenticResponse { analysis: string; strategicHook: string; intentScore: string; }
export interface ServiceItem { id: string; title: string; description: string; iconName: string; category: string; }
export interface NavItem { label: string; view?: string; id?: string; children?: NavItem[]; isCta?: boolean; }
export interface InsightPost {
 slug: string; title: string; excerpt: string; dateLabel: string; heroImageUrl: string;
 metaTitle: string; metaDescription: string; sections: { heading: string; body: string[] }[];
 cta: { heading: string; body: string; buttonText: string; buttonHref: string };
}
