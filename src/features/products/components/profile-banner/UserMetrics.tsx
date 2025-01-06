interface Props {
  followers: number
  following: number
  joinedAt: string
}

export default function UserMetrics({ followers, following, joinedAt }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
      ผู้ติดตาม:
      <span>
        {followers}
      </span>
      กำลังติดตาม:
      <span>
        {following}
      </span>
      เข้าร่วมเมื่อ:
      <span>
        {joinedAt}
      </span>
    </div>
  )
}
