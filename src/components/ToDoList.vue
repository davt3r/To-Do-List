<template>
  <div class="todo-app">
    <div class="content">
      <aside class="sidebar">
        <TaskFilters @set-filter="setFilter" />
      </aside>
      <main class="main-content">
        <router-link to="/create" class="create-task-button">Crear Tarea</router-link>
        <TaskList
          :tasks="filteredTasks"
          @remove-task="removeTask"
          @update-tasks="updateLocalStorage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskFilters from './TaskFilters.vue'

export default {
  components: {
    TaskList,
    TaskFilters
  },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
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
    addTask(task) {
      this.tasks.push(task)
      this.updateLocalStorage()
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      this.updateLocalStorage()
    },
    setFilter(filter) {
      this.filter = filter
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

<style scoped>
.todo-app {
  display: flex;
  height: 100%;
  font-family: Arial, sans-serif;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar {
  width: 15%;
  background-color: #d3d3d3;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.main-content {
  width: 85%;
  padding: 20px;
  overflow-y: auto;
}

.create-task-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 20px;
}
.create-task-button:hover {
  background-color: #0056b3;
}
</style>
