 let get_user=localStorage.getItem("username")
 let get_email=localStorage.getItem("email")
 let productss=JSON.parse(localStorage.getItem("products")) || productDb;
let myproducts=productss.filter((i)=>i.isMe === "Y")

let usernameDemo2=document.getElementById("username")
let useremailDemo2=document.getElementById("email")
let productlength=document.querySelector("#productlength span")

usernameDemo2.innerHTML=get_user
useremailDemo2.innerHTML=get_email


productlength.innerHTML=myproducts.length

///////////////////////////////////////////////

