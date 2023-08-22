<template>
  <div class="navbar">
    <button id="menu-btn">
      <v-icon name="md-menu" />
    </button>

    <div class="dark-mode">
      <v-icon name="md-lightmode" class="active" />
      <v-icon name="md-darkmode" />
    </div>

    <div class="profile">
      <div class="info">
        <p>Hey, <b>Indra</b></p>
        <small class="text-muted">Admin</small>
      </div>

      <div class="profile-photo">
        <img src="https://avatars.githubusercontent.com/u/70420074?v=4" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: end;
  gap: 2rem;

  button {
    display: none;
  }
}

.profile {
  display: flex;
  gap: 2rem;
  text-align: right;

  .profile-photo {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
  }
}

.dark-mode {
  background-color: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  width: 4.2rem;
  cursor: pointer;
  border-radius: var(--border-radius-1);

  svg {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.active {
  background-color: var(--color-primary);
  color: white;
  border-radius: var(--border-radius-1);
}
</style>
