function checkForm(inputText) {
  console.log("::: Running checkForm :::", inputText);
  const isValidURL =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  if (isValidURL.test(inputText) === false) {
    alert("Please enter a valid URL");
    throw Error("Not a valid URL");
  }
}

export { checkForm };
