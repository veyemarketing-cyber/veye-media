import React, { createContext, useContext, useState, useEffect } from 'react';



export const defaultSystemFeatures = {

  feature1Title: "Autonomous Reasoning",

  feature1Desc: "Continuous analysis of performance signals allows the system to pivot strategies without human delay.",

  feature2Title: "Millisecond Execution",

  feature2Desc: "Deploy changes across your digital media mix the moment intent is detected.",

  integrationHeadline: "Strategic Integration",

  integrationDesc: "Every output is fed back into our central Intelligence Layer, ensuring that your search, content, and demand systems are always perfectly synchronized."

};



export const defaultContent = {



  global: {



    companyName: 'Veye Media',



    email: 'info@veyemedia.co',



    phone: '866-790-3014',



    addressLine1: '403 5th Street',



    addressLine2: 'Lynchburg, VA 24502',



    footerDescription: 'Veye Media is an Agentic AI-powered Systems Architect. We design and orchestrate proprietary intelligent growth systems that operate continuously.',



  },



  home: {



    heroTitle: 'We Build and Maintain Intelligent Business Systems.',



    heroSubtitle: 'We connect your existing tools, align people, processes, data, and AI, and improve execution to support measurable growth.',



    heroSupportingLine: 'We take responsibility for implementation, monitoring, and ongoing improvement.',



    heroCtaPrimary: 'Start a Strategic Dialogue',



    heroCtaSecondary: 'Explore the Velocity Sync Engine™',



    visionHeadline: 'Beyond Execution. Into Autonomy.',



    visionDescription: 'Traditional service models rely on fragmented execution—disconnected efforts that yield diminishing returns. This approach is obsolete. We replace transient activity with durable, intelligence-driven infrastructure. Our mandate is to architect, govern, and evolve systems that think, adapt, and perform. By embedding agentic intelligence into the core of your digital environment, we transform static operations into dynamic ecosystems capable of sustained, exponential outcomes.',



    systemsHeadline: 'Strategic Innovation at Scale',



    systemsSubheadline: 'True leverage is found in the synthesis of strategy and autonomy. We act as the bridge between visionary intent and realized outcome.',



    outcome1Title: 'Intelligence as Infrastructure',



    outcome1Desc: 'We deploy systems where decision-making is intrinsic, not reactive. Your growth infrastructure becomes a living entity, learning from every interaction to optimize performance in real-time.',



    outcome2Title: 'The End of Fragmentation',



    outcome2Desc: 'We unify disparate digital, media, and customer environments into a singular, cohesive force. This alignment eliminates friction and focuses energy entirely on overarching strategic goals.',



    outcome3Title: 'Durable Value Creation',



    outcome3Desc: 'We build for perpetuity. Unlike campaigns that expire, our architectures compound in value, creating a formidable competitive moat that deepens with time.',



    governanceHeadline: 'Governing the Future',



    governanceDescription: 'Leadership in the modern landscape requires the courage to abandon manual dependencies in favor of systemic mastery. Veye Media partners with executive decision-makers to redefine the boundaries of what is possible. We provide the blueprint and the governance for a new class of enterprise—one that does not merely compete, but dominates through superior architectural design.',



    finalCtaHeadline: 'Experience the power of intelligent design.',



  },



  services: {



    heroTitle: 'What We Build.',



    heroSubtitle: 'System Architectures',



    heroDescription: "We don't just sell hours. We deploy autonomous systems that learn, adapt, and grow your revenue engine continuously across every digital touchpoint.",



    ctaHeadline: 'Ready to upgrade your infrastructure?',



    ctaDesc: 'Get a comprehensive analysis of your current data signals and see where Agentic AI can make the biggest impact on your growth.',



  },



  about: {



    heroTitle: 'Why Veye Media.',



    heroSubtitle: 'Our Strategic Vision',



    heroDescription: 'Veye Marketing is now Veye Media, an Agentic AI-powered media intelligence firm. We build and maintain intelligent systems that drive growth.',



    missionHeadline: 'Systems Over Services',



    missionDescription1: 'We are repositioning because our work has outgrown the label “marketing.” We no longer just deliver campaigns or services — we build and maintain intelligent systems that drive growth.',



    missionDescription2: 'Veye Media represents the full lifecycle of content and communication across digital, audio, and distribution channels. We are a durable, future-ready firm focused on intelligent infrastructure rather than one-off campaigns.',



    pillar1Title: 'Agentic AI',



    pillar1Desc: 'Search, Content, and Demand systems that operate autonomously.',



    pillar2Title: 'Growth & Analytics',



    pillar2Desc: 'Lifecycle communication and real-time decision agents.',



    pillar3Title: 'Creative Infrastructure',



    pillar3Desc: 'High-performance platforms designed for the growth engine.',



    pillar4Title: 'Media Intelligence',



    pillar4Desc: 'Audio and media systems integrated for maximum reach.',



  },



  contact: {



    heroTitle: 'Start a Conversation.',



    heroSubtitle: 'Strategic Inquiry',



    heroDescription: 'Ready to move from one-off campaigns to a durable growth system? Connect with our intelligence team today.',



    formHeadline: 'System Inquiry',



    sidebarHeadline: 'Run System Audit',



    sidebarDesc: 'Identify the optimization gaps in your current marketing architecture. Get immediate AI-driven insights.',



  },



  blog: {



    heroTitle: 'Insights.',



    heroSubtitle: 'Media Lab',



    heroDescription: 'Strategic intelligence, trends, and architectures from the frontier of Agentic AI marketing.',



    posts: {



      'post-1': {



        title: "The Rise of Agentic AI in Digital Marketing",



        excerpt: "Why static automation is dead and autonomous reasoning is the future of growth. Discover how agents are replacing rule-based workflows.",



        date: "Oct 12, 2026",



        category: "Intelligence",



        readTime: "5 min read"



      },



      'post-2': {



        title: "Understanding Answer Engine Optimization (AEO)",



        excerpt: "How to rank when the search engine is an AI that writes its own answers. The new rules of visibility in the age of Gemini and SearchGPT.",



        date: "Nov 05, 2026",



        category: "Systems",



        readTime: "7 min read"



      },



      'post-3': {



        title: "Data Hygiene: Fuel for Autonomous Agents",



        excerpt: "Your AI is only as smart as your data. Learn the essential data cleaning frameworks we use to prepare client datasets.",



        date: "Dec 01, 2026",



        category: "Infrastructure",



        readTime: "4 min read"



      }



    }



  },



  growthSystems: {



    metaTitle: "Velocity Sync Engine™ | Veye Media",



    metaDescription: "The Velocity Sync Engine™ is Veye Media's proprietary orchestration layer, aligning search, media, and intelligence into a continuous growth system.",



    heroEyebrow: "The Orchestration Layer",



    heroHeadline: "Synchronize Intelligence. Accelerate Outcomes.",



    heroSubheadline: "The Velocity Sync Engine™ is the directive core of your growth infrastructure, harmonizing every digital signal.",



    heroSupportingParagraph: "True leverage is found in the synthesis of strategy and autonomy. The Velocity Sync Engine™ is a proprietary orchestration layer that aligns search, content, media, and customer intelligence into a singular, cohesive force. It operates continuously, perceiving market shifts and executing pivots without human delay, ensuring your organization maintains absolute market velocity.",



    heroCtaPrimaryText: "Start an Audit",



    heroCtaSecondaryText: "Contact Us",



    section1Heading: "Unified Growth Intelligence",



    section1Paragraph: "The Engine acts as the directive core of your media environment. It creates a state of perpetual alignment between intent and execution. By processing high-fidelity signals from across your digital surfaces, it ensures that every interaction contributes to a compound growth effect. This is not a management tool; it is a living infrastructure that evolves alongside your objectives.",



    section2Heading: "Beyond Manual Execution",



    section2Paragraph: "Conventional growth models are plagued by fragmentation—disconnected tools, siloed data, and reactive decision-making. The Velocity Sync Engine™ replaces these vulnerabilities with a unified orchestration layer. It eliminates the friction of human-led coordination, replacing transient campaigns with durable, autonomous systems that strengthen over time.",



    section3Heading: "Measured System Performance",



    outcome1Title: "Continuous Alignment",



    outcome1Desc: "Synchronized execution across all search and demand surfaces.",



    outcome2Title: "Autonomous Scaling",



    outcome2Desc: "Systems that detect and capture growth opportunities instantly.",



    outcome3Title: "Durable Advantage",



    outcome3Desc: "Architectural moats that deepen with every system cycle.",



    section4Heading: "The Future of Growth",



    section4Paragraph: "The era of manual management is over. Organizations that thrive in 2026 are those built on intelligent design. We invite you to experience the power of a synchronized growth ecosystem.",



    section4CtaLine: "Initiate a strategic dialogue to review your system architecture today."



  },



  growthSurfaces: {



    metaTitle: "Digital Growth Surfaces | Veye Media",



    metaDescription: "Reimaging digital growth as intelligent infrastructure. Orchestrate search, media, and intelligence into a unified, self-reinforcing growth system.",



    heroEyebrow: "Integrated Growth Systems",



    heroHeadline: "Orchestrate Your Digital Growth Surfaces",



    heroSubheadline: "Beyond isolated channels. Toward a singular, intelligent architecture that drives perpetual market momentum.",



    heroSupportingParagraph: "The conventional approach to digital growth—managing discrete channels—is fundamentally flawed. It creates fragmentation and limits potential. True market leadership is achieved by architecting a single system where all digital interactions function as integrated growth surfaces. This architecture moves beyond channel-based thinking to orchestrate a seamless interplay of discovery, influence, and relationships, creating a self-reinforcing ecosystem.",



    heroCtaPrimaryText: "Start a Conversation",



    heroCtaSecondaryText: "View Systems",



    section1Heading: "A Unified Growth Architecture",



    section1Paragraph: "True market leadership is achieved not by optimizing isolated tactics, but by architecting a single, intelligent system where all digital interactions function as integrated growth surfaces. This is the architecture of unified growth. It moves beyond channel-based thinking to orchestrate a seamless interplay of discovery, influence, and relationships. When these surfaces are governed by a single system, the result is a self-reinforcing ecosystem that drives perpetual momentum.",



    section2Heading: "Interconnected System Layers",



    surface1Name: "Search & Algorithmic Discovery",



    surface1Desc: "Engineering persistent discoverability across search and algorithmic environments at precise moments of intent, making the entire system accessible to high-value audiences.",



    surface2Name: "Geographic Intelligence",



    surface2Desc: "Providing locational context to allow the system to adapt strategies with market-specific precision, ensuring relevance and resonance across diverse territories.",



    surface3Name: "Paid Amplification",



    surface3Desc: "Strategically accelerating reach and influence while capturing critical data to feed insights back into the core architecture for continuous refinement.",



    surface4Name: "Social & Network Engagement",



    surface4Desc: "Transforming passive interactions into durable relationships and social capital, turning audience engagement into a strategic asset for the organization.",



    surface5Name: "Customer Intelligence",



    surface5Desc: "The central layer informing every touchpoint, ensuring interactions are personalized, coherent, and aligned with overarching growth objectives through institutional knowledge.",



    section3Heading: "Self-Sustaining Ecosystem Outcomes",



    section3Paragraph: "When these surfaces are orchestrated by a singular intelligence, they create an exponential effect. Data flows frictionlessly, insights are shared in real time, and every action is informed by the collective wisdom of the system. Growth ceases to be a series of campaigns and becomes a continuous, adaptive, and self-sustaining capability. This is growth reimagined as intelligent infrastructure, built to outperform the market through superior design.",



    section4Heading: "Strategic Growth Dialogue",



    section4Paragraph: "We invite you to engage in a strategic dialogue about system intelligence and growth architecture. Connect with our team to explore the possibilities a unified, intelligent system can unlock for your organization.",



    section4CtaLine: "Initiate a strategic dialogue to review your system architecture today."



  },



  mediaIntelligence: {



    metaTitle: "Media & Audio Intelligence | Veye Media",



    metaDescription: "Redefining media and audio as dynamic system outputs. Discover the architecture of resonance and high-fidelity growth for market leaders.",



    heroEyebrow: "System Output Architecture",



    heroHeadline: "Resonant Outputs of an Intelligent System",



    heroSubheadline: "Engineering media as a strategic growth surface that transmits value and amplifies influence at scale.",



    heroSupportingParagraph: "In a fragmented digital ecosystem, media is often reduced to static assets. We redefine media and audio as dynamic outputs of an intelligent growth infrastructure. They are the resonant frequencies of your system, engineered to create durable connections. When integrated into a growth architecture, media becomes a sophisticated data instrument—a mechanism for sensing market sentiment and broadcasting authority with algorithmic precision.",



    heroCtaPrimaryText: "Start Audit",



    heroCtaSecondaryText: "View Systems",



    section1Heading: "Beyond Static Media Assets",



    section1Paragraph: "Conventional media is often treated as a transactional file to be uploaded. This view fails to capture its potential as a strategic surface. Within an intelligent architecture, audio and visual outputs function as persistent signals that build cumulative trust. We treat media not as a creative artifact, but as a high-fidelity instrument for market leadership. By embedding these outputs into the core engine, we ensure every interaction is perfectly calibrated to transmit organizational value.",



    section2Heading: "Engineering Market Resonance",



    section2Paragraph: "An intelligent system does not simply produce content; it generates resonance. By treating audio and visual outputs as integrated components of your growth engine, we transform them into adaptive signals that align perfectly with market intent. This architecture of resonance ensures that your narrative reach is perpetually optimized. Every signal is a calculated touchpoint, designed to surround and nurture your audience without the friction of manual coordination.",



    section3Heading: "System Intelligence Dynamics",



    intel1Title: "Dynamic Signal Adaptation",



    intel1Desc: "Calibrating media outputs for maximum impact through continuous analysis.",



    intel2Title: "Amplified Narrative Authority",



    intel2Desc: "Transforming voice into persistent assets that build unassailable market positioning.",



    intel3Title: "Scalable Engagement Vectors",



    intel3Desc: "Deploying strategic touchpoints to nurture audiences without manual production constraints.",



    intel4Title: "Real-time Feedback Loops",



    intel4Desc: "Feeding interaction data back into the system for perpetual narrative optimization.",



    section4Heading: "Dominating the Strategic Frequency",



    section4Paragraph: "The objective of modern media intelligence is to move beyond the noise of the market. By establishing a clear, unwavering signal, your system penetrates the competitive landscape and commands absolute attention. This is growth reimagined as immersive infrastructure, where every output is a direct reflection of systemic wisdom. Leadership is achieved when your organization ceases to fill a feed and begins to dominate a frequency, driving strategic outcomes through superior design.",



    section5Heading: "Experience High-Fidelity Growth",



    section5Paragraph: "We invite you to engage in a strategic dialogue about how media and audio intelligence can be integrated into your growth infrastructure. Explore the possibilities of a system working in perfect unison.",



    section5CtaLine: "Initiate a strategic dialogue to review your system architecture today."



  },



  digitalPlatforms: {



    metaTitle: "Digital Platforms | Veye Media",



    metaDescription: "Reimagining digital platforms as the interface of intelligence. Discover how dynamic terminals facilitate bidirectional value exchange for market leaders.",



    heroEyebrow: "The Interface of Intelligence",



    heroHeadline: "Architecting Dynamic Digital Terminals for Growth",



    heroSubheadline: "Beyond the brochure. Toward a responsive skin for your organizational intelligence.",



    heroSupportingParagraph: "In the architecture of modern business, the website has evolved. It is no longer a static destination; it is the primary interface between your market and your organization’s central intelligence. We view digital platforms as dynamic terminals—sensory organs designed to facilitate a seamless, bidirectional exchange of value and data. When architected as the responsive skin of an Intelligent Growth System, these platforms become your most powerful asset for market sensing and relationship orchestration.",



    heroCtaPrimaryText: "Start an Audit",



    heroCtaSecondaryText: "View Systems",



    section1Heading: "The Dynamic Digital Terminal",



    section1Paragraph: "Digital platforms represent the convergence of brand narrative and systemic data precision. Moving beyond the concept of a \"website,\" these terminals act as the sensory hub of the enterprise. They are designed not just to display content, but to serve as the critical point of interaction where market needs meet organizational mission. By establishing a digital environment that is inextricably linked to your central intelligence layer, you transform a passive web presence into a high-fidelity instrument for strategic value exchange.",



    section2Heading: "Behavior and Contextual Fluidity",



    section2Paragraph: "Traditional development often stagnates at aesthetics. We prioritize contextual fluidity, where the platform curates experience based on user intent and real-time insights. An intelligent interface shifts dynamically to meet the visitor, reducing cognitive friction and accelerating the transition from discovery to decision. This creates a state of perpetual alignment, ensuring that the user journey is always optimized for the current market state and strategic objectives.",



    section3Heading: "Commerce as Strategic Value Exchange",



    section3Paragraph: "Ecommerce is reframed as a sophisticated node of relationship orchestration. Beyond transactional utility, an intelligent commerce interface removes the load of purchasing by anticipating needs and streamlining decision-making. These platforms are the visible tip of an integrated systems logic, reflecting the real-time state of inventory, demand, and customer intelligence. Transactions become a natural progression of a deeply responsive, value-driven relationship between the brand and the individual.",



    section4Heading: "Elastic Architectures for Future Growth",



    section4Paragraph: "Static platforms require manual reconstruction to evolve, creating structural fragility as organizations scale. We build for the decade of growth ahead, establishing elastic environments capable of expanding as rapidly as the market itself. This strategic advantage ensures that your digital infrastructure compounds in value, supporting increased market reach and a deepening data ecosystem without structural fracture. You are not building for a campaign; you are constructing a durable foundation for absolute market velocity.",



    section5Heading: "Architect the Intelligent Interface",



    section5Paragraph: "Elevate your digital presence from a passive display to a dynamic, value-generating terminal. We invite you to engage in a dialogue on building strategic systems that connect your market to your mission.",



    section5CtaLine: "Initiate a strategic dialogue to review your platform architecture today."



  },



  whyVeye: {



    metaTitle: "Why Veye Media | The Systems Advantage",



    metaDescription: "Discover why a systems-based architecture outperforms traditional service models. Veye Media architects enduring enterprise value and perpetual growth.",



    heroEyebrow: "The Systems Advantage",



    heroHeadline: "The Architecture of Enduring Value",



    heroSubheadline: "Yesterday’s discrete services are insufficient for the complexity of the modern digital environment.",



    heroSupportingParagraph: "The paradigm for market leadership has shifted. Yesterday’s growth was pursued through isolated campaigns that delivered temporary gains but created no lasting enterprise value. The future belongs to organizations that operate as integrated, intelligent systems. While services provide finite deliverables, systems generate perpetual momentum. This fundamental distinction is the core of our philosophy and the source of our clients' sustained advantage.",



    heroCtaPrimaryText: "Initialize Dialogue",



    heroCtaSecondaryText: "Explore Engine",



    section1Heading: "Beyond Transactional Execution",



    section1Paragraph: "A service-based approach is transactional; it fulfills a function. A systems-based architecture is transformational; it builds a capability. An Intelligent Growth System is an appreciating asset. Unlike a service, which concludes, a system evolves. It learns from every market interaction, refines its own logic, and continuously compounds in intelligence and effectiveness. This creates a powerful flywheel effect where growth is not just achieved, but becomes an inherent property of the organization. You are not merely buying an action; you are investing in an architecture of perpetual improvement.",



    section2Heading: "Durability Over Dependence",



    section2Paragraph: "Engaging services creates a reliance on external execution. Building a system internalizes the capacity for market leadership. The infrastructure for growth becomes an intrinsic part of your organization, a permanent asset that functions with or without external actors. This builds organizational resilience and ensures that strategic capabilities are owned, not rented. The outcome is institutional capability and strategic autonomy. Your organization develops the enduring ability to navigate market dynamics and engineer its own trajectory independently of vendor cycles.",



    section3Heading: "Strategic Organizational Outcomes",



    outcome1Title: "Perpetual Momentum",



    outcome1Desc: "Systems learn and compound intelligence from every interaction continuously.",



    outcome2Title: "Strategic Autonomy",



    outcome2Desc: "Internalized growth infrastructure ensures capabilities are owned, not rented.",



    outcome3Title: "Institutional Resilience",



    outcome3Desc: "Durable architectures function as permanent assets for market leadership.",



    section4Heading: "Elasticity in Market Volatility",



    section4Paragraph: "Service agreements are defined by a fixed scope. Systems are defined by their capacity for adaptation. An Intelligent Growth System is designed to be elastic, expanding and recalibrating in response to market volatility and emerging opportunities. Where rigid service structures fracture under pressure, an adaptive system gains strength, turning unforeseen challenges into strategic advantages. This creates antifragile operations and unmatched adaptability, allowing your enterprise to not only withstand market turbulence but to harness it for competitive gain through superior architectural design.",



    section5Heading: "Architect Your Growth Engine",



    section5Paragraph: "The defining question is no longer who can execute a task, but who can architect a capability. The most successful organizations of the next decade will not be those with the longest list of vendors, but those with the most sophisticated internal systems. We do not provide services. We construct the engines of future value.",



    section5CtaLine: "Initiate a strategic dialogue to review your system architecture today."



  },



  executiveInsights: {



    metaTitle: "Executive Systems Insights | Veye Media",



    metaDescription: "Exploring the principles of systems thinking and the architecture of enduring enterprise advantage for market leaders.",



    heroEyebrow: "Strategic Architecture",



    heroHeadline: "The Architecture of Advantage",



    heroSubheadline: "Move beyond isolated tactics toward the construction of intelligent systems that generate perpetual enterprise value.",



    heroSupportingParagraph: "The pursuit of growth through isolated tactics is an exercise in diminishing returns. True market leadership is not won through a sequence of discrete actions but architected through the construction of intelligent systems. These insights explore the fundamental principles of systems-thinking and its application in building durable enterprise value. Our mandate is to provide the strategic clarity required to move from transactional execution to systemic mastery.",



    heroCtaPrimaryText: "Initialize Dialogue",



    heroCtaSecondaryText: "View Systems",



    section1Heading: "On Value Creation: Services vs. Systems",



    section1Paragraph: "A service is a finite transaction that solves a momentary problem. A system is an enduring asset that creates perpetual capability. The former addresses symptoms; the latter re-engineers the organism. Organizations that continue to procure services are renting solutions, while those that build systems are investing in the permanent infrastructure of advantage. The critical distinction lies in ownership and evolution—a system matures and compounds in value, while a service agreement simply expires.",



    section2Heading: "Projects vs. Inherent States",



    section2Paragraph: "Tactics are defined by projects; systems are defined by states. A project is an isolated effort with a fixed deadline and a terminal outcome. In contrast, an Intelligent Growth System establishes an inherent state of market readiness and continuous performance. We move organizations beyond the 'next project' mentality into a paradigm where market sensing and response are fundamental properties of the enterprise. This shift internalizes growth, making it a persistent capability rather than an occasional activity.",



    section3Heading: "Linear vs. Elastic Growth",



    section3Paragraph: "Traditional growth models scale linearly, where increased output requires a proportional increase in headcount or spend. Systems-based growth is elastic. By leveraging the compound effects of autonomous intelligence and orchestrated surfaces, an enterprise can capture disproportionate market value without traditional scaling bottlenecks. Elastic growth is achieved when the system’s capacity for insight and execution expands in direct response to opportunity, unfettered by manual dependencies.",



    section4Heading: "Rigidity vs. Antifragility",



    section4Paragraph: "Rigid organizational structures break under the pressure of market volatility and rapid shifts in consumer behavior. Antifragile systems, however, gain strength from disorder. By architecting growth as an adaptive system, we ensure that volatility becomes a source of intelligence. Every market fluctuation is a data signal that the system uses to recalibrate and strengthen its positioning. In the modern environment, the goal is not to resist change, but to build an architecture that thrives because of it.",



    section5Heading: "The Infrastructure of Strategic Autonomy",



    section5Paragraph: "True organizational capability is found in the synthesis of strategy and autonomy. By establishing intelligent infrastructure, leadership can pivot from managing workflows to governing outcomes. This requires the courage to abandon manual dependencies in favor of systemic logic. The result is a more resilient organization capable of navigating market complexity with absolute precision, turning data signals into institutional knowledge and long-term competitive moats.",



    section5CtaLine: "Initiate a strategic dialogue to review your system architecture today."



  },



  systems: {



    'ai-marketing-solutions': {



      ...defaultSystemFeatures,



      title: 'AI-Powered Marketing Solutions',



      description: 'Leverages artificial intelligence to improve efficiency and effectiveness through personalized recommendations, predictive analytics, and automated processes.',



      capabilityHeadline: 'Intelligent Decision Logic',



      capabilityDescription: 'This system operates as a core module in your growth infrastructure. Unlike traditional services that require manual oversight, this agentic system uses predictive logic to anticipate market shifts and execute optimizations in real-time.'



    },



    'predictive-analytics': {



      ...defaultSystemFeatures,



      title: 'Predictive Analytics',



      description: 'Uses advanced analytics techniques to forecast future trends and outcomes, helping businesses anticipate customer behavior and make proactive decisions.',



      capabilityHeadline: 'Anticipatory Growth Signals',



      capabilityDescription: 'Predictive analytics turns your historical data into a roadmap. We deploy agents that identify clusters of high-intent behavior before they result in a conversion, allowing for preemptive optimization.'



    },



    'attribution-modeling': {



      ...defaultSystemFeatures,



      title: 'Attribution Modeling',



      description: 'Helps in understanding the contribution of different marketing channels to conversions by assigning credit to various touchpoints in the customer journey.',



      capabilityHeadline: 'Full-Funnel Intelligence',



      capabilityDescription: 'Understand the exact weight of every interaction. Our attribution system tracks the non-linear path of modern buyers across digital, social, and search surfaces.'



    },



    'clv-optimization': {



      ...defaultSystemFeatures,



      title: 'CLV Modeling & Optimization',



      description: 'Focuses on utilizing predictive analytics to model the long-term profitability of customer segments, helping to optimize acquisition and retention strategies.',



      capabilityHeadline: 'LTV Maximization',



      capabilityDescription: 'Not all growth is equal. This system prioritizes segments with the highest long-term profitability, ensuring your acquisition budget is spent on high-value lifecycle leads.'



    },



    'marketing-performance-reporting': {



      ...defaultSystemFeatures,



      title: 'Performance Dashboards',



      description: 'Involves creating comprehensive dashboards that provide real-time insights into marketing performance and detailed reporting on key metrics.',



      capabilityHeadline: 'Real-Time Command Center',



      capabilityDescription: 'Visibility is the foundation of control. Our dashboards aggregate signals from across your entire tech stack, providing a unified view of your growth infrastructure.'



    },



    'website-optimization': {



      ...defaultSystemFeatures,



      title: 'Website Design & Optimization',



      description: 'Involves designing and optimizing websites to enhance user experience and improve search engine rankings with an SEO focus.',



      capabilityHeadline: 'Conversion Surface Design',



      capabilityDescription: 'Your website is the physical hub of your digital growth system. We optimize every pixel for data capture, technical performance, and intent-driven navigation.'



    },



    'ecommerce-websites': {



      ...defaultSystemFeatures,



      title: 'E-Commerce Websites',



      description: 'Responsive, conversion-optimized e-commerce websites that provide seamless shopping experiences, mobile optimization, and ongoing management.',



      capabilityHeadline: 'Direct Commerce Systems',



      capabilityDescription: 'Build a store that learns. Our e-commerce platforms integrate with your demand and inventory systems to dynamically adjust to market signals.'



    },



    'ada-compliance': {



      ...defaultSystemFeatures,



      title: 'ADA Compliance Services',



      description: 'Helps your site meet WCAG standards, reduce legal risk, and create an inclusive digital experience for all users.',



      capabilityHeadline: 'Inclusive Infrastructure',



      capabilityDescription: 'Accessibility is a core component of system durability. We ensure your platforms are compliant, resilient, and accessible to 100% of your audience.'



    },



    'aeo-optimization': {



      ...defaultSystemFeatures,



      title: 'Answer Engine Optimization (AEO)',



      description: 'Focuses on optimizing content and technical structure to secure highly visible featured snippets and direct answers in search engines.',



      capabilityHeadline: 'The Answer-First Economy',



      capabilityDescription: 'In a world where AI generates the answers, traditional SEO isn’t enough. AEO ensures your brand is the primary source of truth for conversational AI engines.'



    },



    'generative-seo': {



      ...defaultSystemFeatures,



      title: 'Generative SEO',



      description: 'Combines traditional optimization with AI-powered content creation and semantic search strategies for intent-driven, long-tail queries.',



      capabilityHeadline: 'Semantic Search Authority',



      capabilityDescription: 'Generative SEO maps your brand to the way users search today. We optimize for intent-driven clusters that capture high-value organic traffic.'



    },



    'voice-search-strategy': {



      ...defaultSystemFeatures,



      title: 'Voice Search & Conversational AI',



      description: 'Develops strategies for optimizing content and functionality for voice-activated devices and conversational AI interfaces.',



      capabilityHeadline: 'Audio-First Visibility',



      capabilityDescription: 'Be present where your customers are talking. This system optimizes your brand for voice-first interactions across mobile and home devices.'



    },



    'digital-ad-campaigns': {



      ...defaultSystemFeatures,



      title: 'Digital Ad Campaigns',



      description: 'Combines strategic targeting, compelling creative, and data-driven optimization across Google Ads, Meta Ads, and LinkedIn.',



      capabilityHeadline: 'Demand Generation Engine',



      capabilityDescription: 'Targeted ad systems that respond to real-time intent. We orchestrate paid signals that integrate perfectly with your organic and social surfaces.'



    },



    'social-media-marketing': {



      ...defaultSystemFeatures,



      title: 'Social Media Intelligence',



      description: 'Builds a consistent, engaging presence across platforms through strategy, content, and automation.',



      capabilityHeadline: 'Signal Amplification',



      capabilityDescription: 'Social media is a sensing surface. We use intelligence to distribute content that resonates with your core segments and captures high-value engagement data.'



    },



    'email-automation': {



      ...defaultSystemFeatures,



      title: 'Email Strategy & Automation',



      description: 'Develops effective email strategies and implementing automation tools to engage audience, nurture leads, and drive conversions.',



      capabilityHeadline: 'Lifecycle Nurture Agents',



      capabilityDescription: 'Email is the most direct line to your audience. We build automated systems that respond to user behavior with personalized, high-value communication.'



    },



    'brand-strategy': {



      ...defaultSystemFeatures,



      title: 'Brand Strategy & Positioning',



      description: 'Helps define and position your brand with clarity through audience research, competitive analysis, and messaging development.',



      capabilityHeadline: 'Strategic Identity Hub',



      capabilityDescription: 'Before you scale, you must be clear. This system aligns your brand’s core messaging with the specific intent of your high-value audience segments.'



    },



    'marketing-audit': {



      ...defaultSystemFeatures,



      title: 'Marketing Systems Audit',



      description: 'A comprehensive audit evaluates digital marketing efforts across platforms, providing clear reports to fix inefficiencies and align with goals.',



      capabilityHeadline: 'Infrastructure Analysis',



      capabilityDescription: 'Identify the gaps in your growth engine. Our audit system reviews your data flow, conversion surfaces, and demand signals to find immediate ROI opportunities.'



    },



    'echo-ai-content': {



      ...defaultSystemFeatures,



      title: 'EchoAI: Personalized Content',



      description: 'Leverages proprietary EchoAI to generate dynamically personalized marketing assets at scale using real-time data.',



      capabilityHeadline: 'Mass Personalization Logic',



      capabilityDescription: 'Deliver a unique message to every prospect. EchoAI uses first-party data to generate creative assets that are highly relevant to individual user intent.'



    },



    'crm-implementation': {



      ...defaultSystemFeatures,



      title: 'Integrative CRM Implementation',



      description: 'Consultation, setup, and integration of core marketing technology platforms to ensure seamless data flow and execution.',



      capabilityHeadline: 'The Growth Nerve Center',



      capabilityDescription: 'Your CRM is the brain of your growth infrastructure. We integrate it with all media and search surfaces to ensure no signal is ever lost.'



    },



    'virginia-local-market': {



      ...defaultSystemFeatures,



      title: 'Virginia Local Market Services',



      description: 'Combining local expertise across Lynchburg, Richmond, VA Beach, and more with national-level strategic intelligence.',



      capabilityHeadline: 'Regional Growth Authority',



      capabilityDescription: 'Veye Media serves the 12 specific Virginia regions with deep local context. We map local market trends to national-grade agentic growth strategies.'



    }



  }



};





