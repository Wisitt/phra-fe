import { useStore } from '@nanostores/react'
import { useQuery } from '@tanstack/react-query'
import { AlertCircleIcon } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import CertificateDialog from '@/components/dialogs/CertificateDialog'
import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import Alert from '@/components/shared/Alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { NumberInput } from '@/components/ui/number-input'
import { getAuctionInfo } from '@/features/products/api/auction'
import { dayjs } from '@/lib/dayjs'
import { $lightbox, setCurrentImageIndex, setImages } from '@/stores/lightbox'
import { formatNumber } from '@/utils/formatter'

import AuctionStatusBadge from './AuctionStatusBadge'

interface BidDialogProps {
  auctionId: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onConfirm: (price: number) => void
}

export default function BidDialog({ auctionId, isOpen, setIsOpen, onConfirm }: BidDialogProps) {
  const t = useTranslations('Common')
  const [price, setPrice] = useState<number | null>(null)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isCertificateDialogOpen, setIsCertificateDialogOpen] = useState(false)
  const lightboxState = useStore($lightbox)

  const { isPending, error, data } = useQuery({
    queryKey: ['auction-info', auctionId],
    queryFn: () => getAuctionInfo(auctionId),
  })

  if (isPending)
    return null
  if (error) {
    console.error('Failed to fetch auction info:', error)
    return null
  }

  const isAuctionOpen = dayjs().isSameOrAfter(dayjs(data.startDateTime)) && dayjs().isSameOrBefore(dayjs(data.endDateTime))

  const firstThreeImages = data.images.slice(0, 3)
  const restImages = data.images.slice(3)

  const handleConfirm = () => {
    setIsOpen(false)
    onConfirm(price!)
  }

  const handleViewImage = (index: number) => {
    setCurrentImageIndex(index)
    setImages(data.images.map(image => ({ src: image.src, alt: image.alt, width: image.width, height: image.height })))
  }

  const renderProductInfo = (label: string, value: string | number) => (
    <>
      <h3>{label}</h3>
      <p className="col-span-3">
        <span className="mr-4">:</span>
        {value}
      </p>
    </>
  )
  const handleDialogInteraction = (e: any) => {
    if (lightboxState.currentImageIndex !== -1) {
      e.preventDefault()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        onEscapeKeyDown={handleDialogInteraction}
        onInteractOutside={handleDialogInteraction}
        className="max-w-[1005px] border-wood-smoke-950 bg-wood-smoke-950 text-white"
      >
        <DialogHeader>
          <div className="relative flex justify-center">
            <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
              <DecorativeSymbolIcon variant="2" />
              {t('confirm_auction')}
              <DecorativeSymbolIcon variant="2" />
            </DialogTitle>
            <AuctionStatusBadge
              compact={false}
              className="absolute right-0 text-base [--muted:240_5%_39%]"
              variant="light"
              startDateTime={data.startDateTime}
              endDateTime={data.endDateTime}
            />
          </div>
        </DialogHeader>
        <div className="grid grid-cols-6 gap-4 py-4">
          <div className="col-span-2 grid grid-cols-subgrid gap-4">
            {firstThreeImages.map((image, i) => (
              <div
                role="button"
                tabIndex={0}
                key={image.src}
                onClick={() => handleViewImage(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleViewImage(i)
                  }
                }}
                className="relative aspect-square overflow-hidden rounded-2xl ring-offset-background first:col-span-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image alt={image.alt} fill src={image.src} />
                {i === firstThreeImages.length - 1 && restImages.length > 0 && (
                  <div className="pointer-events-none absolute inset-0 grid place-content-center bg-white/50 font-bold text-black">
                    +
                    {restImages.length}
                  </div>
                )}
              </div>
            ))}
            <div className="col-span-full flex flex-wrap justify-center gap-2">
              <Button
                onClick={() => setIsCertificateDialogOpen(true)}
                size="xss"
                className="gap-1 bg-[#297591] p-1 text-xs hover:bg-[#297591]/90"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.91667 16.666H4.66667C3.74619 16.666 3 15.9198 3 14.9993V3.33268C3 2.41221 3.74619 1.66602 4.66667 1.66602H16.3333C17.2538 1.66602 18 2.41221 18 3.33268V14.9993C18 15.9198 17.2538 16.666 16.3333 16.666H15.0833M10.5 15.8327C11.8807 15.8327 13 14.7134 13 13.3327C13 11.952 11.8807 10.8327 10.5 10.8327C9.11929 10.8327 8 11.952 8 13.3327C8 14.7134 9.11929 15.8327 10.5 15.8327ZM10.5 15.8327L10.5179 15.8325L7.85723 18.4932L5.5002 16.1361L8.01638 13.62M10.5 15.8327L13.1607 18.4932L15.5177 16.1361L13.0015 13.62M8 4.99935H13M6.33333 7.91602H14.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                ใบรับรองพระแท้
              </Button>
              <Button
                onClick={() => setIsCertificateDialogOpen(true)}
                variant="white"
                size="xss"
                className="gap-1 p-1 text-xs"
              >
                <UserRoleIcon className="w-5" userRoleId={2} />
                สมชาย
              </Button>
              <CertificateDialog
                certificateId={data.certificateId}
                masterId={data.masterId}
                isOpen={isCertificateDialogOpen}
                setIsOpen={setIsCertificateDialogOpen}
              />
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-subgrid">
            <h3 className="col-span-full font-bold">ข้อมูลสินค้า</h3>
            <div className="col-span-full grid grid-cols-subgrid items-center gap-y-3 pt-6">
              {renderProductInfo('ชื่อวัตถุมงคล', data.name)}
              {renderProductInfo('ชื่อรุ่นวัตถุมงคล', data.modelName)}
              {renderProductInfo('รูปแบบวัตถุมงคล', data.type)}
              {renderProductInfo('เนื้อวัตถุมงคล', data.material)}
              {renderProductInfo('หมายเลขโค้ดพระ', data.codeNumber)}
              {renderProductInfo('ปีการผลิต', data.createdYear)}
              {renderProductInfo('วัด', data.temple)}
              {renderProductInfo('จังหวัด', data.province)}
              {renderProductInfo('อำเภอ', data.district)}
              {renderProductInfo('ประเภทวัตถุมงคล', data.productType)}
              {renderProductInfo('ผู้ครอบครอง', data.owner)}
              <h3>ราคาปัจจุบัน</h3>
              <p className="col-span-1 text-2xl font-bold text-primary">
                {formatNumber(data.currentPrice)}
              </p>
              <h3>ขั้นต่ำต่อครั้ง</h3>
              <p className="col-span-1 text-2xl font-bold text-primary">
                {data.minBid === 0 ? '-' : formatNumber(data.minBid)}
              </p>
            </div>
          </div>
          <div className="col-span-4 col-start-2 grid grid-cols-subgrid items-center gap-y-1">
            <Label htmlFor="bid-price">ระบุราคาประมูล</Label>
            <NumberInput
              id="bid-price"
              value={price}
              onValueChange={({ floatValue }) => setPrice(floatValue ?? null)}
              className="col-span-3 text-center text-black"
              maxLength={14}
              placeholder="กรุณากรอกราคาประมูล"
              disabled={!isAuctionOpen}
            />
            <Alert
              variant={price !== null && price < data.currentPrice + data.minBid ? 'error' : 'warning'}
              className="col-span-full justify-center"
            >
              {isAuctionOpen
                ? 'ไม่สามารถใส่ราคาในการประมูลน้อยกว่าราคาขั้นต่ำ'
                : 'ยังไม่สามารถเสนอราคาได้เนื่องจากยังไม่ถึงเวลาเปิดประมูล'}
            </Alert>
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={!isAuctionOpen}
            onClick={() => setIsConfirmOpen(true)}
            className="w-[120px] rounded-full"
          >
            ยืนยัน
          </Button>
          <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <AlertDialogContent>
              <AlertDialogHeader className="items-center space-y-0">
                <AlertCircleIcon className="mb-4 text-destructive" size={56} />
                <AlertDialogTitle className="!mb-2 text-2xl text-foreground">
                  ยืนยันการประมูลในราคา
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-4">
                  <b className="flex items-center justify-center gap-2 text-2xl">
                    <DecorativeSymbolIcon variant="1" />
                    {price && `${formatNumber(price)} บาท`}
                    <DecorativeSymbolIcon variant="1" />
                  </b>
                  {[
                    data.name,
                    data.modelName,
                    data.type,
                    data.material,
                    data.codeNumber,
                    data.createdYear,
                    data.temple,
                    data.province,
                  ].join(' ')}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={handleConfirm}
                  className="w-[120px]"
                >
                  ยืนยัน
                </AlertDialogAction>
                <AlertDialogCancel className="w-[120px]">
                  ยกเลิก
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <DialogClose asChild>
            <Button variant="outline" className="w-[120px] rounded-full">
              ยกเลิก
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
