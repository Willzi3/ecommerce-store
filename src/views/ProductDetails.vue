<template>
  <h1>Product Details</h1>
  <p>the job id is {{ $route.params.id}}</p>
</template>

<script>
export default {
    props: ['id'],

}
</script>

<style>

</style>