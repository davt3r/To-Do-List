<template>
  <div class="todo-list">
    <h1>Lista de Tareas</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Agregar una nueva tarea" />
    <button @click="addTask">Agregar</button>

    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Eliminar</button>
      </li>
    </ul>

    <div class="filters">
      <button @click="filter = 'all'">Todas</button>
      <button @click="filter = 'active'">Activas</button>
      <button @click="filter = 'completed'">Completadas</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
      filter: 'all'
    }
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks
      } else if (this.filter === 'active') {
        return this.tasks.filter((task) => !task.completed)
      } else if (this.filter === 'completed') {
        return this.tasks.filter((task) => task.completed)
      }
      return this.tasks
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false })
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
