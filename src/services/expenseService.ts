import { ExpenseModel } from '../db/models/ExpenseModel'
import { CreateExpenseDto } from '../dtos/createExpenseDto'
import { UpdateExpenseDto } from '../dtos/updateExpenseDto'
import { Expense } from '../types/Expense'
import { QueryConditions } from '../types/QueryConditions'

export async function createExpense(expenseDto: CreateExpenseDto) {
  const expense = new ExpenseModel(expenseDto)
  // @ts-ignore
  await expense.save()
}

export async function deleteExpense(id: number) {
  // @ts-ignore
  await ExpenseModel.destroy(id)
}

export async function updateExpense(updateExpenseDto: UpdateExpenseDto) {
  const { id, date, amount, currency, category, notes } = updateExpenseDto
  // @ts-ignore
  const expense = (await ExpenseModel.find(id)) as Expense

  expense.date = date
  expense.amount = amount
  expense.currency = currency
  expense.category = category
  expense.notes = notes

  // @ts-ignore
  await expense.save()
}

export async function queryExpenses(conditions: QueryConditions) {
  // @ts-ignore
  return await ExpenseModel.query(conditions)
}
