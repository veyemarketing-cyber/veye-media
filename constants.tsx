import { NavItem, Page } from './types';

export const BRAND_NAME = "Veye Media";
export const DOMAIN = "veyemedia.co";
export const PRIMARY_STATEMENT = "We don’t sell services. We build and maintain intelligent systems that drive growth.";

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: Page.Home },
  { label: 'Velocity Sync Engine™', path: Page.VelocitySync },
  {
    label: 'Systems We Build',
    path: Page.SystemsWeBuild,
    children: [
      { label: 'Growth Surfaces', path: Page.GrowthSurfaces },
      { label: 'Media Intelligence', path: Page.MediaIntelligence },
      { label: 'Digital Platforms', path: Page.DigitalPresence },
      { label: 'Intelligent Growth Systems', path: Page.IntelligentGrowthSystems },
    ]
  },
  { label: 'Who We Work With', path: Page.WhoWeWorkWith },
  { label: 'Why Veye Media', path: Page.WhyVeye },
  { label: 'Insights', path: Page.Insights },
  { label: 'Start a Conversation', path: Page.StartConversation },
];

export const REGIONS = [
  "Lynchburg", "Roanoke", "Richmond", "Petersburg", 
  "Chesterfield", "Virginia Beach", "Norfolk", "Chesapeake", 
  "Portsmouth", "Suffolk", "Alexandria", "Arlington"
];
