
document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Initialize validation state
    let valid = true;

    // Check name
    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        valid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Check email
    if (!email.value.trim() || !validateEmail(email.value.trim())) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Check subject
    if (!subject.value.trim()) {
        subject.classList.add('is-invalid');
        valid = false;
    } else {
        subject.classList.remove('is-invalid');
    }

    // Check message
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        valid = false;
    } else {
        message.classList.remove('is-invalid');
    }

    // If form is valid, you can submit the form or process it
    if (valid) {
        alert('Form is valid and can be submitted.');
        // Uncomment the line below to actually submit the form
        // this.submit();
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



