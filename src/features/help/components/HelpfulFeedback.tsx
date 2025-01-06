'use client'

import { CircleCheckIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import { useState } from 'react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import HelpfulFeedbackForm from './HelpfulFeedbackForm'

enum ArticleFeedbackType {
  HELPFUL,
  UNHELPFUL,
}

export default function HelpfulFeedback() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [feedbackType, setFeedbackType] = useState<ArticleFeedbackType | undefined>()

  const handleHelpfulClick = () => {
    if (feedbackType === ArticleFeedbackType.HELPFUL)
      return
    setFeedbackType(ArticleFeedbackType.HELPFUL)
    setIsSuccessOpen(true)
  }

  const handleUnhelpfulClick = () => {
    if (feedbackType === ArticleFeedbackType.UNHELPFUL)
      return
    setIsFormOpen(true)
  }

  const handleFormSubmit = () => {
    setFeedbackType(ArticleFeedbackType.UNHELPFUL)
    setIsFormOpen(false)
    setIsSuccessOpen(true)
  }

  const handleFormCancel = () => {
    setIsFormOpen(false)
  }

  return (
    <div className="mb-8 flex items-center gap-10">
      บทความนี้มีประโยชน์กับคุณหรือไม่
      <div className="flex gap-4">
        <Button
          className="border border-primary"
          variant={feedbackType === ArticleFeedbackType.HELPFUL ? 'default' : 'outline'}
          size="xs"
          onClick={handleHelpfulClick}
        >
          <ThumbsUpIcon size={20} />
          ใช่
        </Button>
        <Button
          className="border border-primary"
          variant={feedbackType === ArticleFeedbackType.UNHELPFUL ? 'default' : 'outline'}
          size="xs"
          onClick={handleUnhelpfulClick}
        >
          <ThumbsDownIcon size={20} />
          ไม่
        </Button>
      </div>
      <AlertDialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="items-center space-y-0">
            <CircleCheckIcon className="mb-4 text-green-500" size={56} />
            <AlertDialogTitle className="flex items-center gap-2 text-2xl text-foreground">
              <DecorativeSymbolIcon variant="1" />
              ขอบคุณสำหรับข้อเสนอแนะ
              <DecorativeSymbolIcon variant="1" />
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="w-[120px]">
              ตกลง
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <AlertDialogContent>
          <AlertDialogHeader className="items-center">
            <AlertDialogTitle className="flex items-center gap-2 text-2xl text-foreground">
              <DecorativeSymbolIcon variant="1" />
              คุณพบปัญหาเรื่องอะไร?
              <DecorativeSymbolIcon variant="1" />
            </AlertDialogTitle>
          </AlertDialogHeader>
          <HelpfulFeedbackForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
