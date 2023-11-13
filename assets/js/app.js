const submitForm = document.getElementById("form-submit");

// form submit event listener
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { expressionType, expression } = Object.fromEntries(formData);
  console.log(expressionType, expression);
  if (expressionType === "none" || !expression) {
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
