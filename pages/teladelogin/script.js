function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        document.getElementById("loginForm").submit();
    }
}



