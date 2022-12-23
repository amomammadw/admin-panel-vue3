<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list color="primary">
        <v-list-item v-for="linkItem, linkIndex in navLinks" :key="linkIndex" :to="linkItem.link">
          <template #prepend>
            <v-icon>{{ linkItem.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ linkItem.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hamchat Admin Panel</v-toolbar-title>

      <v-switch class="d-flex justify-end mr-3" inset prepend-icon="mdi-theme-light-dark" true-value="dark"
        false-value="light" v-model="themeStatus" hide-details @change="toggletheme"></v-switch>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// Imports
import { ref } from 'vue'
import { ISideNavLinks } from './interface/IGlobal'
import { useTheme } from 'vuetify';

// Variables
let drawer = ref()
let themeStatus = ref()

// Static Data
const navLinks: ISideNavLinks[] = [
  { text: 'Home', link: '/', icon: 'mdi-home' },
  { text: 'Charts', link: '/charts', icon: 'mdi-chart-bar' },
  { text: 'Posts', link: '/posts', icon: 'mdi-post' },
  { text: 'Pages', link: '/pages', icon: 'mdi-page-layout-body' },
  { text: 'Users', link: '/users', icon: 'mdi-account-multiple' },
  { text: 'Settings', link: '/settings', icon: 'mdi-cog' },
  { text: 'Orders', link: '/orders', icon: 'mdi-store' },
]
const theme = useTheme()

const toggletheme = () => {
  theme.global.name.value = themeStatus.value
}
</script>
