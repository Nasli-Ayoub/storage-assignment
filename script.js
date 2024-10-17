// DOM //
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// saved name localStorage //
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}!`;
    } else {
    displayName.textContent = '' // cleard display if no saved name //
}
});

// save name localStorage when button clicked //
saveBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        usernameInput.value = ''; // clears input after saving
    }
});

// clear saved name from localStorage when "clear name" button clicked //
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    displayName.textContent = '';
});