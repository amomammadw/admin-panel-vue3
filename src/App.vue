<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <SidebarItems />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Panel</v-toolbar-title>

      <UserMenu class="d-flex justify-end mr-3" />
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
import SidebarItems from './components/Layout/SidebarItems.vue';
import UserMenu from './components/Layout/UserMenu.vue';

// Variables
let drawer = ref()
</script>
