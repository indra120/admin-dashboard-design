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

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.4rem;
  border-radius: 50%;
}
</style>
