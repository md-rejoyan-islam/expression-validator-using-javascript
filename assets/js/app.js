const submitForm = document.getElementById("form-submit");
const error = document.getElementById("error");

// form submit event listener
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { expressionType, expression } = Object.fromEntries(formData);
  console.log(expressionType, expression);
  if (expressionType === "none" || !expression) {
    return showMessage("error", "Please fill the form");
  }
  const result = checkExpression(expressionType, expression);
  if (result) {
    showMessage("success", "Expression is correct");
  } else {
    showMessage("error", "Expression is incorrect");
  }
});

// expression pattern
const expressionPattern = {
  email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
  phone: /^(\+98|0)?9\d{9}$/,
  url: /^(http|https):\/\/(www\.)?[a-zA-Z0-9]+\.[A-Za-z]+$/,
  jsFile: /^([a-zA-Z0-9\s_\\.\-:])+(.js)$/,
};

//expressions types
function checkExpression(type, value) {
  switch (type) {
    case "email":
      return expressionPattern.email.test(value);
    case "phone":
      return expressionPattern.phone.test(value);
    case "url":
      return expressionPattern.url.test(value);
  }
}

// error and success messages
function showMessage(type, message) {
  error.classList.remove("hidden");
  // message show
  error.querySelector("#errorMessage").textContent = message;
  if (type === "error") {
    error.classList.add("bg-red-500");
  } else if (type === "success") {
    error.classList.add("bg-green-500");
  } else if (type === "error") {
    error.classList.add("bg-red-500");
  }

  // remove message after 5 seconds
  setTimeout(() => {
    error.classList.add("hidden");
    error.classList.remove("bg-red-500");
    error.classList.remove("bg-green-500");
  }, 5000);
}

// message hide
function messageHide() {
  error.classList.add("hidden");
  error.classList.remove("bg-red-500");
  error.classList.remove("bg-green-500");
}
