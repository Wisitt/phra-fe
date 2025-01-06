import { Link } from '@/i18n/routing'

interface ProductCategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function ProductCategoryCard(props: ProductCategoryCardProps) {
  const { title, description, icon, href } = props
  return (
    <Link href={href}>
      <div className="mb-4 grid h-[190px] place-content-center rounded-2xl bg-martini-950">
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-bold">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  )
}
