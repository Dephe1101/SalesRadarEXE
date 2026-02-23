"use client";

import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserPlus, 
  Mail, 
  Shield, 
  CheckCircle2, 
  XCircle,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-8 space-y-8 animate-in fade-in duration-700">
      {/* Breadcrumbs/Nav */}
      <div className="flex items-center gap-4">
        <Link href="/admin/dashboard" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-primary transition-all">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground italic">
            Quản lý <span className="text-primary not-italic">Người dùng</span>
          </h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Quản trị viên / Danh sách người dùng</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên hoặc email..." 
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold placeholder:font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-border bg-card text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all">
            <Filter className="h-4 w-4" />
            Bộ lọc
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
            <UserPlus className="h-4 w-4" />
            Thêm User
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="rounded-[32px] border border-border bg-card overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <th className="px-8 py-5">Định danh người dùng</th>
              <th className="px-8 py-5">Vai trò</th>
              <th className="px-8 py-5">Ngày gia nhập</th>
              <th className="px-8 py-5">Trạng thái</th>
              <th className="px-8 py-5 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {[
              { id: '1', name: 'Nguyễn Văn A', email: 'a.nguyen@fptu.edu.vn', role: 'Administrator', joined: '12/02/2026', status: 'Active', avatar: 'NA' },
              { id: '2', name: 'Trần Thị B', email: 'b.tran@agency.com', role: 'User', joined: '15/02/2026', status: 'Active', avatar: 'TB' },
              { id: '3', name: 'Lê Văn C', email: 'c.le@logistic.io', role: 'User', joined: '18/02/2026', status: 'Offline', avatar: 'LC' },
              { id: '4', name: 'Phạm Minh D', email: 'd.pham@tech.com', role: 'User', joined: '20/02/2026', status: 'Active', avatar: 'PD' },
              { id: '5', name: 'Hoàng Anh E', email: 'e.hoang@startup.vn', role: 'Guest', joined: '21/02/2026', status: 'Suspended', avatar: 'HE' },
            ].map((user) => (
              <tr key={user.id} className="group hover:bg-muted/30 transition-all">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 border border-border text-primary font-black text-xs">
                      {user.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors">{user.name}</span>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <Shield className={`h-3.5 w-3.5 ${user.role === 'Administrator' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">{user.role}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs font-medium text-muted-foreground">{user.joined}</span>
                </td>
                <td className="px-8 py-6">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${
                    user.status === 'Active' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                    user.status === 'Suspended' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' :
                    'bg-secondary/10 border-secondary/20 text-muted-foreground'
                  }`}>
                    {user.status === 'Active' ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                    {user.status}
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted/30/50 transition-all ml-auto">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
