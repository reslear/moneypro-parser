export const enum TransactionType {
  Expense = 'Expense',
  Income = 'Income',
  MoneyTransfer = 'Money Transfer',
  BalanceAdjustment = 'Balance Adjustment',
  OpeningBalance = 'Opening Balance',
}

export enum MPHeader {
  /** @example 12.03.2022 at 19:19:20 */
  Date = 'Date',

  /** @example 11,61 US$ */
  Amount = 'Amount',

  /** @example Payoneer */
  Account = 'Account',

  /** @example 100,00 ₾ */
  AmountReceived = 'Amount received',

  /** @example Belgazprombank */
  AccountTo = 'Account(to)',

  /** @example 1 265,93 US$ */
  Balance = 'Balance',

  /** @example Car: Taxi */
  Category = 'Category',

  Description = 'Description',

  /** @example Пополнение баланса */
  TransactionType = 'Transaction Type',

  Agent = 'Agent',
  Check = 'Check #',
  Class = 'Class',
}

export type MPHeaders = `${MPHeader}`

export type MPDataItem = string
export type MPData = { [key in MPHeaders]: MPDataItem } & {
  [MPHeader.TransactionType]?: TransactionType
}

export type MPDataGroupValues = Partial<Record<MPHeaders, MPDataItem[]>>
