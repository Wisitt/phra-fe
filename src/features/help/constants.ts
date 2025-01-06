import type { Group } from './types'

export const HELP_GROUPS: Group[] = [
  {
    id: 'general',
    name: 'หัวข้อทั่วไป',
    categories: [
      {
        id: 1,
        name: 'หัวข้อทั่วไป',
        articles: [
          { id: 1, name: 'การใช้งานระบบ' },
          { id: 2, name: 'การลงทะเบียน' },
          { id: 3, name: 'การใช้งานระบบ' },
        ],
      },
      {
        id: 2,
        name: 'การส่งสินค้า',
        articles: [
          { id: 4, name: 'การส่งสินค้า' },
          { id: 5, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 6, name: 'การส่งสินค้า' },
        ],
      },
      {
        id: 3,
        name: 'การจัดการคำสั่งซื้อ,การจัดส่ง',
        articles: [
          { id: 7, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 8, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 9, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
        ],
      },
      {
        id: 4,
        name: 'การรับรอง/การขอรับรอง',
        articles: [
          { id: 10, name: 'การรับรอง/การขอรับรอง' },
          { id: 11, name: 'การรับรอง/การขอรับรอง' },
          { id: 12, name: 'การรับรอง/การขอรับรอง' },
        ],
      },
      {
        id: 5,
        name: 'การจัดการคำสั่งซื้อ,การจัดส่ง',
        articles: [
          { id: 13, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 14, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 15, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
        ],
      },
      {
        id: 6,
        name: 'การส่งสินค้า',
        articles: [
          { id: 16, name: 'การส่งสินค้า' },
          { id: 17, name: 'การส่งสินค้า' },
          { id: 18, name: 'การส่งสินค้า' },
        ],
      },
      {
        id: 7,
        name: 'การชำระเงิน',
        articles: [
          { id: 19, name: 'การชำระเงิน' },
          { id: 20, name: 'การชำระเงิน' },
          { id: 21, name: 'การชำระเงิน' },
        ],
      },
    ],
  },
  {
    id: 'wallet',
    name: 'วอลเล็ต (กระเป๋าเงินส่องพระ)',
    categories: [
      {
        id: 8,
        name: 'การส่งสินค้า',
        articles: [
          { id: 22, name: 'การส่งสินค้า' },
          { id: 23, name: 'การส่งสินค้า' },
          { id: 24, name: 'การส่งสินค้า' },
        ],
      },
      {
        id: 9,
        name: 'การจัดการคำสั่งซื้อ,การจัดส่ง',
        articles: [
          { id: 25, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 26, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 27, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
        ],
      },
      {
        id: 10,
        name: 'การจัดการคำสั่งซื้อ,การจัดส่ง',
        articles: [
          { id: 28, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 29, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 30, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
        ],
      },
      {
        id: 11,
        name: 'การรับรอง/การขอรับรอง',
        articles: [
          { id: 31, name: 'การรับรอง/การขอรับรอง' },
          { id: 32, name: 'การรับรอง/การขอรับรอง' },
          { id: 33, name: 'การรับรอง/การขอรับรอง' },
        ],
      },
      {
        id: 12,
        name: 'การจัดการคำสั่งซื้อ,การจัดส่ง',
        articles: [
          { id: 34, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 35, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
          { id: 36, name: 'การจัดการคำสั่งซื้อ,การจัดส่ง' },
        ],
      },
      {
        id: 13,
        name: 'การส่งสินค้า',
        articles: [
          { id: 37, name: 'การส่งสินค้า' },
          { id: 38, name: 'การส่งสินค้า' },
          { id: 39, name: 'การส่งสินค้า' },
        ],
      },
      {
        id: 14,
        name: 'การชำระเงิน',
        articles: [
          { id: 40, name: 'การชำระเงิน' },
          { id: 41, name: 'การชำระเงิน' },
          { id: 42, name: 'การชำระเงิน' },
        ],
      },
    ],
  },
] as const