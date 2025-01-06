import type { Author } from '@/types/api'

export interface Art {
  id: number;
  image: string;
  name: string;
  ownedAmount: number;
  maxSupply: number;
  price: number;
  reserveDueDate: Date | null;
  username: string;
  userRoleId: number;
  productType: number;
  isVerified: boolean; // <-- เพิ่ม
  author: Author;      // <-- เพิ่ม
  productTypeId: number; // <-- เพิ่ม
}


