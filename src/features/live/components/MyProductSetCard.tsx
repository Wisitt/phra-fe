'use client'

import { EditIcon, Trash } from 'lucide-react'
import Image from 'next/image'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

import type { ProductSet } from '../types/product-set'

interface MyProductSetCardProps {
  num: number
  productSet: ProductSet
  onEdit: () => void
  onDelete: () => void
}

export default function MyProductSetCard({ num, productSet, onEdit, onDelete }: MyProductSetCardProps) {
  const currentUser = {
    displayName: 'John Doe',
    roleId: 1,
  }

  return (
    <Card className="cursor-pointer overflow-hidden rounded-[20px] transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary">
      <CardHeader className="relative h-[250px] p-0">
        <span className="absolute left-2 top-2 inline-flex size-7 items-center justify-center rounded-full bg-white">
          {num}
        </span>
        <Image
          src={URL.createObjectURL(productSet.image as File)}
          width={214}
          height={250}
          className="size-full object-cover"
          alt={productSet.name}
        />
      </CardHeader>
      <CardContent className="space-y-1 p-2 pb-1">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {currentUser.displayName}
          <UserRoleIcon width={12} height={12} userRoleId={currentUser.roleId} />
        </div>
        <p className="truncate font-bold">
          {productSet.name}
        </p>
        <p>
          <b>{productSet.products.length}</b>
          {' '}
          รายการ
        </p>
        {Number(productSet.price) > 0
          ? (
              <p>
                <b>{formatNumber(Number(productSet.price))}</b>
                {' '}
                บาท
              </p>
            )
          : (
              <span className="text-muted-foreground">ไม่ระบุ</span>
            )}
      </CardContent>
      <CardFooter className={cn('p-2 pt-0 flex gap-2')}>
        <Button
          type="button"
          onClick={onEdit}
          className="w-full rounded-xl"
          variant="secondary"
        >
          แก้ไข
          <EditIcon size={20} />
        </Button>
        <Button
          onClick={onDelete}
          className="shrink-0 rounded-xl"
          variant="destructive"
          size="icon"
          type="button"
        >
          <Trash size={20} />
        </Button>
      </CardFooter>
    </Card>
  )
}
