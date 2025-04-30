let btnAdd = document.querySelector(".btn-add");
let productCart = JSON.parse(localStorage.getItem("productcart")) || [];
let divProductIn = document.querySelector(".product_in");
let ifNoProduct = document.querySelector(".if_no_product");
let btnProduct = document.querySelector(".btn_product");
let totals = document.querySelector(".totals");
let confirmBtn = document.querySelector(".button");





function viewProductCart() { 
    if (productCart) { 
        let productUI = productCart.map((i) => { 
            return `
            <div class = "product">
            <img src="${i.Url}" alt="" width="100px">
            <p class="price"> Price:${i.price}</p>
            <P class="qty">quantaty: ${i.qty} </P>
            <button onclick=deletItem(${i.id}) class="btn_product" >Delete Item</button>
            </div>`
        })
        
        divProductIn.innerHTML = productUI
    }
    
    if (divProductIn.innerHTML === "") { 
        ifNoProduct.style.display = "block"
    }
}

viewProductCart()

console.log(productCart);


function deletItem(id) { 
    console.log(id);
    
    
    if (productCart) { 
        let productUI = productCart.find((i) => i.id === id)
        if (productUI.qty === 1) {
            let productUI = productCart.findIndex((i) => i.id === id)
            console.log(productCart[productUI]);
            
            // if (productUI === productCart[productUI]) { 
            productCart.splice(productUI, 1)
            viewProductCart()
            sumPrice()

            localStorage.setItem("productcart" , JSON.stringify(productCart))
            // }
           
        }else { 
            productUI.qty--
            viewProductCart()
            sumPrice()

        }
    }
}




function sumPrice() {
    if (productCart) {
        let productUI = productCart.map((i) => {
            return i.qty * i.price
        }).reduce((i, j) => j + i , 0)
        totals.innerHTML = ` <hr />
        <p><strong>Total: ${productUI}</strong></p>`
        confirmBtn.innerHTML = `Confirm Order - EGP ${productUI}` 
    }
        
    
    
}
sumPrice()


function toHome() { 
    setTimeout(() => {
        window.location = "..//home/index.html"
    }, 1200);
}
btnAdd.addEventListener("click", toHome)

