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

<style scoped lang="scss">
@use '../viewport' as vp;

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

@include vp.desktop {
  .logo h2 {
    display: none;
  }
}

@include vp.mobile {
  .logo {
    margin-left: 1rem;

    h2 {
      display: inline;
    }
  }

  .close {
    display: inline-block;
    cursor: pointer;
  }
}
</style>
