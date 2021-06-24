const validate = (inputs) => {
  const errors = {};
  var letters = /^[A-Za-z]+$/;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!inputs.first_name) {
    errors.first_name = "Please Enter Your First Name";
  } else if (!inputs.first_name.match(letters)) {
    errors.first_name = "Please Enter Only Letters";
  }

  if (!inputs.last_name) {
    errors.last_name = "Please Enter Your Last Name";
  } else if (!inputs.last_name.match(letters)) {
    errors.last_name = "Please Enter Only Letters";
  }

  if (!inputs.email) {
    errors.email = "Please Enter Your Email";
  } else if (!inputs.email.match(emailPattern)) {
    errors.email = "Please Enter Valid Email";
  }

  return errors;
};

export default validate;
