const form = document.getElementById("form");
const username = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameErr = document.getElementById("nameErr");
const phoneErr = document.getElementById("phoneErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const buttonn = document.getElementById('buttonn');
const submit = document.getElementById("sbmt");
const arr = document.getElementById("arr");
const done = document.getElementById("done");

let validName = false;
let validPhone = false;
let validEmail = false;
let validPassword = false;

function show() {
  form.style.display = "block";
  setTimeout(() => {
    form.classList.add("popup");
    form.style.transform = "scale(1) rotate3d(-1,-2, -1, 360deg)";
  }, 50);
}

username.addEventListener("blur", () => {
  let str = username.value;
  let regex = /^[a-z\s]{2,15}[0-9]+$/i;
  if (regex.test(str)) {
    console.log("match hua");
    validName = true;
    nameErr.style.visibility = "hidden";
  } else {
    console.log("match nhi hua");
    nameErr.style.visibility = "visible";
    validName = false;
  }
});

phone.addEventListener("blur", () => {
  let str = phone.value;
  let regex = /[0-9]{10}/;
  if (regex.test(str)) {
    console.log("no match hua");
    validPhone = true;
    phoneErr.style.visibility = "hidden";
  } else {
    console.log("no match nhi hua");
    phoneErr.style.visibility = "visible";
    validPhone = false;
  }
});

email.addEventListener("blur", () => {
  let str = email.value;
  let regex = /^([\w\d\-]{2,64})@([\w\d\-]+)\.(\w){2,8}(\.(\w){2,8})*$/;
  if (regex.test(str)) {
    console.log("email match hua");
    validEmail = true;
    emailErr.style.visibility = "hidden";
  } else {
    console.log("email match nhi hua");
    emailErr.style.visibility = "visible";
    validEmail =false;
  }
});

password.addEventListener("blur", () => {
  let str = password.value;
  let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}/;
  if (regex.test(str)) {
    console.log("passwod match hua");
    validPassword = true;
    passwordErr.style.visibility = "hidden";
  } else {
    console.log("password match nhi hua");
    passwordErr.style.visibility = "visible";
    validPassword = false;
  }
});
function butt() {
    if (validPassword && validEmail && validPhone && validName) {
        console.log("true hai");
    buttonn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    submit.style.transform = "translate(0, 1.3rem)";
    setTimeout(() => {
      arr.style.transform = "translate(7rem, 0)";
    }, 350);
    setTimeout(() => {
      done.style.transform = "translate(0, 1.3rem)";
    }, 900);
    }
    else {
        buttonn.style.border = '2px solid #bf0000';
    }
}
