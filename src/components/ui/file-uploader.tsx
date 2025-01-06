'use client'

import { XIcon } from 'lucide-react'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { DropzoneOptions, DropzoneState, FileRejection } from 'react-dropzone'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FileUploaderContextType {
  dropzoneState: DropzoneState
  isAtMaxFiles: boolean
  isFileTooBig: boolean
  removeFile: (index: number) => void
}

const FileUploaderContext = createContext<FileUploaderContextType | null>(null)

export function useFileUpload() {
  const context = useContext(FileUploaderContext)
  if (!context) {
    throw new Error('useFileUpload must be used within a FileUploaderProvider')
  }
  return context
}

interface FileUploaderProps {
  value: File | File[] | null
  reSelect?: boolean
  onValueChange: (value: File | File[] | null) => void
  dropzoneOptions?: DropzoneOptions
}

export const FileUploader = forwardRef<HTMLDivElement, FileUploaderProps & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      className,
      dropzoneOptions,
      value,
      onValueChange,
      reSelect,
      children,
      ...props
    },
    ref,
  ) => {
    const dropzoneConfig = {
      accept: {
        'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
      },
      maxFiles: 1,
      maxSize: 4 * 1024 * 1024, // 4MB,
      multiple: true,
      ...dropzoneOptions,
    }

    const [isFileTooBig, setIsFileTooBig] = useState(false)

    const files = Array.isArray(value) ? value : value ? [value] : null
    const isAtMaxFiles = files?.length === dropzoneConfig.maxFiles

    const shouldReSelectAll = dropzoneConfig.maxFiles === 1 ? true : reSelect

    const handleDrop = useCallback(
      (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        if (!acceptedFiles.length) {
          toast.error('No valid files were provided')
          return
        }

        const newFiles = shouldReSelectAll ? [] : [...(files || [])]

        acceptedFiles.forEach((file) => {
          if (newFiles.length < dropzoneConfig.maxFiles) {
            newFiles.push(file)
          }
        })

        onValueChange(dropzoneConfig.maxFiles === 1 ? newFiles[0] : newFiles)

        if (rejectedFiles.length) {
          const firstError = rejectedFiles[0].errors[0]
          if (firstError?.code === 'file-too-large') {
            toast.error(`File is too large. Max size is ${dropzoneConfig.maxSize / 1024 / 1024}MB`)
          }
          else if (firstError?.message) {
            toast.error(firstError.message)
          }
        }
      },
      [shouldReSelectAll, files, onValueChange, dropzoneConfig.maxFiles, dropzoneConfig.maxSize],
    )

    const dropzoneState = useDropzone({
      ...dropzoneConfig,
      onDrop: handleDrop,
      onDropRejected: () => setIsFileTooBig(true),
      onDropAccepted: () => setIsFileTooBig(false),
    })

    const removeFile = useCallback(
      (index: number) => {
        if (!files) {
          return
        }
        const newFiles = files.filter((_, i) => i !== index)
        onValueChange(dropzoneConfig.maxFiles === 1 ? null : newFiles)
      },
      [files, onValueChange, dropzoneConfig.maxFiles],
    )

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()

        if (!files?.length)
          return

        if (e.key === 'Enter' || e.key === ' ') {
          dropzoneState.inputRef.current?.click()
        }
      },
      [files, dropzoneState.inputRef],
    )

    const contextValue = useMemo(() => ({
      dropzoneState,
      isAtMaxFiles,
      isFileTooBig,
      removeFile,
    }), [dropzoneState, isAtMaxFiles, isFileTooBig, removeFile])

    return (
      <FileUploaderContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="button"
          tabIndex={0}
          onKeyDownCapture={handleKeyDown}
          className={cn('grid focus:outline-none overflow-hidden', className, {
            'gap-2': files && files.length > 0,
          })}
          {...props}
        >
          {children}
        </div>
      </FileUploaderContext.Provider>
    )
  },
)
FileUploader.displayName = 'FileUploader'

export const FileUploaderContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
      <div
        className={cn('w-full')}
        ref={containerRef}
        aria-label="File upload content area"
      >
        <div
          {...props}
          ref={ref}
          className={cn(
            'flex rounded-xl gap-1 flex-wrap',
            className,
          )}
        >
          {children}
        </div>
      </div>
    )
  },
)
FileUploaderContent.displayName = 'FileUploaderContent'

export const FileUploaderItem = forwardRef<HTMLDivElement, { index: number } & React.HTMLAttributes<HTMLDivElement>>(
  ({ className, index, children, ...props }, ref) => {
    const { removeFile } = useFileUpload()

    return (
      <div
        ref={ref}
        className={cn(
          'size-full cursor-pointer relative',
          className,
        )}
        {...props}
      >
        <div className="relative flex size-full items-center gap-1.5 font-medium leading-none tracking-tight">
          {children}
        </div>
        <Button
          type="button"
          variant="white"
          className={cn(
            'absolute size-6 p-0 rounded-full top-2 right-2 hover:bg-destructive hover:text-destructive-foreground',
          )}
          onClick={() => removeFile(index)}
        >
          <span className="sr-only">
            Remove file
            {index + 1}
          </span>
          <XIcon className="size-4" />
        </Button>
      </div>
    )
  },
)
FileUploaderItem.displayName = 'FileUploaderItem'

export const FileInput = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { dropzoneState, isAtMaxFiles, isFileTooBig } = useFileUpload()
    const rootProps = isAtMaxFiles ? {} : dropzoneState.getRootProps()

    return (
      <div
        className="size-full"
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'size-full border p-2 text-center border-muted-foreground text-muted-foreground border-dashed rounded-[20px] flex flex-col items-center justify-center transition-colors',
            {
              'cursor-not-allowed opacity-50': isAtMaxFiles,
              'cursor-pointer hover:border-primary': !isAtMaxFiles,
              'border-green-500 bg-green-50/10': dropzoneState.isDragAccept,
              'border-red-500 bg-red-50/10': dropzoneState.isDragReject || isFileTooBig,
            },
            className,
          )}
          {...rootProps}
        >
          {children}
        </div>
        <input
          ref={dropzoneState.inputRef}
          disabled={isAtMaxFiles}
          {...dropzoneState.getInputProps()}
        />
      </div>
    )
  },
)
FileInput.displayName = 'FileInput'
