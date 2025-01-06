import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, ChevronRight, CircleCheck, CircleX, Upload } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { FileButton } from '@/components/shared/FileButton'
import PreviewImage from '@/components/shared/PreviewImage'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/date-picker'
// import { openLightboxModal } from '@/atoms/lightbox'
import { Dialog } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { useStepper } from '@/components/ui/stepper'
import { Link } from '@/i18n/routing'

import { type MemberInformationInput, memberInformationInputSchema } from '../api/register'
import ConfirmOtp from './confirm-otp'

interface MemberInformationFormProps {
  selectedUserRoleId: number
}

export default function MemberInformationForm({ selectedUserRoleId }: MemberInformationFormProps) {
  const { prevStep, nextStep } = useStepper()
  const t = useTranslations('Common')

  const form = useForm<MemberInformationInput>({
    resolver: zodResolver(memberInformationInputSchema),
    defaultValues: {
      name: '',
      lastName: '',
      dob: undefined,
      password: '',
      confirmPassword: '',
      code: '',
      identificationNumber: '',
      thaiNationalIdCardImage: undefined,
      phoneNumber: '',
      termsAndConditions: false,
    },
  })

  function onSubmit(values: MemberInformationInput) {
    nextStep()
  }

  const code = form.watch('code')
  const [isCheckingCode, setIsCheckingCode] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (code) {
      form.clearErrors('code')
      setIsCheckingCode(true)

      timeoutId = setTimeout(() => {
        setIsCheckingCode(false)
        if (code !== '1234') {
          form.setError('code', {
            message: 'รหัสเชิญผิดพลาด',
          })
        }
      }, 500)
    }
    else {
      form.clearErrors('code')
      setIsCheckingCode(false)
    }

    return () => clearTimeout(timeoutId)
  }, [code, form])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h1 className="mb-[22px] text-center text-2xl font-bold text-white">สมัครสมาชิกทั่วไป</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="[&_label]:text-white">
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('name')} {...field} />
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
                  <FormLabel required>{t('last_name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('last_name')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('date_of_birth')}</FormLabel>
                  <FormControl>
                    <DatePicker
                      placeholder={t('date_of_birth')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('password')}</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder={t('password')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('confirm_password')}</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder={t('confirm_password')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {selectedUserRoleId === 1 ? 'รหัสเชิญจากเซียน' : 'รหัสเซียนพระ'}
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input

                        placeholder={selectedUserRoleId === 1 ? 'รหัสเชิญจากเซียน' : 'รหัสเซียนพระ'}
                        {...field}
                      />
                    </FormControl>
                    {field.value && !isCheckingCode && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F34642]">
                        {form.formState.errors.code
                          ? (
                              <CircleX className="text-[#F34642]" />
                            )
                          : (
                              <CircleCheck className="text-[#38BA7C]" />
                            )}
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="identificationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('identification_number')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('identification_number')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thaiNationalIdCardImage"
              render={({ field }) => (
                <FormItem>
                  <br />
                  <FileButton
                    accept="image/*"
                    onChange={field.onChange}
                    className="rounded-full"
                    type="button"
                  >
                    {t('upload_thai_national_id_card_image')}
                    <Upload size={20} />
                  </FileButton>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 -mt-3 text-white">
              <div className="mb-1 text-xs">หมายเหตุ</div>
              <ol className="list-inside list-decimal text-[8px]">
                <li>
                  คุณสามารถอัปโหลดรูปบัตรประชาชนได้เพียงหนึ่งรูป และไม่สามารถเปลี่ยนไดภายหลัง
                  กรุณาตรวจสอบความถูกต้องก่อนการอัปโหลดรูป
                </li>
                <li>
                  หมายเหตุ กรุณาอัปโหลดไฟล์รูปบัตรประชาชนเป็น
                  {' '}
                  {`"`}
                  รูปสี
                  {`"`}
                  {' '}
                  เท่านั้น
                </li>
              </ol>
            </div>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="col-start-1">
                  <FormLabel required>{t('phone_number')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('phone_number')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <br />
              <Button onClick={() => setIsOpen(true)} className="rounded-full" type="button">
                {t('send_otp')}
              </Button>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <ConfirmOtp />
              </Dialog>
            </FormItem>
            <FormField
              control={form.control}
              name="thaiNationalIdCardImage"
              render={({ field }) => (
                <FormItem className="col-start-3 row-span-3 row-start-3 flex flex-col">
                  <br />
                  <PreviewImage
                    images={field.value ? [field.value] : []}
                    placeholder="กรุณาอัปโหลดรูปบัตรประชาชน"
                    onView={() => {
                      // openLightboxModal({
                      //   images: [field.value],
                      // })
                    }}
                    onDelete={() => field.onChange(undefined)}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem className="col-span-3 mt-[calc(45px-1rem)] flex flex-col items-center">
                  <FormLabel className="flex items-center gap-3">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <span>
                      ข้าพเจ้าได้อ่านและยอมรับ
                      <Link className="underline" href="#">
                        ข้อกำหนดและเงื่อนไข
                      </Link>
                      การใช้งานเว็บไซต์ฉบับนี้
                    </span>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-3 flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="h-[44px] w-[138px] rounded-full"
                type="button"
              >
                <ChevronLeft />
                ย้อนกลับ
              </Button>
              <Button variant="outline" className="h-[44px] w-[138px] rounded-full">
                ต่อไป
                <ChevronRight />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
