<script setup>
defineProps({
  name: String,
  image: String,
  caption: String,
})
</script>

<template>
  <div class="user-card">
    <img :src="image" />
    <h2>{{ name }}</h2>
    <p>{{ caption }}</p>
  </div>
</template>
