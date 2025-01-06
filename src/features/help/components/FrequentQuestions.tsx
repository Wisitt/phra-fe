import { Link } from '@/i18n/routing'

const FREQUENT_QUESTIONS = [
  {
    id: 1,
    category: 'บัญชีของฉัน',
    question: 'ทำไมต้องสมัครสมาชิก?',
  },
  {
    id: 2,
    category: 'การซื้อสินค้า',
    question: 'ฉันจะทราบได้อย่างไรว่าสินค้าแท้หรือของปลอม?',
  },
  {
    id: 3,
    category: 'การชำระเงิน',
    question: 'มีวิธีการชำระเงินแบบใดบ้าง?',
  },
  {
    id: 4,
    category: 'การจัดส่ง',
    question: 'ระยะเวลาในการจัดส่งนานแค่ไหน?',
  },
  {
    id: 5,
    category: 'การรับประกัน',
    question: 'มีการรับประกันสินค้าหรือไม่?',
  },
] as const

export default function FrequentQuestions() {
  return (
    <section className="flex flex-col gap-[37px]">
      <h2 className="text-[24px] font-bold">คำถามที่พบบ่อย</h2>
      <div className="flex flex-col items-start gap-6">
        {FREQUENT_QUESTIONS.map(({ id, category, question }) => (
          <Link key={id} href={`/help/articles/${id}`} className="flex gap-3">
            [
            {' '}
            {category}
            {' '}
            ]
            <span>{question}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
