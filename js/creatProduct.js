//var

let productName=document.getElementById("product-name")
let productDes=document.getElementById("product-desc")
let productSize=document.getElementById("product-size")
let productForm=document.getElementById("product-form")
let uploadimge=document.getElementById("uploadimg")


let ProductSizeValue;
let productImg
//event
productSize.addEventListener("change",getProductSize)
productForm.addEventListener("submit",creatProductForm)
uploadimge.addEventListener("change",uploadimg)

 function getProductSize(e){
    ProductSizeValue =  e.target.value
 }

 function creatProductForm(e){
e.preventDefault()
let allProduct=JSON.parse(localStorage.getItem("products")) || productDb
let namValue=productName.value
let desValue="Lorem ipsum dolor sit amet."

 if(namValue&&desValue){
let obj={
  id:allProduct? allProduct.length +1: 1,
  qty:1,
  imgeUrl:productImg,
  size:ProductSizeValue,
  title:namValue,
  des:desValue,
  isMe:"Y"
}


 let newproducts= allProduct ? [...allProduct , obj]:[obj];

 localStorage.setItem("products",JSON.stringify(newproducts))
 productName.value="";
 productDes.value="";
 productSize.value=""

 setTimeout(()=>(
    window.location="home.html"
 ),500)
 }else{
    alert("please enter data")
 }

 }

 function uploadimg(){
    let file=this.files[0]

// let types=["image.jpg","image.png"]

//     if(types.indexOf(file.type) == -1){
// alert("not supported")
// return
//     }
//  productImg=URL.createObjectURL(file)
getImg64(file)
 }



 function getImg64(file){
    let reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(){
     productImg= reader.result
    }
 }