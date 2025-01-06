'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const unhelpfulReasons = [
  {
    id: 'incorrect-information',
    label: 'ข้อมูลไม่ถูกต้อง หรือ ไม่ครบถ้วน',
  },
  {
    id: 'hard-to-understand',
    label: 'เนื้อหาเข้าใจยาก',
  },
  {
    id: 'not-helpful',
    label: 'เนื้อหานี้ไม่สามารถช่วยแก้ปัญหาของฉันได้',
  },
  {
    id: 'invalid-link',
    label: 'ลิ้งก์ที่แนบในบทความไม่ถูกต้อง',
  },
  {
    id: 'complicated-policy',
    label: 'นโยบายหรือขั้นตอนยุ่งยาก',
  },
] as const

const UnhelpfulFeedbackSchema = z.object({
  reasons: z.array(z.string()),
  additionalFeedback: z.string(),
})

interface HelpfulFeedbackFormProps {
  onSubmit: (data: z.infer<typeof UnhelpfulFeedbackSchema>) => void
  onCancel?: () => void
}

export default function HelpfulFeedbackForm({ onSubmit, onCancel }: HelpfulFeedbackFormProps) {
  const form = useForm<z.infer<typeof UnhelpfulFeedbackSchema>>({
    resolver: zodResolver(UnhelpfulFeedbackSchema),
    defaultValues: {
      reasons: [],
      additionalFeedback: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-7">
          <FormField
            control={form.control}
            name="reasons"
            render={() => (
              <FormItem className="space-y-4">
                {unhelpfulReasons.map(reason => (
                  <FormField
                    key={reason.id}
                    control={form.control}
                    name="reasons"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={reason.id}
                          className="flex flex-row items-start space-x-4 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(reason.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, reason.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      value => value !== reason.id,
                                    ),
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {reason.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalFeedback"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="แนะนำสิ่งที่ควรปรับปรุงเพิ่มเติม"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button type="submit" className="w-[120px] rounded-full">
            ตกลง
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-[120px] rounded-full"
            onClick={() => {
              form.reset()
              onCancel?.()
            }}
          >
            ยกเลิก
          </Button>
        </div>
      </form>
    </Form>
  )
}
