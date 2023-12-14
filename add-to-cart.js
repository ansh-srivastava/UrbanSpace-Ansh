// open and close cart 
let cart = document.querySelector(".cart");
let cartClose = document.querySelector("#cart-close");
let shoppingCartIcon = document.querySelector(".shopping-cart-icon");

shoppingCartIcon.addEventListener("click", ()=>{
    cart.style.right = "0px";
})

cartClose.addEventListener("click", ()=>{
    cart.style.right = "-200%";
})


// add products website 

let list = document.querySelector(".list");

let products = [
    {
        name:"Fully Automatic Washing Machine",
        price:1000,
        text:"(Top Load) Checkup",
        id:1,
    },

    {
        name:"Fully Automatic Washing Machine",
        price:1500,
        text:"(Front Load) Checkup",
        id:2,
    },

    {
        name:"Semi Automatic Washing Machine",
        price:800,
        text:"Checkup",
        id:3,
    },

    {
        name:"Installation",
        price:1500,
        text:"Washing Machine",
        id:4,
    },

    {
        name:"Uninstallation",
        price:1000,
        text:"Washing Machine",
        id:5,
    },

    {
        name:"Double Door Refrigerator",
        price:500,
        text:"Checkup",
        id:6,
    },
    {
        name:"Double Door Refrigerator",
        price: 1200,
        text:"Gas Refill",
        id:7,
    },
    {
        name:"Double Door Refrigerator",
        price: 3500,
        text:"Compressor replacement",
        id:8,
    },
    {
        name:"Side By Side Refrigerator",
        price:700,
        text:"Checkup",
        id:9,
    },
    {
        name:"Side By Side Refrigerator",
        price: 1800,
        text:"Gas Refill",
        id:10,
    },
    {
        name:"Side By Side Refrigerator",
        price: 5000,
        text:"Compressor replacement",
        id:11,
    },
    {
        name:"Single Door Refrigerator",
        price:400,
        text:"Checkup",
        id:12,
    },
    {
        name:"Single Door Refrigerator",
        price: 1000,
        text:"Gas Refill",
        id:13,
    },
    {
        name:"Single Door Refrigerator",
        price: 3000,
        text:"Compressor replacement",
        id:14,
    },
    {
        name:"Water Purifier Service",
        price: 1500,
        text:"Annual Maintenance Contract",
        id:15,
    },
    {
        name:"Water Purifier Service",
        price: 500,
        text:"Filter Replacement",
        id:16,
    },
    {
        name:"Water Purifier Service",
        price: 1000,
        text:"Water Leakage Fixing",
        id:17,
    },
    {
        name:"Water Purifier Repair",
        price: 1500,
        text:"RO Pump Repair",
        id:18,
    },
    {
        name:"Water Purifier Repair",
        price: 2000,
        text:"Membrane Replacement",
        id:19,
    },
    {
        name:"Water Purifier Repair",
        price: 500,
        text:"UV Lamp Replacement",
        id:20,
    },
    {
        name:"Water Purifier Service Repair",
        price: 1000,
        text:"Water Level Sensor Repair",
        id:21,
    },
    {
        name:"Tele-vision Repair",
        price: 5000,
        text:"Screen Replacement",
        id:22,
    },
    {
        name:"Tele-vision Repair",
        price: 4000,
        text:"Motherboard Replacement",
        id:23,
    },
    {
        name:"Tele-vision Repair",
        price:1500,
        text:"Speaker Replacement",
        id:24,
    },
    {
        name:"Tele-vision Installation",
        price:800,
        text:"Wall Mounting",
        id:25,
    },
    {
        name:"Tele-vision Installation",
        price:500,
        text:"Table-Top Mounting",
        id:26,
    },
    {
        name:"Tele-vision Uninstallation",
        price:300,
        text:"Wall Mounting",
        id:27,
    },
    {
        name:"Tele-vision Uninstallation",
        price:200,
        text:"Table Top Mounting",
    },
]

let productsCart = [];

function initDetails(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item"),
        newDiv.innerHTML = `
            <div class="img-box">
                <span class = "rate">4.2<i class='bx bxs-star' ></i></span>
            </div>

            <div class="infoCard">
                <div class="topInfo">
                    <div class="title">${value.name}</div>
                    <div class="price">₹${value.price}</div>
                </div>
                <div class="downInfo">
                    <p class="text">${value.text}</p>
                    <div class="add-to-cart" onclick="addToCart(${key})">
                        <i class='far fa-shopping-cart'></i>
                    </div>
                </div>
            </div>
        `;

        list.appendChild(newDiv);
        // console.log(newDiv);
    });
}

initDetails();


// content of cart 
let listCart = document.querySelector(".listCart");
let total = document.querySelector(".total-price");
let quantity = document.querySelector(".quantity");

function addToCart(key){
    if(productsCart[key] == null){
        productsCart[key] = JSON.parse(JSON.stringify(products[key]));
        productsCart[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML="";
    let count = 0;
    let totalPrice = 0;
    productsCart.forEach((value,key)=>{
        // products counter 
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("div");
            newDiv.classList.add("cart-box");
            newDiv.innerHTML=`
                <div class = "axoDetails">
                    <div class = "detail-box">
                        <div class="cart-product-title">
                            ${value.name}
                        </div>
                        <div class="cart-price">
                            ₹${value.price.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div class="custom-number-input">
                    <button onclick="dynamicQuantity(${key},${value.quantity + 1})">+</button>
                     <div class="count">${value.quantity}</div>
                     <button onclick="dynamicQuantity(${key},${value.quantity - 1})">-</button>
                </div>
            `;

            listCart.appendChild(newDiv);
            console.log(newDiv);
        }
    });

    total.innerText = "₹" + totalPrice.toLocaleString();
    quantity.innerText = count;
}


// function for delete and product increase 

function dynamicQuantity(key,quantity){
    if(quantity == 0){
        delete productsCart[key];
    }else{
        productsCart[key].quantity = quantity;
        productsCart[key].price = quantity * products[key].price;
    }
    reloadCart()
}

// show and hide navlist 
const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-x");
    navlist.classList.toggle("hide")
}