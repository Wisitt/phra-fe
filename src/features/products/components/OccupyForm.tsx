'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircleIcon, CircleAlertIcon, CircleCheckIcon, ImagePlusIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Combobox from '@/components/ui/combobox'
import { DatePicker } from '@/components/ui/date-picker'
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/ui/file-uploader'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TagsInput } from '@/components/ui/tags-input'
import { Textarea } from '@/components/ui/textarea'
import { ProductTypeNav } from '@/features/products/components/ProductTypeNav'
import { useRouter } from '@/i18n/routing'

const formSchema = z.object({
  images: z.array(z.instanceof(File)).min(1, '*กรุณาอัปโหลดรูปภาพ'),
  name: z.string().min(1, '*กรุณาระบุชื่อพระเครื่อง/วัตถุมงคล'),
  modelId: z.string(),
  textureId: z.string(),
  productSerial: z.string(),
  year: z.string(),
  templeId: z.string(),
  provinceId: z.string(),
  districtId: z.string(),
  tags: z.array(z.string()),
  note: z.string(),
  verificationImage: z.instanceof(File).nullable(),
  verificationAuthority: z.string(),
  verificationDate: z.date().nullable(),
  verificationCode: z.string(),
  price: z.string(),
  isVisible: z.boolean(),
})

 type FormValues = z.infer<typeof formSchema>

const defaultValues: FormValues = {
  images: [],
  name: '',
  modelId: '',
  textureId: '',
  productSerial: '',
  year: '',
  templeId: '',
  provinceId: '',
  districtId: '',
  tags: [],
  note: '',
  verificationImage: null,
  verificationAuthority: '',
  verificationDate: null,
  verificationCode: '',
  price: '',
  isVisible: true,
}

