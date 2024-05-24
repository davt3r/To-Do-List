<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <div class="tasks">
      <TaskItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :taskIndex="index"
        :columnType="columnType"
        @edit-task="editTask"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  components: {
    TaskItem
  },
  props: {
    title: String,
    tasks: Array,
    columnType: String
  },
  methods: {
    editTask({ index, column, updatedTask }) {
      this.$emit('edit-task', { index, column, updatedTask })
    },
    deleteTask({ index, column }) {
      this.$emit('delete-task', { index, column })
    }
  }
}
</script>

<style scoped>
.column {
  flex: 1;
  margin: 0 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100vh;
  overflow-y: auto;
}

.tasks {
  margin-top: 8px;
}
</style>
