import { Expense } from '../types/Expense'

export type CreateExpenseDto = Omit<Expense, 'id'>
