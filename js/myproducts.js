// let products=JSON.parse(localStorage.getItem("products")) || productDb;
// console.log(products);

let productDom=document.querySelector(".products")
let noProducts=document.querySelector(".noProducts")

// console.log(myProducts);
let drawProduct
(drawProduct=function (product =[]){
   let myProducts=product.filter(item=>item.isMe==="Y")
   if(myProducts.length !== 0  ){

  
    let productui=myProducts.map((items)=>{
        return `
        <div class="products_item" style="border:${items.isMe === "Y" ? '1px solid green':''}">
        <img src=${items.imgeUrl} alt="" class="product_item_img">
        <div class="product_item_des">
            <a onclick="saveItemData(${items.id})">${items.title}</a>
            <P>${items.des}</P>
            <span>${items.size}</span>
        </div>
        <div class="product_item_actions">   
                 <button class="edit" onclick="editProduct(${items.id})">Edit Product</button>

<button class="Add-To-Cart" onclick='deletproduct(${items.id})'>delet product</button>
</div>
    </div>
        `
    })
    productDom.innerHTML=productui.join("")
 }else{
    noProducts.innerHTML="no products"
 }

})(JSON.parse(localStorage.getItem("products"))|| productDb)



function editProduct(id){
    localStorage.setItem("editProduct",id)
    window.location="editProduct.html"
    }


    function deletproduct(id){
        let products=JSON.parse(localStorage.getItem("products")) || productDb;
        let myProducts=products.filter(item=> item.isMe === "Y")
        let filtered=myProducts.filter((i) => i.id !== id)
        let clickitem=myProducts.find((i) => i.id === id)
        products=products.filter((i) => i.id !== clickitem.id)
        localStorage.setItem("products",JSON.stringify(products))   
      drawProduct(filtered)

    }