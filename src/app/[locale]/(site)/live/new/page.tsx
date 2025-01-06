import NavigationBar from '@/components/shared/NavigationBar'
import AddLiveForm from '@/features/live/components/AddLiveForm'

export default function NewLive() {
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
            label: 'ไลฟ์สด',
          },
        ]}
      />
      <AddLiveForm />
    </div>
  )
}
