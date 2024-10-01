// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission and Validation for Booking Form
const bookingForm = document.querySelector('form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for demo purposes

        // Validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Thank you for your booking, ' + name + '! We will get back to you soon.');

        // Reset the form
        bookingForm.reset();
    });
}

// Dynamic Content Display for Featured Destinations
const destinations = [
    { name: "Paris, France", image: "paris.jpg", description: "The city of light." },
    { name: "Rome, Italy", image: "rome.jpg", description: "The Eternal City." },
    { name: "Tokyo, Japan", image: "tokyo.jpg", description: "A blend of tradition and modernity." }
];

const destinationsSection = document.querySelector('.featured-destinations');

if (destinationsSection) {
    destinations.forEach(destination => {
        const destinationDiv = document.createElement('div');
        destinationDiv.classList.add('destination');

        destinationDiv.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" class="destination-image" />
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button class="view-image" data-image="${destination.image}">View Image</button>
        `;
        destinationsSection.appendChild(destinationDiv);
    });
}
