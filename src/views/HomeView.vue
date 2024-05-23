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
    addTaskToTodo(task) {
      this.tasks.todo.push(task)
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
}
</style>
