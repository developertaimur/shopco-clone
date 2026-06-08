// // js/home.js
// Homepage products dynamic rendering

const newArrivals = [
    {
        name: "T-shirt with Tape Details",
        image: "images/T-SHIRT.png",
        rating: "⭐ ⭐ ⭐ ⭐ ☆ 4.5/5",
        price: "$120"
    },
    {
        name: "Skinny Fit Jeans",
        image: "images/JEANS.png",
        rating: "⭐ ⭐ ⭐ ☆ ☆ 3.5/5",
        price: "$240",
        oldPrice: "$260",
        discount: "-20%"
    },
    {
        name: "Checkered Shirt",
        image: "images/checker.png",
        rating: "⭐ ⭐ ⭐ ⭐ ☆ 4.5/5",
        price: "$180"
    },
    {
        name: "Sleeve Striped T-shirt",
        image: "images/sleeve.png",
        rating: "⭐ ⭐ ⭐ ⭐ ☆ 4.5/5",
        price: "$130",
        oldPrice: "$160",
        discount: "-30%"
    }
];

const topSelling = [
    {
        name: "Vertical Striped Shirt",
        image: "images/vertical.png",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐ 5.0/5",
        price: "$212",
        oldPrice: "$232",
        discount: "-20%"
    },
    {
        name: "Courage Graphic T-shirt",
        image: "images/graphic_tshirt.png",
        rating: "⭐ ⭐ ⭐ ⭐ 4.0/5",
        price: "$145"
    },
    {
        name: "Loose Fit Bermuda Shorts",
        image: "images/Bermuda_Shorts.png",
        rating: "⭐ ⭐ ⭐ 3.0/5",
        price: "$80"
    },
    {
        name: "Faded Skinny Jeans",
        image: "images/black-jeans.png",
        rating: "⭐ ⭐ ⭐ ⭐ ☆ 4.5/5",
        price: "$210"
    }
];

function createProductCard(product) {
    return `
        <div class="product-card" onclick="openProduct('${product.name}')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <h3>${product.name}</h3>

            <p class="rating">${product.rating}</p>

            <p class="price">
                ${product.price}
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ""}
                ${product.discount ? `<span class="discount">${product.discount}</span>` : ""}
            </p>
        </div>
    `;
}

function renderProducts(containerId, products) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = products.map(createProductCard).join("");
}

function openProduct(productName) {
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "pages/product.html";
}

renderProducts("new-arrivals-grid", newArrivals);
renderProducts("top-selling-grid", topSelling);


