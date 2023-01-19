<template>
    <v-list color="primary">
        <template v-for="linkItem, linkIndex in navLinks" :key="linkIndex">
            <v-list-item v-if="!linkItem.subMenu" :to="linkItem.link">
                <template #prepend>
                    <v-icon>{{ linkItem.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ linkItem.text }}</v-list-item-title>
            </v-list-item>
        </template>


    </v-list>
</template>

<script setup lang="ts">
import { ISideNavLinks } from '@/interface/IGlobal'


// Static Data
const navLinks: ISideNavLinks[] = [
    { text: 'Home', link: '/', icon: 'mdi-home' },
    { text: 'Charts', link: '/charts', icon: 'mdi-chart-bar' },
    { text: 'Posts', link: '/posts', icon: 'mdi-post' },
    { text: 'Pages', link: '/pages', icon: 'mdi-page-layout-body' },
    { text: 'Users', link: '/users', icon: 'mdi-account-multiple' },
    { text: 'Settings', link: '/settings', icon: 'mdi-cog' },
    { text: 'Orders', link: '/orders', icon: 'mdi-store' },
    { text: 'Tickets', link: '/tickets', icon: 'mdi-face-agent', },
]
</script>