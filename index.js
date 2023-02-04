const mobile_nav = document.getElementsByClassName("mobile-navbar-btn");
const nav_header = document.querySelector("header");
// Input Fields
const userName = document.getElementById("user-name");
const userEmailId = document.getElementById("user-email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitBtn = document.getElementById("btn");

const inputFields = [userName, userEmailId, subject, message];

const vaildInputFields = [false, false, false, false];

// REGEX /[^A-Za-z0-9 .'?!,@$#-_]+$/
const userNameRegex = /^[a-zA-Z0-9_-]+$/;
const userEmailIdRegex =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const subjectRegex = /^Subject: (.+)$/im;
const messageRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/;

const inputFieldsRegex = [
  userNameRegex,
  userEmailIdRegex,
  subjectRegex,
  messageRegex,
];

const handleToggleNavbar = () => {
  console.log("Hello!!");
  nav_header.classList.toggle("active");
};

handleInputFields = (index) => {
  if (!inputFieldsRegex[index].test(inputFields[index].value)) {
    inputFields[index].style.border = "2px solid red";
    console.log("Invalid : ", inputFields[index].value);
    vaildInputFields[index] = false;
    console.log(vaildInputFields);
  } else {
    inputFields[index].style.border = "2px solid green";
    console.log("Valid : ", inputFields[index].value);
    vaildInputFields[index] = true;
    console.log(vaildInputFields);
  }

  if (vaildInputFields.indexOf(false) >= 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};

const handleFormSubmit = () => {
  const nameValue = userName.value;
  const emailIdValue = userEmailId.value;
  const subjectValue = subject.value;
  const messageValue = message.value;

  let userData = {
    nameValue,
    emailIdValue,
    subjectValue,
    messageValue,
  };

  console.log(userData);
};

// Event Listeners
mobile_nav[0].addEventListener("click", () => handleToggleNavbar());

inputFields.map((inputFields, index) => {
  inputFields.addEventListener("change", () => handleInputFields(index));
});

submitBtn.addEventListener("click", () => handleFormSubmit());
