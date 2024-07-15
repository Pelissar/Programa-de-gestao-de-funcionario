document.addEventListener('DOMContentLoaded', () => {
    const showPasswordCheckbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordCheckbox.addEventListener('change', () => {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    function updateClock() {
        const now = new Date();
        const clock = document.getElementById('clock');
        clock.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();
});

function login() {
    window.location.href = 'funcionario.html';
}