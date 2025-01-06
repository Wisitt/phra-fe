'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircleIcon, CircleAlertIcon, CircleCheckIcon, ImagePlusIcon } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import Heading from '@/components/shared/Heading'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/date-picker'
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/ui/file-uploader'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TagsInput } from '@/components/ui/tags-input'
import { TimePicker } from '@/components/ui/time-picker'
import { Link } from '@/i18n/routing'

import AddAuctionProduct from './AddAuctionProduct'
import AddProductSet from './AddProductSet'
import AddSingleProduct from './AddSingleProduct'

const shippingMethods = [
  {
    id: 'ems',
    label: 'ไปรษณีย์ไทยแบบด่วนพิเศษ (EMS)',
    price: 37,
  },
  {
    id: 'registered',
    label: 'ไปรษณีย์ไทยแบบลงทะเบียน',
    price: 37,
  },
  {
    id: 'central-ladprao',
    label: 'นัดรับ เซนทรัลลาดพร้าว',
    price: 100,
  },
] as const

const formSchema = z.object({
  image: z.instanceof(File).nullable(),
  name: z.string().min(1, '*กรุณาระบุชื่อไลฟ์'),
  tags: z.array(z.string()),
  date: z.date().nullable(),
  startTime: z.date().nullable(),
  endTime: z.date().nullable(),
  shippingMethods: z.array(z.string()),
  selectedProductIds: z.array(z.number()),
})

export type FormValues = z.infer<typeof formSchema>

const defaultValues: FormValues = {
  image: null,
  name: '',
  tags: [],
  date: null,
  startTime: null,
  endTime: null,
  shippingMethods: [],
  selectedProductIds: [],
}

