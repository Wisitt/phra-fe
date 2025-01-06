import Image from 'next/image'
import { useTranslations } from 'next-intl'

import boxBg from '/public/auth/box-bg.png'

import LoginForm from './login-form'
import LoginWithSocial from './login-with-social'

export default function LoginPage() {
  const t = useTranslations('Common')

  return (
    <div
      className="relative flex h-[650px] w-full max-w-[832px] items-center justify-center overflow-hidden rounded-[40px] bg-[#2D2824] drop-shadow-[0_0_50px_rgba(82,75,74,0.44)]"
    >
      <Image src={boxBg} width={832} height={650} alt="" className="pointer-events-none absolute size-full object-cover" />
      <div className="relative w-full max-w-[400px]">
        <h1 className="mb-[60px] text-center text-2xl font-bold text-white ">
          {t('login')}
        </h1>
        <LoginForm />
        <LoginWithSocial />
      </div>
    </div>
  )
}
