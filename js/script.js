(function() {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telephoneInput = document.querySelector('#phone-number');
  let messageInput = document.querySelector('#message')
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
    
    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  function validateEmail() {
    let value = emailInput.value;
    
    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }

    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    
    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validateTelephone() {
    let value = telephoneInput.value;
    
    if (!value) {
      showErrorMessage(telephoneInput, 'A phone number is a required.');
      return false;
    }
    
    if (value.length < 12) {
      showErrorMessage(telephoneInput, 'Please enter a valid phone number.');
      return false;
    }
    
    showErrorMessage(telephoneInput, null);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value;

    if (!value) {
      showErrorMessage(messageInput, 'Please leave a message');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidTelephone = validateTelephone();
    let isValidMessage = validateMessage();
    return isValidEmail && isValidTelephone && isValidMessage;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Your message has been sent!');
    }
  });
  
  emailInput.addEventListener('input', validateEmail);
  telephoneInput.addEventListener('input', validateTelephone);
  messageInput.addEventListener('input', validateMessage);

})();