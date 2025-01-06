import ArtHero from '@/features/products/components/art/ArtHero'
import FeaturedArtwork from '@/features/products/components/art/FeaturedArtwork'
import LatestArtworks from '@/features/products/components/art/LatestArtworks'
import TopArtists from '@/features/products/components/art/TopArtists'

export default function ArtProducts() {
  return (
    <div className="bg-wood-smoke-950 text-white">
      <div className="container space-y-20 py-20">
        <ArtHero />
        <LatestArtworks />
        <FeaturedArtwork />
        <TopArtists />
      </div>
    </div>
  )
}
