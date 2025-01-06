import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ButtonGroup = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  return (
    <div
      className="[&>*:last-child]:border-l-none flex [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*]:border-r"
      ref={ref}
    >
      {props.children}
    </div>
  )
})
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
