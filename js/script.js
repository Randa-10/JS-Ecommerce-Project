

//define product
let productDom=document.querySelector(".products")
let cardsProductmenue=document.querySelector(".carts-product ")
let cardsProductDom=document.querySelector(".carts-product div")
let shoppingCartitems=document.querySelector(".shoppingCart")
let badgeDom=document.querySelector(".badge")
let product=JSON.parse(localStorage.getItem("product"))
//open cart menue
shoppingCartitems.addEventListener('click',opencartmenu)
//display product
let draProduct;

(draProduct=function (product =[]){
    let productui=product.map((items)=>{
        return `
        <div class="products_item">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <a onclick="saveItemData(${items.id})">${items.title}</a>
            <P>Lorem ipsum dolor sit amet.</P>
            <span>${items.size}</span>
        </div>
        <div class="product_item_actions">
<button class="Add-To-Cart" onclick='addToCart(${items.id})'>Add To Cart</button>
<i class="fa-regular fa-heart fav" style="color :${items.liked == true ? 'red':''}" onclick='addToFav(${items.id})' ></i>          
</div>
    </div>
        `
    })
    productDom.innerHTML=productui
})(JSON.parse(localStorage.getItem("product")))

//check if this item on localstorage
let addedItems=localStorage.getItem('productsInCart') ?JSON.parse(localStorage.getItem('productsInCart')):[]

if(addedItems){
    addedItems.map((items)=>{
        cardsProductDom.innerHTML += `<p>${items.title} ${items.qty}</p>`
    })
    badgeDom.style.display="block"
    badgeDom.innerHTML=addedItems.length}


//add to cart
let allItems =[]
function addToCart(id){
    if(localStorage.getItem("username")){
        let choosingItem=product.find((items)=>items.id===id)
let items= allItems.find(i=>i.id === choosingItem.id)
if(items){
choosingItem.qty +=1
}else{
    allItems.push(choosingItem)
}
cardsProductDom.innerHTML=""
allItems.forEach(item =>{
    cardsProductDom.innerHTML+=`<P>${item.title } ${item.qty }</P>`
})

        addedItems=[...addedItems,choosingItem]
      let uniqueProduct= getUniquArr(addedItems,"id")
        localStorage.setItem("productsInCart",JSON.stringify(uniqueProduct))
        let cardsProductLenght=document.querySelectorAll(".carts-product div p")
        
        badgeDom.style.display="block"
        badgeDom.innerHTML=cardsProductLenght.length
        
        console.log(choosingItem);
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
    if(e.keyCode === 13){
search(e.target.value , JSON.parse(localStorage.getItem("product")) )
    }
    if(e.target.value.trim() === "")
    draProduct(JSON.parse(localStorage.getItem("product")))
})

function search(title,myArray){
    let arr=myArray.filter((item) => item.title.indexOf(title) !== -1)
    draProduct(arr)
    console.log(arr);
}


// search ("Headphone Item",JSON.parse(localStorage.getItem("product")))

//add to fav
let favItem=localStorage.getItem('productsInFav') ?JSON.parse(localStorage.getItem('productsInFav')):[]

// let favItem=[]
function addToFav(id){
    if(localStorage.getItem("username")){
        let choosingItem=product.find((items)=>items.id===id)
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

