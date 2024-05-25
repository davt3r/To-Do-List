<template>
  <header class="app-header">
    <h1 class="app-title">Lista de Tareas</h1>
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
  font-size: 30px;
  margin: 0;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
