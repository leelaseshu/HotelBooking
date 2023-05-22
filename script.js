document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Retrieve the booking date entered by the user
    const bookingDate = document.getElementById('bookingDate').value;

    try {
        // Make an API request to validate the booking date
        const response = await fetch('API_ENDPOINT_URL?bookingDate=' + bookingDate);

        if (response.ok) {
            // Parse the response as JSON
            const data = await response.json();

            if (data.isValid) {
                // Display success message
                showMessage('Booking date is valid!', 'success');
            } else {
                // Display error message
                showMessage('Booking date is not within the available range!', 'error');
            }
        } else {
            // Display error message
            showMessage('Failed to validate the booking date. Please try again.', 'error');
        }
    } catch (error) {
        // Display error message
        showMessage('An error occurred. Please try again later.', 'error');
    }
});

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
}