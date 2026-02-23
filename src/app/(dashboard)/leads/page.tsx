import React, { Suspense } from 'react';
import { LeadTable } from '@/components/features/leads/LeadTable';
import { 
  Radar, 
  Download, 
  Filter,
  Target,
  TrendingUp,
  Search,
  Zap,
  ChevronRight,
  Loader2,
  Plus,
  Activity,
  MessageSquare
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: 'Bảng điều khiển | Sales Radar',
  description: 'Trung tâm săn tìm khách hàng tiềm năng dựa trên tín hiệu thị trường.',
};

export default function LeadsPage() {
  return (
    <div className="container mx-auto p-6 lg:p-12 space-y-10 animate-in fade-in duration-700">
      
      {/* Header Section - Command Center Style */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between bg-muted/20 p-8 rounded-[40px] border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Radar className="h-32 w-32 rotate-12" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <Radar className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground italic">
                Signals <span className="text-primary not-italic">Radar</span>
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Hệ thống đang trực tuyến</span>
              </div>
            </div>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-md">
            Phân tích thời gian thực <span className="text-primary/40 mx-2">|</span> 2,400+ Nguồn dữ liệu <span className="text-primary/40 mx-2">|</span> AI Intelligence
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
            <Input 
              placeholder="Quét Lead, Ngành nghề, Địa điểm..." 
              className="pl-11 h-11 w-full bg-background border-border rounded-xl text-xs font-bold focus-visible:ring-primary shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-black text-muted-foreground/30 border border-border px-1.5 py-0.5 rounded uppercase pointer-events-none">
              CTRL + K
            </div>
          </div>
          <Button className="w-full sm:w-auto rounded-xl h-11 px-8 text-xs font-black uppercase tracking-widest gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            <Plus className="h-4 w-4" />
            Tạo bản quét mới
          </Button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Tín hiệu hôm nay', value: '1,429', trend: '+14%', icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
          { label: 'Lead tiềm năng cao', value: '184', trend: '+5.2%', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Đang tiếp cận', value: '42', trend: '+12%', icon: MessageSquare, color: 'text-violet-500', bg: 'bg-violet-500/10' },
          { label: 'Tỷ lệ phản hồi', value: '38%', trend: '+2%', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        ].map((stat, i) => (
          <Card key={i} className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5 hover:bg-muted/30">
            {/* Semantic Accent Border */}
            <div className={`absolute top-0 left-0 w-full h-1 ${stat.color.replace('text', 'bg')}`} />
            
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <Badge variant="secondary" className="text-[10px] font-black bg-emerald-500/10 text-emerald-600 border-none">
                {stat.trend}
              </Badge>
            </CardHeader>
            
            <CardContent className="space-y-1">
              <CardTitle className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
                {stat.label}
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-black tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${stat.color.replace('text', 'bg')}`} />
              </div>
            </CardContent>
            
            {/* Subtle background icon for texture */}
            <stat.icon className={`absolute -right-4 -bottom-4 h-24 w-24 opacity-[0.03] transition-transform group-hover:scale-125 ${stat.color}`} />
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Dòng sự kiện thị trường</h2>
              <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Cập nhật theo giây từ đa nguồn</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 ">
              <Filter className="h-4 w-4" />
              Lọc theo ngành
            </Button>
            <Button variant="outline" size="sm" className="gap-2 rounded-xl text-[10px] font-bold uppercase tracking-widest px-4 h-10">
              <Download className="h-4 w-4" />
              Xuất Excel
            </Button>
          </div>
        </div>

        <Suspense 
          fallback={
            <div className="flex h-[400px] items-center justify-center rounded-[32px] border-2 border-dashed border-border bg-muted/20">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Đang nạp dữ liệu radar...</span>
              </div>
            </div>
          }
        >
          <LeadTable />
        </Suspense>
      </div>

      {/* Insight Advisory */}
      <div className="group relative overflow-hidden rounded-[32px] bg-linear-to-br from-primary/10 to-accent/10 p-1 border border-primary/20">
        <div className="relative z-10 flex flex-col items-center gap-8 rounded-[28px] bg-background p-8 lg:flex-row lg:p-12">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background shadow-xl">
            <Target className="h-8 w-8" />
          </div>
          <div className="space-y-2 text-center lg:text-left flex-1">
            <h3 className="text-2xl font-black text-foreground tracking-tight italic">&quot;Tín hiệu: Sóng Logistic đang tăng mạnh tại phía Nam&quot;</h3>
            <p className="max-w-xl text-sm font-bold text-muted-foreground uppercase leading-relaxed tracking-tight">
              Hệ thống phát hiện <span className="text-primary font-black">tăng 45% nhu cầu</span> kho bãi trong 24h qua. Đề xuất ưu tiên các lead ngành vận tải.
            </p>
          </div>
          <Button className="shrink-0 gap-2 rounded-xl h-14 px-8 text-xs font-black uppercase tracking-widest shadow-lg">
            Xem chi tiết sóng
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

    </div>
  );
}
