function login() {
      const email = document.getElementById("loginEmail").value;

      if (email === "") {
        alert("Please enter an email");
        return;
      }

      // Save email
      localStorage.setItem("userEmail", email);

      // Go to create account page
      window.location.href = "Started.html";
    }
  
