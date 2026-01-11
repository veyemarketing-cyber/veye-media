
import React from 'react';
import { 
  Cpu, 
  BarChart3, 
  Share2, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  BrainCircuit, 
  LineChart, 
  ShieldCheck,
  Menu,
  X,
  Loader2,
  Layout,
  Search,
  MessageSquareText,
  Sparkles,
  FileText,
  Target,
  ShoppingCart,
  Workflow,
  GraduationCap,
  MapPin,
  Eye,
  Globe,
  Repeat,
  Settings,
  Users,
  Mail,
  Phone,
  Map,
  ChevronDown,
  Check,
  XCircle,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const icons: Record<string, React.ElementType> = {
    Cpu,
    BarChart3,
    Share2,
    Database,
    Zap,
    ArrowRight,
    CheckCircle,
    BrainCircuit,
    LineChart,
    ShieldCheck,
    Menu,
    X,
    Loader2,
    Layout,
    Search,
    MessageSquareText,
    Sparkles,
    FileText,
    Target,
    ShoppingCart,
    Workflow,
    GraduationCap,
    MapPin,
    Eye,
    Globe,
    Repeat,
    Settings,
    Users,
    Mail,
    Phone,
    Map,
    ChevronDown,
    Check,
    XCircle,
    Linkedin,
    Twitter,
    Facebook
  };

  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} />;
};
