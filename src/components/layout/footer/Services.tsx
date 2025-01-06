import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Link } from '@/i18n/routing'

export default function Services() {
  return (
    <div className="col-span-2 grid grid-cols-subgrid items-start">
      <h3 className="flex items-center gap-1 font-bold">
        <ThaiDecorationIcon variant="8" />
        บริการ
        <ThaiDecorationIcon variant="8" />
      </h3>
      <ul className="space-y-1">
        <li>
          <Link href="/products">
            ปล่อย/เช่า
          </Link>
        </li>
        <li>
          <Link href="/buddhist-arts">
            พุทธศิลป์
          </Link>
        </li>
        <li>
          <Link href="/auctions">
            ประมูล
          </Link>
        </li>
        <li>
          <Link href="/live">
            ไลฟ์สด
          </Link>
        </li>
        <li>
          <Link href="/topics">
            กระทู้
          </Link>
        </li>
      </ul>
    </div>
  )
}
