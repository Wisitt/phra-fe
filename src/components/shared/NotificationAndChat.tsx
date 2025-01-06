'use client'

import { BellDot, MessageCircleMore, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Link } from '@/i18n/routing'

const previewChats = [
  {
    id: 1,
    sender: 'ชกก นกกก',
    latestMessage: 'ลดได้อีกไหมครับ',
    unread: 2,
  },
  {
    id: 2,
    sender: 'ภกก สกกก',
    latestMessage: 'รูปภาพเพิ่มเติมครับ',
  },
  {
    id: 3,
    sender: 'กกกก นกกก',
    latestMessage: 'รูปภาพเพิ่มเติมครับ ถ้าหากว่าสนใจติดต่อได้',
  },
]

const fullChats = new Map<number, { sender: string, message: string }[]>([
  [
    1,
    [
      {
        sender: 'ชกก นกกก',
        message: 'รูปภาพเพิ่มเติมครับ ถ้าหากว่าสนใจติดต่อได้',
      },
    ],
  ],
  [2, [{ sender: 'ภกก สกกก', message: 'ขอดูรูปเพิ่มเติมครับ' }]],
  [3, [{ sender: 'กกกก นกกก', message: 'ขอดูรูปเพิ่มเติมคหกฟหกฟหกฟกรับ' }]],
])

