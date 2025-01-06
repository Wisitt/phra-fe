import { cn } from '@/lib/utils'

export default function FlowerOutlineIcon({ className, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary-300', className)}
      {...props}
    >
      <mask id="path-1-inside-1_368_5445" fill="white">
        <path d="M21.1895 9.06029C21.4226 8.291 21.173 7.43509 21.1606 7.38971L21.1008 7.18553L20.8966 7.12572C20.8492 7.11129 19.9912 6.86379 19.2261 7.09685C19.2446 5.97694 18.9064 4.76423 17.8154 3.6732L14.1422 0L10.4689 3.6732C9.37792 4.76423 9.03968 5.97694 9.0603 7.09479C8.29101 6.86173 7.4351 7.11128 7.38973 7.12366L7.18555 7.18347L7.12574 7.38765C7.1113 7.43509 6.86381 8.29306 7.09686 9.05823C5.97696 9.03966 4.76425 9.3779 3.67322 10.4689L1.54972e-05 14.1421L3.67322 17.8153C4.76425 18.9064 5.97696 19.2446 7.0948 19.224C6.86175 19.9933 7.1113 20.8492 7.12368 20.8946L7.18349 21.0987L7.38767 21.1585C7.4351 21.173 8.29308 21.4205 9.05824 21.1874C9.03556 22.3073 9.37586 23.518 10.4669 24.609L14.1401 28.2822L17.8133 24.609C18.9043 23.518 19.2426 22.3053 19.2178 21.1874C19.9871 21.4205 20.843 21.1709 20.8904 21.1565L21.0946 21.0967L21.1544 20.8925C21.1689 20.8451 21.4164 19.9871 21.1833 19.2219C22.3032 19.2446 23.5139 18.9043 24.6049 17.8133L28.2802 14.138L24.6111 10.4689C23.5201 9.3779 22.3073 9.03966 21.1895 9.06029ZM20.4573 7.82901C20.5275 8.20438 20.5625 8.82105 20.2655 9.15929C19.6303 9.27891 19.0528 9.48928 18.5805 9.70583C18.7971 9.23353 19.0074 8.65605 19.1271 8.02082C19.4653 7.72383 20.0799 7.75683 20.4573 7.82901ZM11.4692 12.0488C10.5081 13.2738 10.5081 15.0104 11.4692 16.2355C10.9969 16.5552 8.97368 17.7617 7.41242 16.2004L5.3541 14.1421L7.41242 12.0838C8.97574 10.5205 10.999 11.7311 11.4692 12.0488ZM12.0838 7.4124L14.1422 5.35409L16.2005 7.4124C17.7638 8.97573 16.5552 10.9969 16.2355 11.4692C15.0104 10.5081 13.2739 10.5081 12.0488 11.4692C11.7291 11.001 10.5143 8.98192 12.0838 7.4124ZM12.2963 12.2983C13.3151 11.2795 14.9713 11.2815 15.988 12.2983C17.0069 13.3172 17.0048 14.9733 15.988 15.9901C14.9713 17.0069 13.3151 17.0089 12.2963 15.9901C11.2774 14.9712 11.2795 13.3151 12.2963 12.2983ZM16.2355 16.8151C16.5573 17.2853 17.77 19.3024 16.2005 20.8719L14.1422 22.9302L12.0838 20.8719C10.5205 19.3085 11.7291 17.2874 12.0488 16.8151C13.2739 17.7762 15.0104 17.7762 16.2355 16.8151ZM16.8151 16.2355C17.7762 15.0104 17.7762 13.2738 16.8151 12.0488C17.2853 11.727 19.3024 10.5143 20.8719 12.0838L22.9302 14.1421L20.8719 16.2004C19.3086 17.7638 17.2874 16.5552 16.8151 16.2355ZM11.0237 4.228L14.1422 1.10959L17.2626 4.23006C19.1642 6.13163 18.3743 8.46424 17.7349 9.68521C17.838 8.75299 17.6277 7.73414 16.7553 6.86173L14.1401 4.24656L11.527 6.85967C10.6525 7.73414 10.4442 8.75092 10.5473 9.68314C9.91209 8.46218 9.12218 6.12956 11.0237 4.228ZM7.82697 7.82901C8.20233 7.75889 8.819 7.72383 9.15724 8.02082C9.2748 8.65399 9.48723 9.23353 9.70379 9.70583C9.23149 9.48928 8.654 9.27891 8.01877 9.15929C7.72385 8.81898 7.75684 8.20438 7.82697 7.82901ZM4.22801 17.2605L1.10961 14.1421L4.22801 11.0237C6.12752 9.12422 8.46014 9.91414 9.6811 10.5494C8.74888 10.4462 7.73209 10.6587 6.85968 11.5311L4.24658 14.1442L6.85968 16.7573C7.7321 17.6297 8.75094 17.8401 9.6811 17.739C8.46014 18.3743 6.12958 19.1621 4.22801 17.2605ZM7.82697 20.4594C7.75684 20.084 7.72178 19.4673 8.01877 19.1291C8.654 19.0095 9.23149 18.7991 9.70379 18.5826C9.48723 19.0549 9.27686 19.6323 9.15724 20.2676C8.819 20.5604 8.20439 20.5274 7.82697 20.4594ZM17.2606 24.0563L14.1401 27.1767L11.0217 24.0583C9.12011 22.1568 9.91003 19.8242 10.5473 18.6052C10.4442 19.5375 10.6525 20.5543 11.527 21.4287L14.1401 24.0418L16.7553 21.4267C17.6277 20.5543 17.838 19.5354 17.7349 18.6032C18.3722 19.8221 19.1621 22.1547 17.2606 24.0563ZM20.4573 20.4594C20.082 20.5295 19.4653 20.5646 19.1271 20.2676C19.0074 19.6323 18.7971 19.0549 18.5805 18.5826C19.0528 18.7991 19.6303 19.0095 20.2655 19.1291C20.5605 19.4653 20.5275 20.0799 20.4573 20.4594ZM24.0563 17.2605C22.1547 19.1621 19.82 18.3701 18.6011 17.7328C19.5334 17.836 20.5501 17.6277 21.4246 16.7532L24.0377 14.1401L21.4267 11.529C20.5522 10.6546 19.5334 10.4483 18.6011 10.5514C19.82 9.91414 22.1547 9.12216 24.0563 11.0237L27.1768 14.1442L24.0584 17.2626L24.0563 17.2605Z" />
      </mask>
      <path
        d="M21.1895 9.06029C21.4226 8.291 21.173 7.43509 21.1606 7.38971L21.1008 7.18553L20.8966 7.12572C20.8492 7.11129 19.9912 6.86379 19.2261 7.09685C19.2446 5.97694 18.9064 4.76423 17.8154 3.6732L14.1422 0L10.4689 3.6732C9.37792 4.76423 9.03968 5.97694 9.0603 7.09479C8.29101 6.86173 7.4351 7.11128 7.38973 7.12366L7.18555 7.18347L7.12574 7.38765C7.1113 7.43509 6.86381 8.29306 7.09686 9.05823C5.97696 9.03966 4.76425 9.3779 3.67322 10.4689L1.54972e-05 14.1421L3.67322 17.8153C4.76425 18.9064 5.97696 19.2446 7.0948 19.224C6.86175 19.9933 7.1113 20.8492 7.12368 20.8946L7.18349 21.0987L7.38767 21.1585C7.4351 21.173 8.29308 21.4205 9.05824 21.1874C9.03556 22.3073 9.37586 23.518 10.4669 24.609L14.1401 28.2822L17.8133 24.609C18.9043 23.518 19.2426 22.3053 19.2178 21.1874C19.9871 21.4205 20.843 21.1709 20.8904 21.1565L21.0946 21.0967L21.1544 20.8925C21.1689 20.8451 21.4164 19.9871 21.1833 19.2219C22.3032 19.2446 23.5139 18.9043 24.6049 17.8133L28.2802 14.138L24.6111 10.4689C23.5201 9.3779 22.3073 9.03966 21.1895 9.06029ZM20.4573 7.82901C20.5275 8.20438 20.5625 8.82105 20.2655 9.15929C19.6303 9.27891 19.0528 9.48928 18.5805 9.70583C18.7971 9.23353 19.0074 8.65605 19.1271 8.02082C19.4653 7.72383 20.0799 7.75683 20.4573 7.82901ZM11.4692 12.0488C10.5081 13.2738 10.5081 15.0104 11.4692 16.2355C10.9969 16.5552 8.97368 17.7617 7.41242 16.2004L5.3541 14.1421L7.41242 12.0838C8.97574 10.5205 10.999 11.7311 11.4692 12.0488ZM12.0838 7.4124L14.1422 5.35409L16.2005 7.4124C17.7638 8.97573 16.5552 10.9969 16.2355 11.4692C15.0104 10.5081 13.2739 10.5081 12.0488 11.4692C11.7291 11.001 10.5143 8.98192 12.0838 7.4124ZM12.2963 12.2983C13.3151 11.2795 14.9713 11.2815 15.988 12.2983C17.0069 13.3172 17.0048 14.9733 15.988 15.9901C14.9713 17.0069 13.3151 17.0089 12.2963 15.9901C11.2774 14.9712 11.2795 13.3151 12.2963 12.2983ZM16.2355 16.8151C16.5573 17.2853 17.77 19.3024 16.2005 20.8719L14.1422 22.9302L12.0838 20.8719C10.5205 19.3085 11.7291 17.2874 12.0488 16.8151C13.2739 17.7762 15.0104 17.7762 16.2355 16.8151ZM16.8151 16.2355C17.7762 15.0104 17.7762 13.2738 16.8151 12.0488C17.2853 11.727 19.3024 10.5143 20.8719 12.0838L22.9302 14.1421L20.8719 16.2004C19.3086 17.7638 17.2874 16.5552 16.8151 16.2355ZM11.0237 4.228L14.1422 1.10959L17.2626 4.23006C19.1642 6.13163 18.3743 8.46424 17.7349 9.68521C17.838 8.75299 17.6277 7.73414 16.7553 6.86173L14.1401 4.24656L11.527 6.85967C10.6525 7.73414 10.4442 8.75092 10.5473 9.68314C9.91209 8.46218 9.12218 6.12956 11.0237 4.228ZM7.82697 7.82901C8.20233 7.75889 8.819 7.72383 9.15724 8.02082C9.2748 8.65399 9.48723 9.23353 9.70379 9.70583C9.23149 9.48928 8.654 9.27891 8.01877 9.15929C7.72385 8.81898 7.75684 8.20438 7.82697 7.82901ZM4.22801 17.2605L1.10961 14.1421L4.22801 11.0237C6.12752 9.12422 8.46014 9.91414 9.6811 10.5494C8.74888 10.4462 7.73209 10.6587 6.85968 11.5311L4.24658 14.1442L6.85968 16.7573C7.7321 17.6297 8.75094 17.8401 9.6811 17.739C8.46014 18.3743 6.12958 19.1621 4.22801 17.2605ZM7.82697 20.4594C7.75684 20.084 7.72178 19.4673 8.01877 19.1291C8.654 19.0095 9.23149 18.7991 9.70379 18.5826C9.48723 19.0549 9.27686 19.6323 9.15724 20.2676C8.819 20.5604 8.20439 20.5274 7.82697 20.4594ZM17.2606 24.0563L14.1401 27.1767L11.0217 24.0583C9.12011 22.1568 9.91003 19.8242 10.5473 18.6052C10.4442 19.5375 10.6525 20.5543 11.527 21.4287L14.1401 24.0418L16.7553 21.4267C17.6277 20.5543 17.838 19.5354 17.7349 18.6032C18.3722 19.8221 19.1621 22.1547 17.2606 24.0563ZM20.4573 20.4594C20.082 20.5295 19.4653 20.5646 19.1271 20.2676C19.0074 19.6323 18.7971 19.0549 18.5805 18.5826C19.0528 18.7991 19.6303 19.0095 20.2655 19.1291C20.5605 19.4653 20.5275 20.0799 20.4573 20.4594ZM24.0563 17.2605C22.1547 19.1621 19.82 18.3701 18.6011 17.7328C19.5334 17.836 20.5501 17.6277 21.4246 16.7532L24.0377 14.1401L21.4267 11.529C20.5522 10.6546 19.5334 10.4483 18.6011 10.5514C19.82 9.91414 22.1547 9.12216 24.0563 11.0237L27.1768 14.1442L24.0584 17.2626L24.0563 17.2605Z"
        fill="currentColor"
        stroke="currentColor"
        mask="url(#path-1-inside-1_368_5445)"
      />
    </svg>
  )
}
