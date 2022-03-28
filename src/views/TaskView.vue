<template>
  <div class="container">
    <h1>Mes Taches</h1>
    <TaskList />
  </div>
</template>
<script>
import TaskList from '@/components/Task/TaskList'
export default {
  name: 'TachesView',
  components: {
    TaskList
  }
}
</script>
