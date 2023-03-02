<template>
    <div>
        <v-row class="ma-0" justify="space-between">
            <h1>List of Pages</h1>
            <v-btn class="ml-auto" color="primary" @click="dialog = !dialog">Add New Page +</v-btn>
        </v-row>
        <v-dialog v-model="dialog" width="300">
            <v-card>
                <v-card-text>
                    <v-text-field v-model="pageMeta.title" clearable label="Page Title" variant="underlined"></v-text-field>
                    <v-text-field v-model="pageMeta.description" clearable label="Page Description"
                        variant="underlined"></v-text-field>

                    <v-btn class="mb-3" color="blue" @click="store.savePageMeta(pageMeta)">Create Page +</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { usePageStore } from '@/store/page';
const store = usePageStore()

let dialog = ref(false)
let pageMeta = reactive({
    title: '',
    description: ''
})
</script>