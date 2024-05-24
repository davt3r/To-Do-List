<template>
  <div class="home-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar />
      <div class="task-columns">
        <TaskColumn title="To Do" :tasks="tasks.todo" />
        <TaskColumn title="In Progress" :tasks="tasks.inProgress" />
        <TaskColumn title="Done" :tasks="tasks.done" />
      </div>
      <TaskForm @task-added="addTaskToTodo" />
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import Sidebar from '../components/Sidebar.vue'
import TaskColumn from '../components/TaskColumns.vue'
import TaskForm from '../components/TaskForm.vue'

export default {
  components: {
    HeaderTitle,
    Sidebar,
    TaskColumn,
    TaskForm
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
    addTaskToTodo(task) {
      console.log('Tarea agregada a To Do:', task)
      this.tasks.todo.push(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      console.log('Tareas To Do:', this.tasks.todo)
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
