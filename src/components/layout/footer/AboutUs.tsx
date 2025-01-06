import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Link } from '@/i18n/routing'

export default function AboutUs() {
  return (
    <div className="col-span-2 grid grid-cols-subgrid items-start">
      <h3 className="flex items-center gap-1 font-bold">
        <ThaiDecorationIcon variant="8" />
        เกี่ยวกับเรา
        <ThaiDecorationIcon variant="8" />
      </h3>
      <ul className="space-y-1">
        <li>
          <Link href="/contact">
            ติดต่อเรา
          </Link>
        </li>
        <li>
          <Link href="/help">
            ความช่วยเหลือ
          </Link>
        </li>
      </ul>
    </div>
  )
}
