import { z } from 'zod'

export const memberInformationInputSchema = z
  .object({
    name: z.string().min(1, 'กรุณากรอกชื่อ'),
    lastName: z.string().min(1, 'กรุณากรอกนามสกุล'),
    dob: z.date({
      required_error: 'กรุณากรอกวันเดือนปีเกิด',
    }),
    password: z.string().min(1, 'กรุณากรอกรหัสผ่าน'),
    confirmPassword: z.string().min(1, 'กรุณากรอกยืนยันรหัสผ่าน'),
    code: z.string(),
    identificationNumber: z.string().min(1, 'กรุณากรอกเลขบัตรประชาชน'),
    thaiNationalIdCardImage: z.instanceof(File, {
      message: 'กรุณาอัปโหลดรูปบัตรประชาชน',
    }),
    phoneNumber: z.string().min(1, 'กรุณากรอกเบอร์โทรศัพท์'),
    termsAndConditions: z.boolean().refine(value => value === true, {
      message: 'กรุณาอ่านและยอมรับข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ฉบับนี้',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'รหัสผ่านไม่ตรงกัน',
  })

export type MemberInformationInput = z.infer<typeof memberInformationInputSchema>

export const expertVerificationInputSchema = z.object({
  address: z.string(),
  subDistrict: z.string(),
  district: z.string(),
  province: z.string(),
  postalCode: z.string(),
  certifierName: z.string(),
  certifierLastName: z.string(),
  certifierPhoneNumber: z.string(),
  verificationImages: z.array(z.instanceof(File)),
})

export type ExpertVerificationInput = z.infer<typeof expertVerificationInputSchema>

export function login({ data }: {
  data: MemberInformationInput & ExpertVerificationInput
}) {
  return fetch('/api/auth/register', {
    body: JSON.stringify(data),
  })
}
