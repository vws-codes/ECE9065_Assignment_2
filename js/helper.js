// js used by home page and cart container

let cartContainer = document.querySelector('.cart-container');
let cartContainerCloseButton = document.querySelector('.close');

let cartContainerProductsList = document.querySelector('.list-cart')

let cartContainerToPaySpan = document.querySelector('.to-pay');

cartContainerToPaySpan.innerHTML = CURRENT_TOTAL;


const addProductToCartContainerComponent = () => {
    cartContainerProductsList.innerHTML = '';
    let totalQuantity = 0;
    if (CART_ITEMS.length > 0) {
        CART_ITEMS.forEach(cart => {
            totalQuantity += cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_name;
            let info = products[cart.product_name];
            newCart.innerHTML = `
                        <div class="image">
                            <img src="${info.img1}" alt="">
                        </div>
                        <div class="name">
                            ${info.name}
                        </div>
                        <div class="totalprice">
                            $${GetFloatValue(info.price) * cart.quantity}
                        </div>
                        <div class="quantity">
                            <span class="minus">-</span>
                            <span>${cart.quantity}</span>
                            <span class="plus">+</span>
                        </div>
                        `;
            cartContainerProductsList.appendChild(newCart);
        })
    }
    cartIconSpan.innerHTML = totalQuantity;
}

cartContainerProductsList.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus'
        }
        updateGlobalCartList(product_id, type);
        // updatecartContainerToPaySpan(GetFloatValue(products[product_id].price), type);
        cartContainerToPaySpan.innerHTML = CURRENT_TOTAL;
        addProductToCartContainerComponent();
    }
})


cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart');
});

cartContainerCloseButton.addEventListener('click', () => {
    cartContainer.classList.toggle('show-cart');
})

