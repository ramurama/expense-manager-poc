export interface QueryConditions {
  column: string
  where?: Record<string, any>
  page: number
  limit: number
  order?: string
}
