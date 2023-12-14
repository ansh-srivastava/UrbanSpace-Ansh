document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.getElementsByClassName('add-to-cart');

    let cartItems = [];

    function updateCartCount() {
        cartCount.textContent = cartItems.length;
    }

    function addToCart(item, price) {
        cartItems.push({ item, price });
        updateCartCount();
    }

    function createCartPage() {
        const cartPage = document.createElement('section');
        cartPage.id = 'cart-page';

        const cartContainer = document.createElement('div');
        cartContainer.classList.add('cart-container');

        const cartHeading = document.createElement('h2');
        cartHeading.textContent = 'Shopping Cart';

        const cartItemsList = document.createElement('ul');
        cartItemsList.classList.add('cart-items-list');

        cartItems.forEach((cartItem) => {
            const listItem = document.createElement('li');
            const itemName = document.createElement('span');
            itemName.textContent = cartItem.item;
            const itemPrice = document.createElement('span');
            itemPrice.textContent = '₹' + cartItem.price;
            listItem.appendChild(itemName);
            listItem.appendChild(itemPrice);
            cartItemsList.appendChild(listItem);
        });

        const checkoutButton = document.createElement('button');
        checkoutButton.classList.add('btn');
        checkoutButton.textContent = 'Checkout';

        cartContainer.appendChild(cartHeading);
        cartContainer.appendChild(cartItemsList);
        cartContainer.appendChild(checkoutButton);
        cartPage.appendChild(cartContainer);

        document.body.appendChild(cartPage);
    }

    function handleAddToCartClick(event) {
        const button = event.target;
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');

        addToCart(item, price);
    }

    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', handleAddToCartClick);
    }

    cartIcon.addEventListener('click', function() {
        if (cartItems.length > 0) {
            createCartPage();
        }
    });
});