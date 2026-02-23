import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email) => {
        const isAdmin = email.toLowerCase().includes('admin');
        set({ 
          isAuthenticated: true, 
          user: { 
            id: isAdmin ? 'admin-1' : 'user-1', 
            name: isAdmin ? 'Hệ thống Quản trị' : 'Chuyên viên Sales', 
            email, 
            role: isAdmin ? 'admin' : 'user' 
          } 
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'sales-radar-auth',
    }
  )
);
