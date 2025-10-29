document.addEventListener("DOMContentLoaded", function () {
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const togglePassword = document.getElementById('togglePassword');
      const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
      const form = document.getElementById('signupForm');

      // ✅ Toggle password visibility
      togglePassword.addEventListener('click', function () {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
      });

      toggleConfirmPassword.addEventListener('click', function () {
        const type = confirmPassword.type === 'password' ? 'text' : 'password';
        confirmPassword.type = type;
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
      });

      // ✅ Password validation (live checks)
      password.addEventListener('input', () => {
        const val = password.value;
        const rules = [
          val.length >= 8,
          val.length <= 64,
          /[A-Z]/.test(val),
          /[a-z]/.test(val),
          /\d/.test(val),
          /[!@#$%^&*(),.?":{}|<>]/.test(val)
        ];
        rules.forEach((ok, i) => updateRule(`rule${i + 1}`, ok));
      });

      function updateRule(id, passed) {
        const rule = document.getElementById(id);
        const icon = rule.querySelector('i');
        if (passed) {
          icon.style.color = '#00FF7F';
          rule.style.color = '#00FF7F';
        } else {
          icon.style.color = '#777';
          rule.style.color = '#aaa';
        }
      }

      // ✅ Prevent submit if passwords don't match
      form.addEventListener('submit', function (e) {
        if (password.value !== confirmPassword.value) {
          e.preventDefault();
          alert('Passwords do not match!');
        }
      });
    });
  