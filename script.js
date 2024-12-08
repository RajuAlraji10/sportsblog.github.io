// JavaScript to dynamically insert the welcome text
document.addEventListener("DOMContentLoaded", function () {
    // Select the elements where we want to insert the text
    const welcomeTitle = document.getElementById("welcome-title");
    const welcomeDescription = document.getElementById("welcome-description");

    // Define the content
    const title = "Welcome to Raju's Sports Blog!";
    const description =
        "From the pitch to the stands, every story matters. Dive into the thrilling world of football and beyond, where passion meets the pitch. Stay inspired, stay informed, and celebrate the beautiful game with us!";

    // Insert the content into the page
    welcomeTitle.textContent = title;
    welcomeDescription.textContent = description;
});

// Smooth scroll and highlight for FIFA blog section
document.querySelector('a[href="#FIFA-blog"]').addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Scroll smoothly to the FIFA blog section
    const target = document.querySelector("#FIFA-blog");

    target.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the section
    });

    // Optionally, you can highlight the FIFA section or perform other actions
    target.style.border = "2px solid #fdd835"; // Example: Add a border to FIFA section for visual feedback
});

document.querySelector('a[href="#COPA-blog"]').addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Scroll smoothly to the FIFA blog section
    const target = document.querySelector("#COPA-blog");

    target.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the section
    });

    // Optionally, you can highlight the FIFA section or perform other actions
    target.style.border = "2px solid #fdd835"; // Example: Add a border to FIFA section for visual feedback
});

document.querySelector('a[href="#LALIGA-blog"]').addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Scroll smoothly to the FIFA blog section
    const target = document.querySelector("#LALIGA-blog");

    target.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the section
    });

    // Optionally, you can highlight the FIFA section or perform other actions
    target.style.border = "2px solid #fdd835"; // Example: Add a border to FIFA section for visual feedback
});





// Favorite team input feature
const teamInput = document.querySelector('.team-input');
const commentButton = document.querySelector('.comment-button');

// Add event listener to the button
commentButton.addEventListener('click', () => {
    const favoriteTeam = teamInput.value.trim(); // Get the input value and trim spaces
    if (favoriteTeam) {
        alert(`Your favorite team is ${favoriteTeam}.` + ' Hope for the best');
    } else {
        alert('Please enter your favorite team!');
    }
});

// Alert message functionality for the "Click to See My Works" button
document.getElementById("alert-button").addEventListener("click", function () {
    alert("CSS Styles:\n" +
        "- Body: Custom font, background color, and text color.\n" +
        "- Header: Flexbox layout, shadow effect, and hover transitions.\n" +
        "- Blog Section: Rounded corners, shadows, and hover effects.\n" +
        "\nJavaScript Functionalities:\n" +
        "- Dynamic insertion of Welcome Section content.\n" +
        "- Smooth scrolling to FIFA section on nav link click.\n" +
        "- Alert message to display CSS and JS features.");
});
