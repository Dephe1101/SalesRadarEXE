import { z } from 'zod';

export const ScoreWeightsSchema = z.object({
  fit: z.number().min(0).max(1),
  signal: z.number().min(0).max(1),
  recency: z.number().min(0).max(1),
}).refine((data) => {
  const sum = data.fit + data.signal + data.recency;
  return Math.abs(sum - 1) < 0.01;
}, {
  message: "The sum of weights (Fit + Signal + Recency) must exactly equal 1.0",
});

export const LeadSchema = z.object({
  id: z.string(),
  company: z.string().min(1),
  jobTitle: z.string().min(1),
  description: z.string(),
  source: z.string(),
  fitScore: z.number().min(0).max(10),
  signalScore: z.number().min(0).max(10),
  recencyScore: z.number().min(0).max(10),
  tags: z.array(z.string()),
  totalScore: z.number().optional(),
  createdAt: z.string().datetime(),
});

export type ScoreWeightsInput = z.infer<typeof ScoreWeightsSchema>;
export type LeadInput = z.infer<typeof LeadSchema>;
