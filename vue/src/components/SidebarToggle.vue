<script setup>
import logo from '@/assets/vue.svg'
</script>

<template>
  <div class="toggle">
    <section class="logo">
      <img :src="logo" alt="" />
      <h2>Vue<span class="success">JS</span></h2>
    </section>

    <button class="close">
      <v-icon name="md-close" />
    </button>
  </div>
</template>

<style scoped>
.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.4rem;
}

.logo {
  display: flex;
  gap: 0.5rem;
}

img {
  width: 2rem;
  height: 2rem;
}

.close {
  padding-right: 1rem;
  display: none;
}
</style>
