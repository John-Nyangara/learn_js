const planTourBtn = document.getElementById('plan-tour-btn');
const tourModal = document.getElementById('tour-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// 2. Open Modal when "plan your tour" button is clicked
planTourBtn.addEventListener('click', () => {
    tourModal.style.display = 'flex';
});

// 3. Close Modal when the "X" icon is clicked
closeModalBtn.addEventListener('click', () => {
    tourModal.style.display = 'none';
});

// 4. Close Modal when clicking on the dark background overlay
tourModal.addEventListener('click', (event) => {
    if (event.target === tourModal) {
        tourModal.style.display = 'none';
    }
});