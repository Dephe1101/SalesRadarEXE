import { Lead, ScoreWeights } from '@/types/lead';
import { ScoreWeightsSchema } from '@/schemas/lead.schema';

/**
 * Calculates the total score for a lead based on weights for Fit, Signal, and Recency.
 * The result is normalized to a 10-point scale.
 * 
 * 2nd Layer of Defense: Logic Validation
 * Ensures weights are valid according to domain rules before processing.
 */
export function calculateLeadScore(lead: Lead, weights: ScoreWeights): number {
  // Validate weights using Zod
  const validation = ScoreWeightsSchema.safeParse(weights);
  
  if (!validation.success) {
    console.error("Invalid Weights provided to Scoring Engine:", validation.error.format());
    // Fallback to equal distribution or return 0 if critical
    return 0;
  }

  const { fit, signal, recency } = validation.data;

  // Raw weighted score calculation
  const rawScore = 
    (fit * lead.fitScore) + 
    (signal * lead.signalScore) + 
    (recency * lead.recencyScore);

  return Math.max(0, Math.min(10, Math.round(rawScore * 10) / 10));
}
