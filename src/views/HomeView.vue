<template>
  <div>
    <TodoList />
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList: ToDoList
  }
}
</script>

<style scoped></style>
