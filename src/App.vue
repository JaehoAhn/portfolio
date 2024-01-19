<script setup>
import HeaderBar from "./components/HeaderBar.vue"
import IndexPage from "./components/IndexPage.vue"
</script>

<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>

  </div>
</template>

<style scoped>

</style>