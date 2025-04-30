let idProduct = JSON.parse(localStorage.getItem("productId"))
let allGames = JSON.parse(localStorage.getItem("games"))
let allController = JSON.parse(localStorage.getItem("controller"));
let allDevises = JSON.parse(localStorage.getItem("devises"));
let allData = [...allController, ...allDevises, ...allGames];
let divContant = document.querySelector(".contant")
let list = document.querySelector(".list");
let loginBtn = document.querySelector(".if_nologin");
let logoutBtn = document.querySelector(".if_I_login");
let imgs = document.querySelectorAll(".product-card img");
let viewProduct = document.querySelector(".view_product");
let productUI = allData.find((item) => item.id === idProduct)

if (localStorage.getItem("email")) {
   
    list.innerHTML = ` <ul>
        <li ><a href="#" style="text-decoration: underline;">Hi. ${localStorage.getItem("username")}</a></li>
        <li><a href="..//home/index.html">Home</a></li>
        <button  class="if_I_login" style=text-decoration:underline; onclick="logout()">logout</button>

        <li><a href="#" class ="cart"><i class="fa fa-cart-plus " aria-hidden="true"></i>
        </a>
        <span class="badg"></span>
         <div class="drop_down">
         </div>
        </li> 
    </ul>`    
    logoutBtn.style.display = "block"


} else {    logoutBtn.style.display = "none"
}    



divContant.innerHTML =
` <div class = "img_back">
<img src="${productUI.Url}" alt="${productUI.alt} " width="32%" id="Pro_Pic"  >
</div>
<div id="div1" >
    <p style="color:gray ;font-size: small;" >PS4 GAMES</p>
    <h2>${productUI.name}</h2>
    <h2>${productUI.price} L.E</h2>  
    <button style="background-color: black; color: aliceblue; width: 25%; border-radius: 7px; height: 30px; ; "  onclick="buyNow()" >BUY NOW!</button>
    <button id="button_2" onclick="addToCart(${productUI.id})">ADD TO THE CART </button>
    </div>
    `



let cart = document.querySelector(".cart");    
let dropDown = document.querySelector(".drop_down");

cart.addEventListener("click", function () { 
    if (localStorage.getItem("email")) {

        if (dropDown.innerHTML !== "") {

            if (dropDown.style.display === "none") {
                dropDown.style.display = "block"
                dropDown.style.zIndex= "10"
                
            }    
            else {
                dropDown.style.display = "none"
            }    
        }    
    } else (
        setTimeout(() => { 
            window.location = "..//login page/login.html"

        }, 1500)    
    )    
})    


let addCart = document.querySelector(".add-to-cart");
let productCart = JSON.parse(localStorage.getItem("productcart")) || []
let AllProductsOnCart = JSON.parse(localStorage.getItem("allproductoncart")) || []


let badg = document.querySelector(".badg");

function addToCart(id) {


    let productUI = allData.find((item) => item.id === id)
    let badgNumber = productCart.map((i) => i.qty);
    AllProductsOnCart = [badgNumber.reduce((i, j) => i + j , 1) ];
    localStorage.setItem("allproductoncart", JSON.stringify(AllProductsOnCart))
    
    
    
    let items = productCart.find((i) => i.id === productUI.id)
    if (items) {
        items.qty++
        
        
    } else { 
        
        
        productCart.push(productUI);
    }    
    
    localStorage.setItem("productcart", JSON.stringify(productCart))
    
    viewProductOnCart()
    
    
    
    
    
}    


function viewProductOnCart() { 
    
    
    dropDown.innerHTML = ""
    productCart.forEach(element => {
        dropDown.innerHTML += `<p>${element.name} (${element.qty})<p/>`
        badg.innerHTML = AllProductsOnCart
        
    });    


    let btnViweProduct = document.createElement("button");
    btnViweProduct.innerHTML = "View All Product On Cart"
    btnViweProduct.classList.add("btn_viwe_product")
    

  
    if (dropDown.innerHTML === "") {
        badg.style.display = "none"
    }    
    else {
        dropDown.appendChild(btnViweProduct)
        badg.style.display = "block";
        badg.style.color = "white"
        
        
        
    }          

    
    btnViweProduct.addEventListener("click", function () {
        setTimeout(() => {
            
            window.location = "..//cart/project.html"
        }, 1200);    
    })    
}    




window.onload = function () {
    viewProductOnCart()
}    











function login() { 
    setTimeout(() => {
        window.location = "../login page/login.html"
    }, 1200);    
}    


function logout() { 
    setTimeout(() => {
        window.location = "../login page/login.html"
    }, 1200);    
}    






function buyNow() { 
    setTimeout(() => {
        window.location = "..//cart/project.html"
    }, 1200);
}
