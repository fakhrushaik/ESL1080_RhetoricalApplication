function openMovement(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll to Section
    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
});
