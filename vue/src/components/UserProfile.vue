<script setup>
import logo from '@/assets/vue.svg'
</script>

<template>
  <div class="user-profile">
    <div>
      <img src="https://avatars.githubusercontent.com/u/70420074?v=4" />
      <h2>Ryzenix</h2>
      <p>Full-Stack Web Developer</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-profile {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }
}

img {
  width: 11rem;
  height: auto;
  margin-bottom: 0.8rem;
  border-radius: 50%;
}

h2 {
  margin-bottom: 0.2rem;
}
</style>
