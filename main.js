// =========================
// HAMBURGER MENU TOGGLE
// =========================
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// =========================
// ADD TO CART FUNCTIONALITY
// =========================
const cartButtons = document.querySelectorAll(".add-to-cart");

let cartCount = 0;

// Select cart icon
const cartIcon = document.querySelector(".fa-shopping-bag").parentElement;

// Create badge
const badge = document.createElement("span");
badge.innerText = "0";

// Styling (FIXED CIRCLE)
badge.style.position = "absolute";
badge.style.top = "-5px";
badge.style.right = "-5px";

badge.style.width = "18px";
badge.style.height = "18px";

badge.style.display = "flex";
badge.style.alignItems = "center";
badge.style.justifyContent = "center";

badge.style.background = "red";
badge.style.color = "white";
badge.style.fontSize = "12px";
badge.style.borderRadius = "50%";

// Make parent relative
cartIcon.style.position = "relative";

// Add badge to icon
cartIcon.appendChild(badge);

// Add to cart click
cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        badge.innerText = cartCount;

        btn.innerText = "Added!";
        btn.style.backgroundColor = "green";

        setTimeout(() => {
            btn.innerText = "Add to Cart";
            btn.style.backgroundColor = "";
        }, 1000);
    });
});

// =========================
// NAV LINK ACTIVE STATE
// =========================
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        links.forEach(l => l.classList.remove("link-active"));
        link.classList.add("link-active");
    });
});

// =========================
// NEWSLETTER VALIDATION
// =========================
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email!");
        return;
    }

    alert("Subscribed successfully 🎉");
    emailInput.value = "";
});
