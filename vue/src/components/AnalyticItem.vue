<script setup>
defineProps({
  title: String,
  subTitle: String,
  percentage: String,
})
</script>

<template>
  <div class="analytic-item">
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

<style scoped lang="scss">
.analytic-item {
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }
}

.status {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin-left: 0.6rem;
  font-size: 1rem;
}

.progress {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

.percentage {
  position: absolute;
  top: -3px;
  left: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

svg {
  width: 7rem;
  height: 7rem;
}

circle {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);
}
</style>
