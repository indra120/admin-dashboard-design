<script setup>
defineProps({
  name: String,
  number: Number,
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
