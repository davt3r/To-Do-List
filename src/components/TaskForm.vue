<template>
  <div class="task-form">
    <input v-model="newTask" @keyup.enter="submitTask" placeholder="Agregar una nueva tarea" />
    <input
      v-model="newDescription"
      @keyup.enter="submitTask"
      placeholder="Agregar una descripción"
    />
    <select v-model="taskStatus">
      <option value="todo">Por hacer</option>
      <option value="inProgress">En progreso</option>
      <option value="done">Finalizada</option>
    </select>
    <select v-model="taskCategory">
      <option value="personal">Personal</option>
      <option value="trabajo">Trabajo</option>
      <option value="todo">Todo</option>
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
      taskStatus: 'todo',
      taskCategory: 'personal'
    }
  },
  methods: {
    submitTask() {
      if (this.newTask.trim() !== '') {
        const newTask = {
          text: this.newTask,
          description: this.newDescription,
          status: this.taskStatus,
          category: this.taskCategory,
          completed: false
        }
        console.log(newTask, 'TaskForm submitTask')

        this.$emit('task-added', newTask)

        this.newTask = ''
        this.newDescription = ''
        this.taskStatus = 'todo'
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
