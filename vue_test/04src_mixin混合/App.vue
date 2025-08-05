<template>
  <div>
    <SchoolName/>
    <hr>
    <StudentName/>
  </div>
</template>

<script>
  import SchoolName from './components/SchoolName.vue'
  import StudentName from './components/StudentName.vue'

  export default {
    name:'App',
    components: {
      StudentName,
      SchoolName
    },
  }
</script>

<style>

</style>