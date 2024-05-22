<template>
  <header class="app-header">
    <h1 class="app-title">To Do List</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderTitle'
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app-title {
  font-weight: bold;
  font-size: 24px;
  margin: 0;
}
</style>
