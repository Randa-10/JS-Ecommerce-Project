// localStorage.setItem("name","randa")
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name")

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
}

logoutBtn.addEventListener('click',function(){
    localStorage.clear();
        setTimeout(() => {
           window.location="login.html"
        },1000)

} 
)

