interface Props {
  rentListings: number
  auctions: number
  livestreams: number
}

export default function ActivityMetrics({ rentListings, auctions, livestreams }: Props) {
  return (
    <div className="col-span-4 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
      การตั้งปล่อยเช่า:
      <span>
        {rentListings}
      </span>
      การเปิดประมูล:
      <span>
        {auctions}
      </span>
      การไลฟ์สด:
      <span>
        {livestreams}
      </span>
    </div>
  )
}
