const container = document.querySelector(".container"), 
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
logIn = document.querySelector(".login-link");

// js code to show/hide password and change icon

pwShowHide.forEach(eyeIcon => {
     eyeIcon.addEventListener("click", () => {
          pwFields.forEach(pwField => {
               if (pwField.type === "password") {
                    pwField.type = "text";

                    pwShowHide.forEach(icon => {
                         icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
               }
               else {
                    pwField.type = "password";

                    pwShowHide.forEach(icon => {
                         icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
               }
          })
     })
})

// js code to appear signup and login form
  
signUp.addEventListener("click", ( ) => {
     container.classList.add("active");
});
logIn.addEventListener("click", ( ) => {
     container.classList.remove("active");
});

// Sign up validation
function validateSignup() {
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password2").value;
     let passwordConfirm = document.getElementById("passwordConfirm").value;
   
     if (name === "") {
          alert("Username must be filled out");
          return false;
     }

     if (email === "") {
       alert("Email must be filled out");
       return false;
     }
   
     if (password === "") {
       alert("Password must be filled out");
       return false;
     }
   
     if (password !== passwordConfirm) {
       alert("Passwords do not match");
       return false;
     }

     var table = document.getElementById("myTable");
     var row = table.insertRow(-1);
 
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
 
     cell1.innerHTML = name;
     cell2.innerHTML = email;

     document.getElementById("signupForm").reset();
}

let form = document.getElementById("signupForm");
form.addEventListener("submit", function(event) {
     if (!validateSignup()) {
          event.preventDefault();
     }
    
});

// Login validation 
function validateLogin() {
     let email = document.getElementById("loginMail").value;
     let password = document.getElementById("loginPassword").value;
     
     if (email === "") {
          alert("Email must be filled out");
          return false;
     }
     
     if (password === "") {
          alert("Password must be filled out");
          return false;
     }
     
     return true;
}


