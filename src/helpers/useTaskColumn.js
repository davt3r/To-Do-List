// src/composables/useTaskColumn.js
import { ref } from 'vue'

export function useTaskColumn(initialTasks, columnType) {
  const tasks = ref(initialTasks)
  const editingIndex = ref(null)
  const originalTask = ref(null)

  const isEditing = (index) => editingIndex.value === index

  const startEdit = (index) => {
    editingIndex.value = index
    originalTask.value = { ...tasks.value[index] }
  }

  // eslint-disable-next-line no-unused-vars
  const saveEdit = (index) => {
    editingIndex.value = null
  }

  const cancelEdit = () => {
    tasks.value[editingIndex.value] = originalTask.value
    editingIndex.value = null
  }

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('index', index)
    event.dataTransfer.setData('column', columnType)
  }

  const handleDrop = (event, emit) => {
    event.preventDefault()
    const oldIndex = event.dataTransfer.getData('index')
    const oldColumn = event.dataTransfer.getData('column')
    if (oldIndex && oldColumn !== columnType) {
      emit('move-task', { newIndex: null, oldIndex, oldColumn, newColumn: columnType })
    }
  }

  return {
    tasks,
    editingIndex,
    isEditing,
    startEdit,
    saveEdit,
    cancelEdit,
    handleDragStart,
    handleDrop
  }
}
