import { useState } from 'react'

import MyArtCard from '@/features/products/components/art/MyArtCard'
import MyAuctionCard from '@/features/products/components/auction/MyAuctionCard'
import MyProductCard from '@/features/products/components/MyProductCard'
import type { Art } from '@/features/products/types/art'
import type { Auction } from '@/features/products/types/auction'
import type { Product } from '@/features/products/types/product'

import SelectAuctionProductDialog from './SelectAuctionProductDialog'

function renderProductCard(product: Product | Auction | Art, unselect: (id: number) => void) {
  const props = { isPending: true, onUnselect: unselect }

  switch (product.productTypeId) {
    case 1:
      return <MyProductCard key={product.id} product={product as Product} {...props} />
    case 2:
      return <MyAuctionCard key={product.id} auction={product as Auction} {...props} />
    case 3:
      return <MyArtCard key={product.id} art={product as Art} {...props} />
    default:
      return null
  }
}

export default function AddAuctionProduct() {
  const [isAddProductsDialogOpen, setIsAddProductsDialogOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<(Product | Art | Auction)[]>([])

  return (
    <div className="grid grid-cols-5 gap-4">
      {selectedItems.map(item => renderProductCard(item, () => setSelectedItems(prev => prev.filter(p => p.id !== item.id))))}
      <button type="button" onClick={() => setIsAddProductsDialogOpen(true)} className="flex h-[414px] cursor-pointer flex-col items-center justify-center gap-4 rounded-[20px] border border-dashed border-muted-foreground text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <svg width="126" height="160" viewBox="0 0 126 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M98.9881 125.398C99.3667 129.599 119.251 125.596 120.649 137.087C122.011 148.272 118.647 150.072 109.273 153.954C109.126 154.015 17.315 154.015 17.1685 153.954C7.79346 150.07 4.42877 148.271 5.79052 137.087C7.21487 125.387 27.0107 130.292 27.4519 125.399C27.7099 122.512 20.4935 120.641 28.7144 83.8167C30.2044 77.1442 33.4652 72.6801 38.6848 70.171C42.8784 68.1549 45.0432 66.1617 49.9498 65.0034C52.745 64.344 55.0014 60.614 53.6717 57.4365C53.116 57.667 52.4687 58.0455 52.3008 58.9688C51.2276 64.6844 47.4797 62.1662 48.0705 59.8189C48.4109 58.4697 50.536 53.8484 45.1501 44.7402C42.4754 40.2242 47.5759 41.1292 48.2827 40.7415C48.2094 40.3005 48.0873 40.1372 47.8873 39.8319C46.9316 38.382 48.4231 39.2703 47.6095 35.1893C46.5133 29.6843 47.7697 24.9562 53.0397 22.9569C57.96 21.0903 54.6777 18.2776 56.0883 14.952C56.6944 13.5235 56.3967 12.0431 56.9814 10.6527C57.2226 10.0789 59.2851 6.84183 60.5339 6.51065C61.0942 6.08942 62.1078 5.93375 63.2192 6.02532C64.3321 5.93375 65.3443 6.08942 65.9046 6.51065C67.1549 6.84183 69.2158 10.0789 69.457 10.6527C70.0417 12.0431 69.744 13.5235 70.3501 14.952C71.7607 18.2776 68.4785 21.0903 73.3988 22.9569C78.6687 24.9577 79.9251 29.6858 78.829 35.1893C78.0153 39.2718 79.5053 38.382 78.5512 39.8319C78.3512 40.1356 78.229 40.2989 78.1558 40.7415C78.8626 41.1292 83.9631 40.2226 81.2884 44.7402C75.9025 53.85 77.884 57.7891 78.2413 59.2054C78.8626 61.6702 74.9239 64.3166 73.7972 58.311C73.6843 57.7036 73.2675 57.5525 72.7683 57.435C71.4401 60.6125 73.695 64.3425 76.4902 65.0018C81.3953 66.1602 83.5616 68.1549 87.7552 70.1695C92.9747 72.6786 96.2356 77.1411 97.7256 83.8152C105.947 120.639 98.7301 122.51 98.9881 125.398Z" stroke="#5F5F6A" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="round" />
          <path d="M63.8971 99.332V112.665M57.2305 105.999H70.5638M80.5638 105.999C80.5638 115.203 73.1019 122.665 63.8971 122.665C54.6924 122.665 47.2305 115.203 47.2305 105.999C47.2305 96.794 54.6924 89.332 63.8971 89.332C73.1019 89.332 80.5638 96.794 80.5638 105.999Z" stroke="#5F5F6A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        อัปโหลดสินค้าที่ต้องการ
      </button>
      <SelectAuctionProductDialog
        isOpen={isAddProductsDialogOpen}
        setIsOpen={setIsAddProductsDialogOpen}
        selectedItems={selectedItems}
        onSelectionChange={selectedItems => setSelectedItems(selectedItems)}
      />
    </div>
  )
}
