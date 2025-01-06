import { atom } from 'nanostores'
import type { SlideImage } from 'yet-another-react-lightbox'

interface LightboxState {
  currentImageIndex: number
  images: SlideImage[]
}

const initialState: LightboxState = {
  currentImageIndex: -1, // -1 indicates the lightbox is closed
  images: [],
}

export const $lightbox = atom<LightboxState>(initialState)

export function setImages(images: LightboxState['images']) {
  $lightbox.set({
    ...$lightbox.get(),
    images,
  })
}

export function openLightbox(index = 0) {
  $lightbox.set({
    ...$lightbox.get(),
    currentImageIndex: index,
  })
}

export function closeLightbox() {
  $lightbox.set({
    ...$lightbox.get(),
    currentImageIndex: -1, // -1 indicates the lightbox is closed
  })
}

export function setCurrentImageIndex(index: number) {
  $lightbox.set({
    ...$lightbox.get(),
    currentImageIndex: index,
  })
}

export function isLightboxOpen(): boolean {
  return $lightbox.get().currentImageIndex !== -1
}
