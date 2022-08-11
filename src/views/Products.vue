<template>
<h1>Products</h1>
<div class="container">

<div v-for="product in products" :key="product.id" class="product">
<img class="image" v-bind:src="product.image"/>
<p>{{ product.name}}</p>
<p>{{ product.price}}</p>
<p>{{ product.descriptions}}</p>
</div>
</div>

</template>
<script>
export default {
 data() {
    return {
        products: []
    }
 },
 mounted() {
    fetch('http://localhost:6969/products')
    .then(res => res.json())
    .then(data => this.products = data)
    .catch(err => console.log(err.message))
 }
};
</script>
<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.product{
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px lightgrey;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image{

    height: 170px;
    width: 200px;
}

</style>
