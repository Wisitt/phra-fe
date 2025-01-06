'use client'

import { SignInButton } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/ui/password-input'
import { Link } from '@/i18n/routing'

import { type LoginInput, loginInputSchema } from '../api/login'

export default function LoginForm() {
  const t = useTranslations('Common')
  const [rememberMe, setRememberMe] = useState(false)

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginInput) => {
    console.log(values)
  }

  return (
    <div
      style={{ backgroundImage: 'url(/auth/box-bg.png)' }}
      className="z-10 flex h-[650px] w-full max-w-[832px] items-center justify-center rounded-[40px] bg-[#2D2824] bg-cover bg-center bg-no-repeat drop-shadow-[0_0_50px_rgba(82,75,74,0.44)]"
    >
      <div className="w-full max-w-[400px]">
        <h1 className="mb-[60px] text-center text-2xl font-bold text-white">
          {t('login')}
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="[&_label]:text-white"
          >
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel required>{t('phone_number')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('phone_number')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel required>{t('password')}</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder={t('password')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-10 flex items-center justify-between">
              <Label className="flex items-center gap-3">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={checked =>
                    setRememberMe(checked as boolean)}
                />
                <span>จดจำฉันไว้ในระบบ</span>
              </Label>
              <Link className="text-white hover:underline" href="#">
                {t('forgot_password')}
              </Link>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="h-12 gap-2 rounded-full text-2xl text-black"
              >
                <ThaiDecorationIcon variant="24" />
                {t('login')}
                <ThaiDecorationIcon variant="24" />
              </Button>
            </div>
          </form>
        </Form>
        {/* Social Login Section */}
        <div className="mt-8 text-center">
          <p className="text-white">{t('or_login_with')}</p>
          <div className="mt-4 flex justify-center gap-4">
            {/* SignInButton wraps around a custom button for Google sign-in */}
            <SignInButton mode="modal">
              <Button className="bg-[#4285F4] text-white">Login with Google</Button>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  )
}
