import { SignalTag } from '@/types/lead';

/**
 * Auto-tags a lead based on keywords found in job title or description.
 * 
 * Logic:
 * - Marketing, Brand, Content -> NEED_AGENCY
 * - Kho, Vận đơn, XNK, Logistics -> NEED_LOGISTIC
 */
export function autoTagLead(jobTitle: string, description: string): SignalTag[] {
  const tags: Set<SignalTag> = new Set();
  const content = `${jobTitle} ${description}`.toLowerCase();

  const agencyKeywords = ['marketing', 'brand', 'content', 'advertisement', 'social media'];
  const logisticKeywords = ['kho', 'vận đơn', 'xnk', 'logistics', 'vận tải', 'chuỗi cung ứng', 'shipping', 'freight'];

  if (agencyKeywords.some(kw => content.includes(kw))) {
    tags.add('NEED_AGENCY');
  }

  if (logisticKeywords.some(kw => content.includes(kw))) {
    tags.add('NEED_LOGISTIC');
  }

  if (tags.size === 0) {
    tags.add('GENERAL');
  }

  return Array.from(tags);
}
