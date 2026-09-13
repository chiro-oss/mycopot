export type PageId = 'home' | 'material' | 'products' | 'process' | 'rd' | 'about' | 'contact' | 'investor';

export type Language = 'id' | 'en';

export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  size: string;
  price: string;
  priceRaw: number;
  application: string;
  shortDescription: string;
  fullDescription: string;
  dimensions: string;
  wallThickness: string;
  substrate: string;
  binder: string;
  features: string[];
  image: string;
  isCustom?: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  summary: string;
  description: string;
  parameters: {
    temp?: string;
    humidity?: string;
    action: string;
    equipment?: string;
  };
}

export interface ResearchPillar {
  id: string;
  code: string;
  title: string;
  focus: string;
  scope: string[];
  status: 'In Active Testing' | 'Formulation Stage' | 'Exploratory Phase' | 'Iterative Evaluation';
}

export interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  department: string;
  avatarSeed: string;
}

export interface MilestoneItem {
  period: string;
  phase: string;
  description: string;
  keyOutputs: string[];
  status: 'Current Focus' | 'Scheduled' | 'Upcoming';
}

export interface CircularStep {
  step: number;
  label: string;
  category: 'Input' | 'Transformation' | 'Application' | 'Regeneration';
  description: string;
}
