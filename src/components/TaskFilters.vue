<template>
  <div class="filters">
    <button @click="setFilter('all')">Todas</button>
    <button @click="setFilter('active')">Activas</button>
    <button @click="setFilter('completed')">Completadas</button>
  </div>
</template>

<script>
export default {
  methods: {
    setFilter(filter) {
      this.$emit('set-filter', filter)
    }
  }
}
</script>

<style scoped>
.filters {
  margin-top: 20px;
}
.filters button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
}
.filters button:hover {
  background-color: #0056b3;
}
</style>