export default function OccupyForm() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [isConfirmResultDialogOpen, setIsConfirmResultDialogOpen] = useState(false)
  const [isConfirmSaveDraftDialogOpen, setIsConfirmSaveDraftDialogOpen] = useState(false)
  const [isConfirmSaveDraftResultDialogOpen, setIsConfirmSaveDraftResultDialogOpen] = useState(false)

  const onSubmit = (values: FormValues) => {
    console.log(values)
    setIsConfirmDialogOpen(true)
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="col-[2/-2] grid grid-cols-subgrid">
          <div className="col-span-3">
            <ProductTypeNav currentType="occupy" />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      dropzoneOptions={{
                        maxFiles: 14,
                      }}
                    >
                      <FileUploaderContent className="grid grid-cols-3 gap-4 [&>*:first-child]:col-span-full">
                        {field.value.map((file, i) => (
                          <AspectRatio key={i} ratio={1 / 1}>
                            <FileUploaderItem
                              index={i}
                              aria-roledescription={`file ${i + 1} containing ${file.name}`}
                            >
                              <Image
                                className="rounded-[20px]"
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                fill
                              />
                            </FileUploaderItem>
                          </AspectRatio>
                        ))}
                        <AspectRatio ratio={1 / 1}>
                          <FileInput>
                            <ImagePlusIcon size={80} />
                            อัพโหลดรูปภาพ
                          </FileInput>
                        </AspectRatio>
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
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
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <DecorativeSymbolIcon variant="3" />
                  รายละเอียดสินค้า
                  <DecorativeSymbolIcon variant="3" />
                </h3>
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
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="modelId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ชื่อรุ่นวัตถุมงคล</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="กรุณาระบุชื่อรุ่นวัตถุมงคล" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="textureId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>เนื้อวัตถุมงคล</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="กรุณาระบุเนื้อของวัตถุมงคล" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productSerial"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>หมายเลขโค้ดพระ</FormLabel>
                        <FormControl>
                          <Input placeholder="กรุณาระบุหมายเลขโค้ดพระ" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ปีการผลิต</FormLabel>
                        <FormControl>
                          <Input placeholder="กรุณาระบุปีการผลิต" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="templeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>วัด</FormLabel>
                        <FormControl>
                          <Combobox
                            placeholder="กรุณาระบุชื่อวัด"
                            options={[
                              {
                                label: '1',
                                value: '1',
                              },
                              {
                                label: '2',
                                value: '2',
                              },
                              {
                                label: '3',
                                value: '3',
                              },
                            ]}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="provinceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>จังหวัด</FormLabel>
                        <FormControl>
                          <Combobox
                            placeholder="กรุณาระบุชื่อจังหวัด"
                            options={[
                              {
                                label: '1',
                                value: '1',
                              },
                              {
                                label: '2',
                                value: '2',
                              },
                              {
                                label: '3',
                                value: '3',
                              },
                            ]}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="districtId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>อำเภอ</FormLabel>
                        <FormControl>
                          <Combobox
                            placeholder="กรุณาระบุชื่ออำเภอ"
                            options={[
                              {
                                label: '1',
                                value: '1',
                              },
                              {
                                label: '2',
                                value: '2',
                              },
                              {
                                label: '3',
                                value: '3',
                              },
                            ]}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>รายละเอียดเพิ่มเติม</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="กรุณาระบุรายละเอียดเพิ่มเติม"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <DecorativeSymbolIcon variant="3" />
                  การรับรอง
                  <DecorativeSymbolIcon variant="3" />
                </h3>
                <FormField
                  control={form.control}
                  name="verificationImage"
                  render={({ field }) => (
                    <FormItem>
                      <FileUploader
                        value={field.value ? [field.value] : []}
                        onValueChange={value => field.onChange(value?.[0])}
                      >
                        <div className="mx-auto w-full max-w-[415px]">
                          <AspectRatio ratio={16 / 9}>
                            {field.value
                              ? (
                                  <FileUploaderItem
                                    className="size-full"
                                    index={0}
                                    aria-roledescription={`file 1 containing ${field.name}`}
                                  >
                                    <Image
                                      src={URL.createObjectURL(field.value)}
                                      alt={field.name}
                                      className="rounded-[20px] object-cover"
                                      fill
                                    />
                                  </FileUploaderItem>
                                )
                              : (
                                  <FileInput className="flex flex-col items-center justify-center rounded-[20px] border border-dashed border-muted-foreground text-muted-foreground">
                                    <ImagePlusIcon size={80} />
                                    อัปโหลดรูปภาพใบรับรอง
                                  </FileInput>
                                )}
                          </AspectRatio>
                        </div>
                      </FileUploader>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="verificationAuthority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ออกบัตรรับรองพระแท้โดย</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรุณาระบุองค์กร/บุคคลที่ออกใบรับรอง"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="verificationDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>วันออกบัตร</FormLabel>
                        <FormControl>
                          <DatePicker placeholder="กรุณาเลือกวันที่ออกบัตร" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="verificationCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>เลขที่ทะเบียนรหัส</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรุณากรอกเลขที่ทะเบียนรหัส"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-2xl font-bold">
                  <DecorativeSymbolIcon variant="3" />
                  ราคาสินค้าและเงื่อนไข
                  <DecorativeSymbolIcon variant="3" />
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>ราคา</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรุณาระบุราคา"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isVisible"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>&nbsp;</FormLabel>
                        <RadioGroup
                          onValueChange={value => field.onChange(Boolean(value))}
                          defaultValue={field.value.toString()}
                          className="flex h-10 gap-6"
                        >
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel>แสดงราคา</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center gap-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel>ซ่อนราคา</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="w-[125px] rounded-full">
                เผยแพร่
              </Button>
              <Button type="button" onClick={() => setIsConfirmSaveDraftDialogOpen (true)} variant="outline" className="w-[125px] rounded-full">
                ยกเลิก
              </Button>
              <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader className="items-center space-y-0">
                    <CircleAlertIcon className="mb-4 text-destructive" size={56} />
                    <AlertDialogTitle className="!mb-2 text-2xl text-foreground">
                      ยืนยันการลงสินค้า
                      <span className="flex items-center justify-center gap-2">
                        <DecorativeSymbolIcon variant="1" />
                        ครอบครอง
                        <DecorativeSymbolIcon variant="1" />
                      </span>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      ผู้คนสามารถค้นหาและเนื้อหาสินค้าของท่านในหน้าโปรไฟล์และจากการค้นหาอื่นๆ
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction
                      onClick={() => {
                        setIsConfirmResultDialogOpen(true)
                      }}
                      className="w-[120px]"
                    >
                      ยืนยัน
                    </AlertDialogAction>
                    <AlertDialogCancel
                      onClick={() => {
                        setIsConfirmSaveDraftDialogOpen(true)
                      }}
                      className="w-[120px]"
                    >
                      ยกเลิก
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
                      การลงสินค้าสำเร็จ
                      <DecorativeSymbolIcon variant="1" />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      ขณะนี้ผู้คนสามารถค้นหาและสามารถดูเนื้อหาสินค้าของท่าน
                      <br />
                      ในหน้าโปรไฟล์และจากการค้นหาอื่นๆได้ทันที
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction
                      onClick={() => {
                        const productId = 1
                        router.push(`/products/${productId}`)
                      }}
                      className="w-[120px]"
                    >
                      ตกลง
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog open={isConfirmSaveDraftDialogOpen} onOpenChange={setIsConfirmSaveDraftDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader className="items-center space-y-0">
                    <CircleAlertIcon className="mb-4 text-destructive" size={56} />
                    <AlertDialogTitle className="!mb-2 flex items-center gap-2 text-2xl text-foreground">
                      <DecorativeSymbolIcon variant="1" />
                      ต้องการบันทึกในฉบับร่าง
                      <DecorativeSymbolIcon variant="1" />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      ข้อมูลที่ถูกบันทึกในฉบับร่างผู้ใช้งานคนอื่นจะไม่สามารถเข้าถึงได้
                      <br />
                      โดยท่านสามารถกลับมาแก้ไขหรือเผยแพร่ได้ในภายหลังที่หน้า ‘ฉบับร่าง’
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction
                      onClick={() => {
                        setIsConfirmSaveDraftDialogOpen (true)
                        setIsConfirmSaveDraftResultDialogOpen(true)
                      }}
                      className="w-[120px]"
                    >
                      ยืนยัน
                    </AlertDialogAction>
                    <Button onClick={() => setIsConfirmSaveDraftDialogOpen (false)} variant="outline" className="w-[120px] rounded-full">
                      ยกเลิก
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog open={isConfirmSaveDraftResultDialogOpen} onOpenChange={setIsConfirmSaveDraftResultDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader className="items-center space-y-0">
                    <CircleCheckIcon className="mb-4 text-green-500" size={56} />
                    <AlertDialogTitle className="!mb-2 flex items-center gap-2 text-2xl text-foreground">
                      <DecorativeSymbolIcon variant="1" />
                      บันทึกฉบับร่างเสร็จสมบูรณ์
                      <DecorativeSymbolIcon variant="1" />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      การบันทึกข้อมูลสินค้าในฉบับร่างสมบูรณ์
                      <br />
                      โดยท่านสามารถกลับมาแก้ไขหรือเผยแพร่ได้ในภายหลังที่หน้า ‘ฉบับร่าง’
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
          </div>
        </form>
      </Form>
    </div>
  )
}
