<template>
  <div class="task-columns">
    <div class="column">
      <h2>{{ todoTitle }}</h2>
      <div class="tasks">
        <slot name="todo">
          <p v-for="task in tasks.todo" :key="task.id">{{ task.text }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
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
  watch: {
    tasks: {
      handler: function (newTasks) {
        localStorage.setItem(`${this.title}_tasks`, JSON.stringify(newTasks))
      },
      deep: true
    }
  },
  created() {
    const storedTasks = localStorage.getItem(`${this.title}_tasks`)
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks)
    }
  }
}
</script>

<style scoped>
.task-columns {
  display: flex;
}

.column {
  flex: 1;
  margin: 0 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.tasks {
  margin-top: 8px;
}

.tasks p {
  margin: 4px 0;
}
</style>
