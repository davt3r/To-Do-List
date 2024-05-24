<template>
  <div class="home-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar @filter-changed="handleFilterChanged" />
      <div class="task-columns">
        <TaskColumn
          v-for="(category, categoryName) in tasks"
          :key="categoryName"
          :title="categoryName"
          :tasks="filteredTasks(categoryName)"
          :columnType="categoryName"
          @edit-task="editTask"
          @delete-task="deleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import Sidebar from '../components/Sidebar.vue'
import TaskColumn from '../components/TaskColumns.vue'

export default {
  components: {
    HeaderTitle,
    Sidebar,
    TaskColumn
  },
  data() {
    return {
      tasks: {
        todas: [],
        personal: [],
        trabajo: []
      },
      showCompleted: null
    }
  },
  methods: {
    loadTasks() {
      const storedTasks = localStorage.getItem('tasks')
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks)
      }
    },
    editTask({ index, column, updatedTask }) {
      this.tasks[column].splice(index, 1, updatedTask)
      this.updateLocalStorage()
    },
    deleteTask({ index, column }) {
      this.tasks[column].splice(index, 1)
      this.updateLocalStorage()
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    handleFilterChanged(completed) {
      this.showCompleted = completed !== 'todas' ? completed : null
      this.printFilteredTasks()
    },
    filteredTasks(category) {
      if (this.showCompleted === null) {
        return this.tasks[category]
      } else if (this.showCompleted === true || this.showCompleted === false) {
        return this.tasks[category].filter((task) => task.completed === this.showCompleted)
      }
    },

    printFilteredTasks() {}
  },
  created() {
    this.loadTasks()
  }
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  display: flex;
  flex: 1;
}

.task-columns {
  display: flex;
  flex: 1;
}

.task-columns > * {
  flex: 1;
  min-width: 300px;
  margin: 0 8px;
}
</style>
