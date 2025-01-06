'use client'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import { useStore } from '@nanostores/react'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import { $lightbox, closeLightbox } from '../../stores/lightbox'
import NextJsImage from '../shared/NextJsImage'

export default function LightboxProvider() {
  const lightboxState = useStore($lightbox)

  return (
    <Lightbox
      index={lightboxState.currentImageIndex}
      open={lightboxState.currentImageIndex !== -1}
      close={closeLightbox}
      plugins={[Thumbnails, Zoom, Counter]}
      slides={lightboxState.images}
      render={{ slide: NextJsImage }}
    />
  )
}
