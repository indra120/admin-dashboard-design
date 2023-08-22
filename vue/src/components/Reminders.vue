<script setup>
import Notification from './Notification.vue'
</script>

<template>
  <div class="reminders">
    <div class="header">
      <h2>Reminders</h2>
      <v-icon name="md-notificationsnone" />
    </div>

    <Notification title="Workshop" time="08:00 AM - 12:00 PM" />
    <Notification title="Workshop" time="08:00 AM - 12:00 PM" deactive />
    <Notification add-reminder />
  </div>
</template>
