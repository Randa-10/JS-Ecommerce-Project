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

//define product
let productDom=document.querySelector(".products")
let cardsProductmenue=document.querySelector(".carts-product ")
let cardsProductDom=document.querySelector(".carts-product div")
let shoppingCartitems=document.querySelector(".shoppingCart")
let badgeDom=document.querySelector(".badge")

let product=[{
    id:1,
    title:"Headphone Item",
    size:"large",
    imgeUrl:"img/photo-1.avif"
},{
    id:2,
    title:"Unsplash Item",
    size:"large",
    imgeUrl:"img/photo-2avif.avif"
},
{
    id:3,
    title:"Smart Watch Item",
    size:"meduim",
    imgeUrl:"img/photo-3.avif"
},
{
    id:4,
    title:"skincare Item",
    size:"small",
    imgeUrl:"img/photo-4.avif"
},
]
shoppingCartitems.addEventListener('click',opncartmenu())
function draProduct(){
    let productui=product.map((items)=>{
        return `
        <div class="products_item">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <h3>${items.title}</h3>
            <P>Lorem ipsum dolor sit amet.</P>
            <span>${items.size}</span>
        </div>
        <div class="product_item_actions">
<button class="Add-To-Cart" onclick='addToCart(${items.id})'>Add To Cart</button>
<i class="fa-regular fa-heart fav"></i>          
</div>
    </div>
        `
    })
    productDom.innerHTML=productui
}draProduct()
function addToCart(id){
let choosingItem=product.find((items)=>items.id===id)
cardsProductDom.innerHTML+=`<P>${choosingItem.title }</P>`
let cardsProductLenght=document.querySelectorAll(".carts-product div p")

badgeDom.style.display="block"
badgeDom.innerHTML=cardsProductLenght.length

console.log(choosingItem);
}

function checkuser(){
    if(localStorage.getItem("username")){
        window.location="cartProduct.html"
    }else{
        window.location="login.html"

    }
}

function opncartmenu(){
    cardsProductmenue.style.display="block"
}