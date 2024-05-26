// src/composables/useTasks.js
import { ref, onMounted } from 'vue'

export function useTasks() {
  const tasks = ref({
    todas: [],
    personal: [],
    trabajo: []
  })
  const showCompleted = ref(null)

  const loadTasks = () => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks)
    }
  }

  const editTask = ({ index, column, updatedTask }) => {
    tasks.value[column].splice(index, 1, updatedTask)
    updateLocalStorage()
  }

  const deleteTask = ({ index, column }) => {
    tasks.value[column].splice(index, 1)
    updateLocalStorage()
  }

  const moveTask = ({ newIndex, newColumn, oldIndex, oldColumn }) => {
    const taskToMove = tasks.value[oldColumn][oldIndex]
    taskToMove.column = newColumn
    tasks.value[oldColumn].splice(oldIndex, 1)
    tasks.value[newColumn].splice(newIndex, 0, taskToMove)
    updateLocalStorage()
  }

  const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  const handleFilterChanged = (completed) => {
    showCompleted.value = completed !== 'todas' ? completed : null
    printFilteredTasks()
  }

  const filteredTasks = (category) => {
    if (showCompleted.value === null) {
      return tasks.value[category]
    } else if (showCompleted.value === true || showCompleted.value === false) {
      return tasks.value[category].filter((task) => task.completed === showCompleted.value)
    }
  }

  const printFilteredTasks = () => {
    console.log(tasks.value)
    console.log(
      'Tareas filtradas:',
      Object.keys(tasks.value).reduce((acc, category) => {
        acc[category] = filteredTasks(category)
        return acc
      }, {})
    )
  }

  onMounted(() => {
    loadTasks()
  })

  return {
    tasks,
    showCompleted,
    loadTasks,
    editTask,
    deleteTask,
    moveTask,
    updateLocalStorage,
    handleFilterChanged,
    filteredTasks,
    printFilteredTasks
  }
}
