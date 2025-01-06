'use client'

import { useState } from 'react'

import ActivityMetrics from './ActivityMetrics'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import StatItem from './StatItem'
import UserMetrics from './UserMetrics'

interface ProfileStatistics {
  owned: number
  rented: number
  forRent: number
  reserved: number
}

export default function ProfileBanner() {
  const [isFollowed, setIsFollowed] = useState(false)

  const statistics: ProfileStatistics = {
    owned: 9,
    rented: 8,
    forRent: 12,
    reserved: 1,
  }

  return (
    <div className="z-10 col-span-full grid grid-cols-subgrid rounded-2xl border border-primary-500 bg-[#161618] py-8 text-white">
      <div className="col-[2/-2] grid grid-cols-[auto_1fr_repeat(4,minmax(0,125px))] gap-8">
        <ProfileImage
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          phoneNumber="081-86085461"
        />
        <div className="col-span-5 grid grid-cols-subgrid items-start gap-x-4 gap-y-3">
          <ProfileInfo
            name="สมชาย นิลเขตร์"
            roleId={2}
            rating={4}
            onFollowToggle={() => setIsFollowed(prev => !prev)}
            isFollowed={isFollowed}
          />
          <StatItem value={statistics.owned} label="ครอบครอง" />
          <StatItem value={statistics.rented} label="รับเช่า" />
          <StatItem value={statistics.forRent} label="ปล่อยเช่า" />
          <StatItem value={statistics.reserved} label="จอง" />
          <UserMetrics followers={20} following={8} joinedAt="1 ปีที่แล้ว" />
          <ActivityMetrics
            rentListings={15}
            auctions={15}
            livestreams={15}
          />
        </div>
      </div>
    </div>
  )
}
