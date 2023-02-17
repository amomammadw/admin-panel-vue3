<template>
    <v-table>
        <thead>
            <tr>
                <th v-for="tableHeaderItem, tableHeaderIndex in tableHeaders" :key="tableHeaderIndex" class="text-left">
                    {{ tableHeaderItem }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['items'])

const tableHeaders = computed(() => {
    const singleRow = props.items[0]
    return Object.keys(singleRow)
})
</script>