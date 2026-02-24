"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  LucideIcon,
  Globe,
  Monitor,
  Sparkles,
  Layers,
  Fingerprint,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden mesh-bg noise transition-colors duration-500 font-sans">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="fixed inset-0 z-0 high-tech-grid opacity-100 dark:opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-background/80 dark:bg-background/70 border-b border-border transition-all">
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ rotate: -90, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20"
          >
            <Radar className="h-6 w-6 text-white" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-foreground uppercase italic dark:text-glow">Sales Radar</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          {["Cách hoạt động", "Tín hiệu", "Tính năng", "Demo"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary transition-all">
              {item}
            </a>
          ))}
          <Link href="/login" className="group relative px-7 py-2.5 overflow-hidden rounded-full font-bold uppercase tracking-widest text-[11px] bg-foreground text-background hover:scale-105 hover-neon-orange transition-all shadow-md">
            <span className="relative z-10 transition-colors uppercase font-bold">Trải nghiệm ngay</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 md:px-12 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative z-10 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              AI Sales Intelligence Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-foreground italic uppercase">
              Săn Lead <br />
              <span className="text-primary not-italic dark:text-glow">Đúng Thời Điểm</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Biến dữ liệu rải rác trên Internet thành danh sách lead chất lượng. 
              Khám phá đối tác B2B đang có nhu cầu thực sự dựa trên tín hiệu thị trường.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
              <Link href="/login" className="group relative flex items-center justify-center gap-3.5 rounded-2xl bg-primary px-10 py-5 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 hover-neon-orange active:scale-95 overflow-hidden uppercase tracking-widest">
                BẮT ĐẦU SĂN LEAD
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#cách-hoạt-động" className="flex items-center gap-3 px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all border border-border hover:bg-muted/50 rounded-2xl backdrop-blur-md">
                Xem Demo
              </Link>
            </div>
          </motion.div>

          {/* Spectacular Visuals - Radar Animation */}
          <div className="relative h-[450px] hidden lg:block">
            <RadarAnimation />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Problem Section (Pain Points) */}
      <section id="vấn-đề" className="relative py-24 px-6 md:px-12 bg-muted/20 dark:bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Vấn đề của doanh nghiệp</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight uppercase text-balance italic">
                TẠI SAO TỶ LỆ CHỐT SALES VẪN THẤP?
              </h3>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Tìm khách thủ công", desc: "Tốn hàng giờ lướt Facebook/Google nhưng dữ liệu vẫn rời rạc, thiếu hệ thống.", icon: Search },
                { title: "Sai thời điểm (Wrong Timing)", desc: "Có data nhưng không biết ai 'đang thực sự cần', dẫn đến mất cơ hội.", icon: AlertCircle },
                { title: "Quản lý rời rạc", desc: "Dùng Zalo/Excel để lưu thông tin khiến lead bị bỏ sót, không tối ưu được doanh thu.", icon: BarChart3 }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-5 rounded-3xl bg-background/40 dark:bg-background/50 hover:bg-background transition-all border border-border group shadow-sm">
                  <div className="flex-none h-12 w-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-foreground italic uppercase">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 rounded-[38px] luxury-border bg-card shadow-2xl"
          >
            <div className="bg-card rounded-[34px] p-8 space-y-7 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-primary/5 opacity-30 z-0 high-tech-grid" />
               <div className="relative z-10 flex items-center justify-between border-b border-border pb-6">
                 <div className="flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-sm font-bold uppercase tracking-widest text-foreground font-medium italic">Phân tích tín hiệu mới nhất</span>
                 </div>
                 <span className="text-[10px] uppercase font-bold text-accent px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">Đang quét...</span>
               </div>
               
               <div className="relative z-10 space-y-4">
                  {[
                    { company: "LogiTech VN", signal: "Tuyển Marketing Executive", score: 85, industry: "Agency" },
                    { company: "Sun Bakery", signal: "Mở thêm 2 kho tại Bình Dương", score: 82, industry: "Logistics" },
                    { company: "Eco Home", signal: "Ra mắt BST nội thất mới", score: 78, industry: "PR/KOL" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 bg-muted/20 dark:bg-muted/40 rounded-2xl border border-border flex items-center justify-between hover:border-primary/50 transition-all hover:bg-muted/50 shadow-sm"
                    >
                      <div className="space-y-1">
                        <p className="font-bold text-sm text-foreground italic uppercase leading-none">{item.company}</p>
                        <p className="text-xs text-muted-foreground italic font-medium">{item.signal}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-primary dark:text-glow italic">SCORE {item.score}</p>
                        <p className="text-[9px] text-accent font-bold uppercase tracking-widest">{item.industry}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals Section */}
      <section id="tín-hiệu" className="px-6 md:px-12 py-32 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary underline underline-offset-8">Intelligence Signals</h2>
            <h3 className="text-4xl md:text-6xl font-bold italic tracking-tight text-foreground uppercase text-balance">Kịch bản Lead dành riêng cho bạn</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PremiumSignalCard 
              icon={Megaphone}
              title="Marketing & PR"
              signal="Tuyển Performance / Brand Manager"
              outcome="Họ sắp chạy chiến dịch → Cần Agency / Production House."
              type="URGENT"
            />
            <PremiumSignalCard 
              icon={Truck}
              title="Logistics & Vận tải"
              signal="Mở thêm chi nhánh / kho bãi"
              outcome="Nhu cầu Logistic chuỗi cung ứng tăng cao."
              type="GROWTH"
            />
            <PremiumSignalCard 
              icon={Search}
              title="Công nghệ & SaaS"
              signal="Tuyển vị trí IT / Chuyển đổi số"
              outcome="Bắt đầu giai đoạn upgrade hệ thống."
              type="TECH"
            />
            <PremiumSignalCard 
              icon={AlertCircle}
              title="Khủng hoảng truyền thông"
              signal="Review xấu tăng mạnh trên Fanpage"
              outcome="Cần xử lý Social Media Reputation ngay lập tức."
              type="CRITICAL"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (Featured) */}
      <section id="demo" className="relative py-32 px-6 md:px-12 bg-muted/20 dark:bg-muted/30 border-y border-border overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10 opacity-30" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
              <Monitor className="h-3.5 w-3.5" />
              Giao diện điều khiển thông minh
            </div>
            <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight uppercase leading-none text-foreground">
              QUẢN LÝ LEAD TẬP TRUNG
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
              Trải nghiệm Dashboard hiện đại, nơi mọi tín hiệu thị trường được chuyển hóa thành cơ hội kinh doanh thực tế.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[48px] overflow-hidden luxury-border shadow-2xl dashboard-mockup w-full max-w-6xl mx-auto"
          >
            <DashboardMockup />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Lead Discovery", desc: "Tầm nhìn 360 độ về mọi lead." },
              { icon: BarChart3, title: "Analytics", desc: "Báo cáo tăng trưởng thời gian thực." },
              { icon: Zap, title: "Quick Actions", desc: "Tương tác nhanh chỉ với 1 click." },
              { icon: MessageSquare, title: "AI Assistant", desc: "Trợ lý ảo hỗ trợ kịch bản thông minh." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:bg-muted/50 text-center">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-4" />
                <h4 className="text-[11px] font-bold uppercase tracking-widest mb-1 text-foreground">{item.title}</h4>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (AI Workflow) */}
      <section id="cách-hoạt-động" className="px-6 md:px-12 py-32 relative">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-16 bg-primary" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary underline underline-offset-8">Quy trình AI Intelligence</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold italic tracking-tight leading-[0.95] text-foreground uppercase text-balance">
              BIẾN DỮ LIỆU THÀNH <br />
              <span className="text-primary font-bold italic">&quot;Cơ hội chốt Sales&quot;</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Search, title: "Thu thập dữ liệu", desc: "Quét tin tuyển dụng, website, fanpage và các thông báo công khai.", color: "primary" },
              { step: "02", icon: Zap, title: "Phát hiện tín hiệu", desc: "Nhận diện dấu hiệu doanh nghiệp sắp chi tiền Marketing, Logistic, Tech.", color: "accent" },
              { step: "03", icon: BarChart3, title: "Chấm điểm (Lead Score)", desc: "Xác định độ 'nóng' của lead để sales biết ưu tiên ai trước.", color: "indigo" },
              { step: "04", icon: MessageSquare, title: "Gợi ý kịch bản", desc: "Tự động tạo email/tin nhắn/call script phù hợp với Lead.", color: "blue" },
            ].map((item, i) => (
              <div key={i} className="group relative p-10 rounded-[42px] bg-card border border-border transition-all hover:bg-muted/50 hover:shadow-xl hover:-translate-y-2 shadow-sm">
                <div className="absolute top-8 right-10 text-7xl font-bold text-foreground/5 group-hover:text-primary transition-colors duration-500 tabular-nums italic">
                  {item.step}
                </div>
                
                <div className="space-y-8 relative z-10 pt-4">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center transition-all bg-muted border border-border group-hover:bg-primary group-hover:text-white shadow-sm">
                    <item.icon className="h-7 w-7" />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground tracking-tight italic uppercase text-balance leading-none">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-bold uppercase tracking-widest group-hover:text-foreground transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="tính-năng" className="px-6 md:px-12 py-32 bg-muted/20 dark:bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
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
      <section className="px-6 md:px-12 py-32 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6 text-balance">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">Cái nhìn thực tế</h2>
            <h3 className="text-4xl md:text-6xl font-bold italic tracking-tight text-foreground uppercase">Biến dữ liệu thành hành động</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
            {/* Lead Preview Card */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="w-full max-w-[550px] bg-card border border-border rounded-[42px] p-8 shadow-2xl relative overflow-hidden group/card"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-primary via-accent to-primary opacity-50" />
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-foreground italic tracking-tight uppercase">X-Logistic JSC</h4>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-primary/20">Logistics</span>
                    <span className="text-[10px] bg-accent/10 text-accent px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-accent/20">Bình Dương</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary dark:text-glow italic">94</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">LEAD SCORE</div>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="p-6 bg-muted/40 dark:bg-muted/50 rounded-3xl border border-border italic shadow-inner">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3 leading-none">Tín hiệu phát hiện:</div>
                  <p className="text-sm text-foreground leading-relaxed font-medium">
                    &quot;Công ty vừa đăng tin tuyển 5 quản lý kho và 20 nhân viên vận hành tại KCN Sóng Thần.&quot;
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-primary uppercase flex items-center gap-3 tracking-[0.2em] leading-none">
                    <MessageSquare className="h-4 w-4" />
                    Gợi ý kịch bản (Outreach Script):
                  </div>
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl text-[14px] leading-relaxed relative group/script text-balance shadow-inner">
                    <p className="text-foreground/90 font-medium italic">
                      &quot;Chào anh/chị [Name], em thấy X-Logistic đang mở rộng quy mô kho bãi tại Bình Dương. 
                      Bên em chuyên cung cấp giải pháp [Hệ thống ERP] giúp tối ưu 30% chi phí vận hành cho kho mới...&quot;
                    </p>
                    <button className="absolute top-4 right-4 p-2 rounded-xl bg-background border border-border opacity-0 group-hover/script:opacity-100 transition-opacity hover:bg-muted shadow-sm">
                      <Fingerprint className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex-1 py-4 rounded-2xl bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] hover-neon-orange transition-all">Lưu vào CRM</button>
                  <button className="flex-1 py-4 rounded-2xl border border-border text-foreground hover:bg-muted/50 text-xs font-bold uppercase tracking-widest transition-all">Săn Lead này</button>
                </div>
              </div>
            </motion.div>

            {/* AI Explanation */}
            <div className="max-w-[450px] space-y-10">
              <div className="space-y-4 text-balance">
                <div className="h-1.5 w-16 bg-primary rounded-full" />
                <h4 className="text-3xl md:text-5xl font-bold italic text-foreground uppercase leading-[1.1] tracking-[0.02rem]">Cá nhân hóa <br /> ở quy mô lớn</h4>
                <p className="text-muted-foreground text-base leading-relaxed italic font-medium">
                  AI không chỉ tìm lead, mà còn phân bối cảnh để gợi ý cách tiếp cận tự nhiên nhất. 
                  Bạn không còn gửi những email spam vô nghĩa.
                </p>
              </div>
              <ul className="space-y-5">
                {[
                  "Tự động điền thông tin doanh nghiệp",
                  "Phân tích Ý định (Intent) mua hàng",
                  "Gợi ý Call Script qua điện thoại/Zalo",
                  "Xuất báo cáo Lead định dạng cao"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-[11px] font-bold text-foreground uppercase tracking-widest leading-none">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 py-24 bg-muted/20 dark:bg-muted/40 border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 relative z-10">
          <StatItem value="10.000+" label="Lead được quét mỗi ngày" />
          <StatItem value="45%" label="Tỷ lệ phản hồi trung bình" />
          <StatItem value="3x" label="Tốc độ chốt hợp đồng" />
          <StatItem value="150+" label="Nhà kinh doanh tin dùng" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none high-tech-grid" />
      </section>

      {/* Footer / CTA Section */}
      <footer className="relative py-44 px-6 md:px-12 overflow-hidden bg-background">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-[24px] bg-primary/10 border border-primary/20 text-primary shadow-xl shadow-primary/10">
              <Radar className="h-8 w-8" />
            </div>
            <h2 className="text-5xl md:text-8xl font-bold italic tracking-tight text-foreground leading-none uppercase text-balance">
              SẴN SÀNG ĐỂ <br /> <span className="text-primary dark:text-glow">SĂN LEAD?</span>
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground font-bold uppercase tracking-widest italic leading-relaxed text-balance">
              Để AI Sales Radar giúp bạn dẫn đầu thị trường B2B.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/login" className="px-14 py-7 rounded-full bg-foreground text-background text-lg font-bold uppercase italic tracking-tight hover:scale-110 active:scale-95 transition-all shadow-2xl">
              Bắt đầu miễn phí ngay
            </Link>
          </div>
        </div>

        <div className="mt-40 pt-16 border-t border-border flex flex-col items-center gap-10">
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {["Về chúng tôi", "Điều khoản", "Bảo mật", "Liên hệ"].map((item) => (
              <a key={item} href="#" className="hover:text-primary transition-all">{item}</a>
            ))}
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40 text-center leading-relaxed">
            SALES RADAR © 2026 // NÂNG TẦM CHIẾN THUẬT SALES B2B TẠI VIỆT NAM // INTEGRATED NANO BANANA
          </div>
        </div>
      </footer>
    </div>
  );
}

function RadarAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1], 
            scale: [0.8 + i * 0.25, 1.25 + i * 0.25],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          className="absolute border border-primary/20 rounded-full"
          style={{ width: `${350 + i * 180}px`, height: `${350 + i * 180}px` }}
        />
      ))}

      {/* Scanning Line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, rgba(99,102,241,0.2) 0deg, transparent 60deg)",
        }}
      />

      {/* Data Points (Children) */}
      {[
        { x: -120, y: -180, delay: 0 },
        { x: 180, y: -120, delay: 2 },
        { x: 100, y: 220, delay: 1 },
        { x: -250, y: 120, delay: 3.5 },
        { x: 280, y: 150, delay: 4.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: [0, 1, 0.2],
            scale: [0.8, 1.2, 1]
          }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: p.delay 
          }}
          className="absolute h-3 w-3 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center"
          style={{ marginLeft: p.x, marginTop: p.y }}
        >
          <div className="h-full w-full bg-primary rounded-full animate-ping opacity-40" />
          <div className="absolute h-1 w-1 bg-white rounded-full" />
        </motion.div>
      ))}

      {/* Center Icon */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 p-12 rounded-full bg-primary/5 backdrop-blur-3xl border border-primary/30 shadow-[0_0_80px_rgba(99,102,241,0.1)]"
      >
        <Radar className="h-20 w-20 text-primary animate-pulse" />
      </motion.div>
    </div>
  );
}

