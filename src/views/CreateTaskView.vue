<template>
  <div class="create-task-view">
    <HeaderTitle />
    <div class="content">
      <div class="sidebar-container">
        <Sidebar />
      </div>
      <div class="form-container">
        <TaskForm @task-added="addTask" />
      </div>
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
  justify-content: center;
  align-items: center;
}

.sidebar {
  position: fixed;
  left: 1;
  margin-top: 70px;
}

.form-container {
  padding: 20px;
}

.form-container input,
.form-container select,
.form-container button {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

.form-container button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #0056b3;
}
</style>
