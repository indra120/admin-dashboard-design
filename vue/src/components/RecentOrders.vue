<script setup>
import Order from './Order.vue'

const orders = [
  {
    name: 'JavaScript Tutorial',
    number: '85743',
    paymentStatus: 'Due',
    status: 'Pending',
  },
  {
    name: 'CSS Full Course',
    number: '97245',
    paymentStatus: 'Refunded',
    status: 'Declined',
  },
  {
    name: 'Flex-Box Tutorial',
    number: '36452',
    paymentStatus: 'Paid',
    status: 'Active',
  },
]
</script>

<template>
  <div class="recent-orders">
    <h2>Recent Orders</h2>

    <table>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course Number</th>
          <th>Payment</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <Order
          v-for="v in orders"
          :key="v.number"
          :name="v.name"
          :number="v.number"
          :payment-status="v.paymentStatus"
          :status="v.status"
        />
      </tbody>
    </table>
    <a href="#">Show All</a>
  </div>
</template>
