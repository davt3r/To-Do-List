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
        todas: [],
        personal: [],
        trabajo: []
      }

      switch (task.category) {
        case 'todas':
          tasks.todas.push(task)
          break
        case 'personal':
          tasks.personal.push(task)
          break
        case 'trabajo':
          tasks.trabajo.push(task)
          break
        default:
      }

      localStorage.setItem('tasks', JSON.stringify(tasks))

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
