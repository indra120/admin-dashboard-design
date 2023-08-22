<script setup>
defineProps({
  href: {
    type: String || URL,
    default: '#',
  },
  title: String,
  active: Boolean,
  icon: String,
})
</script>

<template>
  <a :href="href" class="link" :class="{ active }">
    <v-icon :name="'md-' + icon" />
    <h3>{{ title }}</h3>
    <slot />
  </a>
</template>

<style scoped lang="scss">
@use '../viewport' as vp;

.link {
  display: flex;
  align-items: center;
  color: var(--color-info-dark);
  height: 3.7rem;
  gap: 1rem;
  position: relative;
  margin-left: 2rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.6rem;
    transition: all 0.3s ease;
  }

  &:last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }

  &:hover {
    color: var(--color-primary);

    svg {
      margin-left: 0.6rem;
    }
  }
}

.active {
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-light);
  margin-left: 0;

  &::before {
    content: '';
    width: 6px;
    height: 18px;
    background-color: var(--color-primary);
  }

  svg {
    color: var(--color-primary);
    margin-left: calc(1rem - 3px);
  }
}

@include vp.desktop {
  h3 {
    display: none;
  }

  .link {
    width: 5.6rem;

    &:last-child {
      position: relative;
      margin-top: 1.8rem;
    }
  }
}

@include vp.mobile {
  h3 {
    display: inline;
  }

  .link {
    width: 100%;
    height: 3.4rem;

    &:last-child {
      position: absolute;
      bottom: 5rem;
    }
  }
}
</style>
