import { useTranslations } from 'next-intl'

import Heading from '@/components/shared/Heading'
import ServerPagination from '@/components/shared/ServerPagination'
import LiveCard from '@/features/live/components/LiveCard'
import LiveNavbar from '@/features/live/components/LiveNavbar'

export default function Live() {
  const popularLives = [
    {
      id: 1,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมชาย',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 12,
    },
    {
      id: 2,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมปอง',
      lastName: 'นิลเขตร์',
      roleId: 2,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 14,
    },
    {
      id: 3,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมหมาย',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 13,
    },
    {
      id: 4,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
  ]

  const followedUserLives = [
    {
      id: 1,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมชาย',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 12,
    },
    {
      id: 2,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมปอง',
      lastName: 'นิลเขตร์',
      roleId: 2,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 14,
    },
  ]

  const totalLives = [
    {
      id: 1,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมชาย',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 12,
    },
    {
      id: 2,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมปอง',
      lastName: 'นิลเขตร์',
      roleId: 2,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 14,
    },
    {
      id: 3,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมหมาย',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag1', 'Hashtag2'],
      viewers: 13,
    },
    {
      id: 4,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
    {
      id: 5,
      thumbnail: 'https://placehold.jp/408x230.png',
      firstName: 'สมสุข',
      lastName: 'นิลเขตร์',
      roleId: 1,
      name: 'ชื่อไลฟ์Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?das da;dasd',
      hashtags: ['Hashtag', 'Hashtag', 'Hashtag', 'hasa1'],
      viewers: 12,
    },
  ]

  const t = useTranslations('Common')

  return (
    <>
      <LiveNavbar />
      <div className="container space-y-8 pb-10 pt-6">
        <section>
          <Heading title={t('Live.popular')} iconVariant="3" className="mb-5" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularLives.map(live => <LiveCard key={live.id} live={live} />)}
          </div>
        </section>
        <section>
          <Heading title={t('Live.followed_users')} iconVariant="3" className="mb-5" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {followedUserLives.map(live => <LiveCard key={live.id} live={live} />)}
          </div>
        </section>
        <section>
          <Heading title={t('all')} iconVariant="3" className="mb-5" />
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {totalLives.map(live => <LiveCard key={live.id} live={live} />)}
          </div>
          <ServerPagination page={1} total={59} />
        </section>
      </div>
    </>
  )
}
