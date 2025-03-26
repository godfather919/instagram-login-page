document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // You can add further logic here, like sending the data to a server
});