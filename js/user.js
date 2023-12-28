let userInfo=document.querySelector("#user_info")
let useDom=document.querySelector("#user")
let links=document.querySelector("#links")
let logoutBtn=document.querySelector("#logout")

let username=localStorage.getItem("username")
if(username){
    // console.log("yes");
    links.remove()
userInfo.style.display="flex"
useDom.innerHTML=username
}else{
    // useDom.innerHTML= "login"
}

logoutBtn.addEventListener('click',function(){
    localStorage.clear();
        setTimeout(() => {
           window.location="login.html"
        },1000)

} 
)