import { MPDataGroupValues, MPHeaders } from '@/types/moneypro'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const usePreviewStore = defineStore('preview', () => {
  const headers = shallowRef<MPHeaders[]>([])
  const groups = shallowRef<MPDataGroupValues>({})

  return {
    headers,
    groups,
  }
})
