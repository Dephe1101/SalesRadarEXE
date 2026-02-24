import React from 'react';
import { 
  Target, 
  Search,
  Filter,
  Activity,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  TrendingUp,
  Zap,
  MousePointer2
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'Theo dõi | Sales Radar',
  description: 'Trung tâm theo dõi tiến độ và hiệu quả chuyển đổi Lead.',
};

export default function TrackingPage() {
  const tracks = [
    {
      id: 'tr_1',
      company: 'Nexus Marketing Group',
      status: 'Đã gửi email',
      probability: 75,
      lastAction: 'Gửi kịch bản Follow-up',
      timeAgo: '45 phút trước',
      priority: 'HIGH'
    },
    {
      id: 'tr_2',
      company: 'Vietnam Express Logistics',
      status: 'Đang thương thảo',
      probability: 90,
      lastAction: 'Đặt lịch họp Demo',
      timeAgo: '3 giờ trước',
      priority: 'URGENT'
    },
    {
      id: 'tr_3',
      company: 'Global Trade Hub',
      status: 'Chưa phản hồi',
      probability: 30,
      lastAction: 'Gửi email lần 1',
      timeAgo: '2 ngày trước',
      priority: 'MEDIUM'
    },
    {
        id: 'tr_4',
        company: 'Creative Pulse Agency',
        status: 'Đã phản hồi',
        probability: 60,
        lastAction: 'Nhận yêu cầu báo giá',
        timeAgo: '5 giờ trước',
        priority: 'HIGH'
      }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đang thương thảo': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'Đã phản hồi': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Đã gửi email': return 'text-violet-500 bg-violet-500/10 border-violet-500/20';
      default: return 'text-muted-foreground bg-muted/20 border-border';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'URGENT': return 'bg-rose-500 text-white';
      case 'HIGH': return 'bg-orange-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="container mx-auto p-6 lg:p-12 space-y-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between bg-linear-to-br from-card/50 to-muted/20 p-8 rounded-[40px] border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Target className="h-32 w-32 -rotate-45" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground italic uppercase">
                Execution <span className="text-orange-500 not-italic">Radar</span>
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-orange-500/80">Giám sát hành trình khách hành</span>
              </div>
            </div>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-md">
            Theo dõi chuyển đổi <span className="text-orange-500/40 mx-2">|</span> Tỷ lệ thành công <span className="text-orange-500/40 mx-2">|</span> Pipeline Intelligence
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-orange-500 transition-colors z-10" />
            <Input 
              placeholder="Tìm kiếm Lead đang theo dõi..." 
              className="pl-11 h-11 w-full bg-background border-border rounded-xl text-xs font-bold focus-visible:ring-orange-500 shadow-sm"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto rounded-xl h-11 px-6 text-xs font-black uppercase tracking-widest gap-3 bg-card border-border hover:bg-primary hover:text-primary-foreground transition-all">
            <TrendingUp className="h-4 w-4" />
            Báo cáo hiệu suất
          </Button>
        </div>
      </div>

      {/* Stats Board */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { label: 'Cơ hội mở', value: '24', trend: '+12%', icon: Activity, color: 'text-orange-500', shadow: 'hover:shadow-orange-500/40' },
          { label: 'Tỷ lệ chốt TB', value: '18%', trend: '+5%', icon: CheckCircle2, color: 'text-emerald-500', shadow: 'hover:shadow-emerald-500/40' },
          { label: 'Thời gian chốt TB', value: '4.5 ngày', trend: '-1d', icon: Clock, color: 'text-blue-500', shadow: 'hover:shadow-blue-500/40' },
          { label: 'Cảnh báo rủi ro', value: '02', trend: 'Watch', icon: AlertCircle, color: 'text-rose-500', shadow: 'hover:shadow-rose-500/40' },
        ].map((stat, i) => (
          <div key={i} className={`group relative isolate p-6 rounded-[32px] transition-all duration-500 shadow-luxury hover:shadow-2xl ${stat.shadow} overflow-hidden border-2 border-border/60 hover:border-current ${stat.color}`}>
            {/* Base Background Overlay */}
            <div className="absolute inset-0 bg-card rounded-[inherit] -z-20" />
            
            {/* Backdrop Blur Layer */}
            <div className="absolute inset-0 bg-card/40 backdrop-blur-xl rounded-[inherit] -z-10" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/5 dark:to-white/5 opacity-50 rounded-[inherit] pointer-events-none -z-10" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-2.5 rounded-xl bg-background border border-border shadow-luxury group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="flex flex-col items-end">
                  <Badge variant="secondary" className="bg-muted text-[9px] font-black border-none px-1.5 py-0 shadow-sm">
                    {stat.trend}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-black text-foreground tracking-tight italic">
                  {stat.value}
                </h3>
              </div>
            </div>

            {/* Accent light effect */}
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${stat.color.replace('text', 'bg')} -z-10`} />
          </div>
        ))}
      </div>

      {/* Main Tracking List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <TrendingUp className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-bold text-foreground tracking-tight italic uppercase">Pipeline <span className="text-orange-500 not-italic">Visualizer</span></h2>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest gap-2">
                <Filter className="h-4 w-4" />
                Tất cả trạng thái
            </Button>
        </div>

        <div className="space-y-4">
          {tracks.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-card border border-border p-6 rounded-[32px] hover:shadow-luxury hover:bg-muted/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Company & Info */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className={`${getPriorityColor(item.priority)} border-0 text-[8px] font-black px-1.5 py-0`}>
                      {item.priority}
                    </Badge>
                  </div>
                  <h3 className="text-base font-black text-foreground group-hover:text-orange-500 transition-colors">{item.company}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">Cập nhật {item.timeAgo}</span>
                  </div>
                </div>

                {/* Progress & Probability */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Xác suất thành công</span>
                    <span className="text-orange-500">{item.probability}%</span>
                  </div>
                  <Progress value={item.probability} className="h-2 bg-muted rounded-full" />
                </div>

                {/* Status & Last Action */}
                <div className="lg:col-span-3 space-y-2">
                   <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                   </div>
                   <p className="text-[11px] font-medium text-foreground/80 flex items-center gap-2 italic">
                     <MousePointer2 className="h-3 w-3 text-muted-foreground" />
                     {item.lastAction}
                   </p>
                </div>

                {/* Actions */}
                <div className="lg:col-span-2 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl h-10 px-4 text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                    Tiếp tục
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 border border-border rounded-xl">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

              </div>
              
              {/* Subtle hover effect background icon */}
              <Activity className="absolute right-8 top-1/2 -translate-y-1/2 h-20 w-20 opacity-[0.02] group-hover:scale-125 transition-transform text-orange-500" />
            </div>
          ))}
        </div>
      </div>

      {/* AI Advisory */}
      <div className="group relative overflow-hidden rounded-[32px] bg-linear-to-br from-orange-500/10 to-amber-500/10 p-1 border border-orange-500/20">
        <div className="relative z-10 flex flex-col items-center gap-8 rounded-[28px] bg-background p-8 lg:flex-row lg:p-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-500/20">
            <Zap className="h-8 w-8" />
          </div>
          <div className="space-y-2 text-center lg:text-left flex-1">
            <h3 className="text-xl font-black text-foreground tracking-tight uppercase italic">AI Predictive <span className="text-orange-500 not-italic">Next Step</span></h3>
            <p className="max-w-2xl text-[11px] font-bold text-muted-foreground uppercase leading-relaxed tracking-wide">
              Dựa trên biểu mẫu phản hồi từ <span className="text-orange-500 font-black">VN Logistics</span>, hệ thống đề xuất gửi <span className="text-foreground">Bản trình bày giải pháp vận tải v2</span> trong 2 giờ tới để tối ưu tỷ lệ chốt thêm <span className="text-emerald-500">12%</span>.
            </p>
          </div>
          <Button className="shrink-0 gap-2 rounded-xl h-12 px-6 text-xs font-black uppercase tracking-widest shadow-lg bg-orange-500 hover:bg-orange-600 text-white">
            Tạo bản trình bày AI
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

    </div>
  );
}
