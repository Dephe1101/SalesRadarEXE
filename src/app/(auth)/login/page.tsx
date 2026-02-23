"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { 
  Radar, 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  Loader2,
  Globe,
  TrendingUp,
  ArrowLeft
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const isAdmin = email.toLowerCase().includes('admin');
      const role = isAdmin ? 'admin' : 'user';
      
      document.cookie = `radar_session=true; path=/; max-age=3600`;
      document.cookie = `radar_role=${role}; path=/; max-age=3600`;
      
      login(email);
      
      toast.success("Đăng nhập thành công", {
        description: isAdmin 
          ? "Truy cập Trung tâm chỉ huy quản trị." 
          : "Chào mừng bạn quay lại hệ thống điều khiển sales.",
      });

      if (isAdmin) {
        router.push('/admin/dashboard');
      } else {
        router.push('/leads');
      }
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-linear-to-r from-primary/10 to-accent/10 blur-[120px]" />
        <div className="absolute left-[10%] bottom-[-10%] h-[30%] w-[30%] rounded-full bg-linear-to-br from-indigo-500/10 to-purple-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      {/* Back to Home Link */}
      <div className="absolute top-10 left-10 z-20">
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/50 border border-border group-hover:border-primary/50 transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </div>
          Quay lại trang chủ
        </Link>
      </div>

      <div className="z-10 w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Branding & Value Prop */}
        <div className="hidden lg:flex flex-col space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Hệ thống Săn Lead Thế hệ Mới
          </div>
          
          <h1 className="text-6xl font-black tracking-tight text-foreground leading-tight italic">
            Nâng tầm <br />
            <span className="bg-linear-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent not-italic">
              Tốc độ Sales
            </span>
          </h1>
          
          <p className="max-w-md text-xl font-medium text-muted-foreground leading-relaxed uppercase selection:bg-primary/30">
            Kết nối với các nút tín hiệu toàn cầu. Ưu tiên khách hàng tiềm năng bằng công cụ chấm điểm chuyên sâu.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <Card className="rounded-2xl border-border bg-card/50 p-6 backdrop-blur-sm shadow-luxury">
              <TrendingUp className="h-6 w-6 text-primary mb-2" />
              <div className="text-xl font-black text-foreground">+300%</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Tối ưu tăng trưởng</div>
            </Card>
            <Card className="rounded-2xl border-border bg-card/50 p-6 backdrop-blur-sm shadow-luxury">
              <Globe className="h-6 w-6 text-accent mb-2" />
              <div className="text-xl font-black text-foreground">Global</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Nguồn tín hiệu đa kênh</div>
            </Card>
          </div>
        </div>

        {/* Login Card */}
        <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-500">
          <Card className="w-full max-w-md space-y-10 rounded-[40px] border-border bg-card/50 p-12 backdrop-blur-2xl transition-all hover:bg-card/80 shadow-luxury">
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-primary to-blue-600 text-white shadow-2xl shadow-primary/20 rotate-3 transition-transform hover:rotate-0">
                <Radar className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h2 className="text-3xl font-black tracking-tight text-foreground italic">Portal Truy Cập</h2>
                <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.3em]">Quản trị Sales Radar</p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="space-y-3">
                <Label className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground ml-1">Email truy nhập</Label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary z-10" />
                  <Input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="commander@salesradar.io" 
                    className="h-auto rounded-2xl border-border bg-background/50 py-5 pl-14 pr-6 text-sm font-bold text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/10 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground ml-1">Mật khẩu xác thực</Label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary z-10" />
                  <Input 
                    type="password" 
                    defaultValue="••••••••"
                    className="h-auto rounded-2xl border-border bg-background/50 py-5 pl-14 pr-6 text-sm font-bold text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                disabled={loading}
                className="group relative flex h-auto w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-foreground py-5 text-sm font-black text-background transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest">
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Khởi tạo kết nối
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 z-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
              </Button>
            </form>

            <div className="flex flex-col items-center gap-4 border-t border-border pt-8">
              <div className="flex items-center gap-2 rounded-full bg-card/10 border border-border px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-inner">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Dữ liệu được mã hóa bảo mật
              </div>
              <p className="text-[9px] text-muted-foreground/50 font-bold uppercase tracking-widest">© 2026 Sales Radar {"//"} Hệ thống bảo mật đa tầng</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
