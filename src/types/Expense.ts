export interface Expense {
  id: number
  date: string
  amount: number
  currency: string
  category?: string
  notes?: string
}
