import { createStore } from 'vuex'
import router  from '@/router/index'
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  mutations: {
    setusers: (state, users) => {
      state.users = users
    },
    setuser: (state, user) => {
      state.user = user
    },
    setproduct: (state, product) => {
      state.product = product
    },
    setproducts: (state, products) => {
      state.products = products
    }
  },
  actions: {
    login: async (context, data) => {
      const{email, password} = data
      const response = await fetch(`http://localhost:6969/users/login?email=${email}&password=${password}`)
      const userData = await response.json();
      console.log(userData)
      console.log(router)
    //   router.push({
    //    name:'products'
    //  })
      context.commit("setuser", userData[0])
     },
     register: async (context, data) => {
       const{full_name, email, password, billing_address, default_shipping_address, country, phone, user_type} = data
       fetch('http://localhost:6969/users/register', {
         method: 'POST',
         body: JSON.stringify({
             email: email,
             password: password,
             full_name: full_name,
             billing_address: billing_address,
             default_shipping_address: default_shipping_address,
             country: country,
             phone: phone,
             user_type: user_type
         }),
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
         },
         })
         .then((response) => response.json())
         .then((json) => context.commit("setusers", json));
        
     },
     getproduct: async (context, id) => {
      fetch(" http://localhost:6969/products/" +id)
      .then((res) => res.json())
      .then((product) => context.commit("setproduct", product[0]))
    },
    getproducts: async (context) => {
      fetch(" http://localhost:6969/products")
      .then((res) => res.json())
      .then((products) => context.commit("setproducts",products))
    }
     
  },
  
  modules: {
  }
})
