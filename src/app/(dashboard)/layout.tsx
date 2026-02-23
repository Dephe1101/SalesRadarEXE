"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { useTheme } from '@/components/shared/ThemeProvider';
import { 
  LogOut, 
  LayoutDashboard, 
  Radar as RadarIcon, 
  Settings, 
  Bell, 
  Search, 
  Command, 
  User, 
  Sun, 
  Moon, 
  Zap, 
  Target, 
  Bookmark, 
  MessageSquare,
  LucideIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { logout, user } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If admin is in sales layout, redirect to admin dashboard for clarity
    if (user?.role === 'admin' && pathname === '/leads') {
      router.push('/admin/dashboard');
    }
  }, [user, pathname, router]);

  const handleLogout = () => {
    document.cookie = "radar_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    logout();
    router.push('/login');
  };

  if (!mounted) return null;

  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/20">
        {/* Sales Professional Sidebar */}
        <aside className="fixed left-5 top-5 bottom-5 z-50 flex w-[80px] flex-col items-center rounded-[30px] border border-border bg-card/60 py-8 backdrop-blur-3xl shadow-luxury">
          <div className="mb-12 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/25 group-hover:rotate-12 transition-transform">
              <RadarIcon className="h-6 w-6" />
            </div>
          </div>
          
          <nav className="flex flex-1 flex-col gap-8">
            <NavItem icon={LayoutDashboard} active={pathname === '/leads'} onClick={() => router.push('/leads')} label="Feed Lead" />
            <NavItem icon={Bookmark} active={pathname === '/saved'} label="Đã lưu" />
            <NavItem icon={MessageSquare} active={pathname === '/outreach'} label="Kịch bản" />
            <NavItem icon={Target} active={pathname === '/tracking'} label="Theo dõi" />
          </nav>

          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-8 bg-border/50" />
            
            <div className="flex flex-col gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="h-10 w-10 rounded-xl hover:bg-muted text-muted-foreground hover:text-primary transition-all"
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-foreground text-background text-[10px] font-bold uppercase py-1 px-2 rounded-md">
                  {theme === 'dark' ? 'Sáng' : 'Tối'}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleLogout}
                    className="h-10 w-10 rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all"
                  >
                    <LogOut className="h-5 w-5 rotate-180" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-destructive text-destructive-foreground text-[10px] font-bold uppercase py-1 px-2 rounded-md">
                  Đăng xuất
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="group relative">
              <Avatar className="h-10 w-10 cursor-pointer rounded-xl bg-linear-to-br from-primary to-accent p-[2px] shadow-lg transition-transform hover:scale-105 border-0">
                <AvatarFallback className="rounded-[10px] bg-card text-[11px] font-black text-foreground uppercase">
                  {user?.name?.substring(0, 2).toUpperCase() || 'SA'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute left-full bottom-0 ml-4 opacity-0 group-hover:opacity-100 transition-all bg-card border border-border p-3 rounded-2xl shadow-luxury pointer-events-none z-50 min-w-[140px]">
                <p className="text-[10px] font-black uppercase text-foreground">{user?.name || 'Sales Rep'}</p>
                <p className="text-[9px] text-muted-foreground font-bold uppercase">Sales Mode</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Sales Content Area */}
        <div className="ml-[105px] flex-1 flex flex-col min-h-screen">
          <header className="flex h-20 items-center justify-between px-10">
            <div className="flex flex-col">
               <h2 className="text-xl font-black tracking-tight text-foreground uppercase italic">Sales <span className="text-primary not-italic">Operator</span></h2>
               <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Bảng điều khiển săn Lead</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-3 rounded-full border border-border bg-muted/20 px-5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Hệ thống đang quét</span>
              </div>
              
              <div className="h-10 w-px bg-border" />
              
              <div className="flex items-center gap-3 px-1 py-1 rounded-xl bg-muted/10 border border-border">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <User className="h-4 w-4" />
                </div>
                <div className="pr-3">
                  <p className="text-[11px] font-bold text-foreground leading-none">{user?.name || 'Sales'}</p>
                  <p className="text-[9px] text-muted-foreground font-medium">Standard</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 md:p-10">
            <div className="h-full rounded-[40px] bg-muted/5 backdrop-blur-sm border border-border/50 shadow-inner overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

function NavItem({ icon: Icon, active = false, onClick, label }: { icon: LucideIcon; active?: boolean; onClick?: () => void, label: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button 
          onClick={onClick}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 relative ${
            active 
              ? 'bg-primary text-white shadow-xl shadow-primary/25 scale-105' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <Icon className={`h-6 w-6 ${active ? 'animate-in zoom-in-50 duration-500' : ''}`} />
          {active && (
            <div className="absolute -left-[6px] h-5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" className="bg-foreground text-background text-[10px] font-black uppercase px-3 py-2 rounded-xl tracking-widest shadow-2xl">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
