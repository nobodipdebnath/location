document.getElementById('findLocationBtn').addEventListener('click', findLocation);

function findLocation() {
    const phoneNumber = document.getElementById('phoneInput').value.trim();
    const locationDisplay = document.getElementById('locationDisplay');
    const locationText = document.getElementById('location');
    const errorText = document.getElementById('error');

    // Reset previous results
    locationDisplay.classList.add('hidden');
    errorText.classList.add('hidden');

    // Simulated API response (replace with actual API call)
    const mockApiResponse = {
        "1234567890": "New York, NY",
        "9876543210": "Los Angeles, CA",
        "5555555555": "Chicago, IL"
    };

    if (mockApiResponse[phoneNumber]) {
        locationText.innerText = mockApiResponse[phoneNumber];
        locationDisplay.classList.remove('hidden');
    } else {
        errorText.innerText = "Location not found for this phone number.";
        errorText.classList.remove('hidden');
    }
}
