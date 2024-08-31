document.getElementById("menu-toggle").addEventListener("click", function () {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("toggled");
});

document.getElementById("logout-btn").addEventListener("click", function () {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to the login page
});
