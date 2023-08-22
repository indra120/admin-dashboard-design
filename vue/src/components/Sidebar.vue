<script setup>
import SidebarLink from './SidebarLink.vue'
import SidebarToggle from './SidebarToggle.vue'
</script>

<template>
  <aside>
    <SidebarToggle />

    <section class="sidebar">
      <SidebarLink title="Dashboard" icon="dashboard" />
      <SidebarLink title="Users" icon="person-outlined" />
      <SidebarLink title="History" icon="receiptlong" />
      <SidebarLink title="Analytics" icon="insights" active />
      <SidebarLink title="Tickets" icon="mailoutline">
        <span class="message-count">69</span>
      </SidebarLink>
      <SidebarLink title="Sale List" icon="inventory" />
      <SidebarLink title="Reports" icon="reportgmailerrorred" />
      <SidebarLink title="Settings" icon="settings" />
      <SidebarLink title="New Login" icon="add" />
      <SidebarLink title="Logout" icon="logout" />
    </section>
  </aside>
</template>

<style scoped lang="scss">
@use '../viewport' as vp;

aside {
  height: 100vh;

  @include vp.mobile {
    position: fixed;
    background-color: var(--color-white);
    width: 15rem;
    z-index: 3;
    box-shadow: 1rem 3rem 4rem var(--color-light);
    height: 100vh;
    left: -100%;
    display: none;
    animation: showMenu 0.4s ease forwards;

    @keyframes showMenu {
      to {
        left: 0;
      }
    }
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 15px;
  height: 88vh;
  position: relative;
  top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }
}

.message-count {
  background-color: var(--color-primary);
  padding: 2px 6px;
  color: var(--color-white);
  font-size: 11px;
  border-radius: var(--border-radius-1);
}
</style>
