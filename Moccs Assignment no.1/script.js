document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formResponse = document.getElementById("formResponse");

    // Basic validation
    if (name && email && message) {
        formResponse.textContent = "Massage send Successfully, " + name + "!";
        formResponse.style.color = "black";

        // Clear form fields
        document.getElementById("contactForm").reset();
    } else {
        formResponse.textContent = "Please fill in all fields.";
        formResponse.style.color = "red";
    }
});