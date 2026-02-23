import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ScoreWeights } from '@/types/lead';

interface ScoringStore {
  weights: ScoreWeights;
  setWeights: (weights: ScoreWeights) => void;
  resetWeights: () => void;
}

const DEFAULT_WEIGHTS: ScoreWeights = {
  fit: 0.2,    // A
  signal: 0.5, // B
  recency: 0.3, // C
};

export const useScoringStore = create<ScoringStore>()(
  persist(
    (set) => ({
      weights: DEFAULT_WEIGHTS,
      setWeights: (weights) => set({ weights }),
      resetWeights: () => set({ weights: DEFAULT_WEIGHTS }),
    }),
    {
      name: 'sales-radar-scoring-config',
    }
  )
);
