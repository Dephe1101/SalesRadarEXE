"use client";

import React, { useState } from 'react';
import { useRadarLeads } from '@/hooks/api/useLeads';
import { Lead } from '@/types/lead';
import { leadService } from '@/services/lead.service';
import { toast } from 'sonner';
import { 
  Building2,
  Sparkles,
  MoreHorizontal,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Loader2,
  Target,
  ArrowUpRight,
  Activity,
  MessageSquare,
  Globe
} from 'lucide-react';
import { LeadDetailModal } from './LeadDetailModal';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const LeadTable: React.FC = () => {
  const { data: leads, isLoading } = useRadarLeads();
  const [isProcessing, setIsProcessing] = React.useState<string | null>(null);
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null);

  const handleGenEmail = async (lead: Lead) => {
    setIsProcessing(lead.id);
    const toastId = toast.loading(`Đang khơi tạo AI cho ${lead.company}...`);
    
    try {
      const email = await leadService.generateAiEmail(lead);
      toast.success("Đã tạo kịch bản tiếp cận", {
        id: toastId,
        description: "Xem bản nháp trong không gian làm việc.",
        action: { label: "Xem ngay", onClick: () => console.log(email) },
      });
    } catch (error) {
      toast.error("Quá trình bị gián đoạn", { id: toastId });
    } finally {
      setIsProcessing(null);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-emerald-500 border-emerald-500/30 bg-emerald-500/5";
    if (score >= 5) return "text-amber-500 border-amber-500/30 bg-amber-500/5";
    return "text-rose-500 border-rose-500/30 bg-rose-500/5";
  };

  if (isLoading) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-6 rounded-[32px] border border-border bg-muted/20">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-16 w-16 animate-ping rounded-full bg-primary/20" />
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Đang đồng bộ dữ liệu tín hiệu...</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="rounded-3xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead className="px-8 h-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground">Doanh nghiệp / Lead</TableHead>
              <TableHead className="px-8 h-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground">Nguồn tín hiệu</TableHead>
              <TableHead className="px-8 h-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground">Lĩnh vực & Phân loại</TableHead>
              <TableHead className="px-8 h-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground">Độ nóng (Score)</TableHead>
              <TableHead className="px-8 h-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads?.map((lead) => (
              <TableRow 
                key={lead.id} 
                className="group border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => setSelectedLead(lead)}
              >
                <TableCell className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-border transition-transform group-hover:scale-105">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {lead.company}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{lead.jobTitle}</div>
                    </div>
                  </div>
                </TableCell>
                
                <TableCell className="px-8 py-5">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-foreground font-bold text-xs italic">
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      {lead.source}
                    </div>
                    <div className="text-[9px] font-bold text-muted-foreground uppercase mt-1">Dữ liệu công khai</div>
                  </div>
                </TableCell>
 
                <TableCell className="px-8 py-5">
                  <div className="flex flex-wrap gap-2">
                    {lead.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="rounded-lg border-primary/10 bg-primary/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary hover:bg-primary/10"
                      >
                        {tag.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
 
                <TableCell className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border font-black text-lg shadow-sm ${getScoreColor(lead.totalScore)}`}>
                      {lead.totalScore}
                    </div>
                    <div className="space-y-1.5 flex-1 max-w-[100px]">
                      <div className="text-[9px] font-bold text-muted-foreground uppercase">Độ ưu tiên</div>
                      <Progress value={(lead.totalScore / 10) * 100} className="h-1.5 w-full bg-muted" />
                    </div>
                  </div>
                </TableCell>
 
                <TableCell className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGenEmail(lead)}
                      disabled={isProcessing === lead.id}
                      className="rounded-xl h-9 px-4 text-[10px] font-bold uppercase tracking-widest gap-2 hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      {isProcessing === lead.id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <>
                          <Sparkles className="h-3.5 w-3.5" />
                          Tạo kịch bản
                        </>
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 border border-border rounded-xl">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/20 px-8 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Dữ liệu bảo mật</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Tối ưu thời gian thực</span>
          </div>
        </div>
        <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          Quét lần cuối: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <LeadDetailModal 
        lead={selectedLead}
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        onGenerateEmail={handleGenEmail}
      />
    </div>
  );
};
