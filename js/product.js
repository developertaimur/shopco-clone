// js/product.js
// Product detail page dynamic functionality

const products = [
    {
        name: "T-shirt with Tape Details",
        category: "T-Shirts",
        mainImage: "../images/T-SHIRT.png",
        thumbnails: [
            "../images/T-SHIRT.png",
            "../images/product-1.png",
            "../images/product-2.png"
        ],
        rating: "4.5/5",
        stars: "★★★★☆",
        price: "$120",
        oldPrice: "",
        discount: "",
        description: "This t-shirt is perfect for everyday wear. It is soft, stylish, and comfortable."
    },
    {
        name: "Skinny Fit Jeans",
        category: "Jeans",
        mainImage: "../images/JEANS.png",
        thumbnails: [
            "../images/JEANS.png",
            "../images/product-2.png",
            "../images/product-3.png"
        ],
        rating: "3.5/5",
        stars: "★★★☆☆",
        price: "$240",
        oldPrice: "$260",
        discount: "-20%",
        description: "Stylish skinny fit jeans made for a modern casual look."
    },
    {
        name: "Checkered Shirt",
        category: "Shirts",
        mainImage: "../images/checker.png",
        thumbnails: [
            "../images/checker.png",
            "../images/product-1.png",
            "../images/product-main.png"
        ],
        rating: "4.5/5",
        stars: "★★★★☆",
        price: "$180",
        oldPrice: "",
        discount: "",
        description: "A clean checkered shirt suitable for casual and semi-formal outfits."
    },
    {
        name: "Sleeve Striped T-shirt",
        category: "T-Shirts",
        mainImage: "../images/sleeve.png",
        thumbnails: [
            "../images/sleeve.png",
            "../images/product-2.png",
            "../images/product-main.png"
        ],
        rating: "4.5/5",
        stars: "★★★★☆",
        price: "$130",
        oldPrice: "$160",
        discount: "-30%",
        description: "A sleeve striped t-shirt with a stylish and comfortable fit."
    }
];

const selectedProductName = localStorage.getItem("selectedProduct");

let selectedProduct = products.find(function(product) {
    return product.name === selectedProductName;
});

if (!selectedProduct) {
    selectedProduct = products[0];
}

document.getElementById("product-name").innerText = selectedProduct.name.toUpperCase();
document.getElementById("breadcrumb-category").innerText = selectedProduct.category;
document.getElementById("main-product-image").src = selectedProduct.mainImage;
document.getElementById("product-stars").innerText = selectedProduct.stars;
document.getElementById("product-rating").innerText = selectedProduct.rating;
document.getElementById("product-price").innerText = selectedProduct.price;
document.getElementById("product-description").innerText = selectedProduct.description;

const oldPrice = document.getElementById("product-old-price");
const discount = document.getElementById("product-discount");

if (selectedProduct.oldPrice) {
    oldPrice.innerText = selectedProduct.oldPrice;
    oldPrice.style.display = "inline";
} else {
    oldPrice.style.display = "none";
}

if (selectedProduct.discount) {
    discount.innerText = selectedProduct.discount;
    discount.style.display = "flex";
} else {
    discount.style.display = "none";
}

// Thumbnails dynamic
const thumbnailContainer = document.getElementById("thumbnail-container");

thumbnailContainer.innerHTML = "";

selectedProduct.thumbnails.forEach(function(image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = selectedProduct.name;

    img.addEventListener("click", function() {
        document.getElementById("main-product-image").src = image;
    });

    thumbnailContainer.appendChild(img);
});

// Color Selection

const colorButtons = document.querySelectorAll(".color");

colorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        colorButtons.forEach(function(color) {
            color.classList.remove("active-color");
        });

        button.classList.add("active-color");

    });

}); 


// Size Selection

const sizeButtons = document.querySelectorAll(
    "#product-sizes button"
);

sizeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        sizeButtons.forEach(function(size) {
            size.classList.remove("active-size");
        });

        button.classList.add("active-size");

    });

});

// Quantity System

const decreaseBtn = document.getElementById(
    "decrease-qty"
);

const increaseBtn = document.getElementById(
    "increase-qty"
);

const quantityText = document.getElementById(
    "product-quantity"
);

let quantity = 1;

increaseBtn.addEventListener(
    "click",
    function() {

        quantity++;

        quantityText.innerText = quantity;

    }
);

decreaseBtn.addEventListener(
    "click",
    function() {

        if (quantity > 1) {

            quantity--;

            quantityText.innerText = quantity;

        }

    }
);

// Add To Cart

const addToCartBtn = document.getElementById(
    "add-to-cart-btn"
);

addToCartBtn.addEventListener(
    "click",
    function() {

        const selectedColor =
            document.querySelector(
                ".active-color"
            ).dataset.color;

        const selectedSize =
            document.querySelector(
                ".active-size"
            ).dataset.size;

        const cartItem = {

            name: selectedProduct.name,

            image: selectedProduct.mainImage,

            price: selectedProduct.price,

            color: selectedColor,

            size: selectedSize,

            quantity: quantity

        };

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        cart.push(cartItem);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
        updateCartCounter();

   showToast("Product added to cart!");

    }
);