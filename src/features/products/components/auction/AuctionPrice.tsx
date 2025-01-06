import Alert from '@/components/shared/Alert'
import PriceBox from '@/features/products/components/PriceBox'
import { formatNumber } from '@/utils/formatter'

interface AuctionPriceProps {
  openPrice: number
  currentPrice: number
  minPrice: number
  minBid: number
}

export default function AuctionPrice({ openPrice, currentPrice, minPrice, minBid }: AuctionPriceProps) {
  return (
    <div className="col-span-full grid grid-cols-subgrid py-8 text-white">
      <div className="col-span-2 col-start-2 flex flex-col gap-5 text-center text-lg">
        ราคาเปิดประมูล
        <b className="text-2xl">{openPrice}</b>
      </div>
      <div className="col-span-4 flex flex-col items-center justify-center gap-2">
        <PriceBox className="w-full max-w-[380px] text-[2rem]" outline>
          {formatNumber(currentPrice)}
        </PriceBox>
        {
          (currentPrice < minPrice) && (
            <Alert variant="error">
              ราคาสูงสุด ณ ปัจจุบัน ยังไม่ถึงราคาขั้นต่ำ
            </Alert>
          )
        }
      </div>
      <div className="col-span-2 flex flex-col gap-5 text-center text-lg">
        กำหนดราคาขั้นต่ำต่อครั้ง
        <b className="text-2xl">{minBid}</b>
      </div>
    </div>
  )
}
