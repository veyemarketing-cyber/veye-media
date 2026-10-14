import React from 'react';
import {
  BrainCircuit,
  Cpu,
  Zap,
  Layers,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Activity,
  Sliders,
  Globe,
  RefreshCw,
  Search,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export type IconName =
  | 'BrainCircuit'
  | 'Cpu'
  | 'Zap'
  | 'Layers'
  | 'Workflow'
  | 'ShieldCheck'
  | 'TrendingUp'
  | 'Activity'
  | 'Sliders'
  | 'Globe'
  | 'RefreshCw'
  | 'Search'
  | 'ArrowRight'
  | 'ChevronDown'
  | 'Menu'
  | 'X'
  | 'CheckCircle2'
  | 'AlertCircle'
  | 'HelpCircle';

interface IconProps {
  name: IconName | string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  BrainCircuit,
  Cpu,
  Zap,
  Layers,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Activity,
  Sliders,
  Globe,
  RefreshCw,
  Search,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle
};

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = '' }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent size={size} className={className} />;
};