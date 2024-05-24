<template>
  <div class="sidebar">
    <router-link :to="{ name: 'create' }" class="sidebar-link">Crear Tarea</router-link>
    <router-link :to="{ name: 'home' }" class="sidebar-link">Lista de Notas</router-link>
    <button @click="filterTasks('todas')" class="sidebar-link">Todas</button>
    <button @click="filterTasks(true)" class="sidebar-link">Completadas</button>
    <button @click="filterTasks(false)" class="sidebar-link">Pendientes</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  methods: {
    filterTasks(completed) {
      this.$emit('filter-changed', completed)
    }
  }
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
