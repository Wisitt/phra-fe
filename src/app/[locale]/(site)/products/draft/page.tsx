import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import NavigationBar from '@/components/shared/NavigationBar'
import ProductCard from '@/features/products/components/ProductCard'

export default function Draft() {
  return (
    <div className="container pb-[60px]">
      <NavigationBar
        returnHref="/new"
        items={[
          {
            href: '/new',
            label: 'เพิ่มสินค้าใหม่',
          },
          {
            label: 'ฉบับร่าง',
          },
        ]}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-[2/-2]">
          <h1 className="mb-5 flex items-center gap-2 text-2xl font-bold">
            <DecorativeSymbolIcon variant="3" />
            ฉบับร่าง
            <DecorativeSymbolIcon variant="3" />
          </h1>
          <div className="grid grid-cols-5 gap-4">
            <ProductCard
              isDraft
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
            <ProductCard
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
            <ProductCard
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
            <ProductCard
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
            <ProductCard
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
            <ProductCard
              product={{
                id: 1,
                image: 'https://placehold.jp/214x250.png',
                // eslint-disable-next-line ts/ban-ts-comment
                // @ts-ignore
                userFullName: 'นิติภูมิ นิลเขตร์',
                userRoleId: 1,
                name: 'พระนางพญาหลังปั้ม',
                modelName: 'ชื่อรุ่น',
                type: 'พระพุทธรูป',
                material: 'เหล็ก',
                codeNumber: '123456',
                createdYear: 2564,
                temple: 'วัดจิตภาวัน',
                province: 'ชลบุรี',
                isVerified: true,
                price: 3000,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
