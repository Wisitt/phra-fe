// import { openLightboxModal } from '@/atoms/lightbox'
import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface ImageManagerProps {
  images: string[]
  isDisabled?: boolean
  onImagesChange: (images: string[]) => void
}

export default function ImageManagerModal({
  images: initialImages,
  isDisabled = false,
  onImagesChange,
}: ImageManagerProps) {
  const [images, setImages] = useState<string[]>(initialImages)

  const handleDeleteAllClick = () => setImages([])

  const handleViewClick = (index: number) => {
    // openLightboxModal({
    //   images,
    //   index,
    // })
  }

  const handleDeleteClick = (image: string) =>
    setImages(prevImages => prevImages.filter(i => i !== image))

  const handleUpload = (file: string) => setImages(prevImages => [...prevImages, file])

  useEffect(() => {
    onImagesChange(images)
  }, [images, onImagesChange])

  return (
    <DialogContent className="max-h-[95vh] overflow-y-auto lg:max-w-screen-xl">
      <DialogHeader>
        <DialogTitle>รูปภาพทั้งหมด</DialogTitle>
      </DialogHeader>
      <div className="flex justify-end">
        <Button onClick={handleDeleteAllClick} variant="outline" className="gap-2">
          <Trash2 className="size-5" />
          ลบรูปภาพทั้งหมด
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* {images.map((image, index) => (
          <div className="h-[350px]" key={image}>
            <PreviewImage
              images={[image]}
              isDisabled={isDisabled}
              onView={() => handleViewClick(index)}
              onDelete={() => handleDeleteClick(image)}
            />
          </div>
        ))}
        <FileUploader className="h-[350px]" onUpload={handleUpload} /> */}
      </div>
    </DialogContent>
  )
}
