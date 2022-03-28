<template>
<li>{{task.id}} {{task.libelle}}</li>
</template>
<script>
export default {
  name: 'TaskListItem',
  props: {
    task: Object
  }

}
</script>
