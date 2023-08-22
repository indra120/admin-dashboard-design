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

<style scoped lang="scss">
@use '../viewport' as vp;

.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include vp.desktop {
    flex-basis: 40%;
  }

  @include vp.mobile {
    flex-basis: 35%;
  }
}

img {
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.4rem;
  border-radius: 50%;
}
</style>
