<template>
  <div class="sidebar">
    <div class="sidebar-section">
      <h2 class="sidebar-heading">Filtros</h2>
      <button @click="filterTasks('todas')" class="sidebar-link">Todas</button>
      <button @click="filterTasks(true)" class="sidebar-link">Completadas</button>
      <button @click="filterTasks(false)" class="sidebar-link">Pendientes</button>
    </div>
    <div class="sidebar-section">
      <h2 class="sidebar-heading">Navegación</h2>
      <router-link
        v-if="$route.name !== 'home'"
        :to="{ name: 'home' }"
        class="sidebar-link create-link"
        >Home</router-link
      >
      <router-link
        v-if="$route.name !== 'create'"
        :to="{ name: 'create' }"
        class="sidebar-link create-link"
        >Crear Tarea</router-link
      >
    </div>
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
  width: 14.5em;
  background: #f0f0f0;
  color: #333;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.sidebar-section {
  margin-bottom: 20px;
}

.sidebar-heading {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5px;
  padding: 13px;
}

.sidebar-link {
  display: block;
  font-size: 1em;
  padding: 17px;
  color: #333;
  text-decoration: none;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;
}

.sidebar-link:hover {
  background-color: #ddd;
}

.create-link {
  width: calc(100% - 34px);
  font-size: 1.1em;
}
</style>
