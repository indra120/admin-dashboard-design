<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="container">
    <Sidebar />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 12rem auto 23rem;
}
</style>
