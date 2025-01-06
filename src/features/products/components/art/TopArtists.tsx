import { MessageCircleMore, UserPlus } from 'lucide-react'
import Image from 'next/image'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Button } from '@/components/ui/button'

export default function TopArtists() {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold">
        ศิลปินที่นิยมประจำเดือน
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="space-y-2.5 rounded-[40px] bg-white/10 p-4">
            <div className="flex items-center gap-2">
              <Image
                width={84}
                height={84}
                alt=""
                className="rounded-full"
                src="https://placehold.jp/84x84.png"
              />
              <div className="flex flex-1 flex-col gap-2 rounded-3xl bg-white/20 px-[13px] py-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold">สมชายk</h2>
                  <UserRoleIcon userRoleId={2} />
                </div>
                <div className="flex items-center gap-2">
                  <Button className="w-full px-1" size="xss" variant="outline-white">
                    <span className="flex-1">ติดตาม</span>
                    <UserPlus size={20} />
                  </Button>
                  <Button className="w-full px-1" size="xss" variant="outline-white">
                    <span className="flex-1">ส่งข้อความ</span>
                    <MessageCircleMore size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <p className="line-clamp-3 text-center">
              Lorem ipsum dolor sit amet consectetur. Fringilla malesuada quis nibh donec aliquet venenatis sed pellentesque eget.asdasdasdasdadadadasdasdadadadadadad
            </p>
            <Image src="/art/1.jpg" width={376} height={376} className="aspect-square w-full rounded-3xl border border-white object-cover" alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}
