import saveBtn from './btn';
import formValue from './form';
import User from './User';
import './style.css';

const user = new User();



saveBtn.addEventListener("click", function () {
  // console.log("user", formValue);
  const {
    firstNameField,
    lastNameField,
    emailField,
    addressField,
    imageField
  } = formValue;

  const newUser = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    address: addressField.value,
    image: (imageField.files && imageField.files[0]) ? URL.createObjectURL(imageField.files[0]) : ""
  }

  return new Promise((resolve, reject) => {
    user.addUser(newUser)
    const success = true;
    if (success) {
      resolve("this is success ")
    } else {
      reject("this is 404 error");
    }

  }).then((response) => {
    console.log("resolve", response)
    // console.log("files", imageField.files)
    // console.log("getUSers", user.getUser())
    const userList = document.getElementById("user-list");
    user.getUser().map((user) => {
      const li = document.createElement("LI");
      const img = document.createElement("IMG");
      img.src = user.image;
      li.textContent = `${user.firstName} ${user.lastName} ${user.email} ${user.address}`
      li.appendChild(img)
      userList.appendChild(li);
    })
  }).catch((error) => {
    console.log("error", error)
  })

})