// Get the input element
const filterInput = document.getElementById('filterInput');

// Add event listener for input changes
filterInput.addEventListener('input', filterCards);

// Function to filter cards
function filterCards() {
    // Get the filter value
    const filterValue = filterInput.value.toLowerCase();

    // Get all the cards
    const cards = document.getElementsByClassName('card');

    // Loop through each card
    Array.from(cards).forEach(card => {
        // Get the card content
        const cardContent = card.textContent.toLowerCase();

        // Check if the card content matches the filter value
        if (cardContent.includes(filterValue)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}