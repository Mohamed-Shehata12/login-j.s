function validateForm() {
  var firstName = document.getElementById("f-Name").value;
  var lastName = document.getElementById("l-Name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var conPassword = document.getElementById("con-password").value;
  var errorFirst = document.getElementById("error-f");
  var text = "";

  if (firstName.length < 3) {
    text = "Please Enter Valid Name";
    errorFirst.innerHTML = text;
    document.getElementById("f-Name").focus();
    return false;
  } else if (lastName.length < 3) {
    text = "Please Enter Valid Last Name";
    errorFirst.innerHTML = text;
    document.getElementById("l-Name").focus();
    return false;
  } else if (email.indexOf("@") == -1) {
    text = "Please Enter Valid Email";
    errorFirst.innerHTML = text;
    document.getElementById("email").focus();
    return false;
  } else if (password.length < 6) {
    text = "Password must be at least 6 characters long";
    errorFirst.innerHTML = text;
    document.getElementById("password").focus();
    return false;
  } else if (conPassword !== password) {
    text = "Password Is Not Equail";
    errorFirst.innerHTML = text;
    document.getElementById("con-password").focus();
    return false;
  } else {
    alert("Done");
    return true;
  }
}
