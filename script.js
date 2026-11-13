
/* =====================================
   1. SELECT HTML ELEMENTS
===================================== */

// Get the contact form
const contactForm = document.getElementById("contact-form");

// Get the name input
const nameInput = document.getElementById("name");

// Get the email input
const emailInput = document.getElementById("email");

// Get the message area
const message = document.getElementById("message");

// Store the selected pricing plan
let selectedPlan = "Not selected";


/* =====================================
   2. PRICING PLAN SELECTION
===================================== */

// Find all pricing buttons
const pricingButtons = document.querySelectorAll(
    ".price-card .primary-button"
);

// Add a click event to every pricing button
pricingButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the plan name inside its card
        const planCard = button.closest(".price-card");

        selectedPlan = planCard.querySelector("h3").textContent;

        console.log("Selected Plan:", selectedPlan);

        // Display selected plan in the contact area
        message.textContent = "You selected the " + selectedPlan + ". Please request your demo below.";

        message.style.color = "#b9a5ff";

    });

});


/* =====================================
   3. EMAIL VALIDATION FUNCTION
===================================== */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =====================================
   4. FORM SUBMISSION
===================================== */

// Listen for form submission
contactForm.addEventListener("submit", function(event) {
contactForm.setAttribute("novalidate", "");
    // Prevent page refresh
    event.preventDefault();

    // Get user input
    const name = nameInput.value.trim();

    const email = emailInput.value.trim();


    // Clear previous messages
    message.textContent = "";


    // Check name
    if (name === "") {

        message.textContent = "Please enter your name.";
        message.style.color = "#ff7777";

        nameInput.focus();

        return;

    }


    // Check minimum name length
    if (name.length < 2) {

        message.textContent = "Name must contain at least 2 characters.";
        message.style.color = "#ff7777";

        nameInput.focus();

        return;

    }


    // Check email
    if (email === "") {

        message.textContent = "Please enter your email address.";
        message.style.color = "#ff7777";

        emailInput.focus();

        return;

    }


    // Validate email format
    if (!isValidEmail(email)) {

        message.textContent = "Please enter a valid email address.";
        message.style.color = "#ff7777";

        emailInput.focus();

        return;

    }


    // Display successful submission
    message.textContent =
        "Thank you, " + name +
        "! Your demo request has been submitted successfully. Plan: " +
        selectedPlan + ".";

    message.style.color = "#70e6a0";


    // Show confirmation in browser console
    console.log("Demo Request Submitted");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Selected Plan:", selectedPlan);


    // Clear form fields
    contactForm.reset();

    // Reset selected plan for next request
    selectedPlan = "Not selected";

});


/* =====================================
   5. NAVIGATION LINK INTERACTIONS
===================================== */

// Find all navigation links
const navigationLinks = document.querySelectorAll(".nav-links a");

// Add click interaction
navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigating to:", link.textContent);

    });

});


/* =====================================
   6. GET STARTED BUTTONS
===================================== */

// Select all Get Started buttons
const getStartedButtons = document.querySelectorAll(
    ".nav-button, .hero-content .primary-button"
);

// Add click events
getStartedButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("User clicked Get Started");

    });

});


/* =====================================
   7. WEBSITE LOADED MESSAGE
===================================== */

console.log("FlowSync website loaded successfully!");
