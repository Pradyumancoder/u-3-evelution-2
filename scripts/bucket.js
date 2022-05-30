// On clicking remove button the item should be removed from DOM as well as localstorage.

let cartData=JSON.parse(localStorage.getItem("coffee"))
// console.log(cartData)
// let total=cartData.reduce(function(sum,el,index,arr){
//     return sum+Number(el)
// },0)
// let length=cartData.length

//  document.querySelector("total_amount").innerText=`${length}`

cartData.forEach(function(el){
    let div=document.createElement("div")
    let image=document.createElement("img");
    image.src=el.image;
image.style.height="200px"
image.style.width="200px" 

    let price=document.createElement("p")
    price.innerText=el.price;

    let remove=document.createElement("button")
    remove.innerText="Remove"
    

    let bucket=document.createElement("button")
    bucket.innerText="Bucket"
    bucket.addEventListener("click",function(){
    addtocart(el)
    })

div.append(image,price,bucket,remove)
   
document.getElementById("bucket").append(div)
})