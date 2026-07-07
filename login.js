document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    // Check if fields are empty
    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Hardcoded login
    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password.");
    }
});