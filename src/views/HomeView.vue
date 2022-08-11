<template>
 <div class="container">
   <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="email" placeholder="email"/>
        <label>Password</label>
        <input type="text" v-model="password" placeholder="password"/>
        <button type="submit">Login</button>
        <!-- <a href="register.html"><p>Register</p></a>
        <a href="forgotPass.html"><p>Forgot password</p></a> -->
    </form>
    <div v-if="users">
            Welcome {{ user.full_name }}
        </div>
 </div>
</template>
<script>
export default{
  computed: {
    users() {
      return this.$store.state.user
    }
  },
  data() {
    return{
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", { email: this.email, password: this.password })
    },
  },
};
</script>

<style scoped>
.container{
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px lightgrey;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.form-input {
  height: 30px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid lightgrey;
}
.form-extra{
  display: flex;
  gap: 15px;
}
.form-extra a {
  text-decoration: none;
  color: black;
}
.form-extra p {
  border: 1px solid lightgrey;
  border-radius: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>

