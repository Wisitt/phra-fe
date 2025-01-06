import { MessageCircleMoreIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

import HelpfulFeedback from './HelpfulFeedback'

export default function Content() {
  return (
    <div className="col-span-2">
      <h2 className="mb-8 text-2xl">
        <b>[ หัวข้อ ]</b>
        {' '}
        หัวข้อคำถาม
      </h2>
      <p className="mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis hic accusamus aut atque perspiciatis dolorem consectetur eligendi, reprehenderit corrupti laboriosam similique incidunt, vitae velit quae? Doloribus iure quasi ex explicabo, voluptatum blanditiis ad atque corrupti cupiditate laudantium voluptas repellat rem quisquam dolores omnis fugiat modi iste reiciendis? Quibusdam architecto voluptatum neque molestiae eveniet animi eius beatae in aliquid, illum, omnis quod labore possimus fuga quo iusto consequuntur libero nulla veritatis molestias. Possimus incidunt numquam ducimus voluptatibus quisquam sed pariatur a iusto consequatur officiis sapiente fuga, sequi ratione blanditiis maiores nostrum dolor debitis? Officiis recusandae nulla amet dolorem deleniti vel beatae doloremque nemo iste nostrum eveniet iure molestiae quas, obcaecati eius asperiores et placeat! Recusandae, suscipit quae itaque quaerat obcaecati aperiam dolor nostrum ab sed beatae in quasi aliquid sunt ducimus accusantium non explicabo a facere dolorum natus magnam labore accusamus tempora maxime. Consequuntur laboriosam soluta maiores perferendis nisi architecto iste beatae aperiam nesciunt reprehenderit autem id error voluptates ducimus velit nobis veritatis, illum consectetur. Facere voluptatibus rem possimus blanditiis! Dolores a quaerat neque vero! Rem officia officiis minima repellat. Dolores natus nulla ipsum deserunt? Similique eius maxime magni! Minus ea odio enim similique delectus, possimus voluptatibus alias sit officiis ipsa laborum voluptatem, illo deleniti corrupti quasi aut? Excepturi ratione asperiores dolorem dolore rerum deserunt velit ducimus nesciunt aliquam laborum totam, sit neque iusto fuga reprehenderit commodi. Repellendus nisi corrupti harum libero modi nulla, minus cupiditate recusandae saepe mollitia fugit! Repellat unde harum modi eligendi ipsum fuga. Earum voluptas tempora, nihil in, voluptatum quaerat nulla distinctio magnam id sit cumque velit placeat veritatis nemo sapiente culpa assumenda optio, laudantium repudiandae tempore? Tenetur expedita repellendus asperiores sint dolores nihil modi! Inventore fugiat nemo ea, deserunt similique perspiciatis quis dicta cumque incidunt laboriosam. Deleniti incidunt voluptates repudiandae odio ea qui necessitatibus a id temporibus, eos inventore tenetur optio ipsam quia exercitationem architecto mollitia voluptate aliquam porro aut dignissimos dolorem voluptatibus. Temporibus sapiente pariatur, nam eaque ea aspernatur inventore nobis explicabo dolores quaerat suscipit corporis delectus quam itaque culpa unde quas tempora. Eos aliquid optio ullam facere autem quasi pariatur inventore dolore eaque, voluptatibus dolorem enim earum! Maiores atque cupiditate esse aspernatur neque, praesentium, velit at vitae reiciendis sunt facere illum consequuntur alias cum similique perferendis fuga facilis. Aperiam blanditiis vitae repellendus a esse ipsam incidunt labore placeat? Nemo amet voluptatum molestiae, itaque facere enim similique qui earum magni placeat odio sunt repellendus ipsum doloribus tempore, dolore quaerat labore pariatur aut. Asperiores est voluptas cum excepturi ad, delectus quas mollitia! Ratione nemo est non ex, quasi odit nisi iure repudiandae recusandae numquam dicta voluptatum a quisquam sapiente sit, culpa eos earum incidunt distinctio facilis maiores rerum vitae voluptatem. Temporibus mollitia dignissimos debitis eaque dolorem maxime, aliquid consequatur ullam voluptatem aut provident delectus labore, sit maiores numquam totam animi magnam atque expedita! Assumenda nemo quasi commodi provident, maiores iusto quod! Placeat commodi, quam beatae aperiam odit reiciendis mollitia saepe eos necessitatibus ratione rerum optio deleniti? Iusto fugit aut alias quisquam quis, illo est cum optio.
      </p>
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="font-bold">ศึกษาบทความเพิ่มเติม</h2>
        <Link href="/" className="text-[#4AADC6] underline">
          บทความเพิ่มเติมที่เกี่ยวข้อง
        </Link>
        <Link href="/" className="text-[#4AADC6] underline">
          บทความเพิ่มเติมที่เกี่ยวข้อง
        </Link>
        <Link href="/" className="text-[#4AADC6] underline">
          บทความเพิ่มเติมที่เกี่ยวข้อง
        </Link>
      </div>
      <div className="mb-8 flex items-center gap-7">
        หากต้องการความช่วยเหลือหรือมีข้อสงสัยใดๆสอบถามเพิ่มเติม สามารถติดต่อทีมงานส่องพระได้เสมอ
        <Button size="xss">
          แชทกับส่องพระ
          <MessageCircleMoreIcon size={20} />
        </Button>
      </div>
      <HelpfulFeedback />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">บทความที่เกี่ยวข้อง</h2>
        <Link href="/help/general/2">
          [ หัวข้อทั่วไป ] บทความที่เกี่ยวข้อง
        </Link>
        <Link href="/help/general/3">
          [ หัวข้อทั่วไป ] บทความที่เกี่ยวข้อง
        </Link>
        <Link href="/help/general/4">
          [ หัวข้อทั่วไป ] บทความที่เกี่ยวข้อง
        </Link>
      </div>
    </div>
  )
}
