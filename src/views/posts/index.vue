<template>
    <div>
        <v-row class="ma-0" justify="space-between">
            <h1>Posts</h1>
            <v-btn color="primary">
                Add New Post +
            </v-btn>
        </v-row>
        <!-- <table-maker v-if="!isFetching" :items="JSON.parse(data)" /> -->
        <v-alert v-if="isFetching" color="info">Loading ...</v-alert>
        <v-alert v-else-if="error" color="error">Error : {{ error }}</v-alert>
        <div v-else>{{ data }}</div>
    </div>
</template>

<script setup lang="ts">
import TableMaker from '@/components/Global/TableMaker.vue';
import useApi from '@/composables/useApi';

const { data, isFetching, error } = useApi('posts')
</script>