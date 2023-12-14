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
        name:"Cappocino",
        image:"add/img/cappucino.jpg",
        price:67,
        text:"hot cappucino",
        id:1,
    },

    {
        name:"Coffee Ice Cream",
        image:"coffee-ice-cream.jpg",
        price:123,
        text:"coffee with ice cream",
        id:2,
    },

    {
        name:"Hot Milk",
        image:"hot-milk.jpg",
        price:23,
        text:"hot milk with less sugar",
        id:3,
    },

    {
        name:"Mochaccino",
        image:"mochaccino.jpg",
        price:345,
        text:"hot mochaccino",
        id:4,
    },

    {
        name:"Sandwich",
        image:"sandwich.jpg",
        price:74,
        text:"bread with meet and vegetables",
        id:5,
    },

    {
        name:"Waffle Ice Cream",
        image:"waffle-ice-cream.jpg",
        price:47,
        text:"waffle with ice cream",
        id:6,
    },
]

let productsCart = [];

function initDetails(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item"),
        newDiv.innerHTML = `
            <div class="img-box">
                <img src = "img/${value.image}">
                <span class = "rate">4.2 <i class='bx bxs-star' ></i></span>
            </div>

            <div class="infoCard">
                <div class="topInfo">
                    <div class="title">${value.name}</div>
                    <div class="price">$${value.price}</div>
                </div>
                <div class="downInfo">
                    <p class="text">${value.text}</p>
                    <div class="add-to-cart" onclick="addToCart(${key})">
                        <i class='bx bx-shopping-bag' ></i>
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
                    <img src="img/${value.image}"/>
                    <div class = "detail-box">
                        <div class="cart-product-title">
                            ${value.name}
                        </div>
                        <div class="cart-price">
                            $${value.price.toLocaleString()}
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

    total.innerText = "$" + totalPrice.toLocaleString();
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
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("hide")
}