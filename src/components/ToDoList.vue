<template>
  <div class="todo-app">
    <div class="content">
      <aside class="sidebar">
        <header>
          <h1>To Do List</h1>
        </header>
        <ul>
          <li v-for="(task, index) in filteredTasks" :key="index">
            <input type="checkbox" v-model="task.completed" @change="updateLocalStorage" />
            <div>
              <span :class="{ completed: task.completed }">{{ task.text }}</span>
              <p class="description">{{ task.description }}</p>
            </div>
            <button @click="removeTask(index)">Eliminar</button>
          </li>
        </ul>
      </aside>
      <main class="main-content">
        <div class="task-form">
          <input v-model="newTask" @keyup.enter="addTask" placeholder="Agregar una nueva tarea" />
          <textarea
            v-model="newDescription"
            @keyup.enter="addTask"
            placeholder="Agregar una descripción"
          ></textarea>
          <button @click="addTask">Agregar</button>
        </div>
        <div class="filters">
          <button @click="filter = 'all'">Todas</button>
          <button @click="filter = 'active'">Activas</button>
          <button @click="filter = 'completed'">Completadas</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      newDescription: '',
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      filter: 'all'
    }
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks
      } else if (this.filter === 'active') {
        return this.tasks.filter((task) => !task.completed)
      } else if (this.filter === 'completed') {
        return this.tasks.filter((task) => task.completed)
      }
      return this.tasks
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, description: this.newDescription, completed: false })
        this.newTask = ''
        this.newDescription = ''
        this.updateLocalStorage()
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      this.updateLocalStorage()
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

<style scoped>
.todo-app {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  margin: 0;
}

.content {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 15%;
  background-color: #d3d3d3;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
}

.sidebar header {
  margin-bottom: 20px;
}

.main-content {
  width: 85%;
  padding: 20px;
}

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

.filters {
  margin-top: 20px;
}

.filters button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
}

.filters button:hover {
  background-color: #0056b3;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}

input[type='checkbox'] {
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li div {
  flex-grow: 1;
}

li span {
  display: block;
}

li .description {
  margin: 0;
  font-size: 12px;
  color: #666;
}
</style>
