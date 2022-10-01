function result(){
    let data={
        name:document.getElementById("Email").value,
         pass:document.getElementById("password").value,

    }
    let arr=JSON.parse(localStorage.getItem("login")) ||[]
    if(arr[0]["name"]==data.name && arr[0]["pass"]==data.pass){
        alert("login successful");
    window.location.href="/benevolent-request-7942/navbar.html";
    }else{
        alert("invalid username or password");

    }
    
   }