// Selecting elements
const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const balanceBtn = document.getElementById('balanceBtn');
const lastTransactionBtn = document.getElementById('lastTransactionBtn');
const transferBtn = document.getElementById('transferBtn');
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const logoutBtn = document.querySelector('.dropdown-content a.btn');

// Event listeners
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
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

// Dropdown menu functionality
dropdownBtn.addEventListener('click', () => {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    // Perform logout actions here
    console.log('Logout button clicked');
});
