"use client";

import React from 'react';
import { 
  Users, 
  Settings, 
  Activity, 
  ShieldAlert, 
  TrendingUp, 
  BarChart3, 
  ArrowUpRight,
  Database,
  Cpu,
  Globe
} from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="container mx-auto p-8 space-y-10 animate-in fade-in duration-700">
      {/* Header section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black tracking-tight text-foreground italic">
          Quản trị <span className="text-primary not-italic">Hệ thống</span>
        </h1>
        <p className="text-muted-foreground font-medium">Bảng điều khiển dành riêng cho quản trị viên Sales Radar.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard 
          label="Tổng User" 
          value="1,284" 
          trend="+12%" 
          icon={Users} 
          color="indigo" 
        />
        <AdminStatCard 
          label="Tín hiệu quét/ngày" 
          value="45.2K" 
          trend="+5.4%" 
          icon={Activity} 
          color="emerald" 
        />
        <AdminStatCard 
          label="Tỷ lệ AI chính xác" 
          value="94.2%" 
          trend="+1.2%" 
          icon={Cpu} 
          color="violet" 
        />
        <AdminStatCard 
          label="Lưu lượng Data" 
          value="1.2 TB" 
          trend="+0.8%" 
          icon={Database} 
          color="blue" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Người dùng mới nhất
            </h3>
            <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">
              Xem tất cả
            </button>
          </div>
          
          <div className="rounded-3xl border border-border bg-muted/30/20 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30/40 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Vai trò</th>
                  <th className="px-6 py-4">Trạng thái</th>
                  <th className="px-6 py-4 text-right">Hoạt động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle/50">
                {[
                  { name: 'Nguyễn Văn A', email: 'a.nguyen@fptu.edu.vn', role: 'Admin', status: 'Active', lastActive: '2 phút trước' },
                  { name: 'Trần Thị B', email: 'b.tran@agency.com', role: 'User', status: 'Active', lastActive: '1 giờ trước' },
                  { name: 'Lê Văn C', email: 'c.le@logistic.io', role: 'User', status: 'Inactive', lastActive: '3 ngày trước' },
                  { name: 'Phạm Minh D', email: 'd.pham@tech.com', role: 'User', status: 'Active', lastActive: '5 phút trước' },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-muted/30/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground">{user.name}</span>
                        <span className="text-[10px] text-muted-foreground">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${user.role === 'Admin' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-muted-foreground'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                        <span className="text-xs font-medium">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{user.lastActive}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health / Signal Monitor */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-accent" />
            Tình trạng Radar
          </h3>
          
          <div className="space-y-4">
            <HealthItem label="AI Engine v4.2" status="Stable" value="99.9%" />
            <HealthItem label="Signal Scraper" status="Busy" value="84% Load" />
            <HealthItem label="Database Cluster" status="Optimal" value="12ms Latency" />
            <HealthItem label="SMTP Crawler" status="Stable" value="Online" />
          </div>

          <div className="rounded-3xl border border-border bg-linear-to-br from-primary/5 to-accent/5 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hạn ngạch AI còn lại</span>
              <span className="text-xs font-black text-primary">82%</span>
            </div>
            <div className="h-2 w-full bg-border-subtle rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[82%]" />
            </div>
            <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">Hệ thống đang hoạt động ở mức năng suất tối ưu. Không có cảnh báo bảo mật nào được ghi nhận trong 24h qua.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminStatCard({ label, value, trend, icon: Icon, color }: any) {
  const colorMap: any = {
    indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  };

  return (
    <div className="group rounded-[32px] border border-border bg-muted/30/30 p-6 backdrop-blur-sm transition-all hover:bg-muted/30/60 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${colorMap[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
          <TrendingUp className="h-3 w-3" />
          {trend}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</p>
        <h4 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">{value}</h4>
      </div>
    </div>
  );
}

function HealthItem({ label, status, value }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-border/50 bg-muted/30/10">
      <div className="flex flex-col">
        <span className="text-xs font-bold text-foreground">{label}</span>
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{status}</span>
      </div>
      <span className="text-xs font-black text-foreground">{value}</span>
    </div>
  );
}
