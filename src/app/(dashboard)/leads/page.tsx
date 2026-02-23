import React, { Suspense } from 'react';
import { LeadTable } from '@/components/features/leads/LeadTable';
import { 
  Radar, 
  Settings2, 
  Download, 
  Filter,
  Users,
  Target,
  Briefcase,
  History,
  TrendingUp,
  Search,
  Zap,
  ChevronRight,
  Plus
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
      
      {/* Header Section */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-primary shadow-lg shadow-primary/40" />
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              Signals <span className="text-primary italic">Radar</span>
            </h1>
          </div>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Hệ thống phát hiện tín hiệu khách hàng B2B <span className="text-primary/30 mx-2">{"//"}</span> Real-time Intelligence
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors z-10" />
            <Input 
              placeholder="Tìm kiếm lead, ngành nghề..." 
              className="pl-10 h-11 w-full sm:w-72 bg-muted/30 border-border rounded-xl text-xs font-bold"
            />
          </div>
          <Button className="rounded-xl h-11 px-6 text-xs font-black uppercase tracking-widest gap-2">
            <Plus className="h-4 w-4" />
            Thêm lead mới
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Tín hiệu hôm nay', value: '1,429', trend: '+14%', color: 'indigo' },
          { label: 'Lead tiềm năng cao', value: '184', trend: '+5.2%', color: 'emerald' },
          { label: 'Đang tiếp cận', value: '42', trend: '+12%', color: 'violet' },
          { label: 'Tỷ lệ phản hồi', value: '38%', trend: 'Tăng 2%', color: 'blue' },
        ].map((stat, i) => (
          <Card key={i} className="group relative overflow-hidden rounded-3xl border-border bg-card transition-all hover:bg-muted/30 shadow-sm border-0 ring-1 ring-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </CardTitle>
              <Badge variant="secondary" className="text-[9px] font-bold bg-primary/10 text-primary border-primary/20">
                {stat.trend}
              </Badge>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-black text-foreground">{stat.value}</div>
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              </div>
            </CardContent>
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
            <Button variant="ghost" size="sm" className="gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
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

// Add Loader2 import since it was missing in my plan but used in fallback
import { Loader2 } from 'lucide-react';
