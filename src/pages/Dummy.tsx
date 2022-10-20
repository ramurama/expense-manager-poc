import { useEffect, useState } from 'react'

import { createTables } from '../db/DatabaseManager'
import { queryExpenses } from '../services/expenseService'
import { formatDateForDB } from '../utils'

export const Dummy = () => {
  const [tablesCreated, setTablesCreated] = useState<boolean>(false)

  useEffect(() => {
    // TODO: create tables should be done during the splash screen stage
    ;(async () => {
      await createTables()
    })()

    setTablesCreated(true)
  }, [])

  useEffect(() => {
    ;(async () => {
      if (tablesCreated) {
        // await createExpense({
        //   amount: 10,
        //   currency: 'EUR',
        //   category: 'Groceries',
        //   date: formatDate(),
        // })
        console.log('Expense created.')
      }
      console.log(
        await queryExpenses({
          column: 'id, amount, currency, category, timestamp, notes',
          // where: {
          //   date_lteq: formatDateForDB(new Date(2022, 1, 11)),
          // },
          page: 1,
          limit: 10,
          order: 'id ASC',
        }),
      )
    })()
  }, [tablesCreated])

  return <></>
}
