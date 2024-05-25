document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const logoutBtn = document.querySelector('.dropdown-content a.btn');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
    const closeBalanceModal = () => {
        balanceDisplay.style.display = 'none';
    };

    const closeTransactionModal = () => {
        transactionDetailsDiv.style.display = 'none';
    };

    const balanceBtn = document.getElementById('balanceBtn');
    const lastTransactionBtn = document.getElementById('lastTransactionBtn');
    const transferBtn = document.getElementById('transferBtn');
    const balanceDisplay = document.getElementById('balanceDisplay');
    const userListContainer = document.getElementById('userListContainer');

    balanceBtn.addEventListener('click', async () => {
        if (window.confirm('Are you sure you want to check your balance?')) {
            try {
                const response = await fetch('/get_balance');
                const data = await response.json();
                const balance = data.balance;

                if (balance !== 'Not available') {
                    document.getElementById('balanceAmount').textContent = `Your remaining balance is: $${balance}`;
                    balanceDisplay.style.display = 'block'; 
                    userListContainer.style.display = 'none'; 
                } else {
                    document.getElementById('balanceAmount').textContent = 'Balance information not available';
                    balanceDisplay.style.display = 'block'; 
                    userListContainer.style.display = 'none'; 
                }
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        } else {
            console.log('Balance operation cancelled');
        }
        setTimeout(closeBalanceModal, 5000);
    });
    const transactionDetailsDiv = document.getElementById('transactionDetails');
    transactionDetailsDiv.style.display = 'none';
    
    lastTransactionBtn.addEventListener('click', async () => {
        if (window.confirm('Are you sure you want to view the last transaction?')) {
            try {
                const response = await fetch('/get_last_transaction');
                const data = await response.json();
    
                if (!data.error) {
                    
                    const transactionDetails = JSON.stringify(data, null, 2);
                    transactionDetailsDiv.textContent = transactionDetails;
                    transactionDetailsDiv.style.display = 'block';
                } else {
                    console.error('Error:', data.error);
                    alert('No transactions found');
                }
            } catch (error) {
                console.error('Error fetching last transaction:', error);
                alert('Error fetching last transaction');
            }
        } else {
            console.log('Last Transaction operation cancelled');
        }
        if (!data.error) {
            const transactionDetails = JSON.stringify(data, null, 2);
            transactionDetailsDiv.textContent = transactionDetails;
            transactionDetailsDiv.style.display = 'block';
        } else {
            console.error('Error:', data.error);
            alert('No transactions found');
        }
        setTimeout(closeTransactionModal, 5000);
    });
    transferBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default form submission
        
        if (window.confirm('Are you sure you want to proceed with the transfer?')) {
            window.location.href = '/transfer'; // Redirects to the transfer page
        } else {
            console.log('Transfer cancelled');
        }
    });
    
});