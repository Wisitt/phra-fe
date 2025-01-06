import { CircleCheck } from 'lucide-react'

import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface SuccessModalProps {
  title: string
  description: string
}

export default function SuccessModal({ title, description }: SuccessModalProps) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex flex-col items-center gap-4">
          <CircleCheck className="size-14 text-green-500" />
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>ตกลง</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
