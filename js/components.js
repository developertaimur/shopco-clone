// Load Navbar Component
fetch("components/navbar.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    document.getElementById("navbar-container").innerHTML = data;
  });

  // Load Newsletter Component
fetch("components/newsletter.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    document.getElementById("newsletter-container").innerHTML = data;
  });

  // Load Footer Component
fetch("components/footer.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    document.getElementById("footer-container").innerHTML = data;
  });