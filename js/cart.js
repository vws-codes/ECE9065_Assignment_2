// all cart.html related js files

document.addEventListener("DOMContentLoaded", function() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartTaxSpan = document.getElementById('cart-tax');
    const deliveryChargesSpan = document.getElementById('delivery-charges');
    const cartDiscountSpan = document.getElementById('cart-discount');
    const totalPayableSpan = document.getElementById('total-payable');
    const clearCartButton = document.getElementById('clear-cart-button');
    const checkoutButtonOnCartPage = document.getElementById('checkout-button-on-cart-page');

    const TAX_RATE = 0.1;
    const DELIVERY_CHARGES = 5.00;
    let discount = 0.00;
    
    function updateCartSummary() {
        let tax = CURRENT_TOTAL * TAX_RATE;
        let totalPayable = CURRENT_TOTAL + tax + DELIVERY_CHARGES - discount;
        var currentDeliveryCharge = DELIVERY_CHARGES;
        if (CURRENT_TOTAL == 0) {
            currentDeliveryCharge = 0.00;
            totalPayable = 0.00
            checkoutButtonOnCartPage.disabled = true;
            checkoutButtonOnCartPage.style.cursor = 'not-allowed';
            checkoutButtonOnCartPage.style.opacity = '0.5';
        }
        cartTotalSpan.innerHTML = `$${CURRENT_TOTAL.toFixed(2)}`;
        cartTaxSpan.innerHTML = `$${tax.toFixed(2)}`;
        deliveryChargesSpan.innerHTML = `$${currentDeliveryCharge.toFixed(2)}`;
        cartDiscountSpan.innerHTML = `$${discount.toFixed(2)}`;
        totalPayableSpan.innerHTML = `$${totalPayable.toFixed(2)}`;

        console.log(`updating the following - cartTotalSpan.innerHTML = $${CURRENT_TOTAL.toFixed(2)} \
        cartTaxSpan.innerHTML = $${tax.toFixed(2)} \
        deliveryChargesSpan.innerHTML = $${DELIVERY_CHARGES.toFixed(2)} \
        cartDiscountSpan.innerHTML = $${discount.toFixed(2)} \
        totalPayableSpan.innerHTML = $${totalPayable.toFixed(2)} \
        `);
    }
    
    function loadCartItems() {
        cartItemsList.innerHTML = '';
        let totalQuantity = 0;
        CART_ITEMS.forEach(cart => {
            const productInfo = products[cart.product_name];
            totalQuantity += cart.quantity;
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.dataset.id = cart.product_name;
            
            cartItemDiv.innerHTML = `
                <div class="product-image">
                    <img src="${productInfo.img1}" alt="${productInfo.name}">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${productInfo.name}</h3>
                    <div class="quantity">
                        <button class="minus">-</button>
                        <span>${cart.quantity}</span>
                        <button class="plus">+</button>
                    </div>
                    <div class="product-total">$${(GetFloatValue(productInfo.price) * cart.quantity).toFixed(2)}</div>
                </div>
            `;
            cartItemsList.appendChild(cartItemDiv);
        });
        cartIconSpan.innerHTML = totalQuantity;
        updateCartSummary();
    }

    cartItemsList.addEventListener('click', event => {
        if (event.target.classList.contains('minus') || event.target.classList.contains('plus')) {
            const productId = event.target.closest('.cart-item').dataset.id;
            const action = event.target.classList.contains('plus') ? 'plus' : 'minus';
            console.log("action triggered *** - ", action);
            updateGlobalCartList(productId, action);
            loadCartItems();
        }
    });

    const clearCartAndMemory = () => {
        CART_ITEMS = []
        CURRENT_TOTAL = 0.00
        localStorage.setItem('cart', JSON.stringify(CART_ITEMS));
        localStorage.setItem('cart-total', JSON.stringify(CURRENT_TOTAL))
        loadCartItems()
    }

    clearCartButton.addEventListener('click', event => {
        clearCartAndMemory();
    })

    
    

    loadCartItems();
});
