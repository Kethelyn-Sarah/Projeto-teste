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

//mini clendartio
//ptrcisa funcionar

let meses=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

let data = new Date();
let diaNumrto = data.getDay();
let dia = data.getDate();
let mes = meses[data.getMonth()];

let  ativo = document.querySelector(".mini-calender li:nth-child("+diaNumrto+")");
ativo.classList.add("atual");

let h1 = document.createElement('h1');
h1.innerHTML = dia;
ativo.appendChild(h1);

let h5 = document.createElement('h5');
h5.innerHTML = mes;
ativo.appendChild(h5);