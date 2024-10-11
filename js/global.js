// global js used by all

let CART_ITEMS = JSON.parse(localStorage.getItem('cart')) || []
let CURRENT_TOTAL = parseFloat(localStorage.getItem('cart-total')) || 0.00;
let cartIcon = document.querySelector('.cart-icon');
let cartIconSpan = document.querySelector('.cart-icon span');
function GetFloatValue(s) {
    return parseFloat(parseFloat(s.replace(/[^0-9.]/g, "")).toFixed(2));
}

const laptops = {
    "hp": {
        id: "hp",
        product_type: "laptop",
        name: "HP Envy Laptop",
        price: "$1,200.00",
        img1: "./assets/images/products/hp-1.jpg",
        img2: "./assets/images/products/hp-2.jpg",
        img3: "./assets/images/products/hp-3.jpg",
        img4: "./assets/images/products/hp-4.jpg",
        buyNowLink: "https://www.hp.com",
        title: "HP Envy 2023 FHD Laptop",
        description: "The HP Envy Laptop provides powerful performance with Intel i7, 16GB RAM, 512GB SSD, and a stunning 13.3-inch FHD display.",
        specifications: [
            "Processor: Intel Core i7",
            "Memory: 16GB RAM",
            "Storage: 512GB SSD",
            "Display: 13.3\" Full HD",
            "Operating System: Windows 11",
            "Battery Life: Up to 12 hours"
        ],
        stockStatus: "In Stock",
        soldBy: "tech-store-123"
    },
    "dell": {
        id: "dell",
        product_type: "laptop",
        name: "Dell XPS 15",
        price: "$1,299.00",
        originalPrice: "$1,499.00",
        img1: "./assets/images/products/dell-1.jpg",
        img2: "./assets/images/products/dell-2.jpg",
        img3: "./assets/images/products/dell-3.jpg",
        img4: "./assets/images/products/dell-4.jpg",
        buyNowLink: "https://www.dell.com",
        title: "Dell XPS 15 2023 FHD Laptop",
        description: "Dell XPS 15 is a premium laptop featuring Intel i7, 16GB RAM, 1TB SSD, and a vibrant 15.6-inch FHD display. Great for professionals.",
        specifications: [
            "Processor: Intel Core i7",
            "Memory: 16GB RAM",
            "Storage: 1TB SSD",
            "Display: 15.6\" Full HD",
            "Operating System: Windows 11",
            "Battery Life: Up to 14 hours"
        ],
        stockStatus: "Limited Stock",
        soldBy: "dell-official-store"
    },
    "msi": {
        id: "msi",
        product_type: "laptop",
        name: "MSI 17 2023",
        price: "$949.00",
        img1: "./assets/images/products/msi-1.jpg",
        img2: "./assets/images/products/msi-2.jpg",
        img3: "./assets/images/products/msi-3.jpg",
        img4: "./assets/images/products/msi-4.jpg",
        buyNowLink: "https://www.msi.com",
        title: "MSI 17 2023 FHD Laptop",
        description: "The MSI 17 offers sleek design, powerful performance with Intel Core i7, 16GB RAM, 512GB SSD, and a vibrant 13.3-inch FHD display.",
        specifications: [
            "Processor: Intel Core i7",
            "Memory: 16GB RAM",
            "Storage: 512GB SSD",
            "Display: 13.3\" Full HD",
            "Operating System: Windows 11",
            "Battery Life: Up to 10 hours"
        ],
        stockStatus: "In Stock",
        soldBy: "very-long-name-amateur-seller"
    },
    "asus": {
        id: "asus",
        product_type: "laptop",
        name: "ASUS ROG SCAR 15",
        price: "$1,599.00",
        img1: "./assets/images/products/asus-1.jpg",
        img2: "./assets/images/products/asus-2.jpg",
        img3: "./assets/images/products/asus-3.jpg",
        img4: "./assets/images/products/asus-4.jpg",
        buyNowLink: "https://www.asus.com",
        title: "ASUS ROG SCAR 15 Gaming Laptop",
        description: "The ASUS ROG SCAR 15 is a high-performance gaming laptop with an Intel Core i9, 32GB RAM, 1TB SSD, and a 15.6-inch 144Hz FHD display.",
        specifications: [
            "Processor: Intel Core i9",
            "Memory: 32GB RAM",
            "Storage: 1TB SSD",
            "Display: 15.6\" Full HD 144Hz",
            "Operating System: Windows 11",
            "Battery Life: Up to 8 hours"
        ],
        stockStatus: "In Stock",
        soldBy: "gamer-gear-seller"
    },
    "1": {
        "id": "1",
        "product_type": "accessories",
        "name": "Wireless Mouse",
        "img1": "./assets/images/products/wireless-mouse-1.jpg",
        "price": "$19.00",
        "buyNowLink": "https://www.logitech.com"
    },
    "2": {
        "id": "2",
        "product_type": "accessories",
        "name": "Mechanical Keyboard",
        "img1": "./assets/images/products/mechanical-keyboard-1.jpg",
        "price": "$49.00",
        "buyNowLink": "https://www.corsair.com",
        "originalPrice": "$69.00"
    },
    "3": {
        "id": "3",
        "product_type": "accessories",
        "name": "Noise-Cancelling Headphones",
        "img1": "./assets/images/products/noise-cancelling-headphones-1.jpg",
        "price": "$99.00",
        "buyNowLink": "https://www.beatsbydre.com"
    },
    "4": {
        "id": "4",
        "product_type": "accessories",
        "name": "Webcam",
        "img1": "./assets/images/products/webcam-1.jpg",
        "price": "$39.00",
        "originalPrice": "$59.00",
        "buyNowLink": "https://www.logitech.com"
    },
};



function handleAddToShoppingCart(product) {
    console.log("product is ", product)
    let positionThisProductInCart = CART_ITEMS.findIndex((value) => value.product_name == product)
    if (CART_ITEMS.length <= 0) {
        CART_ITEMS = [{
            product_name: product,
            quantity: 1
        }]
    } else if (positionThisProductInCart < 0) {
        CART_ITEMS.push({
            product_name: product,
            quantity: 1
        })
    } else {
        CART_ITEMS[positionThisProductInCart].quantity += 1
    }
    console.log(CART_ITEMS)
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(CART_ITEMS));
    localStorage.setItem('cart-total', JSON.stringify(CURRENT_TOTAL))
}

const updateGlobalCartList = (product_id, type) => {
    let positionItemInCart = CART_ITEMS.findIndex((value) => value.product_name == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                CART_ITEMS[positionItemInCart].quantity += 1;
                break;
            default:
                CART_ITEMS[positionItemInCart].quantity -= 1;
                if (CART_ITEMS[positionItemInCart].quantity == 0) {
                    CART_ITEMS.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    updatecartContainerToPaySpan(GetFloatValue(laptops[product_id].price), type);
    // updatecartContainerToPaySpan();
    addCartToMemory();
    // addProductToCartContainerComponent();
}

const updatecartContainerToPaySpan = (price, action) => {
    console.log("price and action ", price, action)
    price = parseFloat(price);

    if (action == "plus") {
        CURRENT_TOTAL += price;
    } else if (action == "minus") {
        CURRENT_TOTAL -= price;
    }

    if (CURRENT_TOTAL < 0) {
        CURRENT_TOTAL = 0;
    }
    CURRENT_TOTAL = parseFloat(CURRENT_TOTAL.toFixed(2));

    addCartToMemory();
}
