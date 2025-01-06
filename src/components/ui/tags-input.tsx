'use client'

import { XIcon } from 'lucide-react'
import { createContext, forwardRef, useCallback, useEffect, useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const SPLITTER_REGEX = /[\n#?=&\t,./-]+/
const FORMATTING_REGEX = /^[^a-z0-9]*|[^a-z0-9]*$/gi

interface TagsInputProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string[]
  onValueChange: (value: string[]) => void
  placeholder?: string
  maxItems?: number
  minItems?: number
}

interface TagsInputContextProps {
  value: string[]
  onValueChange: (value: any) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

const TagInputContext = createContext<TagsInputContextProps | null>(null)

export const TagsInput = forwardRef<HTMLDivElement, TagsInputProps>(
  (
    {
      children,
      value,
      onValueChange,
      placeholder,
      maxItems,
      minItems,
      className,
      dir,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const [inputValue, setInputValue] = useState('')
    const [disableInput, setDisableInput] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [isValueSelected, setIsValueSelected] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

    const parseMinItems = minItems ?? 0
    const parseMaxItems = maxItems ?? Infinity

    const onValueChangeHandler = useCallback(
      (val: string) => {
        if (!value.includes(val) && value.length < parseMaxItems) {
          onValueChange([...value, val])
        }
      },
      [value, parseMaxItems, onValueChange],
    )

    const removeValue = useCallback(
      (val: string) => {
        if (value.includes(val) && value.length > parseMinItems) {
          onValueChange(value.filter(item => item !== val))
        }
      },
      [value, parseMinItems, onValueChange],
    )

    const handlePaste = useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const tags = e.clipboardData.getData('text').split(SPLITTER_REGEX)
        const newValue = [...value]
        tags.forEach((item) => {
          const parsedItem = item.replaceAll(FORMATTING_REGEX, '').trim()
          if (
            parsedItem.length > 0
            && !newValue.includes(parsedItem)
            && newValue.length < parseMaxItems
          ) {
            newValue.push(parsedItem)
          }
        })
        onValueChange(newValue)
        setInputValue('')
      },
      [value, parseMaxItems, onValueChange],
    )

    const handleSelect = useCallback(
      (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.currentTarget
        const selection = target.value.substring(
          target.selectionStart ?? 0,
          target.selectionEnd ?? 0,
        )

        setSelectedValue(selection)
        setIsValueSelected(selection === inputValue)
      },
      [inputValue],
    )

    useEffect(() => {
      setDisableButton(value.length - 1 < parseMinItems)
      setDisableInput(value.length + 1 > parseMaxItems)
    }, [value.length, parseMinItems, parseMaxItems])

    const moveNext = useCallback(() => {
      setActiveIndex(prev =>
        prev + 1 > value.length - 1 ? -1 : prev + 1,
      )
    }, [value.length])

    const movePrev = useCallback(() => {
      setActiveIndex(prev =>
        prev - 1 < 0 ? value.length - 1 : prev - 1,
      )
    }, [value.length])

    const moveCurrent = useCallback(() => {
      setActiveIndex(prev =>
        prev - 1 <= 0
          ? value.length - 1 === 0
            ? -1
            : 0
          : prev - 1,
      )
    }, [value.length])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation()
        const target = e.currentTarget

        switch (e.key) {
          case 'ArrowLeft': {
            if (dir === 'rtl') {
              if (value.length > 0 && activeIndex !== -1) {
                moveNext()
              }
            }
            else if (value.length > 0 && target.selectionStart === 0) {
              movePrev()
            }
            break
          }

          case 'ArrowRight': {
            if (dir === 'rtl') {
              if (value.length > 0 && target.selectionStart === 0) {
                movePrev()
              }
            }
            else if (value.length > 0 && activeIndex !== -1) {
              moveNext()
            }
            break
          }

          case 'Backspace':
          case 'Delete': {
            if (value.length > 0) {
              if (activeIndex !== -1 && activeIndex < value.length) {
                removeValue(value[activeIndex])
                moveCurrent()
              }
              else if (target.selectionStart === 0) {
                if (selectedValue === inputValue || isValueSelected) {
                  removeValue(value[value.length - 1])
                }
              }
            }
            break
          }

          case 'Escape': {
            setActiveIndex(prev => prev === -1 ? value.length - 1 : -1)
            break
          }

          case 'Enter': {
            if (inputValue.trim() !== '') {
              e.preventDefault()
              onValueChangeHandler(inputValue)
              setInputValue('')
            }
            break
          }
        }
      },
      [
        activeIndex,
        value,
        inputValue,
        dir,
        isValueSelected,
        selectedValue,
        moveNext,
        movePrev,
        moveCurrent,
        removeValue,
        onValueChangeHandler,
      ],
    )

    const mousePreventDefault = useCallback((e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
    }, [])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    }, [])

    const contextValue = useMemo(
      () => ({
        value,
        onValueChange,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
      }),
      [value, onValueChange, inputValue, activeIndex],
    )

    return (
      <TagInputContext.Provider value={contextValue}>
        <div
          {...props}
          ref={ref}
          dir={dir}
          className={cn(
            'flex items-center flex-wrap gap-2 px-3 py-2 rounded-lg bg-background border border-input focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 ring-offset-background',
            {
              'focus-within:ring-ring': activeIndex === -1,
            },
            className,
          )}
        >
          {value.map((item, index) => (
            <Badge
              tabIndex={activeIndex !== -1 ? 0 : activeIndex}
              key={item}
              aria-disabled={disableButton}
              data-active={activeIndex === index}
              className={cn(
                'relative px-1 rounded-full h-[22px] flex items-center gap-1 data-[active=\'true\']:ring-2 data-[active=\'true\']:ring-muted-foreground truncate aria-disabled:opacity-50 aria-disabled:cursor-not-allowed',
              )}
              variant="secondary"
            >
              <span className="text-xs">{item}</span>
              <button
                type="button"
                aria-label={`Remove ${item} option`}
                aria-roledescription="button to remove option"
                disabled={disableButton}
                onMouseDown={mousePreventDefault}
                onClick={() => removeValue(item)}
                className="disabled:cursor-not-allowed"
              >
                <span className="sr-only">
                  Remove
                  {item}
                  {' '}
                  option
                </span>
                <XIcon size={16} />
              </button>
            </Badge>
          ))}
          <Input
            tabIndex={0}
            aria-label="input tag"
            disabled={disableInput}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            value={inputValue}
            onSelect={handleSelect}
            onChange={activeIndex === -1 ? handleChange : undefined}
            placeholder={placeholder}
            onClick={() => setActiveIndex(-1)}
            className={cn(
              'outline-0 rounded-none border-none p-0 h-[22px] min-w-fit flex-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0 placeholder:text-muted',
              activeIndex !== -1 && 'caret-transparent',
            )}
          />
        </div>
      </TagInputContext.Provider>
    )
  },
)

TagsInput.displayName = 'TagsInput'
