let productsGame = [{
    id: 1,
    name: "GTA_5",
    Url: "Project_Pic/GTA_5.jpg",
    qty: 1,
    price: 500,
    alt: "GTA_5",
    

},
{
    id: 2,
    name: "Assassins Creed Black Flag",
    Url: "Project_Pic/Assassins Creed Black Flag.jpg",
    qty: 1,
    price: 650,
    alt: "Assassins Creed Black Flag"

}, {
    id: 3,
    name: "The Last Of Us 2",
    Url: "Project_Pic/The Last Of Us 2 .jpg",
    qty: 1,
    price: 375,
    alt: "The Last Of Us 2"
    

}, {
    id: 4,
    name: "The Evil Within",
    Url: "Project_Pic/The Evil Within.jpg",
    qty: 1,
    price: 475,
    alt: "The Evil Within"
    

}, {
    id: 5,
    name: "COD_BO3",
    Url: "Project_Pic/COD_BO3.jpg",
    qty: 1,
    price: 899,
    alt: "COD_BO3"

}, {
    id: 6,
    name: "COD_MW3",
    Url: "Project_Pic/COD_MW3.jpg",
    qty: 1,
    price: 577
    , alt: "COD_MW3"

}, {
    id: 7,
    name: "Days Gone",
    Url: "Project_Pic/Days Gone.jpg",
    qty: 1,
    price: 736,
    alt: "Days Gone"
},
{
    id: 8,
    name: "FIFA15",
    Url: "Project_Pic/FIFA15.jpg",
    qty: 1,
    price: 756,
    alt: "FIFA15"

}, {
    id: 9,
    name: "FIFA19",
    Url: "Project_Pic/FIFA19.jpg",
    qty: 1,
    price: 290
    , alt: "FIFA19"

}, {
    id: 10,
    name: "Gran Turismo",
    Url: "Project_Pic/Gran Turismo.webp",
    qty: 1,
    price: 568,
    alt: "Gran Turismo"

}, {
    id: 11,
    name: "Minecraft",
    Url: "Project_Pic/Minecraft.jpg",
    qty: 1,
    price: 497,
    alt: "Minecraft"

},
{
    id: 12,
    name: "RDR2",
    Url: "Project_Pic/RDR2.jpg",
    qty: 1,
    price: 679
    , alt: "RDR2"
    
}
    , {
    id: 13,
    name: "The Evil Within",
    Url: "Project_Pic/The Evil Within.jpg",
    qty: 1,
    price: 356
    , alt: "The Evil Within"

}
    , {
    id: 14,
    name: "The Last Of Us 1",
    Url: "Project_Pic/The Last Of Us 1 .jpg",
    qty: 1,
    price: 568,
    alt: "The Last Of Us 1"

}
    , {
    id: 15,
    name: "Uncharted 4",
    Url: "Project_Pic/Uncharted 4.jpg",
    qty: 1,
    price: 500,
    alt: "The Last Of Us 1"

}];





let productsController = [{
    id: 16,
    name: "PS5 controller",
    Url: "Project_Pic/ps5 controller.png",
    qty: 1,
    price: 2200
    
}
    , {
    id: 17,
    name: "XBOX controller",
    Url: "Project_Pic/XBOX_Controller_.jpg",
    qty: 1,
    price: 1500
    
},
{
    id: 18,
    name: "Ps4 controller",
    Url: "Project_Pic/PS4_Controller.jpg",
    qty: 1,
    price: 439
        
},
];


let productsDeviescs = [
    {
        id: 19,
        name: "Ps5",
        Url: "Project_Pic/PS5.jpg",
        qty: 1,
        price: 22000
        
    }
        , {
            id: 20,
            name: "Ps4 Pro ",
            Url: "Project_Pic/PS4_PRO.png",
            qty: 1,
            price: 1200
            
        }
            // , {
            //     id:3,
            //     name: "Ps5 controller",
            //     Url: "Project_Pic/Minecraft.png",
            //     qty: 1,
            //     price: 2200
                
            // }

]



localStorage.setItem("games", JSON.stringify(productsGame));
localStorage.setItem("controller", JSON.stringify(productsController));
localStorage.setItem("devises", JSON.stringify(productsDeviescs));

