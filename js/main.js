let submitBtn = document.getElementById("submit");
console.log(isValidEmail("sumn@gmaicom"));
submitBtn.addEventListener("click", (e) => {
  let form = document.getElementById("form");
  let hobys = document.getElementById("hobys");
  let name = document.getElementById("Name");
  let phoneNumber = document.getElementById("phoneNumber");
  let email = document.getElementById("Email");
  let message = document.getElementById("textArea");

  if (hobys.value == "default") {
    alert("Select your hoby!!");
    form.action = "./contact.html";
  }

  if (isValidEmail(email.value)) {
    localStorage.setItem("email", email.value);
  } else {
    alert("Email is Not Valid!!");
    form.action = "./contact.html";
  }
  if (isValidNumber(phoneNumber.value)) {
    localStorage.setItem("phoneNumber", phoneNumber.value);
  } else {
    alert("Phone number is Not valid!!");
    form.action = "./contact.html";
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("hoby", hobys.value);
  localStorage.setItem("message", message.value);
});

function isValidEmail(email) {
  lastPart = "";
  for (let i = email.length; i >= email.length - 4; i--) {
    lastPart = email[i] + lastPart;
  }

  let isAm = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      isAm = true;
      break;
    }
  }
  return lastPart === ".comundefined" && isAm;
}

function isValidNumber(phoneNumber) {
  if (phoneNumber.length != 10) return false;

  for (let i = 0; i < phoneNumber.length; i++) {
    if (isNotNumeric(phoneNumber[i])) {
      return false;
    }
  }

  return true;
}

function isNotNumeric(digit) {
  if (!(digit >= "0" && digit <= "9")) return true;
}
