// let productsInCart=localStorage.getItem('productsInCart')
let productDom=document.querySelector(".products")
let noProducts=document.querySelector(".noProducts")


function drawProductUi(allProducts = []){

if(JSON.parse(localStorage.getItem('productsInFav')).length === 0)
    noProducts.innerHTML="there is no items !"



    let products=JSON.parse(localStorage.getItem('productsInFav')) || allProducts
    let productui=products.map((items)=>{
        return `
        <div class="products_item">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <h3>${items.title}</h3>
            <P>>${items.des}</P>
            <span>${items.size}</span><br>
            <span> qty: ${items.qty}</span>
        </div>
        <div class="product_item_actions">
<button class="Add-To-Cart" onclick='removeFromFav(${items.id})'>remove From Fav</button>
</div>
    </div>
        `
    })
    productDom.innerHTML=productui.join("")
}
drawProductUi()
function removeFromFav(id) {
    let productsInFav = localStorage.getItem('productsInFav');
    if (productsInFav) {
        let items = JSON.parse(productsInFav);
        let filterItems = items.filter((item) => {
            return item.id !== id; 
        });
        localStorage.setItem("productsInFav", JSON.stringify(filterItems));
        drawProductUi(filterItems);
    }
}
