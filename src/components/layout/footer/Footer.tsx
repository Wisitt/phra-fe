import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

import { Link } from '@/i18n/routing'

import AboutUs from './AboutUs'
import Services from './Services'
import Socials from './Socials'
import SubscriptionForm from './SubscriptionForm'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-smoke-950 pb-2 pt-5">
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-[2/-2] grid grid-cols-subgrid text-white">
          <div>
            <Link
              href="/"
              className="mb-4 grid h-10 w-[125px] place-content-center border border-primary bg-primary"
            >
              LOGO
            </Link>
            <div className="mb-2 flex items-center gap-2 text-xs">
              <span className="inline-block rounded-full border border-primary p-1">
                <PhoneIcon size={12} />
              </span>
              02-5521325
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs">
              <span className="inline-block rounded-full border border-primary p-1">
                <MailIcon size={12} />
              </span>
              Email
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-block rounded-full border border-primary p-1">
                <MapPinIcon size={12} />
              </span>
              Location
            </div>
          </div>
          <div className="col-span-full col-start-3 grid grid-cols-subgrid">
            <Services />
            <AboutUs />
            <div className="col-span-3 col-start-6">
              <SubscriptionForm />
              <Socials />
            </div>
          </div>
          <div className="col-span-full mt-1 space-y-1 text-center text-[8px] text-white/50">
            <p>
              &copy;
              {' '}
              {year}
              {' '}
              Song Phra All Rights Reserved.
            </p>
            <p>
              Powered By Devinnowave Tech Co.,Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
