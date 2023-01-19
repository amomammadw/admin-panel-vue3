// Utilities
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
    state: () => ({
        pageTitle: {}
    }),

    actions: {
        savePageMeta(data: object) {
            this.pageTitle = data
        }
    }
})
