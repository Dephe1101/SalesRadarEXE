import { useQuery } from '@tanstack/react-query';
import { leadService } from '@/services/lead.service';
import { autoTagLead } from '@/core/tagging.engine';
import { calculateLeadScore } from '@/core/scoring.engine';
import { useScoringStore } from '@/stores/useScoringStore';
import { Lead } from '@/types/lead';

/**
 * Hook to fetch and process leads from the radar sourcing engines.
 * Integrates tagging and scoring logic directly in the data pipeline.
 */
export const useRadarLeads = () => {
  const { weights } = useScoringStore();

  return useQuery({
    queryKey: ['radar-leads'],
    queryFn: leadService.fetchRadarLeads,
    select: (data: Lead[]) => {
      // Map data to include intelligent tags and calculated scores
      const processed = data.map((lead) => {
        const tags = autoTagLead(lead.jobTitle, lead.description);
        
        // Temporarily create lead object to satisfy scoring engine
        const leadForCalculation = { ...lead, tags };
        const totalScore = calculateLeadScore(leadForCalculation as Lead, weights);
        
        return {
          ...leadForCalculation,
          totalScore,
        } as Lead;
      });

      // Sort by priority descending (highest score first)
      return processed.sort((a, b) => b.totalScore - a.totalScore);
    },
  });
};
