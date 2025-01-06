interface Props extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number
}

export default function AuctionIcon({ size = 24, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1320_236537)">
        <path
          d="M1.85386 17.6547C1.38229 16.8379 1.66214 15.7935 2.47893 15.3219L12.8314 9.3449L14.5392 12.3028L4.18665 18.2798C3.36986 18.7514 2.32543 18.4715 1.85386 17.6547V17.6547Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="11.6929"
          y="7.37305"
          width="5.6924"
          height="7.96936"
          rx="1"
          transform="rotate(-30 11.6929 7.37305)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="8.99927"
          y="4.98438"
          width="7.96936"
          height="3.41544"
          rx="1"
          transform="rotate(-30 8.99927 4.98438)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14.6915"
          y="14.8438"
          width="7.96936"
          height="3.41544"
          rx="1"
          transform="rotate(-30 14.6915 14.8438)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="15.7085"
          y="20.1699"
          width="7.96936"
          height="3.41544"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12.8621"
          y="23.584"
          width="13.6618"
          height="3.41544"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1320_236537">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
