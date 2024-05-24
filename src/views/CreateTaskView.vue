<template>
  <div class="create-task-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar />
      <TaskForm @task-added="addTask" />
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import Sidebar from '../components/Sidebar.vue'
import TaskForm from '../components/TaskForm.vue'

export default {
  components: {
    HeaderTitle,
    Sidebar,
    TaskForm
  },
  methods: {
    addTask(task) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || {
        todo: [],
        inProgress: [],
        done: []
      }
      console.log(
        JSON.parse(localStorage.getItem('tasks')),
        'Tareas en localStorage antes de agregar una nueva tarea'
      )
      console.log(task, 'Nueva tarea recibida')
      console.log(task.status, 'Estado de la nueva tarea')

      // Distribuir la tarea en la columna correspondiente
      switch (task.status) {
        case 'todo':
          tasks.todo.push(task)
          break
        case 'inProgress':
          tasks.inProgress.push(task)
          break
        case 'done':
          tasks.done.push(task)
          break
        default:
          console.error('Estado de tarea no válido:', task.status)
      }

      localStorage.setItem('tasks', JSON.stringify(tasks))
      console.log(
        JSON.parse(localStorage.getItem('tasks')),
        'Tareas en localStorage después de agregar una nueva tarea'
      )
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
.create-task-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  display: flex;
  flex: 1;
}
</style>
