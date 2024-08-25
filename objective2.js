// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();


    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();


// Task 3: Implement form validation to ensure that all required fields are filled before submission.
    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    }

    else if (validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Enter valid email address';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        let userInput = {
            name: name,
            email: email,
            message: message,
        };
        console.log('User Input:', userInput);

        document.getElementById('contact-form').requestFullscreen();
    }
});

