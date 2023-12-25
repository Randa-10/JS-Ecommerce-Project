let product=JSON.parse(localStorage.getItem("product"))
let productId=localStorage.getItem("productId")
let productDetailsItem=product.find(item=> item.id == productId)
let itemDom=document.querySelector(".itemsDetails")



itemDom.innerHTML=
`
<img src="${productDetailsItem.imgeUrl}" alt=""/>
<h2>${productDetailsItem.title}</h2>
 <p>${productDetailsItem.des}</p>
<span>size: ${productDetailsItem.size}</span><br>
<span>qty : ${productDetailsItem.qty}</span>

`
