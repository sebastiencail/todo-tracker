<template>
    <ul>
        <template v-for = "task in getAllTasks" :key = "task.id" >
          <TaskListItem :task='task'/>
        </template>

    </ul>
</template>
<script>
import { mapGetters } from 'vuex'
import TaskListItem from '@/components/Task/TaskListItem'
export default {
  name: 'TaskList',
  components: { TaskListItem },
  data () {
    return {
      taches: [{
        id: 1,
        libelle: 'ma tache 1'
      }]
    }
  },
  mounted () {
    this.$store.dispatch('tasks/readAllTasks')
  },
  computed: {
    ...mapGetters('tasks', {
      getAllTasks: 'getAllTasks'
    })
  }
}
</script>
