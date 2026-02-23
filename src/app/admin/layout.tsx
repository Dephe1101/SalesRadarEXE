"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { useTheme } from '@/components/shared/ThemeProvider';
import { 
  LogOut, 
  ShieldCheck, 
  Users, 
  Database, 
  Activity, 
  Settings, 
  Bell,
  Search,
  Command,
  Sun,
  Moon,
  LayoutGrid,
  Lock,
  Server,
  BarChart2,
  Cpu
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AdminLayout({
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
    // Simple protection: if not admin, kick out (in real app this is middleware)
    if (user && user.role !== 'admin') {
      router.push('/leads');
    }
  }, [user, router]);

  const handleLogout = () => {
    document.cookie = "radar_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    logout();
    router.push('/login');
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Admin Sidebar - Stronger, Darker, More Technical */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 flex w-[280px] flex-col border-r border-border bg-background py-6 shadow-2xl">
        <div className="px-8 mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-black tracking-tighter text-foreground uppercase italic px-0">Radar <span className="text-primary not-italic">Admin</span></h2>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Master Command</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <div className="px-4 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-opacity-50">Management</div>
          <AdminNavItem icon={LayoutGrid} label="Tổng quan hệ thống" active={pathname === '/admin/dashboard'} onClick={() => router.push('/admin/dashboard')} />
          <AdminNavItem icon={Users} label="Quản lý người dùng" active={pathname.includes('/admin/users')} onClick={() => router.push('/admin/users')} />
          
          <div className="px-4 py-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-opacity-50">Data Infrastructure</div>
          <AdminNavItem icon={Server} label="Nguồn dữ liệu (Sources)" active={pathname.includes('/admin/sources')} />
          <AdminNavItem icon={Cpu} label="AI Models & Logic" active={pathname.includes('/admin/ai')} />
          <AdminNavItem icon={Database} label="Kho Lead tổng" active={pathname.includes('/admin/leads-master')} />
          
          <div className="px-4 py-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-opacity-50">Analytics</div>
          <AdminNavItem icon={BarChart2} label="Báo cáo hiệu suất" active={pathname.includes('/admin/reports')} />
          <AdminNavItem icon={Activity} label="Logs & Bảo mật" active={pathname.includes('/admin/security')} />
        </nav>

        <div className="px-4 mt-auto space-y-4">
          <div className="rounded-2xl bg-muted/50 border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Server Status</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-xs font-medium text-foreground/80 font-mono">v4.0.2-prod-alpha</p>
          </div>

          <div className="flex items-center justify-between gap-3 px-2">
             <Button 
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-10 w-10 shrink-0 rounded-xl"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="outline"
              onClick={handleLogout}
              className="flex-1 gap-2 h-10 rounded-xl hover:text-destructive hover:border-destructive/30 transition-all font-bold text-xs uppercase tracking-widest"
            >
              <LogOut className="h-4 w-4" />
              Thoát
            </Button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border hover:bg-muted/30 transition-colors cursor-pointer">
            <Avatar className="h-10 w-10 rounded-xl border border-border">
              <AvatarImage src="" />
              <AvatarFallback className="rounded-xl bg-linear-to-br from-primary to-accent text-white font-black text-[10px]">
                {user?.name?.substring(0, 2).toUpperCase() || 'AD'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
               <p className="text-xs font-bold text-foreground truncate">{user?.name || 'Root Admin'}</p>
               <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">System Overseer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Admin Content Area */}
      <div className="ml-[280px] flex-1 flex flex-col">
        <header className="flex h-20 items-center justify-between px-10 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
           <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
            <Input 
              placeholder="Search master records..." 
              className="w-full pl-12 pr-4 h-11 rounded-xl border-border bg-muted/30 text-sm focus-visible:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground hover:bg-muted">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[10px] text-muted-foreground">
               <Lock className="h-3 w-3 text-primary" />
               <span>SSL SECURED</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

function AdminNavItem({ icon: Icon, label, active = false, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
        active 
          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
    >
      <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
      <span className="text-xs font-bold tracking-tight">{label}</span>
      {active && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
    </button>
  );
}
