//your JS code here. If required.
const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const checkBox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
var existingButton = document.getElementById("existing");

function updateExistingButton() {
  if (localStorage.getItem("username")) {
    existingButton.style.display = "block";
  } else {
    existingButton.style.display = "none";
  }
}

submit.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  
  if (checkBox.checked) {
    localStorage.setItem('username', userName.value);
    localStorage.setItem('password', passWord.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
  
  updateExistingButton();
  alert(`Logged in as ${userName.value}`);
});

existingButton.addEventListener("click", function() {
  var savedUsername = localStorage.getItem("username");
  alert("Logged in as " + savedUsername);
});

// Call updateExistingButton when the page loads
updateExistingButton();