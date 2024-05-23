<template>
  <div class="task-form">
    <input v-model="newTask" @keyup.enter="submitTask" placeholder="Agregar una nueva tarea" />
    <input
      v-model="newDescription"
      @keyup.enter="submitTask"
      placeholder="Agregar una descripción"
    />
    <button @click="submitTask">Agregar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      newDescription: ''
    }
  },
  methods: {
    submitTask() {
      if (this.newTask.trim() !== '') {
        console.log('Nueva tarea:', this.newTask, this.newDescription)
        this.$emit('task-added', {
          text: this.newTask,
          description: this.newDescription,
          completed: false
        })
        this.newTask = ''
        this.newDescription = ''
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
