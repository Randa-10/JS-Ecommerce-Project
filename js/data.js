let productDb=[{
    id:1,
    title:"Headphone Item",
    size:"large",
    imgeUrl:"img/photo-1.avif",
    qty:1
},{
    id:2,
    title:"Unsplash Item",
    size:"large",
    imgeUrl:"img/photo-2avif.avif",
    qty:1

},
{
    id:3,
    title:"Smart Watch Item",
    size:"meduim",
    imgeUrl:"img/photo-3.avif",
    qty:1

},
{
    id:4,
    title:"skincare Item",
    size:"small",
    imgeUrl:"img/photo-4.avif",
    qty:1

},
]

localStorage.setItem("product",JSON.stringify(productDb))