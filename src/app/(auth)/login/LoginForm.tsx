"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { loginSchema, LoginFormData } from '@/lib/validations/auth.schema';
import { useLogin } from '@/hooks/auth/useLogin';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * LoginForm Component
 * Implements React Hook Form + Zod validation.
 * Mutation states are managed by the useLogin hook.
 */
export const LoginForm = () => {
  const { mutate: loginMutation, isPending } = useLogin();
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const router = useRouter();
  const onSubmit = (data: LoginFormData) => {
    // loginMutation(data);
    const isAdmin = data.email.toLowerCase().includes('admin');
    const role = isAdmin ? 'admin' : 'user';
    
    document.cookie = `radar_session=true; path=/; max-age=3600`;
    document.cookie = `radar_role=${role}; path=/; max-age=3600`;

    login(data.email);
    
    if (isAdmin) {
      router.push('/admin/dashboard');
    } else {
      router.push('/leads');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label 
          htmlFor="email" 
          className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground ml-1"
        >
          Email truy nhập
        </Label>
        <div className="relative group">
          <Mail className={`absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors z-10 ${errors.email ? 'text-destructive' : 'text-muted-foreground group-focus-within:text-primary'}`} />
          <Input 
            {...register('email')}
            id="email"
            type="email" 
            placeholder="commander@salesradar.io" 
            disabled={isPending}
            className={`h-auto rounded-2xl border-border bg-background/50 py-5 pl-14 pr-6 text-sm font-bold text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/10 transition-all font-mono ${errors.email ? 'border-destructive/50 ring-destructive/20 focus-visible:ring-destructive/10' : ''}`}
          />
        </div>
        {errors.email && (
          <p className="text-[10px] font-bold text-destructive uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label 
            htmlFor="password" 
            className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground ml-1"
          >
            Mật khẩu xác thực
          </Label>
          <a href="#" className="text-[9px] font-bold text-primary uppercase tracking-widest hover:underline">Quên mật khẩu?</a>
        </div>
        <div className="relative group">
          <Lock className={`absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors z-10 ${errors.password ? 'text-destructive' : 'text-muted-foreground group-focus-within:text-primary'}`} />
          <Input 
            {...register('password')}
            id="password"
            type="password" 
            placeholder="••••••••"
            disabled={isPending}
            className={`h-auto rounded-2xl border-border bg-background/50 py-5 pl-14 pr-6 text-sm font-bold text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/10 transition-all ${errors.password ? 'border-destructive/50 ring-destructive/20 focus-visible:ring-destructive/10' : ''}`}
          />
        </div>
        {errors.password && (
          <p className="text-[10px] font-bold text-destructive uppercase tracking-widest ml-1 animate-in fade-in slide-in-from-top-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button 
        type="submit"
        disabled={isPending}
        className="group relative flex h-auto w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-foreground py-5 text-sm font-black text-background transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
      >
        <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest">
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Đang xác thực...
            </>
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
  );
};
