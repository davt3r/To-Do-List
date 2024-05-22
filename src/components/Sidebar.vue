<template>
  <div class="sidebar">
    <router-link :to="{ name: 'home' }" class="sidebar-link">Lista</router-link>
    <router-link :to="{ name: 'create' }" class="sidebar-link">Crear Tarea</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-link {
  display: block;
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.sidebar-link:hover {
  color: #007bff;
}
</style>
