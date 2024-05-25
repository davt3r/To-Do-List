<template>
  <div class="task-form-container">
    <div class="task-form">
      <h2 class="form-title">Crear Nueva Tarea</h2>
      <label for="title-input" class="input-label">Título:</label>
      <input
        v-model="newTask"
        @keyup.enter="submitTask"
        placeholder="Agregar una nueva tarea"
        id="title-input"
        class="input-field title-input"
      />
      <label for="description-input" class="input-label">Descripción:</label>
      <input
        v-model="newDescription"
        @keyup.enter="submitTask"
        placeholder="Agregar una descripción"
        id="description-input"
        class="input-field description-input"
      />

      <div class="checkbox-container">
        <label for="completed-checkbox" class="input-label">Completada:</label>
        <input type="checkbox" id="completed-checkbox" v-model="completed" />
      </div>
      <label for="task-category" class="input-label">Ámbito:</label>
      <select v-model="taskCategory" id="task-category">
        <option value="todas">Todo</option>
        <option value="personal">Personal</option>
        <option value="trabajo">Trabajo</option>
      </select>
      <button @click="submitTask">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      newDescription: '',
      completed: false,
      taskCategory: 'todas'
    }
  },
  methods: {
    submitTask() {
      if (this.newTask.trim() !== '') {
        const newTask = {
          text: this.newTask,
          description: this.newDescription,
          status: this.completed ? 'done' : 'todo',
          category: this.taskCategory,
          completed: this.completed
        }

        this.$emit('task-added', newTask)

        this.newTask = ''
        this.newDescription = ''
        this.completed = false
        this.taskCategory = 'personal'
      } else {
        alert('La tarea no puede estar vacía.')
      }
    }
  }
}
</script>

<style scoped>
.task-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 40px);
}

.form-title {
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 20px;
}

.input-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 10px;
  width: calc(100% - 40px);
}

.title-input,
.description-input {
  margin-right: 10px;
  width: calc(50% - 10000px);
}

.task-form {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#completed-checkbox {
  margin-bottom: 3px;
}

.task-form input,
.task-form select,
.task-form button {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  padding-right: 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0px;
}

.task-form button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.task-form button:hover {
  background-color: #0056b3;
}
</style>
