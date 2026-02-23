import axios from 'axios';
import { Lead } from '@/types/lead';

// Mock data for B2B leads
const MOCK_LEADS: Partial<Lead>[] = [
  {
    id: 'lead_001',
    company: 'Nexus Marketing Group',
    jobTitle: 'VP of Brand Growth',
    description: 'Developing new market entry strategy and creative content oversight.',
    source: 'SerpAPI',
    fitScore: 8.5,
    signalScore: 9.0,
    recencyScore: 10,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_002',
    company: 'Vietnam Express Logistics',
    jobTitle: 'Trưởng phòng Vận tải & Kho bãi',
    description: 'Quản lý quy trình vận đơn và tối ưu hóa chi phí logistics cho công ty XNK.',
    source: 'Dauthau.asia',
    fitScore: 9.5,
    signalScore: 8.5,
    recencyScore: 9,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_003',
    company: 'Global Trade Hub',
    jobTitle: 'Logistics Operations Director',
    description: 'Focusing on supply chain transparency and shipping efficiency.',
    source: 'RapidAPI',
    fitScore: 7.5,
    signalScore: 6.0,
    recencyScore: 8,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_004',
    company: 'Creative Pulse Agency',
    jobTitle: 'Head of Content Strategy',
    description: 'Scaling digital marketing campaigns and brand storytelling.',
    source: 'Apify',
    fitScore: 6.5,
    signalScore: 9.5,
    recencyScore: 7,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_005',
    company: 'SafePort Shipping',
    jobTitle: 'Manager XNK & Customs',
    description: 'Automating logistics documentation and freight forwarding.',
    source: 'Dauthau.asia',
    fitScore: 8.0,
    signalScore: 7.5,
    recencyScore: 10,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_006',
    company: 'TechFlow Solutions',
    jobTitle: 'Marketing Manager',
    description: 'Executing multi-channel content marketing plans.',
    source: 'SerpAPI',
    fitScore: 5.5,
    signalScore: 8.0,
    recencyScore: 6,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_007',
    company: 'Alpha Logistics',
    jobTitle: 'Warehouse Supervisor',
    description: 'Supervising kho operations and inventory management.',
    source: 'RapidAPI',
    fitScore: 9.0,
    signalScore: 5.5,
    recencyScore: 8,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_008',
    company: 'Brand Builders Inc',
    jobTitle: 'Director of Brand Identity',
    description: 'Reforming company branding and high-impact content production.',
    source: 'Apify',
    fitScore: 7.0,
    signalScore: 9.0,
    recencyScore: 9,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_009',
    company: 'Oceanic Freight',
    jobTitle: 'Supply Chain Analyst',
    description: 'Analyzing logistics data and international shipping routes.',
    source: 'SerpAPI',
    fitScore: 8.5,
    signalScore: 6.5,
    recencyScore: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead_010',
    company: 'Digital Horizon',
    jobTitle: 'Social Media & Content Lead',
    description: 'Leading content creation for B2B marketing channels.',
    source: 'RapidAPI',
    fitScore: 6.0,
    signalScore: 8.5,
    recencyScore: 10,
    createdAt: new Date().toISOString(),
  }
];

export const leadService = {
  /**
   * Simulates fetching leads from various sourcing APIs.
   */
  fetchRadarLeads: async (): Promise<Lead[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // In production, this would be:
    // const response = await axios.get('/api/leads/radar');
    // return response.data;
    
    return MOCK_LEADS as Lead[];
  },

  /**
   * Simulates AI-powered sales email generation.
   */
  generateAiEmail: async (lead: Lead): Promise<string> => {
    // Simulate complex AI processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    return `Subject: Partnership Proposal - ${lead.company}

Hi ${lead.jobTitle},

I noticed your work at ${lead.company} regarding ${lead.description.substring(0, 40)}...

Given your focus on ${lead.tags.join(' and ')}, I believe our Sales Radar platform can provide significant value by streamling your lead intelligence.

Looking forward to connecting.

Best,
The Sales Radar Team`;
  }
};
