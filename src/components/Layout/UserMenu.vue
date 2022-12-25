<template>
    <div>
        <v-btn color="primary">
            <v-icon size="30">mdi-account-circle</v-icon>Howdy, MMD

            <v-menu activator="parent">
                <v-list>
                    <v-list-item v-for="(item, index) in menuItems" :key="index" :value="index">
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-switch inset true-value="dark" false-value="light" v-model="themeStatus" hide-details
                            @change="toggletheme">
                            <template #prepend>Dark Mode</template>
                        </v-switch>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
// Imports
import { ref } from 'vue'
import { ISideNavLinks } from "@/interface/IGlobal";
import { useTheme } from 'vuetify';


// Variables
let themeStatus = ref()
let menuItems: ISideNavLinks[] = [
    {
        text: 'Profile',
        icon: 'mdi-account',
        link: '/profile'
    }
]

const theme = useTheme()

const toggletheme = () => {
    theme.global.name.value = themeStatus.value
}
</script>

<style scoped>

</style>