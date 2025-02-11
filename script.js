// Select button and hidden gift message
const revealButton = document.getElementById('reveal-button');
const giftMessage = document.getElementById('gift-message');

// Add click event to reveal the gift
revealButton.addEventListener('click', () => {
    giftMessage.classList.remove('hidden');
    revealButton.style.display = 'none'; // Hide the button after revealing the gift
});
