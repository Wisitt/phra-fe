import ArtProductsSection from '@/features/home/components/ArtProductsSection'
import AuctionProductsSection from '@/features/home/components/AuctionProductsSection'
import HeroSection from '@/features/home/components/HeroSection'
import ProductsSection from '@/features/home/components/ProductsSection'
import TopProductTypesChartSection from '@/features/home/components/TopProductTypesChartSection'
import type { Product } from '@/features/products/types/product'

const products: Product[] = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  image: `/hero/buddha-${i % 5 + 1}.png`,
  isVerified: Math.random() > 0.5,
  isRented: Math.random() > 0.5,
  author: {
    id: i + 1,
    displayName: 'username',
    roleId: 1,
  },
  name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัดหฟหกฟหกฟหกฟหกฟกหยาว',
  price: 3000,
  productTypeId: 2,
}))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-wood-smoke-950 to-[#323E47] pb-[100px]">
        <TopProductTypesChartSection />
        <ProductsSection products={products} />
        <AuctionProductsSection />
        <ArtProductsSection />
      </div>
    </>
  )
}
