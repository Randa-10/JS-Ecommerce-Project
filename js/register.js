//register user
let Username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let register=document.querySelector("#sign")

register.addEventListener("click",function(e){
    e.preventDefault()
    if(Username.value === ""||email.value === ""||password.value === ""){
        alert("pleas fill form")
    }else{
    localStorage.setItem("username",Username.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
setTimeout(()=>{
window.location="login.html"
},1500)
}

}

)