type SiteContent = typeof defaultContent;

type ContentContextType = {

  content: SiteContent;

  updateContent: (section: keyof SiteContent, key: string, value: string, subKey?: string, nestedKey?: string) => void;

  isEditing: boolean;

  toggleEditing: () => void;

  resetContent: () => void;

};

const STORAGE_KEY = 'veye_media_site_content_v16';

const isRecord = (value: unknown): value is Record<string, unknown> =>

  typeof value === 'object' && value !== null && !Array.isArray(value);

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [content, setContent] = useState<SiteContent>(defaultContent);

  const [isEditing, setIsEditing] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    try {

      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {

        const parsed: unknown = JSON.parse(saved);

        if (isRecord(parsed)) {
          const savedHome = isRecord(parsed.home) ? parsed.home : {};
          const home = { ...defaultContent.home, ...savedHome };
          // Update only the recognized previous homepage statements.
          if (home.heroTitle === 'We Build Intelligent Growth Systems.' ||
              home.heroTitle === 'We Build Intelligent Growth Systems') {
            home.heroTitle = defaultContent.home.heroTitle;
          }
          if (home.heroSubtitle === 'We connect your existing tools, align people, processes, data, and AI, and imrpove execution to support measurable growth.') {
            home.heroSubtitle = defaultContent.home.heroSubtitle;
          }
          if (home.heroSupportingLine === 'Not campaigns. Not tools. Systems that operate, adapt, and improve over time.') {
            home.heroSupportingLine = defaultContent.home.heroSupportingLine;
          }
          setContent({ ...defaultContent, ...parsed, home } as SiteContent);
        }

      }

    } catch (error) { console.error('Failed to load saved content', error); }

    setIsLoaded(true);

  }, []);

  useEffect(() => {

    if (!isLoaded) return;

    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(content)); }

    catch (error) { console.error('Failed to save content', error); }

  }, [content, isLoaded]);

  const updateContent: ContentContextType['updateContent'] = (section, key, value, subKey, nestedKey) => {

    setContent((prev: SiteContent) => {

      const sectionData: unknown = prev[section];

      if (!isRecord(sectionData)) return prev;

      if (section === 'systems') {

        if (!subKey) return prev;

        const system = sectionData[subKey];

        if (!isRecord(system)) return prev;

        return { ...prev, [section]: { ...sectionData, [subKey]: { ...system, [key]: value } } } as SiteContent;

      }

      if (section === 'blog' && key === 'posts') {

        if (!subKey || !nestedKey) return prev;

        const posts = sectionData.posts;

        if (!isRecord(posts)) return prev;

        const post = posts[subKey];

        if (!isRecord(post)) return prev;

        return { ...prev, [section]: { ...sectionData, posts: { ...posts, [subKey]: { ...post, [nestedKey]: value } } } } as SiteContent;

      }

      return { ...prev, [section]: { ...sectionData, [key]: value } } as SiteContent;

    });

  };

  const resetContent = () => {

    if (window.confirm('Are you sure you want to reset all content to default?')) {

      setContent(defaultContent);

      try { localStorage.removeItem(STORAGE_KEY); }

      catch (error) { console.error('Failed to clear saved content', error); }

    }

  };

  const toggleEditing = () => setIsEditing(previous => !previous);

  return (

    <div className={isEditing ? 'content-editing-active' : ''}>

      <ContentContext.Provider value={{ content, updateContent, isEditing, toggleEditing, resetContent }}>

        {children}

      </ContentContext.Provider>

    </div>

  );

};

export const useContent = (): ContentContextType => {

  const context = useContext(ContentContext);

  if (!context) throw new Error('useContent must be used within a ContentProvider');

  return context;

};
