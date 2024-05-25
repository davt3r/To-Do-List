<template>
  <div class="task" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
    <div v-if="isEditing">
      <input v-model="editedText" placeholder="Edit task text" />
      <input v-model="editedDescription" placeholder="Edit task description" />
      <button @click.stop="saveEdit">Save</button>
      <button @click.stop="deleteTask">Delete</button>
    </div>
    <div v-else @click="toggleEditMode">
      <h3>{{ task.text }}</h3>
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    taskIndex: Number,
    columnType: String
  },
  data() {
    return {
      isEditing: false,
      editedText: this.task.text,
      editedDescription: this.task.description
    }
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing
    },
    saveEdit() {
      this.$emit('edit-task', {
        index: this.taskIndex,
        column: this.columnType,
        updatedTask: {
          text: this.editedText,
          description: this.editedDescription,
          completed: this.task.completed
        }
      })
      this.isEditing = false
    },
    deleteTask() {
      this.$emit('delete-task', {
        index: this.taskIndex,
        column: this.columnType
      })
      this.isEditing = false
    },
    handleDragStart(event) {
      event.dataTransfer.setData('text/plain', this.taskIndex)
      event.dataTransfer.setData('columnType', this.columnType)
      event.dataTransfer.effectAllowed = 'move'
    },
    handleDragEnd() {}
  }
}
</script>

<style scoped>
.task {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.task h3 {
  margin: 0 0 5px;
  font-size: 18px;
  font-weight: bold;
}

.task p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.task input {
  width: calc(100% - 20px);
  margin-bottom: 10px;
  padding: 5px;
}

.task button {
  margin-right: 5px;
}

.task.dragging {
  opacity: 0.5;
}
</style>
