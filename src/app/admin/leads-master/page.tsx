"use client";

import React from 'react';
import { 
  Database, 
  Download, 
  Search, 
  RefreshCcw,
  ExternalLink,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MasterLeadsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-foreground italic">Kho Lead <span className="text-primary not-italic">Tổng lực</span></h1>
          <p className="text-muted-foreground text-sm font-medium">Lưu trữ tất cả dữ liệu thô thu thập từ các nguồn Radar.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 rounded-xl text-[10px] font-bold uppercase tracking-widest px-4 h-10 shadow-sm transition-all border-border bg-card">
            <Download className="h-4 w-4" />
            Export RAW Data
          </Button>
          <Button className="gap-2 rounded-xl text-[10px] font-black uppercase tracking-widest px-6 h-10 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
            <RefreshCcw className="h-4 w-4" />
            Force Re-scan
          </Button>
        </div>
      </div>

      {/* Database Filters */}
      <Card className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 rounded-[32px] border-border bg-muted/20">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-muted-foreground uppercase px-2 tracking-widest">Tìm kiếm ID/Nguồn</label>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
            <Input className="w-full pl-10 h-11 rounded-xl bg-background border-border text-xs text-foreground focus-visible:ring-primary/20" placeholder="Lead ID, Domain..." />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-muted-foreground uppercase px-2 tracking-widest">Provider</label>
          <Select defaultValue="all">
            <SelectTrigger className="w-full h-11 rounded-xl bg-background border-border text-xs">
              <SelectValue placeholder="Chọn nguồn" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border">
              <SelectItem value="all">Tất cả nguồn</SelectItem>
              <SelectItem value="linkedin">LinkedIn Scraper</SelectItem>
              <SelectItem value="google">Google Maps API</SelectItem>
              <SelectItem value="facebook">Facebook Ads Library</SelectItem>
              <SelectItem value="direct">Direct Upload</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-muted-foreground uppercase px-2 tracking-widest">Validation Status</label>
          <Select defaultValue="verified">
            <SelectTrigger className="w-full h-11 rounded-xl bg-background border-border text-xs">
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border">
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending AI</SelectItem>
              <SelectItem value="invalid">Invalid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
           <Button variant="ghost" className="w-full h-11 rounded-xl text-muted-foreground hover:bg-muted font-bold text-[10px] uppercase tracking-widest">
             Xóa bộ lọc
           </Button>
        </div>
      </Card>

      {/* Master Data Table */}
      <Card className="rounded-[32px] border-border bg-card overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10 border-b border-border">
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Inbound ID</TableHead>
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Thực thể / Nguồn thô</TableHead>
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ingestion Time</TableHead>
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">AI Score</TableHead>
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</TableHead>
              <TableHead className="px-6 py-4 h-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 'LD-9012', company: 'LogiFlow Solutions', source: 'linkedin.com', date: '5 phút trước', score: '8.4', status: 'In-Sync' },
              { id: 'LD-8123', company: 'EcoTech Vietnam', source: 'google.maps', date: '12 phút trước', score: '6.2', status: 'Processing' },
              { id: 'LD-7541', company: 'Global PR Agency', source: 'fb.ads', date: '1 giờ trước', score: '9.1', status: 'In-Sync' },
              { id: 'LD-6632', company: 'VinTech Warehouse', source: 'scraping.bot', date: '2 giờ trước', score: '4.5', status: 'Flagged' },
            ].map((row) => (
              <TableRow key={row.id} className="hover:bg-muted/30 border-b border-border transition-colors">
                <TableCell className="px-6 py-5 font-mono text-[10px] text-primary font-bold">{row.id}</TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground">{row.company}</span>
                    <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                      <ExternalLink className="h-3 w-3 text-primary" />
                      {row.source}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-5">
                   <div className="flex items-center gap-2 text-muted-foreground font-medium">
                     <Clock className="h-3.5 w-3.5" />
                     {row.date}
                   </div>
                </TableCell>
                <TableCell className="px-6 py-5">
                   <Badge variant="outline" className={`px-2 py-0.5 rounded-lg font-black border-0 shadow-none ${Number(row.score) > 8 ? 'text-emerald-500 bg-emerald-500/10' : 'text-muted-foreground bg-muted/50'}`}>
                     {row.score}
                   </Badge>
                </TableCell>
                <TableCell className="px-6 py-5">
                  <span className={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${
                    row.status === 'In-Sync' ? 'text-emerald-500' : 
                    row.status === 'Flagged' ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${
                      row.status === 'In-Sync' ? 'bg-emerald-500' : 
                      row.status === 'Flagged' ? 'bg-rose-500' : 'bg-amber-500'
                    }`} />
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-5 text-right">
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                     <AlertCircle className="h-4 w-4" />
                   </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
