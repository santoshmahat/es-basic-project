import saveBtn from './btn';
import formValue from './form';
import User from './User';

const user = new User();



saveBtn.addEventListener("click", function(){
  // console.log("user", formValue);
  const { 
    firstNameField, 
    lastNameField, 
    emailField, 
    addressField, 
     imageField
  } = formValue;

  const newUser = {
    firstName:firstNameField.value,
    lastName:lastNameField.value,
    email:emailField.value,
    address:addressField.value,
    image:imageField.value,
  }
  user.addUser(newUser)
})