<template>
  <div class="task-column" @dragover.prevent @drop="handleDrop($event)">
    <h2 class="column-title">{{ title }}</h2>
    <div
      v-for="(task, index) in tasks"
      :key="index"
      class="task-item"
      draggable="true"
      @dragstart="handleDragStart($event, index)"
    >
      <div v-if="isEditing(index)" class="task-edit-form">
        <label for="edit-task-title"><strong>Título:</strong></label>
        <input
          id="edit-task-title"
          v-model="task.text"
          placeholder="Editar tarea"
          class="input-field"
        />

        <label for="edit-task-description"><strong>Descripción:</strong></label>
        <input
          id="edit-task-description"
          v-model="task.description"
          placeholder="Editar descripción"
          class="input-field"
        />

        <div class="completed-section">
          <strong>Completada:</strong>
          <input
            type="checkbox"
            id="edit-task-completed"
            v-model="task.completed"
            class="checkbox"
          />
        </div>

        <div class="buttons">
          <button @click="saveEdit(index, columnType)" class="button save-button">Guardar</button>
          <button @click="cancelEdit" class="button cancel-button">Cancelar</button>
        </div>
      </div>
      <div v-else class="task-content">
        <div class="task-details">
          <div class="task-text"><strong>Título:</strong> {{ task.text }}</div>
          <div class="task-description"><strong>Descripción:</strong> {{ task.description }}</div>
          <div class="task-completed">
            <strong>Completada:</strong> <input type="checkbox" v-model="task.completed" disabled />
          </div>
        </div>
        <div class="buttons">
          <button @click="startEdit(index)" class="button edit-button">Editar</button>
          <button
            @click="$emit('delete-task', { index, column: columnType })"
            class="button delete-button"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tasks: Array,
    columnType: String
  },
  data() {
    return {
      editingIndex: null,
      originalTask: null
    }
  },
  methods: {
    isEditing(index) {
      return this.editingIndex === index
    },
    startEdit(index) {
      this.editingIndex = index
      this.originalTask = { ...this.tasks[index] }
    },
    saveEdit(index, column) {
      this.$emit('edit-task', { index, column, updatedTask: this.tasks[index] })
      this.editingIndex = null
    },
    cancelEdit() {
      this.$set(this.tasks, this.editingIndex, this.originalTask)
      this.editingIndex = null
    },
    handleDragStart(event, index) {
      console.log('Drag start:', index)
      event.dataTransfer.setData('index', index)
      event.dataTransfer.setData('column', this.columnType)
    },
    handleDrop(event) {
      event.preventDefault()
      const oldIndex = event.dataTransfer.getData('index')
      const oldColumn = event.dataTransfer.getData('column')
      console.log('Drop in column', this.columnType)
      if (oldIndex && oldColumn !== this.columnType) {
        this.$emit('move-task', { newIndex: null, oldIndex, oldColumn, newColumn: this.columnType })
      }
    }
  }
}
</script>

<style scoped>
.task-column {
  margin: 0 8px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
}

.task-item {
  background-color: #e3f2fd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.task-edit-form {
  display: flex;
  flex-direction: column;
}

.task-content {
  display: flex;
  flex-direction: column;
}

.task-details {
  margin-bottom: 15px;
}

.task-details > * {
  margin-bottom: 10px;
}

.completed-section {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.buttons button {
  width: 40%;
  padding: 12px 20px;
  font-size: 15px;
}

.buttons button.cancel-button {
  background-color: #dc3545;
}

.buttons button.delete-button {
  background-color: #dc3545;
}

.buttons button:hover {
  background-color: #585858;
}

.buttons button + button:hover {
  background-color: #c82333;
}

.input-field {
  padding: 10px;
  margin-bottom: 15px;
  font-size: 18px;
}

.checkbox {
  margin-top: 5px;
}

.task-text,
.task-description,
.task-completed {
  font-weight: bold;
}
.column-title {
  font-size: 1.3em;
  font-weight: bold;
  color: #3a3a3a;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 2px solid #3a3a3a;
  padding-bottom: 5px;
}
</style>
