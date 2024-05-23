<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <div class="tasks">
      <p v-for="(task, index) in tasks" :key="index">{{ task.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tasks: Array
  },
  watch: {
    tasks(newTasks) {
      console.log(`Tareas en ${this.title}:`, newTasks)
    }
  },
  created() {
    console.log(`Componente ${this.title} creado con tareas:`, this.tasks)
  }
}
</script>

<style scoped>
.column {
  flex: 1;
  margin: 0 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100vh;
  overflow-y: auto;
}

.tasks {
  margin-top: 8px;
}

.tasks p {
  margin: 4px 0;
}
</style>