function PremiumSignalCard({ icon: Icon, title, signal, outcome, type }: { icon: LucideIcon; title: string, signal: string, outcome: string, type: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      className="p-10 rounded-[42px] border border-border bg-card backdrop-blur-2xl relative overflow-hidden group transition-all hover:border-primary/40 shadow-xl"
    >
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
        <Icon className="h-32 w-32" />
      </div>
      
      <div className="space-y-10 relative z-10">
        <div className="flex items-center justify-between">
          <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-muted border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
            <Icon className="h-7 w-7" />
          </div>
          <span className={`text-[10px] font-bold tracking-[0.1em] px-5 py-2 rounded-full border border-border ${
            type === 'URGENT' ? 'text-rose-600 bg-rose-500/10 dark:text-rose-400' :
            type === 'GROWTH' ? 'text-accent bg-accent/10' :
            type === 'CRITICAL' ? 'text-orange-600 bg-orange-500/10 dark:text-orange-400' :
            'text-blue-600 bg-blue-500/10 dark:text-blue-400'
          }`}>
            {type}
          </span>
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl font-bold italic tracking-tight text-foreground uppercase leading-none">{title}</h4>
          <div className="space-y-5">
            <div className="p-6 rounded-3xl bg-muted/30 border border-border italic shadow-inner">
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3 leading-none">SIGNALS</p>
              <p className="text-sm font-medium text-foreground leading-relaxed">&quot;{signal}&quot;</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none text-balance">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group p-12 rounded-[48px] border border-border bg-card backdrop-blur-xl transition-all hover:bg-muted/50 shadow-xl relative overflow-hidden"
    >
      <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[28px] bg-muted border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="mb-6 text-2xl font-bold text-foreground tracking-tight italic uppercase leading-none">{title}</h3>
      <p className="text-muted-foreground font-bold leading-[1.8] uppercase text-[10px] tracking-[0.2em] group-hover:text-foreground transition-colors">
        {desc}
      </p>
      <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex-1 min-w-[200px] text-center lg:text-left space-y-2">
      <div className="text-6xl font-bold tracking-tight text-foreground italic tabular-nums dark:text-glow uppercase">{value}</div>
      <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-muted-foreground">{label}</div>
    </div>
  );
}

