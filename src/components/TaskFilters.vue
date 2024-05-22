<template>
  <div class="filters">
    <span @click="setFilter('all')">Todas</span>
    <span @click="setFilter('active')">Activas</span>
    <span @click="setFilter('completed')">Completadas</span>
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
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.filters span {
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}
.filters span:hover {
  color: #007bff;
}
</style>
