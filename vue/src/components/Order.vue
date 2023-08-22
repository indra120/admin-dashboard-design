<script setup>
defineProps({
  name: String,
  number: String,
  paymentStatus: String,
  status: String,
})
</script>

<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ number }}</td>
    <td>{{ paymentStatus }}</td>
    <td
      :class="
        status === 'Declined'
          ? 'danger'
          : status === 'Pending'
          ? 'warning'
          : 'primary'
      "
    >
      {{ status }}
    </td>
    <td class="primary">Details</td>
  </tr>
</template>

<style scoped>
td {
  height: 2.8rem;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
}

tr:last-child td {
  border: none;
}
</style>
