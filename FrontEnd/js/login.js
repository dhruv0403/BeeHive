document.addEventListener('DOMContentLoaded', function () {
    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');
    const authFormBody = document.getElementById('auth-form-body');

    function showSignupForm() {
        authFormBody.innerHTML = `
            <form id="signup-form" action="#">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-password"></i>
                    <input type="password" id="password" name="password" required>
                </div>
                <small id="password-instruction">Use 8 digit password</small>
                <label for="confirm-password">Confirm Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-confirm-password"></i>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <label for="invite-code">Invite Code</label>
                <input type="text" id="invite-code" name="invite-code" required>
                <label class="auth-form-checkbox-label" style="margin: 1rem 0rem;">
                    <input type="checkbox" name="terms" required>
                    I agree to the terms and conditions
                </label>
                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Sign Up</button>
                    <span class="auth-form-switch">
                        <p>Already have an account? <a href="#" id="auth-switch-link">Log In</a></p>
                    </span>
                </div>
            </form>
        `;
        signupTab.style.background='yellow'
        loginTab.style.background='white'

        

        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();
            showLoginForm();
        });

        togglePasswordVisibility('password', 'toggle-password');
        togglePasswordVisibility('confirm-password', 'toggle-confirm-password');
    }

    function showLoginForm() {
        authFormBody.innerHTML = `
            <form id="login-form" action="#">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="password">Password</label>
                <div class="password-wrapper">
                    <i class="fas fa-eye" id="toggle-password"></i>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Login</button>
                    <span class="auth-form-switch">
                        <p>Don't have an account? <a href="#" id="auth-switch-link">Sign Up</a></p>
                    </span>
                </div>
            </form>
        `;
signupTab.style.background='white'
        loginTab.style.background='yellow'
        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();

            showSignupForm();
        });

        togglePasswordVisibility('password', 'toggle-password');
    }

    function togglePasswordVisibility(inputId, toggleId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleId);

        toggleIcon.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }

    signupTab.addEventListener('click', showSignupForm);
    loginTab.addEventListener('click', showLoginForm);

    // Initially show the signup form
    showSignupForm();
});
