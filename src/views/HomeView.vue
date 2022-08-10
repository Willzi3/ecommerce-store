<template>
 <div class="container">
   <form onsubmit="myFunction()">
    <h1>LOGIN</h1>
    <input class="form-input" type="text" name="email" id="email" placeholder="Email:" />
    <input class="form-input" type="text" name="password" id="password" placeholder="Password:" />
    <button class="form-input" type="submit">Login</button>
    <div class="form-extra">
      <a href="#"><p>Register</p></a>
      <a href="#"><p>Forgot password</p></a>
    </div>
  </form>
 </div>
</template>
<script>
//login functionality
    
async function  myFunction() {
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

const res = await fetch("http://localhost:6969/users/login",

{
headers: {
  'Content-Type': 'application/json'
},
method: "POST",
body: JSON.stringify({email: email,
     password: password})

})
.then((res) => res.json()).then((data) => {
console.log(data.token)

if(data.token === null) {
            alert("Unssuccesfull");


}
else if(data.token) {
            alert("successfully loggin")
        document.getElementById("form").style.display = "none";

}
});
}
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

