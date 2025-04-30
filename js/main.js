let divGames = document.querySelector(".games");
let divdevises = document.querySelector(".devises");
let divcontroller = document.querySelector(".controller");

let allData = [...productsGame , ...productsDeviescs , ...productsController]

function displayGames(productsGame = [] , productsDeviescs = [] , productsController = []) {
    let productUI1 = productsGame.map((item) => { 
        return `
      <div class="product-card">
        <img src="${item.Url}" alt="${item.alt}">
        <h3>${item.name}</h3>
        <p>${item.price} L.E</p>
        <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
        <button class="view_product" onclick="productId(${item.id})">View Product Details</button>
      </div>

   `

        
    })


    let productUI2 = productsDeviescs.map((item) => { 
        return `
      <div class="product-card">
        <img src="${item.Url}" alt="${item.alt}">
        <h3>${item.name}</h3>
        <p>${item.price} L.E</p>
        <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
        <button class="view_product" onclick="productId(${item.id})">View Product Details</button>


      </div>

   `

        
    })
    let productUI3 = productsController.map((item) => { 
        return `
      <div class="product-card">
        <img src="${item.Url}" alt="${item.alt}">
        <h3>${item.name}</h3>
        <p>${item.price} L.E</p>
        <button class="add-to-cart" onclick="addToCart(${item.id})" >add to cart</button>
                <button class="view_product" onclick="productId(${item.id})">View Product Details</button>


      </div>

   `

        
    })

    

    divGames.innerHTML = productUI1;
    divdevises.innerHTML = productUI2;
    divcontroller.innerHTML = productUI3;
    


}

displayGames(JSON.parse(localStorage.getItem("games"))  ,JSON.parse(localStorage.getItem("devises")) , JSON.parse(localStorage.getItem("controller")));


let list = document.querySelector(".list");
let loginBtn = document.querySelector(".if_nologin");
let logoutBtn = document.querySelector(".if_I_login");
let imgs = document.querySelectorAll(".product-card img");
let viewProduct = document.querySelector(".view_product");



if (localStorage.getItem("email")) {
   
    list.innerHTML = ` <ul>
        <li ><a href="#" style="text-decoration: underline;">Hi. ${localStorage.getItem("username")}</a></li>
        <li><a href="#">Home</a></li>
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



let cart = document.querySelector(".cart");
let dropDown = document.querySelector(".drop_down");

cart.addEventListener("click", function () { 
    if (localStorage.getItem("email")) {

        if (dropDown.innerHTML !== "") {

            if (dropDown.style.display === "none") {
                dropDown.style.display = "block"
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




// add to cart


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
            
            window.location = "cart/index.html"
        }, 1200);
    })
}




window.onload = function () {
    viewProductOnCart()
}











function login() { 
    setTimeout(() => {
        window.location = "login page/login.html"
    }, 1200);
}


function logout() { 
    setTimeout(() => {
        window.location = "login page/login.html"
    }, 1200);
}







function productId(id) {
    if (localStorage.getItem("email")) {
        localStorage.setItem("productId", id)
    
        setTimeout(() => {
            window.location = "product_de/index.html"
        }, 1500);
    }else
    {
        setTimeout(() => {
        window.location = "../login page/login.html"
    }, 1200);}
    
}















 