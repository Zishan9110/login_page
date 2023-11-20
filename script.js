document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var loginButton = document.getElementById('btn');
    var successMessage = document.createElement('p'); // Create a new <p> element

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Check if the password is not equal to "zishanshams"
        if (passwordInput.value !== 'zishanshams') {
            // Update button text and disable hover effect
            loginButton.innerText = 'No cheating!';
            loginButton.style.cursor = 'not-allowed';

            // Add a class to move the button or apply other styling changes
            loginButton.classList.add('no-hover');
        } else {
            // If the password is correct, display success message
            successMessage.innerText = 'Login successful';
            successMessage.classList.add('success-message');

            // Append the success message after the login button
            loginButton.parentNode.appendChild(successMessage);

            // Update button text and styling for successful login
            loginButton.innerText = 'Login Successful';
            loginButton.style.cursor = 'not-allowed';
            loginButton.classList.add('no-hover');
        }
    });
});
