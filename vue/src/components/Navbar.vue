<script setup>
import { ref } from 'vue'

const darkMode = ref(false)

function openSidebar() {
  document.querySelector('aside').style.display = 'block'
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode-variables')
  darkMode.value = !darkMode.value
}
</script>

<template>
  <div class="navbar">
    <button @click="openSidebar">
      <v-icon name="md-menu" />
    </button>

    <div class="dark-mode" @click="toggleDarkMode">
      <v-icon name="md-lightmode" :class="{ active: !darkMode }" />
      <v-icon name="md-darkmode" :class="{ active: darkMode }" />
    </div>

    <div class="profile">
      <div class="info">
        <p>Hey, <b>Ryzen</b></p>
        <small class="text-muted">Admin</small>
      </div>

      <div class="profile-photo">
        <img src="https://avatars.githubusercontent.com/u/70420074?v=4" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../viewport' as vp;

.navbar {
  display: flex;
  justify-content: end;
  gap: 2rem;

  button {
    display: none;
  }
}

.profile {
  display: flex;
  gap: 2rem;
  text-align: right;

  .profile-photo {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
  }
}

.dark-mode {
  background-color: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  width: 4.2rem;
  cursor: pointer;
  border-radius: var(--border-radius-1);

  svg {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.active {
  background-color: var(--color-primary);
  color: white;
  border-radius: var(--border-radius-1);
}

@include vp.mobile {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    background-color: var(--color-white);
    padding: 0 var(--padding-1);
    height: 4.6rem;
    width: 100%;
    z-index: 2;
    box-shadow: 0 1rem 1rem var(--color-light);
    margin: 0;

    button {
      display: inline-block;
      background-color: transparent;
      cursor: pointer;
      color: var(--color-dark);
      position: absolute;
      left: 1rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  .dark-mode {
    width: 4.4rem;
    position: absolute;
    left: 66%;
  }

  .profile .info {
    display: none;
  }
}
</style>
