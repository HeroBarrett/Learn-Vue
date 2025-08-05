<template>
  <div>
    <SchoolName name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
  import SchoolName from './components/SchoolName.vue'
  export default {
    name:'App',
    components: {
      SchoolName
    },
  }
</script>

<style>

</style>