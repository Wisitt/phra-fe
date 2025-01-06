import { forwardRef } from 'react'
import type { NumericFormatProps } from 'react-number-format'
import { NumericFormat } from 'react-number-format'

import { Input } from './input'

interface NumberInputProps extends NumericFormatProps {
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    return (
      <NumericFormat
        getInputRef={ref}
        thousandSeparator
        customInput={Input}
        {...props}
      />
    )
  },
)
NumberInput.displayName = 'NumberInput'

export { NumberInput }
