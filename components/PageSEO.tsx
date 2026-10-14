import { useEffect } from 'react';
import { View } from '../types';

type PageSEOProps = {
  currentView: View;
};

type SEOConfig = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  index?: boolean;
};

const SITE_NAME = 'Veye Media';
const SITE_URL = 'https://www.veyemedia.co';

const DEFAULT_TITLE =
  'Enterprise AI & Enterprise Intelligence Systems | Veye Media';

const DEFAULT_DESCRIPTION =
  'Veye Media designs enterprise AI and intelligence systems that connect business strategy, data, processes, software, automation, AI agents, governance, and human decision-making.';

const SEO_CONFIG: Partial<Record<View, SEOConfig>> = {
  [View.HOME]: {
    title: 'Enterprise AI & Enterprise Intelligence Systems | Veye Media',
    description:
      'Veye Media designs enterprise AI and intelligence systems that connect business strategy, data, processes, software, automation, AI agents, governance, and human decision-making.',
    path: '/',
  },

  [View.VEYE7]: {
    title: 'Veye7™ | Enterprise AI & Intelligence System',
    description:
      "Veye7™ is Veye Media's enterprise AI and intelligence system architecture for coordinating people, processes, data, AI agents, automation, governance, and decision-making around business objectives.",
    path: '/veye7',
  },

  [View.SOLUTIONS]: {
    title: 'Enterprise Intelligence Solutions | Veye Media',
    description:
      'Explore Veye Media enterprise intelligence solutions for sales and marketing, market intelligence, process orchestration, governed AI systems, and enterprise AI architecture.',
    path: '/solutions',
  },

  [View.TECHNOLOGY]: {
    title: 'Enterprise AI Technology Architecture | Veye Media',
    description:
      'Explore the Veye Media technology architecture, including the Velocity Sync Engine™, Veye Scout™, Veye Pursuit™, governed AI, orchestration, and enterprise intelligence systems.',
    path: '/technology',
  },

  [View.INSIGHTS]: {
    title: 'Executive Insights on AI & Enterprise Intelligence | Veye Media',
    description:
      'Executive perspectives from Veye Media on enterprise intelligence, agentic AI, business systems architecture, governance, automation, and organizational transformation.',
    path: '/insights',
  },

  [View.WHY_VEYE]: {
    title: 'Why Veye Media | Business Systems Architecture',
    description:
      'Learn how Veye Media approaches enterprise intelligence by starting with business objectives and designing the processes, governance, data, and technology required to achieve them.',
    path: '/why-veye',
  },

  [View.CONTACT]: {
    title: 'Contact Veye Media | Enterprise Intelligence',
    description:
      'Connect with Veye Media about enterprise intelligence systems, AI architecture, business process coordination, governed automation, and intelligent growth infrastructure.',
    path: '/contact',
  },

  [View.START_CONVERSATION]: {
    title: 'Start a Conversation | Veye Media',
    description:
      'Start a conversation with Veye Media about your business objectives, operating environment, enterprise intelligence requirements, and opportunities for intelligent systems architecture.',
    path: '/start-a-conversation',
  },

  [View.TECH_VSE]: {
    title: 'Velocity Sync Engine™ | Veye Media',
    description:
      'The Velocity Sync Engine™ is Veye Media’s model-agnostic orchestration architecture for coordinating enterprise signals, data, AI reasoning, workflows, governance, decisions, and actions.',
    path: '/technology/velocity-sync-engine',
  },

  [View.TECH_SCOUT]: {
    title: 'Veye Scout™ Market Intelligence | Veye Media',
    description:
      'Veye Scout™ identifies, organizes, and interprets external market and business signals to support executive intelligence, opportunity awareness, and strategic decision-making.',
    path: '/technology/veye-scout',
  },

  [View.TECH_PURSUIT]: {
    title: 'Veye Pursuit™ Business Development Intelligence | Veye Media',
    description:
      'Veye Pursuit™ coordinates prospect research, account intelligence, qualification, assignments, relationship mapping, governance, and business development progression.',
    path: '/technology/veye-pursuit',
  },

  [View.SOL_SALES_MARKETING]: {
    title: 'Sales & Marketing Intelligence Solutions | Veye Media',
    description:
      'Connect buyer signals, customer behavior, marketing intelligence, CRM activity, campaign performance, and revenue objectives through coordinated enterprise intelligence.',
    path: '/solutions/sales-marketing-intelligence',
  },

  [View.SOL_MARKET_COMPETITIVE]: {
    title: 'Market & Competitive Intelligence | Veye Media',
    description:
      'Transform market signals, competitive intelligence, industry data, customer context, and emerging opportunities into governed decision support for business leaders.',
    path: '/solutions/market-competitive-intelligence',
  },

  [View.SOL_PROCESS_ORCHESTRATION]: {
    title: 'Intelligent Process Orchestration | Veye Media',
    description:
      'Coordinate workflows, enterprise systems, automation, AI agents, human authority, and governance through intelligent process orchestration designed around business objectives.',
    path: '/solutions/intelligent-process-orchestration',
  },

  [View.SOL_GOVERNED_AI_AGENTS]: {
    title: 'Governed AI & Agentic Systems | Veye Media',
    description:
      'Design governed AI and agentic systems with defined authority, business context, human oversight, executable policies, and controlled autonomous execution.',
    path: '/solutions/governed-ai-agentic-systems',
  },

  [View.SOL_ENTERPRISE_ARCHITECTURE]: {
    title: 'Enterprise AI Architecture & Integration | Veye Media',
    description:
      'Architect and integrate enterprise AI across business systems, data, applications, APIs, automation, governance, AI models, agents, and human decision-making.',
    path: '/solutions/enterprise-ai-architecture-integration',
  },

  [View.SOL_BI_DECISION_SUPPORT]: {
    title: 'Business Intelligence & Decision Support | Veye Media',
    description:
      'Transform business data into actionable intelligence for informed decision-making with business intelligence and decision support systems.',
    path: '/solutions/business-intelligence-decision-support',
  },

  [View.SOL_BD_REVENUE]: {
    title: 'Business Development & Revenue Intelligence | Veye Media',
    description:
      'Accelerate growth and revenue with business development and revenue intelligence systems that identify opportunities and drive sales performance.',
    path: '/solutions/business-development-revenue-intelligence',
  },
};

function setMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let canonical =
    document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

function setStructuredData(config: SEOConfig, canonicalUrl: string) {
  const id = 'veye-page-structured-data';

  let script =
    document.head.querySelector<HTMLScriptElement>(`#${id}`);

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Veye Media',
        url: SITE_URL,
        description:
          'Veye Media designs enterprise AI and intelligence systems that connect business strategy, data, processes, software, automation, AI agents, governance, and human decision-making.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: config.title,
        description: config.description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  script.textContent = JSON.stringify(structuredData);
}

export function PageSEO({ currentView }: PageSEOProps) {
  useEffect(() => {
    const config = SEO_CONFIG[currentView];

    /*
     * Legacy/internal views are deliberately not treated as
     * canonical public search destinations.
     */
    if (!config) {
      document.title = DEFAULT_TITLE;

      setMetaTag(
        'name',
        'description',
        DEFAULT_DESCRIPTION
      );

      setMetaTag(
        'name',
        'robots',
        'noindex, nofollow'
      );

      return;
    }

    const canonicalUrl =
      config.path === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${config.path}`;

    document.title = config.title;

    setMetaTag(
      'name',
      'description',
      config.description
    );

    setMetaTag(
      'name',
      'robots',
      config.index === false
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    setCanonical(canonicalUrl);

    // Open Graph
    setMetaTag(
      'property',
      'og:title',
      config.title
    );

    setMetaTag(
      'property',
      'og:description',
      config.description
    );

    setMetaTag(
      'property',
      'og:url',
      canonicalUrl
    );

    setMetaTag(
      'property',
      'og:type',
      config.type ?? 'website'
    );

    setMetaTag(
      'property',
      'og:site_name',
      SITE_NAME
    );

    // Twitter / X
    setMetaTag(
      'name',
      'twitter:card',
      'summary_large_image'
    );

    setMetaTag(
      'name',
      'twitter:title',
      config.title
    );

    setMetaTag(
      'name',
      'twitter:description',
      config.description
    );

    setStructuredData(config, canonicalUrl);
  }, [currentView]);

  return null;
}