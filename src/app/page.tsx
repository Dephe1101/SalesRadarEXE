"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Radar, 
  ArrowRight, 
  Target, 
  Zap, 
  Search, 
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Cpu,
  BarChart3,
  MessageSquare,
  Building2,
  Truck,
  Megaphone,
  AlertCircle,
  LucideIcon
} from 'lucide-react';

export default function LandingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/20">
            <Radar className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground underline-offset-4 decoration-primary/30">Sales Radar</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <a href="#how-it-works" className="hover:text-primary transition-colors">Cách hoạt động</a>
          <a href="#signals" className="hover:text-primary transition-colors">Tín hiệu</a>
          <a href="#features" className="hover:text-primary transition-colors">Tính năng</a>
          <Link href="/login" className="rounded-full bg-foreground px-6 py-2.5 text-background hover:opacity-90 transition-all active:scale-95 shadow-md font-bold uppercase tracking-widest text-[10px]">
            Trải nghiệm ngay
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6 md:px-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-[1000px] bg-primary/5 blur-[100px] rounded-full z-0" />
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            <Zap className="h-3 w-3 animate-pulse" />
            AI Sales Intelligence Platform
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-foreground">
            Săn Khách Hàng <br />
            <span className="bg-linear-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent">
              Đúng Thời Điểm
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Biến dữ liệu rải rác trên Internet thành danh sách lead chất lượng. 
            Khám phá đối tác B2B đang có nhu cầu thực sự dựa trên tín hiệu thị trường.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link href="/login" className="group relative flex items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 overflow-hidden">
              Bắt đầu săn Lead
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#how-it-works" className="flex items-center gap-3 px-8 py-5 text-sm font-bold text-foreground hover:bg-muted/50 rounded-2xl transition-all border border-border">
              Xem cách hoạt động
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section (Pain Points) */}
      <section className="px-6 md:px-12 py-24 bg-muted/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Vấn đề của doanh nghiệp</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Tại sao tỷ lệ chốt Sales B2B của bạn vẫn thấp?
            </h3>
            <div className="space-y-5 pt-4">
              <div className="flex gap-4">
                <div className="flex-none h-6 w-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Tìm khách thủ công</p>
                  <p className="text-sm text-muted-foreground">Tốn hàng giờ lướt Facebook/Google nhưng dữ liệu vẫn rời rạc, thiếu hệ thống.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-none h-6 w-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Sai thời điểm (Wrong Timing)</p>
                  <p className="text-sm text-muted-foreground">Có data nhưng không biết ai &quot;đang thực sự cần&quot;, dẫn đến gọi sai người, mất cơ hội.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-none h-6 w-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Quản lý rời rạc</p>
                  <p className="text-sm text-muted-foreground">Dùng Zalo/Excel để lưu thông tin khiến lead bị bỏ sót, không tối ưu được doanh thu.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-3xl p-8 shadow-2xl relative"
          >
             <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
             <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm font-bold text-foreground">Phân tích tín hiệu mới nhất</span>
                  <span className="text-[10px] uppercase font-bold text-accent px-2 py-1 bg-accent/10 rounded-full">Đang quét...</span>
                </div>
                {[
                  { company: "LogiTech VN", signal: "Tuyển Marketing Executive", score: 85, industry: "Agency" },
                  { company: "Sun Bakery", signal: "Mở thêm 2 kho tại Bình Dương", score: 82, industry: "Logistics" },
                  { company: "Eco Home", signal: "Ra mắt BST nội thất mới", score: 78, industry: "PR/KOL" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-muted/30 rounded-xl border border-border flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.company}</p>
                      <p className="text-xs text-muted-foreground italic font-medium">{item.signal}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-primary">Score: {item.score}</p>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-wider">{item.industry}</p>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Signals Section */}
      <section id="signals" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Tín hiệu thị trường</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Kịch bản Lead dành riêng cho bạn</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SignalCard 
              icon={Megaphone}
              title="Marketing & PR"
              signal="Tuyển Performance / Brand Manager"
              result="Họ sắp chạy chiến dịch → Cần Agency / Production House."
              color="bg-blue-500/10 text-blue-500"
            />
            <SignalCard 
              icon={Truck}
              title="Logistics & Vận tải"
              signal="Mở thêm chi nhánh / kho bãi"
              result="Sắp cần vận chuyển / Chuỗi cung ứng → Cần đối tác Logistic."
              color="bg-orange-500/10 text-orange-500"
            />
            <SignalCard 
              icon={Search}
              title="Công nghệ & SaaS"
              signal="Tuyển vị trí IT / Chuyển đổi số"
              result="Đang nâng cấp hệ thống → Cần giải pháp phần mềm / Security."
              color="bg-indigo-500/10 text-indigo-500"
            />
            <SignalCard 
              icon={AlertCircle}
              title="Khủng hoảng truyền thông"
              signal="Review xấu tăng mạnh trên Fanpage"
              result="Cần xử lý Social Media / Reputation → Cơ hội cho chuyên gia PR."
              color="bg-rose-500/10 text-rose-500"
            />
          </div>
        </div>
      </section>

      {/* How it works (AI Workflow) */}
      <section id="how-it-works" className="px-6 md:px-12 py-24 bg-foreground text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 h-64 w-64 border-2 border-primary rounded-full animate-ping" />
        </div>
        
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Quy trình AI thông minh</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Biến dữ liệu rải rác thành &quot;Danh sách nên gọi ngay hôm nay&quot;
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", icon: Search, title: "Thu thập dữ liệu", desc: "Quét tin tuyển dụng, website, fanpage và các thông báo khai trương công khai." },
              { step: "02", icon: Zap, title: "Phát hiện tín hiệu", desc: "Nhận diện dấu hiệu doanh nghiệp sắp chi tiền cho Marketing, Logistic, Tech." },
              { step: "03", icon: BarChart3, title: "Chấm điểm (Lead Score)", desc: "Xác định độ 'nóng' của lead để sales biết ưu tiên ai trước, tránh gọi lan man." },
              { step: "04", icon: MessageSquare, title: "Gợi ý kịch bản", desc: "Tự động tạo email/tin nhắn/call script phù hợp theo bối cảnh của Lead." },
            ].map((item, i) => (
              <div key={i} className="space-y-4 group">
                <div className="text-5xl font-black text-background/15 group-hover:text-primary transition-colors duration-500">{item.step}</div>
                <div className="h-12 w-12 rounded-xl bg-background/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold italic">{item.title}</h4>
                <p className="text-sm text-background/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Target} 
            title="Săn Lead đa kênh" 
            desc="Lấy dữ liệu từ LinkedIn, TopCV, VietnamWorks và các Silo dữ liệu Việt Nam trong thời gian thực." 
          />
          <FeatureCard 
            icon={Briefcase} 
            title="Quản lý phễu Lead" 
            desc="Lưu trữ và theo dõi trạng thái tương tác với khách hàng, thay thế Excel và Zalo rời rạc." 
          />
          <FeatureCard 
            icon={Cpu} 
            title="AI Content Generator" 
            desc="Tạo lời mở đầu ấn tượng. Không cần tự nghĩ cách mở lời, AI lo tất cả kịch bản tiếp cận." 
          />
        </div>
      </section>

      {/* Lead Preview Section */}
      <section className="px-6 md:px-12 py-24 relative overflow-hidden bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Cái nhìn thực tế</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">Biến dữ liệu thành hành động</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Lead Preview Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="w-full max-w-[500px] bg-background border border-border rounded-3xl p-6 shadow-luxury"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">X-Logistic JSC</h4>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Logistics</span>
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Bình Dương</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-primary">94/100</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Lead Score</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-2xl border border-border">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Tín hiệu phát hiện:</div>
                  <p className="text-sm italic text-foreground/80">"Công ty vừa đăng tin tuyển 5 quản lý kho và 20 nhân viên vận hành tại Dĩ An."</p>
                </div>

                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-primary uppercase flex items-center gap-2">
                    <MessageSquare className="h-3 w-3" />
                    Gợi ý kịch bản (Outreach Script):
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl text-[13px] leading-relaxed relative group">
                    <p className="text-foreground/80">
                      "Chào anh/chị [Name], em thấy X-Logistic đang mở rộng quy mô kho bãi tại Bình Dương. 
                      Bên em chuyên cung cấp giải pháp [Dịch vụ của bạn] giúp tối ưu 30% chi phí vận hành cho các kho mới..."
                    </p>
                    <button className="absolute top-2 right-2 p-2 rounded-lg bg-background border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                      <Target className="h-3 w-3 text-primary" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-3 rounded-xl bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">Lưu vào CRM</button>
                  <button className="flex-1 py-3 rounded-xl border border-border text-foreground text-xs font-bold hover:bg-muted/50 transition-colors">Xuất Excel</button>
                </div>
              </div>
            </motion.div>

            {/* AI Explanation */}
            <div className="max-w-[400px] space-y-6">
              <div className="space-y-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <h4 className="text-2xl font-bold italic text-foreground text-balance">Cá nhân hóa ở quy mô lớn</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI không chỉ tìm lead, mà còn phân bối cảnh để gợi ý cách tiếp cận tự nhiên nhất. 
                  Bạn không còn gửi những email spam vô nghĩa, mà gửi những giải pháp đúng lúc khách hàng cần.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Tự động điền thông tin doanh nghiệp",
                  "Phân tích Intent (ý định) mua hàng",
                  "Gợi ý Call Script qua điện thoại",
                  "Xuất báo cáo Lead chất lượng cao"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/70">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 py-20 bg-primary/5 border-y border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-10">
          <StatItem value="10.000+" label="Lead được quét mỗi ngày" />
          <StatItem value="45%" label="Tỷ lệ phản hồi trung bình" />
          <StatItem value="3x" label="Tốc độ chốt hợp đồng" />
          <StatItem value="150+" label="Nhà kinh doanh tin dùng" />
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="px-6 md:px-12 py-32 text-center space-y-12">
        <div className="space-y-4">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary">
            <Radar className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground italic">
            Sẵn sàng để &quot;Săn&quot; lead?
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-bold uppercase tracking-widest text-[11px]">
            Đừng để lỡ mất tín hiệu từ khách hàng tiềm năng. Hãy để AI Sales Radar giúp bạn chốt hợp đồng B2B nhanh hơn bao giờ hết.
          </p>
        </div>
        
        <Link href="/login" className="inline-flex items-center gap-4 rounded-full bg-primary px-12 py-6 text-sm font-bold text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
          Bắt đầu miễn phí ngay
          <TrendingUp className="h-5 w-5" />
        </Link>

        <div className="pt-24 flex flex-col items-center gap-6">
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a>
            <a href="#" className="hover:text-primary transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-primary transition-colors">Liên hệ</a>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/40">
            Sales Radar © 2026 {"//"} Nâng tầm sales B2B Việt Nam
          </div>
        </div>
      </footer>
    </div>
  );
}

function SignalCard({ icon: Icon, title, signal, result, color }: { icon: LucideIcon; title: string, signal: string, result: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-[32px] border border-border bg-muted/30 backdrop-blur-sm space-y-5 transition-all hover:bg-muted/50 shadow-sm"
    >
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold text-foreground">{title}</h4>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-primary tracking-widest">Tín hiệu</p>
            <p className="text-sm font-medium italic text-foreground/80">"{signal}"</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-accent tracking-widest">Nhu cầu</p>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group p-10 rounded-[40px] border border-border bg-muted/30 backdrop-blur-sm transition-all hover:bg-muted/50 shadow-sm"
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-4 text-2xl font-black text-foreground tracking-tighter italic">{title}</h3>
      <p className="text-muted-foreground font-medium leading-relaxed uppercase text-[10px] tracking-widest">
        {desc}
      </p>
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex-1 min-w-[200px] text-center md:text-left">
      <div className="text-4xl font-extrabold tracking-tight text-foreground">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
