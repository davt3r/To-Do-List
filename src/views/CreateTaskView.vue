<template>
  <div class="create-task-view">
    <HeaderTitle />
    <div class="content">
      <Sidebar />
      <main class="main-content">
        <TaskForm @add-task="addTask" />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import Sidebar from '../components/Sidebar.vue'
import TaskForm from '../components/TaskForm.vue'

export default {
  components: {
    Sidebar,
    TaskForm,
    HeaderTitle
  },
  methods: {
    addTask() {}
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

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar a {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  color: #007bff;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 250px;
}
</style>
