<template>
  <div class="home-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar />
      <div class="task-columns">
        <TaskColumn
          title="Por Hacer"
          :tasks="tasks.todo"
          columnType="todo"
          @edit-task="editTask"
          @delete-task="deleteTask"
        />
        <TaskColumn
          title="En proceso"
          :tasks="tasks.inProgress"
          columnType="inProgress"
          @edit-task="editTask"
          @delete-task="deleteTask"
        />
        <TaskColumn
          title="Completadas"
          :tasks="tasks.done"
          columnType="done"
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
        todo: [],
        inProgress: [],
        done: []
      }
    }
  },
  methods: {
    loadTasks() {
      const storedTasks = localStorage.getItem('tasks')
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks)
        console.log('Tareas cargadas desde localStorage:', this.tasks)
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
  min-width: 300px;
  margin: 0 8px;
}
</style>
