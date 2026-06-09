// Cart Page JS

const cartItemsContainer = document.getElementById("cart-items");

const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const deliveryFeeElement = document.getElementById("delivery-fee");
const totalPriceElement = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some products to see them here.</p>
                <a href="../index.html">Continue Shopping</a>
            </div>
        `;

        updateSummary();
        return;
    }

    cart.forEach(function(item, index) {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Size: <span>${item.size}</span></p>
                    <p>Color: <span>${item.color}</span></p>
                    <h4>$${item.price}</h4>
                </div>

                <div class="cart-actions">
                    <button class="delete-btn" onclick="removeCartItem(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                    <div class="quantity-box">
    <button onclick="decreaseQuantity(${index})">-</button>
    <span>${item.quantity}</span>
    <button onclick="increaseQuantity(${index})">+</button>
</div>
                </div>
            </div>
        `;
    });

    updateSummary();
}

function updateSummary() {
    let subtotal = 0;

    cart.forEach(function(item) {
        subtotal += item.price * item.quantity;
    });

    let discount = subtotal * 0.2;
    let deliveryFee = cart.length > 0 ? 15 : 0;
    let total = subtotal - discount + deliveryFee;

    subtotalElement.innerText = "$" + subtotal;
    discountElement.innerText = "-$" + discount;
    deliveryFeeElement.innerText = "$" + deliveryFee;
    totalPriceElement.innerText = "$" + total;

    if (typeof updateCartCounter === "function") {
        updateCartCounter();
    }
}

function removeCartItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();

    if (typeof showToast === "function") {
        showToast("Product removed from cart!");
    }
}

// ========================================
// Increase Quantity
// ========================================

function increaseQuantity(index) {
    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

// ========================================
// Decrease Quantity
// ========================================

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;

        localStorage.setItem("cart", JSON.stringify(cart));

        renderCart();
    }
}

renderCart();