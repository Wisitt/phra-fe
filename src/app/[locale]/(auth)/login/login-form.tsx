'use client'

import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { useTranslations } from 'next-intl'
import { z } from 'zod'

import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@/i18n/routing'

const loginInputSchema = z.object({
  phoneNumber: z.string({
    message: 'กรุณากรอกหมายเลขโทรศัพท์',
  }).min(1).regex(/^\d{10}$/, 'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง'),
  password: z.string({
    message: 'กรุณากรอกรหัสผ่าน',
  }).min(1),
  rememberMe: z.boolean(),
})

export default function LoginForm() {
  const t = useTranslations('Common')
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginInputSchema })
    },
  })

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      className="mb-[30px] space-y-4"
    >
      <div className="space-y-2">
        <Label isRequired className="text-white" htmlFor={fields.phoneNumber.id}>{t('phone_number')}</Label>
        <Input placeholder={t('phone_number')} id={fields.phoneNumber.id} name={fields.phoneNumber.name} />
        <div className="text-destructive">{fields.phoneNumber.errors}</div>
      </div>
      <div className="space-y-2">
        <Label isRequired className="text-white" htmlFor={fields.password.id}>{t('password')}</Label>
        <Input placeholder={t('password')} id={fields.password.id} name={fields.password.name} />
        <div className="text-destructive">{fields.password.errors}</div>
      </div>
      <div className="mb-10 flex items-center justify-between">
        <Label className="flex items-center gap-3 text-white">
          <Checkbox name={fields.rememberMe.name} defaultChecked={fields.rememberMe.initialValue === 'on'} />
          จดจำฉันไว้ในระบบ
        </Label>
        <Link href="#" className="text-white">
          {t('forgot_password')}
        </Link>
      </div>
      <Button size="xl" className="w-full rounded-full text-2xl text-black">
        <ThaiDecorationIcon variant="24" />
        {t('login')}
        <ThaiDecorationIcon variant="24" />
      </Button>
    </form>
  )
}
