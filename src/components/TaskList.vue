<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.completed" @change="updateLocalStorage" />
      <div>
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <p class="description">{{ task.description }}</p>
      </div>
      <button @click="$emit('remove-task', index)">Eliminar</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: Array
  },
  methods: {
    updateLocalStorage() {
      this.$emit('update-tasks')
    }
  }
}
</script>

<style scoped>
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