function DashboardMockup() {
  const [view, setView] = useState<'signals' | 'saved' | 'outreach' | 'execution'>('signals');
  
  // Perfectly synchronized view sequence
  useEffect(() => {
    const sequence = [
      { t: 3200, v: 'signals' as const },
      { t: 7200, v: 'saved' as const },
      { t: 11200, v: 'outreach' as const },
      { t: 15200, v: 'execution' as const },
    ];
    
    let timerId: NodeJS.Timeout;
    const startSequence = () => {
      sequence.forEach((step, i) => {
        setTimeout(() => setView(step.v), step.t);
      });
      timerId = setTimeout(startSequence, 16000);
    };

    startSequence();
    return () => clearTimeout(timerId);
  }, []);

  const views: Record<string, { title: string; color: string; bgColor: string; borderColor: string; icon: React.ReactNode; stats: any[] }> = {
    signals: {
      title: 'SignalsRadar',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      icon: <Radar className="h-5 w-5" />,
      stats: [
        { label: 'TÍN HIỆU HÔM NAY', value: '1,429', trend: '+14%', trendColor: 'text-emerald-500' },
        { label: 'LEAD TIỀM NĂNG', value: '184', trend: '+5.2%', trendColor: 'text-emerald-500' },
        { label: 'ĐANG TIẾP CẬN', value: '42', trend: '+12%', trendColor: 'text-indigo-500' },
        { label: 'TỶ LỆ PHẢN HỒI', value: '38%', trend: '+2%', trendColor: 'text-emerald-500' }
      ]
    },
    saved: {
      title: 'SavedLeads',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      icon: <CheckCircle2 className="h-5 w-5" />,
      stats: [
        { label: 'TỔNG MỤC ĐÃ LƯU', value: '12', trend: '+2', trendColor: 'text-emerald-500' },
        { label: 'SẴN SÀNG TIẾP CẬN', value: '08', trend: 'HOT', trendColor: 'text-orange-500' },
        { label: 'ĐÃ XUẤT DỮ LIỆU', value: '04', trend: 'NEW', trendColor: 'text-indigo-500' },
        { label: 'CHIA SẺ DANH SÁCH', value: '02', trend: 'ACTIVE', trendColor: 'text-emerald-500' }
      ]
    },
    outreach: {
      title: 'OutreachEngine',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      icon: <MessageSquare className="h-5 w-5" />,
      stats: [
        { label: 'KỊCH BẢN ĐANG CHẠY', value: '08', trend: 'LIVE', trendColor: 'text-emerald-500' },
        { label: 'TỶ LỆ PHẢN HỒI TB', value: '34%', trend: 'OPTIMIZED', trendColor: 'text-purple-500' },
        { label: 'LEAD ĐÃ TIẾP CẬN', value: '1,240', trend: 'GROWTH', trendColor: 'text-emerald-500' },
        { label: 'DỰ ĐOÁN CHỐT', value: '22%', trend: '+5%', trendColor: 'text-emerald-500' }
      ]
    },
    execution: {
      title: 'ExecutionRadar',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      icon: <Zap className="h-5 w-5" />,
      stats: [
        { label: 'CƠ HỘI MỞ', value: '24', trend: '+12%', trendColor: 'text-emerald-500' },
        { label: 'TỶ LỆ CHỐT TB', value: '18%', trend: '+5%', trendColor: 'text-emerald-500' },
        { label: 'THỜI GIAN CHỐT', value: '4.5 ngày', trend: '-1d', trendColor: 'text-emerald-500' },
        { label: 'CẢNH BÁO RỦI RO', value: '02', trend: 'WATCH', trendColor: 'text-rose-500' }
      ]
    }
  };

  return (
    <div className="w-full aspect-video bg-[#f8fafc] dark:bg-[#0b101b] p-0 overflow-hidden relative flex transition-colors duration-500 font-sans border border-border">
      {/* 1. Sidebar (Full) */}
      <div className="w-16 md:w-24 border-r border-border flex flex-col items-center py-8 gap-8 bg-background/80 backdrop-blur-xl z-20">
        <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/30">
          <Radar className="h-7 w-7" />
        </div>
        {[
          { id: 'signals', icon: Layers, label: 'FEED LEAD' },
          { id: 'saved', icon: CheckCircle2, label: 'ĐÃ LƯU' },
          { id: 'outreach', icon: MessageSquare, label: 'KỊCH BẢN' },
          { id: 'execution', icon: Target, label: 'GIÁM SÁT' }
        ].map((item) => (
          <div 
            key={item.id}
            className={`group relative h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${view === item.id ? 'bg-primary text-white shadow-lg scale-110' : 'text-muted-foreground hover:bg-muted'}`}
          >
            <item.icon className="h-6 w-6" />
            <div className="absolute left-full ml-4 px-3 py-1 bg-slate-900 text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
              {item.label}
            </div>
            {view === item.id && (
              <motion.div 
                layoutId="activeGlow"
                className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl -z-10" 
              />
            )}
          </div>
        ))}
        
        <div className="mt-auto space-y-6 pb-4">
           <div className="h-10 w-10 rounded-2xl border border-border flex items-center justify-center text-muted-foreground"><Globe className="h-5 w-5" /></div>
           <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shadow-inner uppercase italic">CH</div>
        </div>
      </div>

      {/* 2. Main Application Body */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f1f5f9]/50 dark:bg-[#0f172a]/50">
        
        {/* Top Navbar (Full Header) */}
        <div className="h-20 border-b border-border flex items-center justify-between px-10 bg-background/50 backdrop-blur-md">
          <div className="flex flex-col">
            <h1 className="text-sm font-black text-primary tracking-tighter uppercase italic">SALES<span className="text-foreground">OPERATOR</span></h1>
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Bảng điều khiển săn lead</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Hệ thống đang quét...</span>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
               <div className="text-right hidden sm:block">
                 <div className="text-[10px] font-bold text-foreground leading-none">Chuyên viên Sales</div>
                 <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-tighter">Standard Account</div>
               </div>
               <div className="h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-border flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-muted-foreground" />
               </div>
            </div>
          </div>
        </div>

        {/* Dynamic Canvas Area */}
        <div className="flex-1 p-10 space-y-10 overflow-hidden relative border-t border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.02 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], // Smooth PowerPoint-style "Push" Ease
              }}
              className="space-y-10 h-full flex flex-col"
            >
              {/* Main Banner / Visual Header */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="p-10 rounded-[48px] bg-white dark:bg-slate-900 border border-border shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-10 p-12 opacity-5 scale-[3] rotate-12 transition-transform duration-1000 group-hover:rotate-0">
                  {views[view].icon}
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-5">
                       <div className={`h-16 w-16 rounded-[24px] ${views[view].bgColor} ${views[view].color} flex items-center justify-center shadow-inner border ${views[view].borderColor}`}>
                          {React.isValidElement(views[view].icon) && React.cloneElement(views[view].icon as any, { size: 32 })}
                       </div>
                       <div className="space-y-1">
                         <h3 className={`text-5xl font-black italic tracking-tighter uppercase ${views[view].color}`}>{views[view].title}</h3>
                         <div className="flex items-center gap-3">
                           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">HỆ THỐNG ĐANG TRỰC TUYẾN</p>
                         </div>
                       </div>
                    </div>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-lg opacity-80 leading-relaxed">
                      PHÂN TÍCH THỜI GIAN THỰC | 2,400+ NGUỒN DỮ LIỆU | AI INTELLIGENCE
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-80 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-border flex items-center px-6 shadow-xs relative">
                       <Search className="h-4 w-4 text-muted-foreground mr-4" />
                       <div className="h-3 w-40 rounded-full bg-muted-foreground/20" />
                       <div className="absolute right-4 px-2 py-1 rounded bg-muted text-[8px] font-black text-muted-foreground">CTRL + K</div>
                    </div>
                    <div className={`h-14 px-10 rounded-3xl ${view === 'execution' ? 'bg-orange-500' : 'bg-primary'} text-white text-xs font-black uppercase flex items-center shadow-2xl shadow-primary/30 active:scale-95 transition-all cursor-pointer`}>
                       TẠO BẢN QUÉT MỚI
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* KPI Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {views[view].stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="p-8 rounded-[40px] bg-white dark:bg-slate-900 border border-border shadow-sm space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                       <div className="h-10 w-10 rounded-2xl bg-muted/30 flex items-center justify-center text-muted-foreground">
                          {i === 0 ? <Zap className="h-5 w-5" /> : i === 1 ? <Target className="h-5 w-5" /> : i === 2 ? <MessageSquare className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}
                       </div>
                       <span className={`text-[10px] font-black px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 ${stat.trendColor}`}>{stat.trend}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                      <div className="text-4xl font-black text-foreground tabular-nums italic leading-none">{stat.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Actionable List area with Simulated Scroll */}
              <div className="flex-1 bg-white/50 dark:bg-slate-900/50 rounded-[48px] border border-border p-10 space-y-8 overflow-hidden relative">
                <div className="flex items-center justify-between border-b border-border pb-8 bg-white/5 dark:bg-slate-900/5 backdrop-blur-sm z-10 relative">
                  <div className="flex items-center gap-5">
                    <div className={`h-12 w-12 rounded-3xl ${view === 'execution' ? 'bg-orange-500/10 text-orange-500' : 'bg-primary/10 text-primary'} flex items-center justify-center shadow-inner`}>
                       <Zap className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-black text-foreground uppercase italic tracking-tighter">Dòng sự kiện thị trường</h4>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Tự động cuộn theo dõi thời gian thực</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 px-6 rounded-2xl bg-white dark:bg-slate-800 border border-border flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest shadow-xs">
                       <Layers className="h-4 w-4" /> Lọc theo ngành
                    </div>
                  </div>
                </div>

                {/* Simulated Scroll Container */}
                <motion.div 
                  className="grid grid-cols-1 gap-4"
                  animate={{ y: [0, -120, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {[
                    { company: "Nexus Marketing Group", signal: "VP of Brand Growth", score: 9.2, tag: "NEED AGENCY" },
                    { company: "Vietnam Express Logistics", signal: "Trưởng phòng vận tải & kho bãi", score: 8.9, tag: "NEED LOGISTIC" },
                    { company: "Sun Bakery JSC", signal: "Mở 2 chi nhánh mới", score: 8.5, tag: "EXPANSION" },
                    { company: "Eco Home Decor", signal: "Cần tối ưu SEO/Ads", score: 8.2, tag: "NEED MARKETING" }
                  ].map((lead, i) => (
                    <motion.div 
                      key={i} 
                      className="group flex items-center gap-10 p-8 rounded-[36px] bg-white dark:bg-slate-900 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <div className="h-16 w-16 rounded-[24px] bg-muted/30 flex items-center justify-center shadow-inner group-hover:bg-primary/10 transition-colors">
                        <Building2 className="h-8 w-8 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <h5 className="text-lg font-black text-foreground uppercase italic tracking-tighter group-hover:text-primary transition-colors">{lead.company}</h5>
                        <p className="text-xs text-muted-foreground font-medium italic">{lead.signal}</p>
                      </div>
                      <div className="hidden lg:flex flex-col items-center gap-2">
                         <span className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">ĐỘ NÓNG (SCORE)</span>
                         <div className="flex items-center gap-3">
                            <span className="text-2xl font-black text-foreground italic">{lead.score}</span>
                            <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                               <div className={`h-full ${view === 'execution' ? 'bg-orange-500' : 'bg-primary'} w-4/5`} />
                            </div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="h-12 px-8 rounded-2xl bg-slate-900 text-white text-[10px] font-bold uppercase flex items-center group-hover:bg-primary">TẠO KỊCH BẢN</div>
                         <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20"><CheckCircle2 className="h-6 w-6" /></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 🖱️ Perfectly Sync Virtual Cursor 🖱️ */}
      <motion.div
        animate={{
          x: [600, 48, 48, 48, 48, 48, 48, 48, 48, 600],
          y: [400, 205, 205, 285, 285, 365, 365, 445, 445, 400],
          scale: [1, 0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.15, 0.2, 0.4, 0.45, 0.65, 0.7, 0.9, 0.95, 1],
        }}
        className="absolute top-0 left-0 z-50 pointer-events-none"
      >
        <div className="relative">
          <div className="h-7 w-7 fill-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
             <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                <path 
                  fill="currentColor" 
                  stroke="black" 
                  strokeWidth="1.5"
                  d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 2.87 6.33c.12.27.44.39.71.26l2.12-.96c.27-.12.39-.44.27-.71l-2.87-6.33h6.4c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.32-.85-.09-.85.35z" 
                />
             </svg>
          </div>
          {/* Clicks are at intervals matching setView */}
          <motion.div 
            animate={{ scale: [0, 3], opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3.4 }}
            className="absolute -top-4 -left-4 h-16 w-16 border-[5px] border-primary/50 rounded-full"
          />
        </div>
      </motion.div>

      {/* Surface Effects */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/10 via-transparent to-white/5 dark:from-white/0" />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 dark:ring-white/5" />
    </div>
  );
}
