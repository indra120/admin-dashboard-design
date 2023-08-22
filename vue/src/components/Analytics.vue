<script setup>
import AnalyticItem from './AnalyticItem.vue'
</script>

<template>
  <h1>Analytics</h1>
  <div class="analytics">
    <AnalyticItem
      title="Total Sales"
      subTitle="$65,024"
      percentage="+81"
      class="sales"
    />
    <AnalyticItem
      title="Site Visit"
      subTitle="24,981"
      percentage="-48"
      class="visits"
    />
    <AnalyticItem
      title="Searches"
      subTitle="14,147"
      percentage="+21"
      class="searches"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../viewport' as vp;

.analytics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @include vp.desktop {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>

<style>
.sales svg circle {
  stroke: var(--color-success);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.visits svg circle {
  stroke: var(--color-danger);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

.searches svg circle {
  stroke: var(--color-primary);
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}
</style>
