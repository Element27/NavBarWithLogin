// navlink elements for responsiveness
const hamIcon = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");


// get elements in form
const form = document.getElementById("form")
const userName = document.getElementById("userName")
const phoneNumber = document.getElementById("phoneNumber")
const emailAddress = document.getElementById("emailAddress")
const gender = document.getElementById("gender")


// password inputs
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");


// password icons
const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

// .has-warning, .has-error, or .has-success

// addeventlistener to form

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});


const checkInputs = () => {
    // trim elements to remove white space
    const usernameValue = userName.value.trim();
    const emailValue = emailAddress.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // check username value and length 
    if (usernameValue === '' && usernameValue.length < 3) {
        setErrorFor(userName);
    } else {
        setSuccessFor(userName);
    }

    // check if email value is valid 
    if (emailValue === '') {
        setErrorFor(emailAddress);
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailAddress);
    } else {
        setSuccessFor(emailAddress);
    }

    // check if email meets requirement
    function isEmail(emailAddress) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress);
    }


    // check valid password
    if (passwordValue === '' && passwordValue.length < 6) {
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }

    // cfirm password check
    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword);
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword);
    } else {
        setSuccessFor(confirmPassword);
    }

    // gender selection check
    if (gender.value == "gender") {
        setErrorFor(gender, '');
    } else {
        setSuccessFor(gender);
    }

}
function setErrorFor(input) {
    const inputEl = input    
    inputEl.style.borderColor = "#dc3546"
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    const inputEl = input
    inputEl.style.borderColor="#27a844"
}


// toggle menu visibility onclick of hamburger
hamIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})





// Toggle password visibility
togglePassword.addEventListener("click", function () {

    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

});

// toggle onfirm password visibililty
toggleConfirmPassword.addEventListener("click", function () {

    // toggle the type attribute
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);


});


