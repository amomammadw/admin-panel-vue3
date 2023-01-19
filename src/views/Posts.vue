<template>
    <div>
        <h1>Posts</h1>
        <TableMaker :headers="tableHeaders" :items="tableItems" />
    </div>
</template>

<script setup lang="ts">
import TableMaker from '@/components/Global/TableMaker.vue';

let tableHeaders = [
    { text: 'mmd', value: 'mmd' }
]
let tableItems = [
    { mmd: 'MMDITEM', ali: 'ali', mdmdw: 'mdmdw' },
    { mmd: 'MMDITEM', ali: 'ali', mdmdw: 'mdmdw' },
    { mmd: 'MMDITEM', ali: 'ali', mdmdw: 'mdmdw' },
]

</script>

<style scoped>

</style>