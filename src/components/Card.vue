<template>
  <router-link class="product_box" :to="{ name: 'ProductDetails', params: { id: product.product_id } }">
    <div class="card">
      <img class="product_img" :src="product.image" />
      <p class="product_title">{{ product.name }}</p>
       <p class="product_price">R{{ product.price }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.card{
   box-shadow: 5px 5px 5px 5px lightgrey;
    border-radius: 10px;
    width: 300px;
    height: 300px;
}

.product_img{
    height: 200px;
    width: 200px;
}


</style>