function NotificationAndChat() {
  const [chats, setChats] = useState<Map<number, { isOpen: boolean, items?: any[] }>>(new Map())
  const [isShowAllChats, setIsShowAllChats] = useState(false)

  const compactName = (name: string) => {
    const [firstName, lastName] = name.split(' ')
    return firstName[0] + lastName[0]
  }

  const hideShowAllChats = () => {
    setIsShowAllChats(false)
  }

  const toggleShowAllChats = () => {
    setIsShowAllChats(prev => !prev)
  }

  const closeChat = (chatId: number) => {
    setChats((prev) => {
      const newChats = new Map(prev)
      newChats.set(chatId, {
        ...newChats.get(chatId),
        isOpen: false,
      })
      return newChats
    })
  }

  const openChat = (chatId: number) => {
    setChats((prev) => {
      const newChats = new Map(prev)
      newChats.set(chatId, {
        ...newChats.get(chatId),
        isOpen: true,
      })
      return newChats
    })
  }

  useEffect(() => {
    const initialOpenedChats = new Map()
    previewChats.forEach(chat => initialOpenedChats.set(chat.id, false))
    setChats(initialOpenedChats)
  }, [])

  return (
    <>
      {/* <div className="fixed right-4 top-[calc(110.84px+1rem)] z-50 flex gap-4">
        {previewChats.map((chat) => (
          <Fragment key={chat.id}>
            {chats.get(chat.id)?.isOpen && (
              <Card className="flex h-[360px] w-[300px] flex-col rounded-b-none rounded-t-2xl border-[#5B4A41] bg-[#5B4A41]">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base font-normal text-white">
                    {chat.sender}
                    <div className="flex items-center gap-1">
                      <button>
                        <Minus />
                      </button>
                      <button onClick={() => closeChat(chat.id)}>
                        <X />
                      </button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col bg-wafer-100 p-0">
                  <span className="text-center text-xs leading-6">วันนี้</span>
                  <div>
                    {fullChats.get(chat.id)?.map((item, i) => (
                      <div key={i} className="flex gap-4 px-2">
                        <Button className="size-8 flex-shrink-0 rounded-full bg-wafer-500 p-0 text-xl font-bold">
                          {compactName(item.sender)}
                        </Button>
                        <p className="rounded-2xl bg-wafer-900 p-2 text-white">{item.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-1 px-2 py-1.5">
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14.414C14.1488 4.99994 13.8945 4.89455 13.707 4.707L12.586 3.586C12.211 3.2109 11.7024 3.00011 11.172 3H8.828C8.29761 3.00011 7.78899 3.2109 7.414 3.586L6.293 4.707C6.10551 4.89455 5.85119 4.99994 5.586 5H4ZM10 14C10.394 14 10.7841 13.9224 11.1481 13.7716C11.512 13.6209 11.8427 13.3999 12.1213 13.1213C12.3999 12.8427 12.6209 12.512 12.7716 12.148C12.9224 11.7841 13 11.394 13 11C13 10.606 12.9224 10.2159 12.7716 9.85195C12.6209 9.48797 12.3999 9.15725 12.1213 8.87868C11.8427 8.6001 11.512 8.37913 11.1481 8.22836C10.7841 8.0776 10.394 8 10 8C9.20435 8 8.44129 8.31607 7.87868 8.87868C7.31607 9.44129 7 10.2043 7 11C7 11.7956 7.31607 12.5587 7.87868 13.1213C8.44129 13.6839 9.20435 14 10 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H4ZM16 15H4L8 7L11 13L13 9L16 15Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <Input placeholder="Aa" className="rounded-full" />
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4471 10.5183C17.613 10.438 17.7525 10.3148 17.8499 10.1623C17.9474 10.0099 17.999 9.83428 17.999 9.65513C17.999 9.47597 17.9474 9.30036 17.8499 9.14792C17.7525 8.99547 17.613 8.87222 17.4471 8.79195L3.44709 2.03333C3.2735 1.94947 3.07839 1.9162 2.88555 1.93758C2.69271 1.95895 2.51049 2.03406 2.3611 2.15372C2.21172 2.27339 2.10163 2.43244 2.04428 2.61149C1.98692 2.79053 1.98477 2.98182 2.03809 3.16202L3.46709 7.98961C3.52686 8.19138 3.6531 8.36885 3.82668 8.49516C4.00026 8.62146 4.21174 8.68972 4.42909 8.68961L9.00009 8.68961C9.26531 8.68961 9.51966 8.79133 9.7072 8.9724C9.89473 9.15347 10.0001 9.39905 10.0001 9.65513C10.0001 9.9112 9.89473 10.1568 9.7072 10.3378C9.51966 10.5189 9.26531 10.6206 9.00009 10.6206L4.42909 10.6206C4.21174 10.6205 4.00026 10.6888 3.82668 10.8151C3.6531 10.9414 3.52686 11.1189 3.46709 11.3206L2.03909 16.1482C1.98566 16.3284 1.98769 16.5196 2.04491 16.6987C2.10213 16.8777 2.21208 17.0369 2.36134 17.1566C2.51061 17.2764 2.69275 17.3516 2.88554 17.3731C3.07833 17.3947 3.27345 17.3616 3.44709 17.2779L17.4471 10.5193L17.4471 10.5183Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </CardFooter>
              </Card>
            )}
          </Fragment>
        ))}
        {isShowAllChats && (
          <Card className="flex h-[360px] w-[300px] flex-col rounded-b-none rounded-t-2xl border-[#5B4A41] bg-[#5B4A41]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base font-normal text-white">
                ข้อความทั้งหมด
                <div className="flex items-center gap-1">
                  <button>
                    <Plus />
                  </button>
                  <button>
                    <Minus />
                  </button>
                  <button>
                    <Maximize2 />
                  </button>
                  <button onClick={hideShowAllChats}>
                    <X />
                  </button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 bg-[#F4EFEC] p-0">
              {previewChats.map((chat) => (
                <button
                  onClick={() => openChat(chat.id)}
                  key={chat.id}
                  className={cn(
                    'flex w-full items-center gap-2 px-4 py-2',
                    chat.unread ? 'bg-primary-200' : 'hover:bg-primary-300',
                  )}
                >
                  <div className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl text-white">
                    {compactName(chat.sender)}
                  </div>
                  <p className="flex-1 truncate text-start">{chat.latestMessage}</p>
                  {chat.unread && (
                    <div className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F10000] text-[10px] font-bold text-white">
                      +{chat.unread}
                    </div>
                  )}
                </button>
              ))}
            </CardContent>
            <CardFooter className="flex items-center gap-1 px-2 py-1.5">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14.414C14.1488 4.99994 13.8945 4.89455 13.707 4.707L12.586 3.586C12.211 3.2109 11.7024 3.00011 11.172 3H8.828C8.29761 3.00011 7.78899 3.2109 7.414 3.586L6.293 4.707C6.10551 4.89455 5.85119 4.99994 5.586 5H4ZM10 14C10.394 14 10.7841 13.9224 11.1481 13.7716C11.512 13.6209 11.8427 13.3999 12.1213 13.1213C12.3999 12.8427 12.6209 12.512 12.7716 12.148C12.9224 11.7841 13 11.394 13 11C13 10.606 12.9224 10.2159 12.7716 9.85195C12.6209 9.48797 12.3999 9.15725 12.1213 8.87868C11.8427 8.6001 11.512 8.37913 11.1481 8.22836C10.7841 8.0776 10.394 8 10 8C9.20435 8 8.44129 8.31607 7.87868 8.87868C7.31607 9.44129 7 10.2043 7 11C7 11.7956 7.31607 12.5587 7.87868 13.1213C8.44129 13.6839 9.20435 14 10 14Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H4ZM16 15H4L8 7L11 13L13 9L16 15Z"
                    fill="white"
                  />
                </svg>
              </button>
              <Input placeholder="Aa" className="rounded-full" />
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4471 10.5183C17.613 10.438 17.7525 10.3148 17.8499 10.1623C17.9474 10.0099 17.999 9.83428 17.999 9.65513C17.999 9.47597 17.9474 9.30036 17.8499 9.14792C17.7525 8.99547 17.613 8.87222 17.4471 8.79195L3.44709 2.03333C3.2735 1.94947 3.07839 1.9162 2.88555 1.93758C2.69271 1.95895 2.51049 2.03406 2.3611 2.15372C2.21172 2.27339 2.10163 2.43244 2.04428 2.61149C1.98692 2.79053 1.98477 2.98182 2.03809 3.16202L3.46709 7.98961C3.52686 8.19138 3.6531 8.36885 3.82668 8.49516C4.00026 8.62146 4.21174 8.68972 4.42909 8.68961L9.00009 8.68961C9.26531 8.68961 9.51966 8.79133 9.7072 8.9724C9.89473 9.15347 10.0001 9.39905 10.0001 9.65513C10.0001 9.9112 9.89473 10.1568 9.7072 10.3378C9.51966 10.5189 9.26531 10.6206 9.00009 10.6206L4.42909 10.6206C4.21174 10.6205 4.00026 10.6888 3.82668 10.8151C3.6531 10.9414 3.52686 11.1189 3.46709 11.3206L2.03909 16.1482C1.98566 16.3284 1.98769 16.5196 2.04491 16.6987C2.10213 16.8777 2.21208 17.0369 2.36134 17.1566C2.51061 17.2764 2.69275 17.3516 2.88554 17.3731C3.07833 17.3947 3.27345 17.3616 3.44709 17.2779L17.4471 10.5193L17.4471 10.5183Z"
                    fill="white"
                  />
                </svg>
              </button>
            </CardFooter>
          </Card>
        )}
      </div> */}
      <div className="fixed right-4 top-[calc(110.84px+1rem)] z-50 flex flex-col gap-4">
        <Button variant="secondary" className="aspect-square h-auto rounded-full">
          <BellDot className="size-10" />
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/new">
                <Button variant="secondary" className="aspect-square h-auto rounded-full">
                  <Plus className="size-10" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">เพิ่มสินค้าใหม่</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
        {previewChats.map(chat => (
          <Button
            onClick={() => openChat(chat.id)}
            key={chat.id}
            className="aspect-square h-auto rounded-full font-bold"
          >
            {compactName(chat.sender)}
          </Button>
        ))}
        <Button onClick={toggleShowAllChats} className="aspect-square h-auto rounded-full">
          <MessageCircleMore className="size-10" />
        </Button>
      </div>
    </>
  )
}

export default NotificationAndChat
