import { MessageCircleMoreIcon, PhoneCallIcon, UserCheckIcon, UserPlusIcon } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { formatLongDate, formatRelativeDate } from '@/utils/formatter'

import UserRoleIcon from '../icons/UserRoleIcon'
import { StarRating } from '../shared/StarRating'
import { Button } from '../ui/button'

interface CertificateDialogProps {
  certificateId?: number
  masterId?: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CertificateDialog(props: CertificateDialogProps) {
  const { certificateId, masterId, isOpen, setIsOpen } = props
  const [isFollowing, setIsFollowing] = useState(false)
  const t = useTranslations('Common')

  const certificate: {
    id: number
    image: string
    issuedBy: string
    issuedDate: Date
    code: string
  } | null = {
    id: 1,
    image: '/certificate-card.jpg',
    issuedBy: 'สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย',
    issuedDate: new Date('2024-03-22'),
    code: '9244',
  }

  const master: {
    id: number
    image: string
    displayName: string
    roleId: number
    rating: number
    phoneNumber: string
    followers: number
    following: number
    joinedAt: Date
    rentListings: number
    auctions: number
    lives: number
  } | null = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    displayName: 'สมชาย',
    roleId: 2,
    rating: 4,
    phoneNumber: '089-4523854',
    followers: 9,
    following: 8,
    joinedAt: new Date('2021-03-22'),
    rentListings: 13,
    auctions: 15,
    lives: 1,
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[1005px] border-wood-smoke-950 bg-wood-smoke-950 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
            <DecorativeSymbolIcon variant="2" />
            ข้อมูลการรับรอง
            <DecorativeSymbolIcon variant="2" />
          </DialogTitle>
        </DialogHeader>
        <div>
          {certificate && (
            <>
              <h3 className="mb-3 font-bold">ใบรับรองพระแท้</h3>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-primary">
                  <Image src={certificate.image} alt="" className="" fill />
                </div>
                <div className="flex flex-col gap-4 pl-6">
                  <div>
                    ออกใบรับรองพระแท้โดย :
                    <p className="mt-1">{certificate.issuedBy}</p>
                  </div>
                  <div>
                    วันที่ :
                    <p className="mt-1">{formatLongDate(certificate.issuedDate)}</p>
                  </div>
                  <div>
                    เลขที่ทะเบียนรหัส :
                    <p className="mt-1">
                      {
                        certificate.code
                      }
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {master && (
            <>
              <h3 className="mb-3 font-bold">เซียนพระผู้รับรอง</h3>
              <div className="flex gap-4 rounded-[20px] border-2 border-primary p-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative size-[128px]">
                    <Image
                      alt=""
                      fill
                      className="rounded-full object-cover"
                      src={master.image}
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <PhoneCallIcon size={20} />
                    {master.phoneNumber}
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-[1fr_auto] gap-4">
                  <div>
                    <h2 className="mb-1 flex items-center gap-2 text-2xl font-bold">
                      {master.displayName}
                      <UserRoleIcon userRoleId={master.roleId} />
                    </h2>
                    <div className="mb-4 flex items-center gap-2">
                      {master.rating.toFixed(1)}
                      <StarRating rating={master.rating} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => setIsFollowing(prev => !prev)}
                        size="xss"
                        variant={isFollowing ? 'white' : 'outline-white'}
                        className="w-[130px] rounded border px-2"
                      >
                        <span className="mx-auto">{isFollowing ? 'กำลังติดตาม' : 'ติดตาม'}</span>
                        {isFollowing ? <UserCheckIcon size={20} /> : <UserPlusIcon size={20} />}
                      </Button>
                      <Button
                        size="xss"
                        variant="outline-white"
                        className="w-[130px] rounded px-2"
                      >
                        <span className="mx-auto">ส่งข้อความ</span>
                        <MessageCircleMoreIcon size={20} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[100px] text-center">
                      <span className="mb-2 inline-block text-[2rem] font-bold leading-none">9</span>
                      <p>ครอบครอง</p>
                    </div>
                    <div className="w-[100px] text-center">
                      <span className="mb-2 inline-block text-[2rem] font-bold leading-none">8</span>
                      <p>รับเช่า</p>
                    </div>
                    <div className="w-[100px] text-center">
                      <span className="mb-2 inline-block text-[2rem] font-bold leading-none">13</span>
                      <p>ปล่อยเช่า</p>
                    </div>
                    <div className="w-[100px] text-center">
                      <span className="mb-2 inline-block text-[2rem] font-bold leading-none">1</span>
                      <p>จอง</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] gap-x-8">
                    ผู้ติดตาม:
                    <span>
                      {master.followers}
                    </span>
                    กำลังติดตาม:
                    <span>
                      {master.following}
                    </span>
                    เข้าร่วมเมื่อ:
                    <span>
                      {formatRelativeDate(master.joinedAt)}
                    </span>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] gap-x-8">
                    การตั้งปล่อยเช่า :
                    <span>
                      {master.rentListings}
                    </span>
                    การเปิดประมูล :
                    <span>
                      {master.auctions}
                    </span>
                    การไลฟ์สด :
                    <span>
                      {master.lives}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
