// List of allowed email addresses
const allowedEmails = [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com"
];

function checkAccess() {
    const emailInput = document.getElementById("email").value;

    if (allowedEmails.includes(emailInput.toLowerCase())) {
        // Show restricted content and hide the access form
        document.getElementById("access-form").style.display = "none";
        document.getElementById("restricted-content").style.display = "block";
    } else {
        // Show access denied message
        document.getElementById("access-form").style.display = "none";
        document.getElementById("access-denied").style.display = "block";
    }
}