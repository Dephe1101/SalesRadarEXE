import React from 'react';
import { 
  MessageSquare, 
  Search,
  Filter,
  Plus,
  Zap,
  Copy,
  Edit3,
  Trash2,
  Sparkles,
  ChevronRight,
  Send
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: 'Kịch bản | Sales Radar',
  description: 'Quản lý các kịch bản tiếp cận khách hàng tối ưu bằng AI.',
};

export default function OutreachPage() {
  const scripts = [
    {
      id: 'sc_1',
      title: 'Tiếp cận Logistic phía Nam',
      category: 'Cold Outreach',
      lastUsed: '2 giờ trước',
      successRate: '68%',
      aiOptimized: true,
      content: 'Chào [Tên], tôi thấy [Công ty] đang mở rộng kho bãi tại Bình Dương...'
    },
    {
      id: 'sc_2',
      title: 'Follow-up sau sự kiện Tech',
      category: 'Follow-up',
      lastUsed: '1 ngày trước',
      successRate: '42%',
      aiOptimized: true,
      content: 'Rất vui được gặp bạn tại sự kiện vừa qua. Tôi muốn tiếp tục trao đổi về...'
    },
    {
      id: 'sc_3',
      title: 'Giới thiệu giải pháp Marketing',
      category: 'Introduction',
      lastUsed: '3 ngày trước',
      successRate: '25%',
      aiOptimized: false,
      content: 'Chúng tôi giúp các doanh nghiệp SME tối ưu hóa chi phí quảng cáo...'
    }
  ];

  return (
    <div className="container mx-auto p-6 lg:p-12 space-y-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between bg-linear-to-br from-card/50 to-muted/20 p-8 rounded-[40px] border border-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <MessageSquare className="h-32 w-32 rotate-6" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 shadow-lg shadow-violet-500/20">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground italic uppercase">
                Outreach <span className="text-violet-500 not-italic">Engine</span>
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-violet-500/80">Cỗ máy tạo kịch bản bán hàng</span>
              </div>
            </div>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-md">
            Cá nhân hóa thông điệp <span className="text-violet-500/40 mx-2">|</span> Tối ưu tỷ lệ phản hồi <span className="text-violet-500/40 mx-2">|</span> AI Copywriting
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-violet-500 transition-colors z-10" />
            <Input 
              placeholder="Tìm kịch bản mẫu..." 
              className="pl-11 h-11 w-full bg-background border-border rounded-xl text-xs font-bold focus-visible:ring-violet-500 shadow-sm"
            />
          </div>
          <Button className="w-full sm:w-auto rounded-xl h-11 px-6 text-xs font-black uppercase tracking-widest gap-3 shadow-lg shadow-violet-500/20 bg-violet-500 hover:bg-violet-600 hover:scale-105 transition-all text-white">
            <Plus className="h-4 w-4" />
            Tạo kịch bản mới
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats & Categories */}
        <div className="space-y-6">
          <div className="bg-card/40 border border-border p-6 rounded-[32px] space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-4">Phân tích hiệu quả</h3>
            <div className="space-y-4">
              {[
                { label: 'Kịch bản đang chạy', value: '08', color: 'bg-violet-500' },
                { label: 'Tỷ lệ phản hồi TB', value: '34%', color: 'bg-emerald-500' },
                { label: 'Lead đã tiếp cận', value: '1,240', color: 'bg-blue-500' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${stat.color} shadow-[0_0_8px_currentColor] opacity-70 group-hover:opacity-100 transition-opacity`} />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">{stat.label}</span>
                  </div>
                  <span className="text-sm font-black text-foreground tabular-nums">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-violet-500/10 to-accent/5 border border-violet-500/20 p-8 rounded-[32px] relative overflow-hidden group">
            <Sparkles className="absolute -right-4 -top-4 h-24 w-24 text-violet-500/10 group-hover:scale-110 transition-transform" />
            <div className="relative z-10 space-y-4">
              <Badge className="bg-violet-500 text-white border-0 text-[9px] font-black uppercase px-2 mb-2">AI Feature</Badge>
              <h4 className="text-lg font-bold text-foreground leading-tight">Cần kịch bản đột phá?</h4>
              <p className="text-xs text-muted-foreground font-medium italic">Để AI của Sales Radar viết giúp bạn kịch bản dựa trên tín hiệu thị trường mới nhất.</p>
              <Button variant="outline" className="w-full rounded-xl border-violet-500/30 text-violet-500 hover:bg-violet-500 hover:text-white text-[10px] font-black uppercase tracking-widest h-10 transition-all">
                Thử ngay bây giờ
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Scripts List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-foreground tracking-tight">Kịch bản của tôi</h2>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest gap-2">
                 <Filter className="h-4 w-4" />
                 Lọc loại
               </Button>
            </div>
          </div>

          <div className="space-y-4">
            {scripts.map((script) => (
              <div 
                key={script.id} 
                className="group relative bg-card border border-border p-6 rounded-[32px] hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-black text-foreground tracking-tight">{script.title}</h3>
                      {script.aiOptimized && (
                        <Badge variant="secondary" className="bg-violet-500/10 text-violet-500 border-none text-[9px] font-black px-1.5 py-0">
                          AI OPTIMIZED
                        </Badge>
                      )}
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{script.category} • Dùng lần cuối: {script.lastUsed}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-muted/20 px-4 py-2 rounded-2xl border border-border">
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase">Response Rate</span>
                      <span className="text-sm font-black text-emerald-500">{script.successRate}</span>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <Button size="icon" variant="ghost" className="h-9 w-9 bg-violet-500 text-white rounded-xl shadow-lg shadow-violet-500/30 hover:scale-105 transition-all">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative bg-muted/30 rounded-2xl p-4 border border-border/50 group-hover:bg-muted/50 transition-colors">
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed italic line-clamp-2">
                    &quot;{script.content}&quot;
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-[2px] rounded-2xl">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-background rounded-xl text-[10px] font-black uppercase tracking-widest gap-2">
                        <Copy className="h-3.5 w-3.5" /> Sao chép
                      </Button>
                      <Button variant="outline" size="sm" className="bg-background rounded-xl text-[10px] font-black uppercase tracking-widest gap-2">
                        <Edit3 className="h-3.5 w-3.5" /> Chỉnh sửa
                      </Button>
                      <Button variant="ghost" size="icon" className="bg-destructive/10 text-destructive rounded-xl hover:bg-destructive hover:text-white transition-all">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 rounded-[32px] border-2 border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group">
            <div className="flex items-center justify-center gap-2">
              <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Xem thêm kịch bản mẫu</span>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}
