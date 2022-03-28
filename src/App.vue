<template>
  <TheNavBar/>
  <router-view/>
</template>
<style >
body {
    padding-top: 65px;
}
</style>
<script>
import TheNavBar from '@/components/common/TheNavBar'
export default {
  name: 'App',
  components: {
    TheNavBar
  }
}
</script>
