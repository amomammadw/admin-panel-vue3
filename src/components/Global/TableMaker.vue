<template>
    <v-table>
        <thead>
            <tr>
                <th v-for="headerItem, headerIndex in headerItems" :key="headerIndex">
                    {{ headerItem }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tableItem in props.items">
                <td v-for="item in Object.values(tableItem)">{{ item }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
const props = defineProps(['items'])
const headersList = props.items[0]
const headerItems = Object.keys(headersList)
</script>