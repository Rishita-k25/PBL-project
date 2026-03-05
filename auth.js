/* =====================================================
   AUTH.JS — Login / Register Logic
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ── Tab switching ─────────────────────────────────
    const tabBtns = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('registerForm');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            loginForm.classList.toggle('active', tab === 'login');
            regForm.classList.toggle('active', tab === 'register');
            clearErrors();
        });
    });

    // Check URL param for pre-selecting tab
    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'register') {
        document.querySelector('[data-tab="register"]')?.click();
    }

    // ── Show/hide password ────────────────────────────
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = '🙈';
            } else {
                input.type = 'password';
                btn.textContent = '👁️';
            }
        });
    });

    // ── Login form ────────────────────────────────────
    loginForm?.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        let valid = true;

        if (!email || !isValidEmail(email)) {
            showError('loginEmailError', 'Please enter a valid email address.');
            valid = false;
        }
        if (!password) {
            showError('loginPasswordError', 'Password is required.');
            valid = false;
        }
        if (!valid) return;

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === hashish(password));

        if (!user) {
            showError('loginPasswordError', 'Invalid email or password. Please try again.');
            document.getElementById('loginPassword').value = '';
            return;
        }

        setCurrentUser({ name: user.name, email: user.email });
        showToast(`Welcome back, ${user.name}! 👋`, 'success', '🎉');
        setTimeout(() => { window.location.href = '../pages/jobs.html'; }, 800);
    });

    // ── Register form ─────────────────────────────────
    regForm?.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors();

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirm').value;
        let valid = true;

        if (!name || name.length < 2) {
            showError('regNameError', 'Please enter your full name (at least 2 characters).');
            valid = false;
        }
        if (!email || !isValidEmail(email)) {
            showError('regEmailError', 'Please enter a valid email address.');
            valid = false;
        }
        if (!password || password.length < 6) {
            showError('regPasswordError', 'Password must be at least 6 characters.');
            valid = false;
        }
        if (password !== confirm) {
            showError('regConfirmError', 'Passwords do not match.');
            valid = false;
        }
        if (!valid) return;

        const users = getUsers();
        if (users.some(u => u.email === email)) {
            showError('regEmailError', 'An account with this email already exists.');
            return;
        }

        users.push({ name, email, password: hashish(password) });
        saveUsers(users);
        setCurrentUser({ name, email });
        showToast(`Account created! Welcome, ${name} 🚀`, 'success', '🎉');
        setTimeout(() => { window.location.href = '../pages/jobs.html'; }, 800);
    });

    // ── Helpers ───────────────────────────────────────
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(id, msg) {
        const el = document.getElementById(id);
        if (el) { el.textContent = msg; el.classList.add('active'); }
    }

    function clearErrors() {
        document.querySelectorAll('.form-error').forEach(e => {
            e.classList.remove('active'); e.textContent = '';
        });
    }

    /** Very simple deterministic hash (not cryptographic — purely for demo UI purposes). */
    function hashish(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
        }
        return String(hash);
    }
});
