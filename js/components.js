// 

// Components path fix
// Agar page "pages" folder ke andar hai to ../ use hoga
// Agar index.html root me hai to normal path use hoga

let componentPath = "";

if (window.location.pathname.includes("/pages/")) {
  componentPath = "../";
}

// Load Navbar
const navbarContainer = document.getElementById("navbar-container");

if (navbarContainer) {
  fetch(componentPath + "components/navbar.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      navbarContainer.innerHTML = data;
    });
}

// Load Newsletter
const newsletterContainer = document.getElementById("newsletter-container");

if (newsletterContainer) {
  fetch(componentPath + "components/newsletter.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      newsletterContainer.innerHTML = data;
    });
}

// Load Footer
const footerContainer = document.getElementById("footer-container");

if (footerContainer) {
  fetch(componentPath + "components/footer.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      footerContainer.innerHTML = data;
    });
}