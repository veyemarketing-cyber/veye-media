import { ServiceItem, NavItem, InsightPost } from './types';

export const INSIGHTS: InsightPost[] = [
  {
    slug: "coordination-failure-growth-ceiling",
    title: "Coordination Failure Is the New Growth Ceiling",
    excerpt: "Most organizations don’t stall because of weak execution. They stall because of weak coordination. Fragmentation—not effort—has become the primary constraint on growth.",
    dateLabel: "October 2026",
    heroImageUrl: "https://placehold.co/1200x700/00205b/ffffff?text=Veye+Media+Insights",
    metaTitle: "Coordination Failure Is the New Growth Ceiling",
    metaDescription: "Discover why fragmentation, not execution, stalls growth. Learn how systems architecture removes coordination drag and accelerates momentum.",
    sections: [
      {
        heading: "The Failure Mode",
        body: [
          "Traditional growth models divide responsibility across channels, vendors, and internal teams. SEO operates independently of media buying. Paid campaigns run in isolation from CRM intelligence. Strategy is often declared on a quarterly basis, while execution adapts daily—often in conflicting directions.",
          "This fragmentation creates invisible drag on the entire enterprise. Decisions arrive late because data is siloed. Critical signals are lost in the handoff between systems. Momentum dissipates before it can compound because every department is optimizing for a different metric.",
          "When growth depends on manual alignment between disconnected stakeholders, it scales linearly at best. At worst, it fractures under pressure, leading to diminishing returns on every dollar spent."
        ]
      },
      {
        heading: "The Systems Lens",
        body: [
          "Coordination is not a management problem—it is an architectural one.",
          "Trying to solve this through more meetings or tighter management oversight is a losing battle. The complexity of modern digital ecosystems exceeds human capacity for manual synchronization.",
          "An intelligent system removes coordination as a variable. Instead of relying on individuals to bridge the gaps between channels, the architecture itself ensures alignment. Strategy, execution, and feedback operate inside a unified orchestration layer.",
          "This allows intent to propagate instantly across the entire environment. When one surface learns something—like a shift in search intent—the entire system adapts immediately."
        ]
      },
      {
        heading: "Executive Implications",
        body: [
          "Leaders need to change the diagnostic questions they ask. Instead of asking, “Which channel is underperforming?” the more critical question is, “Where is coordination breaking down?”",
          "The constraint on your growth is rarely the talent of your team or the quality of your product. It is the absence of a governing system that ensures all energy pushes in the same direction.",
          "If you are constantly fighting to align your vendors and internal teams, you are battling a structural flaw, not a personnel issue."
        ]
      },
      {
        heading: "What This Enables",
        body: [
          "When coordination is engineered into the core of your growth architecture, the organization shifts from reactive management to proactive dominance.",
          "- Decisions accelerate: Insights flow freely without administrative bottlenecks.",
          "- Signals compound: Success in one area amplifies performance in another automatically.",
          "- Growth becomes systemic: Success is a property of the system, not the result of individual heroics."
        ]
      }
    ],
    cta: {
      heading: "Start a Conversation",
      body: "If coordination feels harder the more you invest, the system—not the team—needs to change. Let’s discuss how to architect a growth environment where alignment is the default state.",
      buttonText: "Start a Conversation",
      buttonHref: "/start-a-conversation"
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  // I. Data Strategy & Analytics
  {
    id: 'ai-marketing-solutions',
    title: 'AI-Powered Marketing Solutions',
    description: 'Leveraging artificial intelligence for personalized recommendations, predictive analytics, and automated processes.',
    iconName: 'Sparkles',
    category: 'Digital Growth Surfaces'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Forecasting future trends and outcomes to help businesses anticipate customer behavior and make proactive decisions.',
    iconName: 'LineChart',
    category: 'Digital Growth Surfaces'
  },
  {
    id: 'attribution-modeling',
    title: 'Attribution Modeling',
    description: 'Understanding the contribution of different marketing channels to conversions across the customer journey.',
    iconName: 'Workflow',
    category: 'Digital Growth Surfaces'
  },

  // II. Digital Presence & Web Development
  {
    id: 'website-optimization',
    title: 'Website Design & Optimization',
    description: 'Designing and optimizing websites to enhance user experience and improve search engine rankings.',
    iconName: 'Layout',
    category: 'Digital Platforms'
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    description: 'Conversion-optimized e-commerce platforms with seamless shopping experiences and payment integration.',
    iconName: 'ShoppingCart',
    category: 'Digital Platforms'
  },
  {
    id: 'ada-compliance',
    title: 'ADA Compliance Services',
    description: 'Ensuring your site meets WCAG standards and provides an inclusive digital experience for all users.',
    iconName: 'ShieldCheck',
    category: 'Digital Platforms'
  },

  // III. SEO
  {
    id: 'aeo-optimization',
    title: 'Answer Engine Optimization (AEO)',
    description: 'Optimizing for featured snippets, direct answers, and rich results in the modern search environment.',
    iconName: 'MessageSquareText',
    category: 'Digital Growth Surfaces'
  },
  {
    id: 'generative-seo',
    title: 'Generative SEO',
    description: 'Combining traditional SEO with AI-powered content and semantic search strategies for intent-driven queries.',
    iconName: 'Search',
    category: 'Digital Growth Surfaces'
  },

  // IV. Media Intelligence
  {
    id: 'media-audio-intelligence',
    title: 'Media & Audio Intelligence',
    description: 'Integrated systems for high-performance audio production and media distribution ecosystems.',
    iconName: 'Cpu',
    category: 'Media & Audio Intelligence'
  },
  {
    id: 'digital-ad-campaigns',
    title: 'Digital Ad Campaigns',
    description: 'Strategic targeting and data-driven optimization across Google, Meta, LinkedIn, and more.',
    iconName: 'Target',
    category: 'Digital Growth Surfaces'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Intelligence',
    description: 'Building engaging presence through consistent strategy, content, and automation across platforms.',
    iconName: 'Share2',
    category: 'Digital Growth Surfaces'
  },

  // V. Strategy & Consulting
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Positioning',
    description: 'Defining and positioning your brand with clarity through audience research and visual refinement.',
    iconName: 'Zap',
    category: 'Why Veye Media'
  },
  {
    id: 'marketing-audit',
    title: 'Marketing Systems Audit',
    description: 'Comprehensive evaluation of digital marketing efforts with actionable insights and performance recommendations.',
    iconName: 'CheckCircle',
    category: 'Digital Growth Surfaces'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: 'HOME' },
  { label: 'Velocity Sync Engine™', view: 'VELOCITY_SYNC' },
  {
    label: 'What We Build',
    view: 'WHAT_WE_BUILD',
    children: [
      // ✅ Add `view` so Navigation routes these as real pages (NOT System Detail)
      { label: 'Digital Growth Surfaces', id: 'growth-surfaces', view: 'GROWTH_SURFACES' },
      { label: 'Media & Audio Intelligence', id: 'media-intelligence', view: 'MEDIA_INTELLIGENCE' },
      { label: 'Digital Platforms', id: 'digital-platforms', view: 'DIGITAL_PLATFORMS' }
    ]
  },
  { label: 'Why Veye Media', view: 'WHY_VEYE' },
  { label: 'Executive Insights', view: 'EXECUTIVE_INSIGHTS' },
  { label: 'Insights', view: 'INSIGHTS' },
  { label: 'Start a Conversation', view: 'START_CONVERSATION', isCta: true },
];
