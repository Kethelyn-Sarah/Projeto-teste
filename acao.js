const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function(){
  document.body.classList.toggle("dark")
});



document.getElementById("btn-ler-mais").addEventListener("click", function() {
  const textDiv = document.querySelector(".text");
  const button = document.getElementById("btn-ler-mais");
  
  if (textDiv.classList.contains("expanded")) {
      textDiv.classList.remove("expanded");
      button.textContent = "LER MAIS";
  } else {
      textDiv.classList.add("expanded");
      button.textContent = "LER MENOS";
  }
});