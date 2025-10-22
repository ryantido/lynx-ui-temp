import { LucideIcon } from "lucide-react";
import type { HTMLMotionProps } from "motion/react";

export type DashboardView = "overview" | "chatbot" | "invoices" | "settings";
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type Page = "home" | "about" | "services" | "contact";
export type InvoiceStatus = "paid" | "pending" | "overdue";
export type ButtonSize = "default" | "sm" | "lg";

export interface NavigationProps {
  onNavigate?: (page: string) => void;
}

export interface HomePageProps {
  onNavigate?: (page: string) => void;
  onOpenDashboard?: () => void;
}

export interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Invoice {
  id: string;
  number: string;
  client: string;
  amount: number;
  status: InvoiceStatus;
  date: string;
  dueDate: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
  onExit: () => void;
}

export interface CaseStudyCardProps {
  image: string;
  company: string;
  metric: string;
  metricValue: string;
  description: string;
  onLearnMore?: () => void;
}

export interface LynxButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  children: React.ReactNode;
  fullWidth?: boolean;
}
