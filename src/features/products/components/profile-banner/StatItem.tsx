interface Props {
  value: number
  label: string
}

export default function StatItem({ value, label }: Props) {
  return (
    <p className="flex flex-col items-center gap-2 text-center">
      <b className="text-[2rem]">{value}</b>
      {label}
    </p>
  )
}
