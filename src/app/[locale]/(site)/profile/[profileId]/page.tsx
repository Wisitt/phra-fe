import ProfileGallery from '@/features/profile/components/ProfileGallery'
import ProfileInfo from '@/features/profile/components/ProfileInfo'
import ProfileNavbar from '@/features/profile/components/ProfileNavbar'

interface ProfileProps { params: { profileId: string } }

export default function Profile({ params }: ProfileProps) {
  return (
    <div className="container relative grid grid-cols-12 gap-4">
      <ProfileNavbar />
      <div className="col-[2/-2] grid grid-cols-subgrid">
        <ProfileInfo />
        <ProfileGallery />
      </div>
    </div>
  )
}
