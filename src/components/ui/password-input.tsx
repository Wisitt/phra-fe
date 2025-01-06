import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'

import { Input } from './input'

const PasswordInput = forwardRef<React.ElementRef<typeof Input>, React.ComponentPropsWithoutRef<typeof Input>>((props, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={isPasswordVisible ? 'text' : 'password'}
        {...props}
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" type="button" aria-label={isPasswordVisible ? 'Hide password' : 'Show password'} onClick={() => setIsPasswordVisible(prev => !prev)}>
        {isPasswordVisible ? <EyeOff /> : <Eye />}
      </button>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export {
  PasswordInput,
}
