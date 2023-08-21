<script setup>
import logo from '@/assets/vue.svg'
</script>

<template>
  <div class="toggle">
    <section class="logo">
      <img :src="logo" alt="" />
      <h2>Vue<span class="primary">JS</span></h2>
    </section>

    <button class="close">
      <v-icon name="md-close" />
    </button>
  </div>
</template>
