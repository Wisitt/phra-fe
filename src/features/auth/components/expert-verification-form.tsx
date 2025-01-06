import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import FileUploader from '@/components/shared/FileUploader'
import PreviewImage from '@/components/shared/PreviewImage'
import { Button } from '@/components/ui/button'
// import { openLightboxModal } from '@/atoms/lightbox'
import Combobox from '@/components/ui/combobox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useStepper } from '@/components/ui/stepper'

import { type ExpertVerificationInput, expertVerificationInputSchema } from '../api/register'

export default function ExpertVerificationForm() {
  const { prevStep, nextStep } = useStepper()
  const [provinces] = useState<any[]>([])
  const [postalCodes] = useState<any[]>([])
  const form = useForm<ExpertVerificationInput>({
    resolver: zodResolver(expertVerificationInputSchema),
    defaultValues: {
      address: '',
      subDistrict: '',
      district: '',
      province: '',
      postalCode: '',
      certifierName: '',
      certifierLastName: '',
      certifierPhoneNumber: '',
      verificationImages: [],
    },
  })

  function onSubmit(values: ExpertVerificationInput) {
    // nextStep()
  }

  const verificationImages = form.watch('verificationImages')

  const provinceOptions = provinces.map(province => ({
    label: province.name_th,
    value: province.id,
  }))

  const postalCodeOptions = postalCodes.map(postalCode => ({
    label: postalCode.ZIPCODE,
    value: postalCode.ZIPCODE_ID,
  }))

  return (
    <>
      <h1 className="mb-[22px] text-center text-2xl font-bold text-white">ข้อมูลยืนยันเซียนพระ</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-4 [&_label]:text-white"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>ที่อยู่หน้าร้าน หรือ ที่อยู่ของเซียนเพื่อยืนยัน</FormLabel>
                <FormControl>
                  <Input placeholder="ที่อยู่หน้าร้าน หรือ ที่อยู่ของเซียนเพื่อยืนยัน" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เขต/อำเภอ</FormLabel>
                <Combobox
                  placeholder="เขต/อำเภอ"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    {
                      label: 'สุขุมวิทยานุกูล',
                      value: 'สุขุมวิทยานุกูล',
                    },
                  ]}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subDistrict"
            render={({ field }) => (
              <FormItem>
                <FormLabel>แขวง/ตำบล</FormLabel>
                <Combobox
                  placeholder="แขวง/ตำบล"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    {
                      label: 'สุขุมวิทยานุกูล',
                      value: 'สุขุมวิทยานุกูล',
                    },
                  ]}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>จังหวัด</FormLabel>
                <Combobox
                  placeholder="จังหวัด"
                  value={field.value}
                  onChange={field.onChange}
                  options={provinceOptions}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รหัสไปรษณีย์</FormLabel>
                <Combobox
                  placeholder="รหัสไปรษณีย์"
                  value={field.value}
                  onChange={field.onChange}
                  options={postalCodeOptions}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certifierName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อและนามสกุลของผู้ให้ความรับรอง</FormLabel>
                <FormControl>
                  <Input placeholder="ชื่อ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certifierLastName"
            render={({ field }) => (
              <FormItem>
                <br />
                <FormControl>
                  <Input placeholder="นามสกุล" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certifierPhoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เบอร์โทรศัพท์</FormLabel>
                <FormControl>
                  <Input placeholder="เบอร์โทรศัพท์" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-3 text-white">
            <p className="mb-4">กรุณาอัปโหลดรูปภาพหน้าร้าน หรือรูปภาพที่เกี่ยวข้องเพื่อยืนยัน</p>
            <div className="grid grid-cols-6 gap-4">
              {verificationImages.map(image => (
                <PreviewImage
                  onView={() => {
                    // openLightboxModal({ images: [image] })
                  }}
                  onDelete={() => {
                    form.setValue('verificationImages', [
                      ...form.getValues('verificationImages').filter(i => i !== image),
                    ])
                  }}
                  compact
                  key={image.name}
                  images={[image]}
                />
              ))}
              <FileUploader
                className="aspect-square"
                onUpload={file =>
                  form.setValue('verificationImages', [
                    ...form.getValues('verificationImages'),
                    file,
                  ])}
              >
                อัปโหลด
                <br />
                รูปภาพที่เกี่ยวข้อง
              </FileUploader>
            </div>
          </div>
          <div className="col-span-3 mt-[calc(42px-1rem)] flex justify-between">
            <Button
              variant="outline"
              className="h-[44px] w-[138px] rounded-full"
              type="button"
              onClick={prevStep}
            >
              <ChevronLeft />
              ย้อนกลับ
            </Button>
            <Button
              variant="outline"
              className="h-[44px] w-[138px] rounded-full"
              type="button"
              onClick={nextStep}
            >
              ต่อไป
              <ChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
