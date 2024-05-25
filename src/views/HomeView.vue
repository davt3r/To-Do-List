<template>
  <div class="home-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar @filter-changed="handleFilterChanged" />
      <div class="task-columns">
        <TaskColumn
          v-for="(tasks, categoryName) in tasks"
          :key="categoryName"
          :title="categoryName"
          :tasks="filteredTasks(categoryName)"
          :columnType="categoryName"
          @edit-task="editTask"
          @delete-task="deleteTask"
          @move-task="moveTask"
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
    moveTask({ newIndex, newColumn, oldIndex, oldColumn }) {
      const taskToMove = this.tasks[oldColumn][oldIndex]
      taskToMove.column = newColumn
      this.tasks[oldColumn].splice(oldIndex, 1)
      this.tasks[newColumn].splice(newIndex, 0, taskToMove)
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
    printFilteredTasks() {
      console.log(this.tasks)
      console.log(
        'Tareas filtradas:',
        Object.keys(this.tasks).reduce((acc, category) => {
          acc[category] = this.filteredTasks(category)
          return acc
        }, {})
      )
    }
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
  width: 20px;
  margin: 20px;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
