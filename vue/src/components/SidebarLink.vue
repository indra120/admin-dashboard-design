<script setup>
defineProps({
  href: {
    type: String || URL,
    default: "#"
  },
  title: String,
  active: Boolean,
  icon: String,
})
</script>

<template>
  <a :href="href" class="link" :class="active">
    <v-icon :name="'md-' + icon" />
    <h3>{{ title }}</h3>
    <slot />
  </a>
</template>
