import { useAuth, useUser } from '@clerk/clerk-react'
import { Bell, ShoppingCart } from 'lucide-react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const MAX_NOTIFICATION_COUNT = 9

function NotificationButton({ count }: { count: number }) {
  return (
    <Button variant="ghost" size="icon" className="relative rounded-full">
      <Bell />
      <span className="absolute -right-0.5 -top-0.5 grid min-w-5 place-content-center rounded-full bg-destructive p-0.5 text-xs font-bold text-destructive-foreground">
        {count > MAX_NOTIFICATION_COUNT ? `${MAX_NOTIFICATION_COUNT}+` : count}
      </span>
    </Button>
  )
}

function CartButton() {
  return (
    <Button className="rounded-full" variant="light">
      รถเข็น
      <ShoppingCart />
    </Button>
  )
}

export default function ProfileMenus() {
  const { user } = useUser()
  const { signOut } = useAuth()
  const notificationCount = 10

  const userRoleId: number = 1

  const compactName = (name: string) => {
    const names = name.split(' ')
    return `${names[0][0]}${names[1][0]}`
  }

  const menuItems = [
    {
      label: 'วอลเล็ต',
      href: '/wallet',
    },
    {
      label: 'การเช่าของฉัน',
      href: '/my-rentals',
    },
    {
      label: 'คำสั่งซื้อ',
      href: '/orders',
    },
    {
      label: 'ติดต่อเรา',
      href: '/contact',
    },
    {
      label: 'ศูนย์ความช่วยเหลือ',
      href: '/help',
    },
    {
      label: 'ออกจากระบบ',
      onClick: () => signOut(),
    },
  ]

  return (
    <div className="flex gap-2 sm:gap-4">
      <NotificationButton count={notificationCount} />
      <CartButton />
      <Popover>
        <PopoverTrigger>
          <div className={cn('group flex size-10 items-center justify-center rounded-full px-3 font-bold text-white', userRoleId === 1 ? 'bg-primary' : 'bg-[#297591]')}>
            {user?.fullName && compactName(user.fullName)}
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 p-2">
          <div className="flex justify-between px-4">
            {userRoleId === 1 ? 'นักเล่นพระ' : 'เซียนพระ'}
            <UserRoleIcon userRoleId={userRoleId} />
          </div>
          <Separator className="h-0.5 rounded bg-muted-foreground" />
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <Button
                className="justify-start"
                key={index}
                variant="ghost"
                asChild={!!item.href}
                onClick={item.onClick}
              >
                {item.href
                  ? (
                      <Link href={item.href}>{item.label}</Link>
                    )
                  : (
                      item.label
                    )}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
