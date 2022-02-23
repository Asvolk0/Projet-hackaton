

const form = document.querySelector("form");




form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (
    
      cgt.checked
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