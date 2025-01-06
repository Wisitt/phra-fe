import { MessageCircleMoreIcon, UserCheckIcon, UserPlusIcon } from 'lucide-react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { StarRating } from '@/components/shared/StarRating'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  name: string
  roleId: number
  rating: number
  onFollowToggle: () => void
  isFollowed: boolean
}

export default function ProfileInfo({ name, roleId, rating, onFollowToggle, isFollowed }: Props) {
  return (
    <div>
      <h2 className="mb-1 flex items-center gap-[18px] text-2xl font-bold">
        {name}
        <UserRoleIcon userRoleId={roleId} />
      </h2>
      <div className="mb-4 flex items-center gap-2">
        {rating.toFixed(1)}
        <StarRating rating={rating} />
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onFollowToggle}
          size="xss"
          variant="outlineInverted"
          className={cn('w-[135px] rounded px-2', isFollowed && 'bg-white text-black')}
        >
          <span className="mx-auto">{isFollowed ? 'กำลังติดตาม' : 'ติดตาม'}</span>
          {isFollowed ? <UserCheckIcon size={20} /> : <UserPlusIcon size={20} />}
        </Button>
        <Button
          size="xss"
          variant="outlineInverted"
          className="w-[135px] rounded px-2"
        >
          <span className="mx-auto">ส่งข้อความ</span>
          <MessageCircleMoreIcon size={20} />
        </Button>
      </div>
    </div>
  )
}
