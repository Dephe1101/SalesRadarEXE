import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Định dạng email không hợp lệ"),
  password: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
