

//define product
let productDom=document.querySelector(".products")
let cardsProductmenue=document.querySelector(".carts-product ")
let cardsProductDom=document.querySelector(".carts-product div")
let shoppingCartitems=document.querySelector(".shoppingCart")
let badgeDom=document.querySelector(".badge")
let product=productDb
//open cart menue
shoppingCartitems.addEventListener('click',opencartmenu)
//display product
let draProduct;

(draProduct=function (product =[]){
    let productui=product.map((items)=>{
        return `
        <div class="products_item" style="border:${items.isMe === "Y" ? '1px solid green':''}">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <a onclick="saveItemData(${items.id})">${items.title}</a>
            <P>${items.des}</P>
            <span>${items.size}</span>
            ${items.isMe === "Y"?'<button class="edit" onclick="editProduct('+ items.id +')">Edit Product</button>':""}
        </div>
        <div class="product_item_actions">
<button class="Add-To-Cart" onclick='addToCart(${items.id})'>Add To Cart</button>
<i class="fa-solid fa-heart fav" style="color: ${items.liked ? 'red' : 'gray'}" onclick='addToFav(${items.id})'></i>
</div>
    </div>
        `
    })
    productDom.innerHTML=productui.join("")
})(JSON.parse(localStorage.getItem("products"))|| product)

//check if this item on localstorage
let addedItems=localStorage.getItem('productsInCart') ?JSON.parse(localStorage.getItem('productsInCart')):[]

if(addedItems){
    addedItems.map((items)=>{
        cardsProductDom.innerHTML += `<p>${items.title} <span class="qty">${items.qty}</span></p>`
    })
    badgeDom.style.display="block"
    badgeDom.innerHTML=addedItems.length
}


//add to cart
function addToCart(id){
    if(localStorage.getItem("username")){
        let productt=JSON.parse(localStorage.getItem("products")) || product
  let products = productt.find((items)=>items.id===id)
let isProductInCart= addedItems.some(i=>i.id === products.id)
if(isProductInCart){
    addedItems= addedItems.map((P)=>{
        if(P.id === products.id) P.qty+=1;
      return P
        
    })
}else{
    addedItems.push(products)
}
cardsProductDom.innerHTML=""
addedItems.forEach(item =>{
    cardsProductDom.innerHTML+=`<P>${item.title } ${item.qty }</P>`
})

//save data
        localStorage.setItem("productsInCart",JSON.stringify(addedItems))
 //add counter of items
        let cardsProductLenght=document.querySelectorAll(".carts-product div p")
        
        badgeDom.style.display="block"
        badgeDom.innerHTML=cardsProductLenght.length
        
        }else{
        window.location="login.html"

    }

}


function getUniquArr(arr,filterType){
let unique=arr.map((item)=>item[filterType]).map((item,i,final)=> final.indexOf(item)===i && i)
.filter((item) =>arr[item])
.map((item)=>arr[item])
return unique
}
//open cart menue
function opencartmenu(){ 
    if(cardsProductDom.innerHTMLm !== ""){
       if (cardsProductmenue.style.display=="block"){
        cardsProductmenue.style.display="none"

       }else{
            cardsProductmenue.style.display="block"

       }

    }
}
//details
function saveItemData(id){
    localStorage.setItem("productId",id)
    window.location="cartDetails.html"
}

//search
let input=document.getElementById("search")

input.addEventListener("keyup",function(e){
    // if(e.keyCode === 13){
search(e.target.value , JSON.parse(localStorage.getItem("product")) )
    // }
    if(e.target.value.trim() === "")
    draProduct(JSON.parse(localStorage.getItem("product")))
})

function search(title,myArray){
    let arr=myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    draProduct(arr)
    console.log(arr);
}


//add to fav
let favItem=localStorage.getItem('productsInFav') ?JSON.parse(localStorage.getItem('productsInFav')):[]

// let favItem=[]
function addToFav(id){
    if(localStorage.getItem("username")){
        let productt=JSON.parse(localStorage.getItem("products")) || product
        let choosingItem=productt.find((items)=>items.id===id)
  choosingItem.liked =true
         favItem=[...favItem,choosingItem]
         let uniqueProduct= getUniquArr(favItem,"id")

        localStorage.setItem("productsInFav",JSON.stringify(uniqueProduct))
product.map(item=>{
    if(item.id === choosingItem.id){
        item.liked=true
    }
})
localStorage.setItem("product",JSON.stringify(product))

        draProduct(product)
        }else{
        window.location="login.html"

    }

}

//filter
let sizeFilter=document.getElementById("size-filter")

sizeFilter.addEventListener("change",getProductFilterSize)

function getProductFilterSize(e){
    let val=e.target.value
    let products=JSON.parse(localStorage.getItem("products")) || product;
    if(val=== "all"){
        draProduct(products)
    }else{
        products=products.filter((I)=>I.size === val);
        draProduct(products)
    }
}


//editProduct
function editProduct(id){
localStorage.setItem("editProduct",id)
window.location="editProduct.html"
}


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.header-content nav');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });
});