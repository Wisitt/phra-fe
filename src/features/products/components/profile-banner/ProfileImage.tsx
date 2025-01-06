import { PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'

interface Props {
  src: string
  phoneNumber: string
}

export default function ProfileImage({ src, phoneNumber }: Props) {
  return (
    <div className="flex flex-col items-center gap-[25px]">
      <div className="relative size-[136px]">
        <Image
          alt="Profile"
          fill
          className="size-full rounded-full object-cover"
          src={src}
        />
      </div>
      <p className="flex items-center gap-3">
        <PhoneCallIcon />
        {phoneNumber}
      </p>
    </div>
  )
}
