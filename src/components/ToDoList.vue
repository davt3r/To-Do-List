<template>
  <div class="todo-app">
    <div class="content">
      <aside class="sidebar">
        <header>
          <h1>To Do List</h1>
        </header>
        <TaskList
          :tasks="filteredTasks"
          @remove-task="removeTask"
          @update-tasks="updateLocalStorage"
        />
      </aside>
      <main class="main-content">
        <TaskForm @add-task="addTask" />
        <TaskFilters @set-filter="setFilter" />
      </main>
    </div>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'
import TaskFilters from './TaskFilters.vue'

export default {
  components: {
    TaskList,
    TaskForm,
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
  height: 100vh;
  font-family: Arial, sans-serif;
  margin: 0;
}

.content {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 15%;
  background-color: #d3d3d3;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
}

.sidebar header {
  margin-bottom: 20px;
}

.main-content {
  width: 85%;
  padding: 20px;
}
</style>
