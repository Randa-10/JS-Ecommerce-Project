// let productsInCart=localStorage.getItem('productsInCart')
let productDom=document.querySelector(".products")
let noProducts=document.querySelector(".noProducts")


function drawProductUi(allProducts = []){

if(JSON.parse(localStorage.getItem('productsInCart')).length === 0)
    noProducts.innerHTML="there is no items !"



    let products=JSON.parse(localStorage.getItem('productsInCart')) || allProducts
    let productui=products.map((items)=>{
        return `
        <div class="products_item">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <h3>${items.title}</h3>
            <P>Lorem ipsum dolor sit amet.</P>
            <span>${items.size}</span>
        </div>
        <div class="product_item_actions">
<button class="Add-To-Cart" onclick='removeFromCart(${items.id})'>remove From Cart</button>
</div>
    </div>
        `
    })
    productDom.innerHTML=productui
}
drawProductUi()
function removeFromCart(id) {
    let productsInCart = localStorage.getItem('productsInCart');
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filterItems = items.filter((item) => {
            return item.id !== id; 
        });
        localStorage.setItem("productsInCart", JSON.stringify(filterItems));
        drawProductUi(filterItems);
    }
}
