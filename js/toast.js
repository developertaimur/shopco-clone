// js/toast.js
// Reusable toast notification

function showToast(message, type = "success") {
    const oldToast = document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span>${type === "success" ? "✓" : "!"}</span>
        <p>${message}</p>
    `;

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.classList.add("show");
    }, 100);

    setTimeout(function() {
        toast.classList.remove("show");

        setTimeout(function() {
            toast.remove();
        }, 300);

    }, 2500);
}