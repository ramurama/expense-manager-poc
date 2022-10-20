import { ExpenseModel } from './models/ExpenseModel'

export async function createTables() {
  // create all tables here
  // @ts-ignore
  await ExpenseModel.createTable()

  console.log('Database tables created.')
}

export async function dropTables() {
  // drop all tables here
  // @ts-ignore
  await ExpenseModel.dropTable()

  console.log('Database tables dropped.')
}
