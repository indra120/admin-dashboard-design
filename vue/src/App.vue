<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Analytics from './components/Analytics.vue'
import NewUser from './components/NewUser.vue'
import RecentOrders from './components/RecentOrders.vue'
import Navbar from './components/Navbar.vue'
import UserProfile from './components/UserProfile.vue'
import Reminders from './components/Reminders.vue'
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
      <UserProfile />
      <Reminders />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './viewport' as vp;

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

.right-section {
  margin-top: 1.4rem;
}

@include vp.desktop {
  .container {
    width: 95%;
    grid-template-columns: 7rem auto 23rem;
  }
}

@include vp.mobile {
  .container {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 0 var(--padding-1);
  }

  main {
    margin-top: 8rem;
    padding: 0 1rem;
  }

  .right-section {
    width: 94%;
    margin: 0 auto 4rem;
  }
}
</style>
