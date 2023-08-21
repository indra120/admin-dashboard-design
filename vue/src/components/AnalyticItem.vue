<script setup>
defineProps({
  title: String,
  subTitle: String,
  percentage: String,
})
</script>

<template>
  <div>
    <div class="status">
      <div class="info">
        <h3>{{ title }}</h3>
        <h1>{{ subTitle }}</h1>
      </div>
      <div class="progress">
        <svg>
          <circle cx="38" cy="38" r="36"></circle>
        </svg>
        <div class="percentage">
          <p>{{ percentage }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>
