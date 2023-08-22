<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Analytics from './components/Analytics.vue'
import NewUser from './components/NewUser.vue'
import RecentOrders from './components/RecentOrders.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
    <Sidebar />

    <main>
      <Analytics />
      <NewUser />
      <RecentOrders />
    </main>

    <div class="right-section">
      <Navbar />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 12rem auto 23rem;
}

main {
  margin-top: 1.4rem;
}
</style>
