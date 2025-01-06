'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, CircleCheck } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LottiePlayer from 'react-lottie-player'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { Textarea } from '@/components/ui/textarea'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import loadingData from '~/public/loading.json'

const FormSchema = z.object({
  firstName: z.string().min(1, 'กรุณากรอกชื่อ'),
  lastName: z.string().min(1, 'กรุณากรอกนามสกุล'),
  email: z.string().min(1, 'กรุณากรอกอีเมล'),
  phoneNumber: z.string().min(1, 'กรุณากรอกเบอร์โทร'),
  subject: z.string().min(1, 'กรุณากรอกหัวข้อ'),
  message: z.string().min(1, 'กรุณากรอกข้อความ'),
  agreePrivacyPolicy: z.boolean().refine(val => val, {
    message: 'You must agree to the privacy policy',
  }),
})

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
      agreePrivacyPolicy: false,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    setIsSuccess(true)
    setIsLoading(true)
  }

  return (
    <Card className="mx-auto w-full lg:max-w-[600px]">
      {!isSuccess && (
        <CardHeader>
          <CardTitle>ฟอร์มติดต่อ</CardTitle>
          <CardDescription>กรอกข้อมูลของคุณเพื่อติดต่อเรา</CardDescription>
        </CardHeader>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            {isSuccess
              ? (
                  <div className="flex flex-col items-center">
                    <h4 className="text-2xl font-bold">
                      บันทึกข้อมูลสำเร็จ
                    </h4>
                    <div className="relative size-[300px]">
                      <LottiePlayer
                        play
                        animationData={loadingData}
                        onComplete={() => setIsLoading(false)}
                        loop={false}
                        className={cn('opacity-100', !isLoading && 'opacity-0')}
                      />
                      <CircleCheck
                        size={200}
                        strokeWidth={1}
                        className={cn(
                          'absolute left-1/2 top-1/2 transition-opacity -translate-x-1/2 -translate-y-1/2 text-[#37B97C] opacity-0',
                          !isLoading && 'opacity-1',
                        )}
                      />
                    </div>
                    <p className="text-center">
                      ส่องพระ ได้รับข้อมูลของท่านแล้ว
                      <br />
                      เราจะติดต่อกลับหาคุณ
                      <br />
                      ผ่านช่องทาง เบอร์โทรศัพท์ และอีเมลที่ลงทะเบียนไว้
                    </p>
                  </div>
                )
              : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input label="ชื่อ" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input label="นามสกุล" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input label="อีเมล" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input label="เบอร์โทรศัพท์" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input label="หัวข้อ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea label="ข้อความของคุณ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="agreePrivacyPolicy"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex items-center gap-3 space-y-0 text-xs">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={checked => field.onChange(checked)}
                              />
                            </FormControl>
                            <FormLabel>
                              ยอมรับ
                              {' '}
                              <Link className="text-muted-foreground underline" href="/">
                                ข้อกำหนดและเงื่อนไขนโยบายความเป็นส่วนตัว
                              </Link>
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  </div>
                )}
          </CardContent>
          <CardFooter className="flex justify-center">
            {isSuccess
              ? (
                  <Button className="rounded-full" asChild>
                    <Link href="/">
                      <ChevronLeft size={20} />
                      ไปยังหน้าแรก
                    </Link>
                  </Button>
                )
              : (
                  <Button className="w-[120px] rounded-full">
                    ส่งข้อมูล
                  </Button>
                )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
