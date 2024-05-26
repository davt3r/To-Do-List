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
import { useTasks } from '../helpers/useTasks'

export default {
  components: {
    HeaderTitle,
    Sidebar,
    TaskColumn
  },
  setup() {
    const {
      tasks,
      showCompleted,
      loadTasks,
      editTask,
      deleteTask,
      moveTask,
      updateLocalStorage,
      handleFilterChanged,
      filteredTasks,
      printFilteredTasks
    } = useTasks()

    return {
      tasks,
      showCompleted,
      loadTasks,
      editTask,
      deleteTask,
      moveTask,
      updateLocalStorage,
      handleFilterChanged,
      filteredTasks,
      printFilteredTasks
    }
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
