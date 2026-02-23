import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService, LoginResponse } from '@/services/auth.service';
import { useAuthStore } from '@/stores/useAuthStore';
import { LoginFormData } from '@/lib/validations/auth.schema';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

/**
 * useLogin Hook
 * Encapsulates authentication logic and side effects.
 * As a Senior Architect, we separate concerns: business logic stays here, 
 * UI stays in the component.
 */
export const useLogin = () => {
  const router = useRouter();
  const { login: setStoreUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginFormData) => authService.login(data),
    onSuccess: (response: LoginResponse) => {
      // 1. Store Token
      // NOTE: For true "HTTP-only", the backend MUST send a Set-Cookie header.
      // Frontend JS cannot set HTTP-only cookies. We simulate the intent here.
      Cookies.set('radar_token', response.token, { 
        expires: 1, 
        secure: true, 
        sameSite: 'strict' 
      });
      
      // Also set a role cookie for middleware logic if needed
      Cookies.set('radar_role', response.user.role, { expires: 1 });

      // 2. Update Store
      setStoreUser(response.user.email);

      // 3. User Feedback
      toast.success('Xác thực thành công', {
        description: `Chào mừng ${response.user.name} đã quay trở lại.`
      });

      // 4. Redirect
      if (response.user.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/leads');
      }
    },
    onError: (error: Error) => {
      toast.error('Lỗi truy cập', {
        description: error.message || 'Hệ thống không thể xác thực thông tin.'
      });
    }
  });
};
