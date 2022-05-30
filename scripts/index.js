// Add the coffee to local storage with key "coffee"
const url= "https://masai-mock-api.herokuapp.com/coffee/menu"
let container=document.getElementById("menu")

fetch(url)
.then(function(res){

    return res.json()

})
.then(function(res){

     console.log(res)

   appendData(res.menu.data)

})
.catch(function(err){
    console.log(err)
})
function appendData(data){

    // console.log(data)
 
data.forEach(function(el){
    let div=document.createElement("div")
    let image=document.createElement("img");
    image.src=el.image;
image.style.height="200px"
image.style.width="200px" 

    let price=document.createElement("p")
    price.innerText=el.price;
    

    let bucket=document.createElement("button")
    bucket.innerText="Bucket"
    bucket.addEventListener("click",function(){
    addtocart(el)
    })

div.append(image,price,bucket)
   
   container.append(div)
})

}
let cartData=JSON.parse(localStorage.getItem("coffee"))||[]
function addtocart(el){
    console.log(cartData);
cartData.push(el)
localStorage.setItem("coffee",JSON.stringify(cartData))

}


