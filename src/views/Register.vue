<template>
  <div class="container">
    
    <form onsubmit="register()">
        <h1>REGISTER</h1>
        <input class="form-input" type="text" name="fullname" id="fullname" placeholder="Full Name:" />
        <input class="form-input" type="text" name="email" id="email" placeholder="Email:" />
        <input class="form-input" type="text" name="password" id="password" placeholder="Password:" />
        <input class="form-input" type="text" name="phone" id="phone" placeholder="Phone Number:" />
        <input class="form-input" type="date" name="joinDate" id="joinDate" placeholder="Join Date:" />
        <input class="form-input" type="text" name="cart" id="cart" placeholder="Cart:" />
        <button class="form-input" type="submit">Register</button>

    </form>
  </div>
</template>

<script>


async function  register() {
   let full_name = document.getElementById("fulname").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let phone = document.getElementById("phone").value;
            let join_date = document.getElementById("joinDate").value;
            let cart = document.getElementById("cart").value;
    const res = await fetch("http://localhost:6969/users/register",
{
   headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({full_name: full_name, email: email,
         password: password,phone: phone, join_date: join_date, cart: cart})
})


const data = await res.json();

console.log(data);

}
       
</script>

<style>
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