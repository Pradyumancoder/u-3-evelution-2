// On clicking remove button the item should be removed from DOM as well as localstorage.

let cartData=JSON.parse(localStorage.getItem("coffee"))
// console.log(cartData)
var total=cartData.reduce(function(sum,el){
    return sum+Number(el.price)

},0)

  var length=cartData.length
console.log(length)

console.log(total)

document.querySelector("h3").innerHTML=`  ${length}  ${total}`;

cartData.forEach(function(el,index){
    let div=document.createElement("div")
    let image=document.createElement("img");
    image.src=el.image;
image.style.height="200px"
image.style.width="200px" 

    let price=document.createElement("p")
    price.innerText=el.price;

    let remove=document.createElement("button")
    remove.innerText="Remove"
    remove.addEventListener("click",function(){
       removedata(el,index)
       function removedata(el,index){
        cartData.splice(index,1) 
        localStorage.setItem("coffee",JSON.stringify(cartData))
        location.reload()
    }

    })

div.append(image,price,remove)
   
document.getElementById("bucket").append(div)
})
