import { AlertCircle } from 'lucide-react'

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
  description: string
  onConfirm: () => void
}

export default function ConfirmModal({ description, onConfirm }: ConfirmModalProps) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex flex-col items-center gap-4">
          <AlertCircle className="size-5 text-red-500" />
          กรุณาตรวจสอบ
        </AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
        <AlertDialogAction type="button" onClick={onConfirm}>
          ยืนยัน
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
