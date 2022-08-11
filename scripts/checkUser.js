const api_url = "http://localhost:6969";


async function checkUser(url) {


    let response = await fetch(url + "/" + "users" + "/" + "verify",
    {
        method: "GET",
            headers: {
            "Content-type": "application/json",
                "x-auth-token": window.localStorage.getItem("usertoken")
            }
    })
    var data = await response.json();
   
    if (data.msg) {
        alert(data.msg);
    } else {
        window.localStorage.setItem("user", JSON.stringify(data));
    }
checkUser(api_url);
    
}
