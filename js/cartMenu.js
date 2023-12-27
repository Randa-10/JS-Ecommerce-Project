let cardsProductDom=document.querySelector(".carts-product div")
let badgeDom=document.querySelector(".badge")
let shoppingCartitems=document.querySelector(".shoppingCart")
let cardsProductmenue=document.querySelector(".carts-product ")

shoppingCartitems.addEventListener('click',opencartmenu)


let addedItems=localStorage.getItem('productsInCart') ?JSON.parse(localStorage.getItem('productsInCart')):[]

if(addedItems){
    addedItems.map((items)=>{
        cardsProductDom.innerHTML += `<p>${items.title} <span class="qty">${items.qty}</span></p>
        `
    })
    badgeDom.style.display="block"
    badgeDom.innerHTML=addedItems.length
}

function opencartmenu(){ 
    if(cardsProductDom.innerHTMLm !== ""){
       if (cardsProductmenue.style.display=="block"){
        cardsProductmenue.style.display="none"

       }else{
            cardsProductmenue.style.display="block"

       }

    }
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