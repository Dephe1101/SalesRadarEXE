import React, { Suspense } from 'react';
import { LeadTable } from '@/components/features/leads/LeadTable';
import { 
  Bookmark, 
  Search,
  Filter,
  Download,
  Loader2,
  Trash2,
  Share2,
  Target
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: 'Đã lưu | Sales Radar',
  description: 'Danh sách các khách hàng tiềm năng bạn đã lưu để theo dõi.',
};

export default function SavedLeadsPage() {
  return (
    <div className="container mx-auto p-6 lg:p-12 space-y-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between bg-linear-to-br from-card/50 to-muted/20 p-8 rounded-[40px] border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Bookmark className="h-32 w-32 -rotate-12" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/20">
              <Bookmark className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground italic uppercase">
                Saved <span className="text-accent not-italic">Leads</span>
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Kho lưu trữ mục tiêu của bạn</span>
              </div>
            </div>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-md">
            Quản lý và nuôi dưỡng các cơ hội <span className="text-accent/40 mx-2">|</span> Theo dõi biến động <span className="text-accent/40 mx-2">|</span> Outreach Ready
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors z-10" />
            <Input 
              placeholder="Tìm kiếm trong mục đã lưu..." 
              className="pl-11 h-11 w-full bg-background border-border rounded-xl text-xs font-bold focus-visible:ring-accent shadow-sm"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto rounded-xl h-11 px-6 text-xs font-black uppercase tracking-widest gap-3 hover:bg-primary hover:text-primary-foreground transition-all">
            <Share2 className="h-4 w-4" />
            Chia sẻ danh sách
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {[
            { label: 'Tổng mục đã lưu', value: '12', trend: '+2', icon: Bookmark, color: 'text-accent', bg: 'bg-accent/10', shadow: 'hover:shadow-accent/10' },
            { label: 'Sẵn sàng tiếp cận', value: '08', trend: 'Hot', icon: Target, color: 'text-primary', bg: 'bg-primary/10', shadow: 'hover:shadow-primary/10' },
            { label: 'Đã xuất dữ liệu', value: '04', trend: 'New', icon: Download, color: 'text-blue-500', bg: 'bg-blue-500/10', shadow: 'hover:shadow-blue-500/10' },
          ].map((stat, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-[32px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${stat.shadow}`}>
              {/* Vertical Side Accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${stat.color.replace('text', 'bg')} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="text-[10px] font-black border-border/50 text-muted-foreground uppercase tracking-tighter">
                  {stat.trend}
                </Badge>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-black text-foreground tracking-tight tabular-nums">
                    {stat.value}
                  </h3>
                  <span className={`text-[10px] font-bold ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}>Units</span>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-linear-to-br from-transparent to-muted/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 text-accent border border-accent/10">
              <Bookmark className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground tracking-tight">Danh sách ưu tiên</h2>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Các lead đang được theo dõi sát sao</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/10 ">
              <Filter className="h-4 w-4" />
              Lọc trạng thái
            </Button>
            <Button variant="outline" size="sm" className="gap-2 rounded-xl text-[10px] font-bold uppercase tracking-widest px-4 h-10">
              <Download className="h-4 w-4" />
              Xuất dữ liệu
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Suspense 
          fallback={
            <div className="flex h-[400px] items-center justify-center rounded-[32px] border-2 border-dashed border-border bg-muted/20">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Đang tải danh mục...</span>
              </div>
            </div>
          }
        >
          <LeadTable filterSaved={true} />
        </Suspense>
      </div>

      {/* Helpful Hint */}
      <div className="bg-muted/10 border border-border/50 rounded-3xl p-6 flex items-start gap-4">
        <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
          <Target className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-foreground">Bạn có biết?</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Các Lead trong mục <span className="text-accent font-bold">Đã lưu</span> sẽ được radar ưu tiên quét dữ liệu chuyên sâu (vốn tốn nhiều tài nguyên hơn) để đảm bảo bạn không bỏ lỡ bất kỳ biến động nào từ đối thủ hoặc thị trường.
          </p>
        </div>
      </div>

    </div>
  );
}
