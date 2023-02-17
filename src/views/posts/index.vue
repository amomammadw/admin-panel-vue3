<template>
    <div>
        <v-row class="ma-0" justify="space-between">
            <h1>Posts</h1>
            <v-btn color="primary" @click="addPostModal = !addPostModal">
                Add New Post +
            </v-btn>
        </v-row>
        <v-dialog v-model="addPostModal" width="700">
            <v-card>
                <v-card-text>
                    <VTextField v-model="postData.title" label="Title"></VTextField>
                    <VTextField v-model="postData.subtitle" label="Subtitle"></VTextField>
                    <VTextarea v-model="postData.content" label="Content"></VTextarea>
                    <VBtn color="primary">Publish Post</VBtn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useFetch } from '@vueuse/core';
import { IPostData } from '@/interface/IContent';

let postData = reactive<IPostData>({ content: '', title: '', subtitle: '' })
let addPostModal = ref(false)

const { data, error, isFetching } = useFetch(`${import.meta.env.VITE_BASE_URL}posts`)


</script>