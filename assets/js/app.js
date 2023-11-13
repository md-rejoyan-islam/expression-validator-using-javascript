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
    showMessage("success", `${expressionType} is correct`);
  } else {
    showMessage("error", `${expressionType} is not correct`);
  }
});

// expression pattern
const expressionPattern = {
  email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  phone: /(^([+]{1}[8]{2}|0088)?(01){1}[1-9]{1}\d{8})$/,
  url: /^(http|https):\/\/(www\.)?[a-zA-Z0-9]+\.[A-Za-z]+$/,
  jsFile: /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/,
  image:
    /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpg|.png|.gif|.webp|.jpeg|.svg|.gif|.avif)$/,
  hex: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
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
    case "jsFile":
      return expressionPattern.jsFile.test(value);
    case "image":
      return expressionPattern.image.test(value);
    case "hex":
      return expressionPattern.hex.test(value);
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
