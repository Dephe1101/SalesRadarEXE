export type SignalTag = 'NEED_AGENCY' | 'NEED_LOGISTIC' | 'HEALTH_TECH' | 'FINTECH' | 'GENERAL';

export interface ScoreWeights {
  fit: number;
  signal: number;
  recency: number;
}

export interface Lead {
  id: string;
  company: string;
  jobTitle: string;
  description: string;
  source: string;
  fitScore: number;    // 0-10
  signalScore: number; // 0-10
  recencyScore: number; // 0-10
  tags: SignalTag[];
  totalScore: number;  // 0-10 (calculated)
  isSaved?: boolean;
  createdAt: string;
}
