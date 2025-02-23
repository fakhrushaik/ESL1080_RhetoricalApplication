function showPopup(id) {
    document.getElementById(id + '-popup').style.display = 'block';
}

function hidePopup() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');
}

function calculateResults() {
    // Implement quiz logic here
}
