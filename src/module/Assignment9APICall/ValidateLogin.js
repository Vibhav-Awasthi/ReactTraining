const validate = (inputs) => {
  const errors = {};
  var letters = /^[A-Za-z]+$/;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!inputs.Username) {
    errors.Username = "Please Enter Your Name";
  } else if (!inputs.Username.match(letters)) {
    errors.Username = "Please Enter Only Letters";
  }

  if (!inputs.Email) {
    errors.Email = "Please Enter Your Email";
  } else if (!inputs.Email.match(emailPattern)) {
    errors.Email = "Please Enter Valid Email";
  }

  if (!inputs.Password) {
    errors.Password = "Please Enter Your Password";
  } else if (inputs.Password.length < 6) {
    errors.Password = "Please Enter Password of 6 digits";
  }

  return errors;
};

export default validate;
