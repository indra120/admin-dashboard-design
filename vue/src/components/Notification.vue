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

        <v-icon name="md-morevert" />
      </div>
    </template>

    <div v-else>
      <v-icon name="md-add" />
      <h3>Add Reminder</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification {
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.7rem;
  padding: 1.4rem var(--card-padding);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  &.deactive .icon {
    background-color: var(--color-danger);
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
}

.icon {
  padding: 0.6rem;
  color: var(--color-white);
  background-color: var(--color-success);
  border-radius: 20%;
  display: flex;
}

.add-reminder {
  background-color: var(--color-white);
  border: 2px dashed var(--color-primary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
}
</style>
