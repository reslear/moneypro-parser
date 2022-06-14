import { defineStore } from 'pinia'

interface Category {
  id: number
  name: string
}

interface Account {
  id: number
  name: string
}

export const useMainStore = defineStore('main', {
  state: () => ({
    categories: [] as Category[],
    accounts: [] as Account[],
  }),
})
