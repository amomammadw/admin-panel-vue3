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
                    <VAlert color="success" closable variant="tonal" class="mb-5">error</VAlert>
                    <VTextField v-model="postData.title" label="Title"></VTextField>
                    <VTextField v-model="postData.subtitle" label="Subtitle"></VTextField>
                    <VTextarea v-model="postData.content" label="Content"></VTextarea>
                    <VBtn color="primary" @click="addPost">Publish Post</VBtn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { IPostData } from '@/interface/IContent';
import useApi from '@/composables/useApi';

let postData = reactive<IPostData>({ content: '', title: '', subtitle: '' })
let addPostModal = ref(false)

const addPost = async () => {
    const { data, error, isFetching } = await useApi('posts')
    console.log(error.value);
}

</script>