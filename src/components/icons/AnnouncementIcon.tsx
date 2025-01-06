interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number
}

export default function AnnouncementIcon({ size = 24, ...props }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.33269 18.6666L7.43221 27.0647C7.49126 27.3008 7.52078 27.4189 7.55571 27.522C7.8969 28.5294 8.80404 29.2376 9.86404 29.3243C9.97255 29.3332 10.0943 29.3332 10.3377 29.3332C10.6426 29.3332 10.795 29.3332 10.9234 29.3208C12.1927 29.1977 13.1971 28.1932 13.3202 26.924C13.3327 26.7956 13.3327 26.6431 13.3327 26.3383V7.33322M24.666 17.9999C27.2433 17.9999 29.3327 15.9105 29.3327 13.3332C29.3327 10.7559 27.2433 8.66655 24.666 8.66655M13.666 7.33322H8.66601C5.35231 7.33322 2.66601 10.0195 2.66602 13.3332C2.66602 16.6469 5.35231 19.3332 8.66601 19.3332H13.666C16.0213 19.3332 18.9023 20.5957 21.1251 21.8074C22.4218 22.5143 23.0701 22.8677 23.4948 22.8157C23.8885 22.7675 24.1863 22.5907 24.4171 22.268C24.666 21.9201 24.666 21.2239 24.666 19.8315V6.83493C24.666 5.44254 24.666 4.74635 24.4171 4.3984C24.1863 4.07575 23.8885 3.89895 23.4948 3.85072C23.0701 3.79871 22.4218 4.15215 21.1251 4.85902C18.9023 6.0707 16.0212 7.33322 13.666 7.33322Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}