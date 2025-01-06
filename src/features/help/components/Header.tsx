import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-[37px] bg-primary-200 pb-[130px] pt-[54px]">
      <h1 className="text-[32px] font-bold">ศูนย์ความช่วยเหลือ</h1>
      <SearchBar />
    </header>
  )
}
