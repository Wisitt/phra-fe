import { z } from 'zod'

export const loginInputSchema = z.object({
  phoneNumber: z.string().min(1, 'กรุณากรอกหมายเลขโทรศัพท์'),
  password: z.string().min(1, 'กรุณากรอกรหัสผ่าน'),
})

export type LoginInput = z.infer<typeof loginInputSchema>

export function login({ data }: {
  data: LoginInput
}) {
  return fetch('/api/auth/login', {
    body: JSON.stringify(data),
  })
}
