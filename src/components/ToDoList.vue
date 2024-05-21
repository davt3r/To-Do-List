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
            <span :class="{ completed: task.completed }">{{ task.text }}</span>
            <button @click="removeTask(index)">Eliminar</button>
          </li>
        </ul>
      </aside>
      <main class="main-content">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Agregar una nueva tarea" />
        <button @click="addTask">Agregar</button>
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
        this.tasks.push({ text: this.newTask, completed: false })
        this.newTask = ''
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
  width: 75%;
  padding: 20px;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}

.filters {
  margin-top: 20px;
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

li span {
  flex-grow: 1;
}
</style>
