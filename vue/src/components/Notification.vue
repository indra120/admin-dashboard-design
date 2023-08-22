<script setup>
defineProps({
  deactive: Boolean,
  addReminder: Boolean,
  title: String,
  time: String,
})
</script>

<template>
  <div class="notification" :class="{ deactive, 'add-reminder': addReminder }">
    <template v-if="!addReminder">
      <div class="icon">
        <v-icon :name="deactive ? 'md-edit' : 'md-volumeup'" />
      </div>

      <div class="content">
        <div class="info">
          <h3>{{ title }}</h3>
          <small class="text-muted">{{ time }}</small>
        </div>

        <MdMoreVert />
      </div>
    </template>

    <div v-else>
      <v-icon name="md-add" />
      <h3>Add Reminder</h3>
    </div>
  </div>
</template>
