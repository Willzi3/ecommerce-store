<template>
<h1>product</h1>
    <div v-if="products" class="prod">
       <h2><img :src="products.image"></h2>
       <p>{{ products.name}}</p>
       <p>R{{ products.price}}</p>
       <p>{{ products.category}}</p>
    </div>
</template>
<script>
export default {
   props: ["id"],
   computed: {
    products() {
        return this.$store.state.product;
    },
   },
   mounted() {
    this.$store.dispatch("getproduct", this.id)
   }
}
</script>
<style>
    
</style>