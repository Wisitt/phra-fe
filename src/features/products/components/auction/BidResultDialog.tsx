import { CircleCheckIcon } from 'lucide-react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { formatNumber } from '@/utils/formatter'

interface BidResultDialogProps {
  price: number
  auctionName: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BidResultDialog(props: BidResultDialogProps) {
  const { price, auctionName, isOpen, setIsOpen } = props

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center space-y-0">
          <CircleCheckIcon className="mb-4 text-[#37B97C]" size={56} />
          <AlertDialogTitle className="!mb-2 text-2xl text-foreground">
            การเสนอราคาสำเร็จในราคา
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            <b className="flex items-center justify-center gap-2 text-2xl">
              <DecorativeSymbolIcon variant="1" />
              {`${formatNumber(price)} บาท`}
              <DecorativeSymbolIcon variant="1" />
            </b>
            {auctionName}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-[120px]">
            ยืนยัน
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
