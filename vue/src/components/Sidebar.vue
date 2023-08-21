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
      <SidebarLink title="Analytics" icon="insights" />
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
