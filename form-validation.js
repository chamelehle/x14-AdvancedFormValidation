function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if (userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Username shorter than 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
else if(userEntered.length > 20)
{
  document.getElementById("usernameError").innerHTML="Username longer than 20 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
else if(/\s/.test(userEntered))
{
  document.getElementById("usernameError").innerHTML="Username matches password.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}

  else {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  if (passEntered == userEntered) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password matches username.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if(passEntered.match(/password/i))
{
  document.getElementById("passwordError").innerHTML="Password can't be password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else {
    document.getElementById("usernameGroup").classList.add("has-success");
}
}
