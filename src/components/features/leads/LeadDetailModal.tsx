"use client";

import React from 'react';
import { Lead } from '@/types/lead';
import { 
  Building2, 
  Target, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  Bookmark,
  X,
  Zap,
  Briefcase,
  History,
  Activity,
  Share2,
  MessageSquare,
  AlertCircle,
  Plus,
  LucideIcon
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface LeadDetailModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onGenerateEmail: (lead: Lead) => void;
}

export const LeadDetailModal: React.FC<LeadDetailModalProps> = ({ 
  lead, 
  isOpen, 
  onClose,
  onGenerateEmail
}) => {
  if (!lead) return null;

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (score >= 5) return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-rose-500 bg-rose-500/10 border-rose-500/20";
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] lg:max-w-[1400px] w-full rounded-[40px] border-border bg-background p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="hidden">
          <DialogTitle>{lead.company}</DialogTitle>
          <DialogDescription>Lead Detail View</DialogDescription>
        </DialogHeader>

        {/* Custom Header / Hero Section */}
        <div className="relative bg-muted/20 p-8 lg:p-12 border-b border-border overflow-hidden">
          {/* Decorative background icons */}
          <Building2 className="absolute -right-12 -top-12 h-64 w-64 opacity-[0.03] rotate-12" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white shadow-2xl shadow-primary/20 transition-transform hover:scale-105">
                <Building2 className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black tracking-tighter text-foreground italic">{lead.company}</h2>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-black uppercase tracking-widest px-3">
                    Verified Lead
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-bold uppercase tracking-widest text-[11px]">
                  <Briefcase className="h-4 w-4 text-primary/60" />
                  {lead.jobTitle}
                  <span className="mx-2 opacity-20">|</span>
                  <ExternalLink className="h-4 w-4 text-primary/60" />
                  {lead.source}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                className="rounded-2xl h-14 px-8 border-border bg-background shadow-sm font-black uppercase tracking-widest text-xs gap-3"
              >
                <Bookmark className="h-4 w-4" />
                Lưu vào kho
              </Button>
              <Button 
                onClick={() => onGenerateEmail(lead)}
                className="rounded-2xl h-14 px-10 bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all font-black uppercase tracking-widest text-xs gap-3"
              >
                <Sparkles className="h-5 w-5" />
                Duyệt chiến dịch AI
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 max-h-[calc(100vh-200px)] overflow-y-auto lg:overflow-hidden lg:h-[750px]">
          {/* Left Column: Metrics & Scores */}
          <div className="lg:col-span-1 p-8 lg:p-12 border-r border-border bg-muted/5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Scoring Intelligence</h3>
              
              <div className="flex items-center justify-between p-6 rounded-3xl border border-border bg-card shadow-sm group hover:border-primary/30 transition-colors">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Radar Score</p>
                  <p className="text-4xl font-black text-foreground italic">{lead.totalScore}<span className="text-lg opacity-20 not-italic">/10</span></p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${getScoreColor(lead.totalScore)}`}>
                  <Zap className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <ScoreBar label="Market Fit" value={lead.fitScore * 10} score={lead.fitScore} color="bg-emerald-500" />
                <ScoreBar label="Signal Strength" value={lead.signalScore * 10} score={lead.signalScore} color="bg-primary" />
                <ScoreBar label="Data Recency" value={lead.recencyScore * 10} score={lead.recencyScore} color="bg-accent" />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Radar Tags</h3>
              <div className="flex flex-wrap gap-2">
                {lead.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="rounded-xl px-4 py-2 border-primary/10 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/10 transition-colors"
                  >
                    {tag.replace('_', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Information & Activity */}
          <div className="lg:col-span-2 p-8 lg:p-12 space-y-10 overflow-y-auto">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Executive Summary
              </h3>
              <div className="rounded-[32px] border border-border bg-muted/10 p-8">
                <p className="text-lg font-medium text-foreground leading-relaxed italic">
                  &quot;{lead.description}&quot;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Technical Insights
                </h3>
                <div className="space-y-4">
                  <InfoItem icon={Target} label="Ngành nghề" value="Technology & Software" />
                  <InfoItem icon={Globe} label="Khu vực" value="Hồ Chí Minh, VN" />
                  <InfoItem icon={Calendar} label="Quét lần cuối" value={new Date(lead.createdAt).toLocaleDateString('vi-VN')} />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                  <History className="h-4 w-4 text-accent" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <ActivityRow text="Tín hiệu Logistics từ Google Maps" time="15m" active />
                  <ActivityRow text="AI Scoring hoàn tất" time="2h" />
                  <ActivityRow text="Đã được quét bởi Radar Bot v2" time="1d" />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Quick Actions</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <ActionButton icon={Share2} label="Chia sẻ Lead" color="text-blue-500" />
                <ActionButton icon={MessageSquare} label="Gửi tin nhắn" color="text-indigo-500" />
                <ActionButton icon={AlertCircle} label="Báo cáo sai lệch" color="text-rose-500" />
                <ActionButton icon={Plus} label="Thêm vào list" color="text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between text-muted-foreground italic font-medium pt-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Send className="h-3.5 w-3.5" />
                SSO Secured Data
              </div>
              <div className="text-[10px] uppercase font-black opacity-20">ID: {lead.id}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function ActionButton({ icon: Icon, label, color }: { icon: LucideIcon; label: string; color: string }) {
  return (
    <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all group">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 group-hover:bg-white border border-transparent group-hover:border-border transition-all ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
    </button>
  );
}

function ScoreBar({ label, value, score, color }: { label: string; value: number; score: number; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
        <span>{label}</span>
        <span className="text-foreground">{score}/10</span>
      </div>
      <Progress value={value} className="h-1.5 w-full bg-muted shadow-inner" />
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl border border-border/50 bg-card/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background border border-border text-primary shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">{label}</span>
        <span className="text-sm font-black text-foreground tracking-tight italic">{value}</span>
      </div>
    </div>
  );
}

function ActivityRow({ text, time, active = false }: { text: string; time: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 group">
      <div className="flex items-center gap-3">
        <div className={`h-1.5 w-1.5 rounded-full ${active ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`} />
        <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">{text}</span>
      </div>
      <span className="text-[10px] font-black text-muted-foreground/40">{time}</span>
    </div>
  );
}

import { Globe } from 'lucide-react';
