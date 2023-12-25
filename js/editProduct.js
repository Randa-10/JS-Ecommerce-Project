let products =JSON.parse(localStorage.getItem("products"))|| productDb

let productId=JSON.parse(localStorage.getItem("editProduct"))
let getProduct=products.find(i=>i.id === productId)
// //var

let productName=document.getElementById("product-name")
let productDes=document.getElementById("product-desc")
let productSize=document.getElementById("product-size")
let productForm=document.getElementById("product-form")
let uploadimge=document.getElementById("uploadimg")


let ProductSizeValue;
let productImg
productName.value=getProduct.title
productDes.value=getProduct.des
productSize.value=getProduct.size
productImg =getProduct.imgeUrl
// //event
productSize.addEventListener("change",getProductSize)
productForm.addEventListener("submit",updateProductForm)
uploadimge.addEventListener("change",uploadimg)

 function getProductSize(e){
    ProductSizeValue =  e.target.value
 }

 function updateProductForm(e){
e.preventDefault()

getProduct.title=productName.value
getProduct.des=productDes.value
getProduct.size=productSize.value
getProduct.imgeUrl=productImg
localStorage.setItem("products",JSON.stringify(products))
setTimeout(()=>(
    window.location="home.html"
 ),500)


 }

//  function uploadimg(){
//     let file=this.files[0]

// // let types=["image.jpg","image.png"]

// //     if(types.indexOf(file.type) == -1){
// // alert("not supported")
// // return
// //     }
// //  productImg=URL.createObjectURL(file)
// getImg64(file)
//  }



//  function getImg64(file){
//     let reader= new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload=function(){
//      productImg= reader.result
//     }
//  }