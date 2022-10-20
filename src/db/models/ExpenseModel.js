import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

const expenseFields = {
  id: {
    type: types.INTEGER,
    primary_key: true,
    autoincrement: true,
  },
  date: {
    type: types.DATETIME,
    not_null: true,
  },
  amount: {
    type: types.NUMERIC,
    not_null: true,
  },
  currency: {
    type: types.TEXT,
    not_null: true,
  },
  category: {
    type: types.NUMERIC,
  },
  notes: {
    type: types.TEXT,
  },
  isSynced: {
    type: types.BOOLEAN,
    not_null: true,
    default: () => false,
  },
}

export class ExpenseModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => await SQLite.openDatabase('expense-manager.db')
  }

  static get tableName() {
    return 'expense'
  }

  static get columnMapping() {
    return expenseFields
  }
}
