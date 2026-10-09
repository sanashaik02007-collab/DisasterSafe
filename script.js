// DisasterSafe Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Highlight the current page in the navigation bar
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.style.color = "#d62828";
        }
    });

    // Emergency preparedness notice
    const notice = document.querySelector(".notice");

    if (notice) {
        notice.addEventListener("click", function () {
            alert(
                "Emergency Safety Reminder:\n\n" +
                "1. Stay calm.\n" +
                "2. Move to a safe location.\n" +
                "3. Follow official instructions.\n" +
                "4. Contact emergency services when needed."
            );
        });

        notice.style.cursor = "pointer";
        notice.title = "Click to read emergency safety reminders";
    }

    // Welcome message in the browser console
    console.log("Welcome to DisasterSafe!");
    console.log("Stay prepared. Stay safe.");

});