export default function AddLiveForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [isConfirmResultDialogOpen, setIsConfirmResultDialogOpen] = useState(false)
  const t = useTranslations('Common')

  function handleConfirm() {
    setTimeout(() => {
      setIsConfirmResultDialogOpen(true)
    }, 2000)
  }

  function onSubmit(values: FormValues) {
    console.log(values)
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="col-[2/-2] grid grid-cols-subgrid"
        >
          <div className="col-span-full mb-8 grid grid-cols-subgrid">
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FileUploaderContent className="grid grid-cols-3 gap-4 [&>*:first-child]:col-span-full">
                        <AspectRatio ratio={1 / 1}>
                          {field.value
                            ? (
                                <FileUploaderItem
                                  index={0}
                                  aria-roledescription={`file ${0 + 1} containing ${field.value.name}`}
                                >
                                  <Image
                                    className="rounded-[20px]"
                                    src={URL.createObjectURL(field.value)}
                                    alt={field.value.name}
                                    fill
                                  />
                                </FileUploaderItem>
                              )
                            : (
                                <FileInput>
                                  <ImagePlusIcon size={80} />
                                  อัปโหลดรูปภาพหน้าปกไลฟ์
                                </FileInput>
                              )}
                        </AspectRatio>
                      </FileUploaderContent>
                    </FileUploader>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <AlertCircleIcon className="shrink-0" size={20} />
                <p className="text-muted-foreground">
                  การระบุข้อมูลสินค้าให้ครบถ้วนจะช่วยให้การค้นหาของผู้ซื้อ
                  ง่ายขึ้น และช่วยเพิ่มโอกาสในการขายสินค้า
                </p>
              </div>
            </div>
            <div className="col-span-6 col-start-5">
              <div className="space-y-5">
                <div className="space-y-4">
                  <Heading title="รายละเอียดสินค้า" iconVariant="3" />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          ชื่อพระเครื่อง/วัตถุมงคล
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="กรุณาระบุชื่อพระเครื่อง/วัตถุมงคล" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ระบุแท็กเพื่อให้ผู้คนค้นหากระทู้คุณได้ง่ายขึ้น</FormLabel>
                        <FormControl>
                          <TagsInput
                            value={field.value}
                            onValueChange={field.onChange}
                            placeholder="กรุณาระบุแท็ก"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>วันที่และเวลาทำการเปิด-ปิดไลฟ</FormLabel>
                          <FormControl>
                            <DatePicker placeholder="กรุณาระบุวันที่" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>&nbsp;</FormLabel>
                          <FormControl>
                            <TimePicker placeholder="กรุณาระบุเวลา" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>&nbsp;</FormLabel>
                          <FormControl>
                            <TimePicker placeholder="กรุณาระบุเวลา" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Heading title="ราคาสินค้าและเงื่อนไข" iconVariant="3" />
                  <FormField
                    control={form.control}
                    name="shippingMethods"
                    render={() => (
                      <FormItem>
                        <FormLabel>วิธีการจัดส่ง</FormLabel>
                        <div className="space-y-3">
                          {shippingMethods.map(method => (
                            <FormField
                              key={method.id}
                              control={form.control}
                              name="shippingMethods"
                              render={({ field }) => (
                                <FormItem
                                  key={method.id}
                                  className="flex items-center gap-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(method.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, method.id])
                                          : field.onChange(
                                            field.value?.filter(
                                              value => value !== method.id,
                                            ),
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel>
                                    {`${method.label} ${method.price} บาท`}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <Heading title="เพิ่มสินค้าในไลฟ์สด" iconVariant="3" className="mb-4" />
            <Tabs defaultValue="single" className="mb-[60px]">
              <TabsList className="gap-4">
                <TabsTrigger className="w-[267px]" value="single">ลงสินค้าแบบเดี่ยว</TabsTrigger>
                <TabsTrigger className="w-[267px]" value="multiple">ลงสินค้าแบบชุด</TabsTrigger>
                <TabsTrigger className="w-[267px]" value="auction">ลงสินค้าแบบประมูล</TabsTrigger>
              </TabsList>
              <TabsContent value="single">
                <AddSingleProduct />
              </TabsContent>
              <TabsContent value="multiple">
                <AddProductSet />
              </TabsContent>
              <TabsContent value="auction">
                <AddAuctionProduct />
              </TabsContent>
            </Tabs>
            <div className="flex justify-center gap-4">
              <Button className="w-[125px] rounded-full">
                เผยแพร่
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-[125px] rounded-full">
                    ยกเลิก
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader className="items-center space-y-0">
                    <CircleAlertIcon className="mb-4 text-destructive" size={56} />
                    <AlertDialogTitle className="!mb-2 text-center text-2xl text-foreground">
                      ยกเลิกการลงสินค้า
                      <Heading title="ไลฟ์สด" iconVariant="1" className="justify-center" />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      ระบบจะไม่ทำการบันทึกการเปลี่ยนแปลงของไลฟ์สด
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="w-[120px]" asChild>
                      <Link href="/new">
                        ยืนยัน
                      </Link>
                    </AlertDialogAction>
                    <AlertDialogCancel className="w-[120px]">
                      ยกเลิก
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </form>
      </Form>
      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="items-center space-y-0">
            <CircleAlertIcon className="mb-4 text-destructive" size={56} />
            <AlertDialogTitle className="!mb-2 text-center text-2xl text-foreground">
              ยืนยันการลงสินค้า
              <Heading title="ไลฟ์สด" iconVariant="1" className="justify-center" />
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t('Live.confirm_product_submission')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={handleConfirm}
              className="w-[120px]"
            >
              {t('Live.confirm')}
            </AlertDialogAction>
            <AlertDialogCancel className="w-[120px]">
              {t('Live.cancel')}
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={isConfirmResultDialogOpen} onOpenChange={setIsConfirmResultDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="items-center space-y-0">
            <CircleCheckIcon className="mb-4 text-green-500" size={56} />
            <AlertDialogTitle className="!mb-2 flex items-center gap-2 text-2xl text-foreground">
              <DecorativeSymbolIcon variant="1" />
              {t('Live.live_success')}
              <DecorativeSymbolIcon variant="1" />
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t('Live.notification_message')}
              <br />
              {t('Live.live_page_description')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="w-[120px]">
              ตกลง
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
