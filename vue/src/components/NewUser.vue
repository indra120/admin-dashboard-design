<script setup>
import NewUserCard from './NewUserCard.vue'

const users = [
  { image: 'images/profile-2.jpg', name: 'Jack', caption: '54 Min Ago' },
  { image: 'images/profile-3.jpg', name: 'Amir', caption: '3 Hours Ago' },
  { image: 'images/profile-4.jpg', name: 'Ember', caption: '6 Hours Ago' },
]
</script>

<template>
  <div class="new-users">
    <h2>New Users</h2>

    <div class="user-list">
      <NewUserCard
        v-for="(user, i) in users"
        :key="i"
        :name="user.name"
        :image="user.image"
        :caption="user.caption"
      />

      <NewUserCard image="images/plus.png" name="More" caption="New User" />
    </div>
  </div>
</template>
