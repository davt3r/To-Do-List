<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <div class="tasks">
      <div class="task" v-for="(task, index) in tasks" :key="index">
        <h3>{{ task.text }}</h3>
        <p>{{ task.description }}</p>
      </div>
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

.task {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task h3 {
  margin: 0 0 5px;
  font-size: 18px;
  font-weight: bold;
}

.task p {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
