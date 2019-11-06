function showHide(divId, buttonId) {
    var div = document.getElementById(divId);
    var button = document.getElementById(buttonId);
    if (div.style.display === "block") {
        div.style.display = "none";
        button.textContent = "Show";
    } else {
        div.style.display = "block";
        button.textContent = "Hide";
    }
} 