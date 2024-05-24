<template>
  <div class="task-form">
    <input v-model="newTask" @keyup.enter="submitTask" placeholder="Agregar una nueva tarea" />
    <input
      v-model="newDescription"
      @keyup.enter="submitTask"
      placeholder="Agregar una descripción"
    />
    <label for="completed-checkbox">Completada:</label>
    <input type="checkbox" id="completed-checkbox" v-model="completed" />
    <select v-model="taskCategory">
      <option value="todas">Todo</option>
      <option value="personal">Personal</option>
      <option value="trabajo">Trabajo</option>
    </select>
    <button @click="submitTask">Agregar</button>
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
      }
    }
  }
}
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.task-form input,
.task-form select,
.task-form textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 600px;
}
.task-form button {
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}
.task-form button:hover {
  background-color: #0056b3;
}
</style>
