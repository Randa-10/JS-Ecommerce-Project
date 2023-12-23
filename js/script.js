

//define product
let productDom=document.querySelector(".products")
let cardsProductmenue=document.querySelector(".carts-product ")
let cardsProductDom=document.querySelector(".carts-product div")
let shoppingCartitems=document.querySelector(".shoppingCart")
let badgeDom=document.querySelector(".badge")

//open cart menue
shoppingCartitems.addEventListener('click',opencartmenu)
//display product
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

//check if this item on localstorage
let addedItems=localStorage.getItem('productsInCart') ?JSON.parse(localStorage.getItem('productsInCart')):[]

if(addedItems){
    addedItems.map((items)=>{
        cardsProductDom.innerHTML += `<p>${items.title}</p>`
    })
    badgeDom.style.display="block"
    badgeDom.innerHTML=addedItems.length}


//add to cart
function addToCart(id){
    if(localStorage.getItem("username")){
        let choosingItem=product.find((items)=>items.id===id)
        cardsProductDom.innerHTML+=`<P>${choosingItem.title }</P>`

        addedItems=[...addedItems,choosingItem]
        localStorage.setItem("productsInCart",JSON.stringify(addedItems))
        let cardsProductLenght=document.querySelectorAll(".carts-product div p")
        
        badgeDom.style.display="block"
        badgeDom.innerHTML=cardsProductLenght.length
        
        console.log(choosingItem);
        }else{
        window.location="login.html"

    }

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