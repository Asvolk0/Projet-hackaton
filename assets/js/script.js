
const errorConfirmPassword = document.querySelector(".error-confirmPassword");
const form = document.querySelector("form");

password.addEventListener("input", () => {
  if (
    password.value.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/
    )
  ) {
    console.log("True");
  } else {
    console.log("False");
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    errorConfirmPassword.textContent = "Les mots de passe correspondent";
    errorConfirmPassword.style.color = "green";
  } else {
    errorConfirmPassword.textContent = "Les mots de passe ne correspondent pas";
    errorConfirmPassword.style.color = "red";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    password.value === confirmPassword.value &&
    charte.checked
  ) {
    alert("Votre formulaire a été soumis");
    clearForm();
  } else {
    alert("Veuillez tout remplir svp !");
  }
});



  
function clearForm() {
    cgt.checked = false;
}