import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import { HELP_GROUPS } from '../constants'

interface SidebarProps {
  categoryId: string
}

export default function Sidebar({ categoryId }: SidebarProps) {
  const group = HELP_GROUPS.find(group =>
    group.categories.some(category => category.id === Number(categoryId)),
  )

  if (!group)
    return null

  return (
    <div className="space-y-7">
      {HELP_GROUPS.map(currentGroup => (
        <Accordion
          key={currentGroup.id}
          type="single"
          defaultValue={currentGroup.id === group.id ? 'item-1' : undefined}
          collapsible
        >
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="bg-transparent py-0 font-bold">
              {currentGroup.name}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 p-4">
              {currentGroup.categories.map(category => (
                <Link
                  key={category.id}
                  className={cn(
                    category.id === Number(categoryId) && 'text-primary font-bold',
                  )}
                  href={`/help/categories/${category.id}`}
                >
                  {category.name}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}
