
document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("exampleFormControlInput1").value.trim();
    const selectedClass = document.querySelector("select").value;

    if (!firstName || !lastName || !email || !selectedClass) {
        alert("Please complete all required fields");
        return;
    }

    // Store booking info (optional)
    localStorage.setItem("bookingData", JSON.stringify({
        firstName,
        lastName,
        email,
        selectedClass
    }));

    // Redirect to Stripe checkout
    window.location.href = "https://buy.stripe.com/aFa8wI7wK6Gw3h00NKa3u01";
});
