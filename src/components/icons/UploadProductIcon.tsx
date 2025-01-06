import type { SVGProps } from 'react'
import * as React from 'react'

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={126}
      height={160}
      fill="none"
      {...props}
    >
      <path
        stroke="#5F5F6A"
        d="M98.988 125.398c.379 4.201 20.263.198 21.661 11.689 1.362 11.185-2.002 12.985-11.376 16.867-.147.061-91.958.061-92.105 0-9.375-3.884-12.74-5.683-11.377-16.867 1.424-11.7 21.22-6.795 21.66-11.688.259-2.887-6.957-4.758 1.263-41.582 1.49-6.673 4.751-11.137 9.97-13.646 4.194-2.016 6.36-4.01 11.266-5.168 2.795-.659 5.051-4.389 3.722-7.566-.556.23-1.203.608-1.371 1.532-1.073 5.715-4.821 3.197-4.23.85.34-1.35 2.465-5.97-2.92-15.079-2.676-4.516 2.425-3.61 3.132-3.998-.074-.441-.196-.605-.396-.91-.955-1.45.536-.562-.278-4.643-1.096-5.505.16-10.233 5.43-12.232 4.921-1.867 1.639-4.68 3.05-8.005.605-1.428.308-2.909.892-4.3.242-.573 2.304-3.81 3.553-4.141.56-.422 1.574-.577 2.685-.486 1.113-.091 2.125.064 2.686.486 1.25.33 3.31 3.568 3.552 4.142.585 1.39.287 2.87.893 4.299 1.41 3.326-1.871 6.138 3.049 8.005 5.27 2 6.526 6.729 5.43 12.232-.814 4.083.676 3.193-.278 4.643-.2.304-.322.467-.395.91.707.387 5.807-.52 3.132 3.998-5.385 9.11-3.404 13.05-3.047 14.465.622 2.465-3.317 5.112-4.444-.894-.113-.607-.53-.758-1.029-.876-1.328 3.177.927 6.907 3.722 7.567 4.905 1.158 7.072 3.153 11.265 5.168 5.22 2.509 8.48 6.971 9.97 13.645 8.222 36.824 1.005 38.695 1.263 41.583Z"
      />
      <path
        stroke="#5F5F6A"
        d="M63.897 99.332v13.333m-6.666-6.666h13.333m10 0c0 9.204-7.462 16.666-16.667 16.666-9.205 0-16.666-7.462-16.666-16.666 0-9.205 7.461-16.667 16.666-16.667s16.667 7.462 16.667 16.667Z"
      />
    </svg>
  )
}
export default SvgComponent