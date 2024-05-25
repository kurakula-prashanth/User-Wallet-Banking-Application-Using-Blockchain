const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const balanceBtn = document.getElementById('balanceBtn');
const lastTransactionBtn = document.getElementById('lastTransactionBtn');
const transferBtn = document.getElementById('transferBtn');
const registerForm = document.getElementById('registerForm');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});


balanceBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to check your balance?')) {
        console.log('Balance button clicked');
    }
});

lastTransactionBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to view the last transaction?')) {
        console.log('Last Transaction button clicked');
    }
});

transferBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to initiate a transfer?')) {
        console.log('Transfer button clicked');
    }
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(registerForm);
    const url = registerForm.getAttribute('action');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        const data = await response.json(); // Assuming the server returns JSON data

        if (response.ok) {
            // Handle successful registration, maybe redirect or show success message
            console.log('Registration successful');
        } else {
            // Handle errors returned from the server
            const errorMessage = data.error_message; // Assuming the server sends error_message
            const errorContainer = document.querySelector('.error-message');

            if (errorMessage) {
                errorContainer.innerHTML = `<p class="error">${errorMessage}</p>`;
            }
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
});

transferBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('/get_usernames');
        const data = await response.json();

        if (response.ok) {
            const usernames = data.usernames;

            // Assuming you have an element with id 'userList' to display usernames
            const userListContainer = document.getElementById('userList');

            userListContainer.innerHTML = ''; // Clear previous list

            usernames.forEach(username => {
                const listItem = document.createElement('li');
                listItem.textContent = username[0]; // Assuming username is at index 0
                userListContainer.appendChild(listItem);
            });

            // Show the container where the usernames are displayed
            userListContainer.style.display = 'block';
        } else {
            console.error('Failed to fetch usernames');
        }
    } catch (error) {
        console.error('Error fetching usernames:', error);
    }
});
