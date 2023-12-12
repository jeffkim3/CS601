document.addEventListener('DOMContentLoaded', function() {
    const firstNameField = document.getElementById("firstName");
    const lastNameField = document.getElementById("lastName");
    const emailAddressField = document.getElementById("emailAddress");

    const form = document.getElementById("myForm");
    form.addEventListener('submit', handleSubmit);

    firstNameField.addEventListener('input', function() { validateFirstName(); checkGeneralError(); });
    lastNameField.addEventListener('input', function() { validateLastName(); checkGeneralError(); });
    emailAddressField.addEventListener('input', function() { validateEmailAddress(); checkGeneralError(); });
});

function handleSubmit(event) {
    validateFirstName();
    validateLastName();
    validateEmailAddress();

    if (hasValidationError()) {
        document.getElementById("generalError").textContent = "Please correct the errors before submitting.";
        event.preventDefault();
    } else {
        document.getElementById("generalError").textContent = "";
    }
}

function checkGeneralError() {
    if (isValidName(document.getElementById("firstName").value) &&
        isValidName(document.getElementById("lastName").value) &&
        isValidEmailAddress(document.getElementById("emailAddress").value)) {
        document.getElementById("generalError").textContent = "";
    }
}

function validateFirstName() {
    const firstName = document.getElementById("firstName").value;
    if (!isValidName(firstName)) {
        document.getElementById("firstNameError").textContent = "First name must be at least 2 characters long and contain only alphabets.";
    } else {
        document.getElementById("firstNameError").textContent = "";
    }
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value;
    if (!isValidName(lastName)) {
        document.getElementById("lastNameError").textContent = "Last name must be at least 2 characters long and contain only alphabets.";
    } else {
        document.getElementById("lastNameError").textContent = "";
    }
}

function validateEmailAddress() {
    const emailAddress = document.getElementById("emailAddress").value;
    if (!isValidEmailAddress(emailAddress)) {
        document.getElementById("emailAddressError").textContent = "Please enter a valid email address.";
    } else {
        document.getElementById("emailAddressError").textContent = "";
    }
}

function isValidName(name) {
    return /^[A-Za-z]{2,}$/.test(name);
}

function isValidEmailAddress(email) {
    if (email.includes('@')) {
        return true;
    } else {
        return false;
    }
}

function hasValidationError() {
    const errorElements = document.getElementsByClassName('error');
    return Array.from(errorElements).some(element => element.textContent !== '');
}
