// js/cartCounter.js

function updateCartCounter() {

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    if (!cartCount) {
        return;
    }

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cartCount.innerText = cart.length;
}