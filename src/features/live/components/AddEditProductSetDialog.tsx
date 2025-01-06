import { ImagePlusIcon, Trash } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FileInput, FileUploader, FileUploaderItem } from '@/components/ui/file-uploader'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Product {
  name: string
  amount: string
}

interface AddEditProductSetValues {
  image: File | null
  name: string
  price: string
  products: Product[]
}

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (values: AddEditProductSetValues) => void
  initialValues?: AddEditProductSetValues
  mode?: 'add' | 'edit'
}

const defaultValues: AddEditProductSetValues = {
  image: null,
  name: '',
  price: '',
  products: [{ name: '', amount: '' }],
}

export default function AddEditProductSetDialog({
  isOpen,
  setIsOpen,
  onSubmit,
  initialValues,
  mode = 'add',
}: Props) {
  const [values, setValues] = useState<AddEditProductSetValues>(defaultValues)

  useEffect(() => {
    if (mode === 'edit' && initialValues) {
      setValues(initialValues)
    }
    else {
      setValues(defaultValues)
    }
  }, [initialValues, mode])

  const handleChange = (field: keyof AddEditProductSetValues, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }))
  }

  const handleProductChange = (index: number, field: keyof Product, value: string) => {
    setValues(prev => ({
      ...prev,
      products: prev.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product,
      ),
    }))
  }

  const handleAddProduct = () => {
    setValues(prev => ({
      ...prev,
      products: [...prev.products, { name: '', amount: '' }],
    }))
  }

  const handleDeleteProduct = (index: number) => {
    setValues(prev => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = () => {
    onSubmit(values)
    setValues(defaultValues)
    setIsOpen(false)
  }

  const renderImageUploader = () => (
    <FileUploader
      value={values.image}
      onValueChange={value => handleChange('image', value as File)}
    >
      <div className="w-[480px]">
        <AspectRatio ratio={1 / 1}>
          {values.image
            ? (
                <FileUploaderItem
                  index={0}
                  aria-roledescription={`file 1 containing ${values.image.name}`}
                >
                  <Image
                    className="rounded-[20px]"
                    src={URL.createObjectURL(values.image)}
                    alt={values.image.name}
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
      </div>
    </FileUploader>
  )

  const renderProductTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60px] text-center">อันดับ</TableHead>
          <TableHead className="text-center">ชื่อรายการ</TableHead>
          <TableHead className="w-[120px] text-center">จำนวน</TableHead>
          <TableHead className="text-center">ลบ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.products.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell>
              <Input
                value={product.name}
                onChange={e => handleProductChange(index, 'name', e.target.value)}
                placeholder="กรุณาระบุชื่อรายการสินค้า"
              />
            </TableCell>
            <TableCell>
              <Input
                value={product.amount}
                onChange={e => handleProductChange(index, 'amount', e.target.value)}
                className="text-center"
                placeholder="0"
              />
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="iconSm"
                onClick={() => handleDeleteProduct(index)}
                disabled={index === 0}
              >
                <Trash size={20} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[962px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'เพิ่มรายการสินค้าแบบชุด' : 'แก้ไขรายการสินค้าแบบชุด'}
          </DialogTitle>
        </DialogHeader>
        <DialogBody className="flex gap-4">
          {renderImageUploader()}
          <div className="flex-1 space-y-2">
            <div className="space-y-2">
              <Label>ชื่อชุดสินค้า</Label>
              <Input
                value={values.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder="กรุณาระบุชื่อรายการสินค้า"
              />
            </div>
            <div className="space-y-2">
              <Label>ราคาสินค้า</Label>
              <div className="flex items-center gap-2">
                <Input
                  value={values.price}
                  onChange={e => handleChange('price', e.target.value)}
                  placeholder="กรุณาระบุราคาประจำชุดสินค้า"
                />
                บาท
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label>รายการสินค้า</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddProduct}
              >
                เพิ่มรายการ
              </Button>
            </div>
            {renderProductTable()}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleSubmit} className="rounded-full sm:w-[120px]">
            {mode === 'add' ? 'ยืนยัน' : 'บันทึก'}
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="rounded-full sm:w-[120px]"
          >
            ยกเลิก
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
