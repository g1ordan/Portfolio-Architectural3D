
/*ABRINDO A FUNCIONALIDADE DO MENU HAMBURGUER*/

var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("show-menu");
});

/*FECHANDO A FUNCIONALIDADE DO MENU HAMBURGUER*/

/*ABRINDO FUNCIONALIDADE DO ORÇAMENTO*/
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#nightscene").addEventListener("change", atualizarPreco)
document.querySelector("#plantasim").addEventListener("change", atualizarPreco)
document.querySelector("#plantanao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value
  if(prazo != 10)
  document.querySelector("label[for=prazo]").innerHTML = "Prazo: " +prazo+ "dia(s).(+ 10% ao dia)"
  else
  document.querySelector("label[for=prazo]").innerHTML = "Prazo normal: 10 dia(s)"
  atualizarPreco()
})

function atualizarPreco(){
  const qtde = document.querySelector("#qtde").value
  const nightScene = document.querySelector("#nightscene").checked
  const plantaSim = document.querySelector("#plantasim").checked
  const prazo = document.querySelector("#prazo").value
  
  let preco = qtde * 150
  if (nightScene) preco = preco + (preco * 0.2) 
  if (plantaSim) preco = preco + 350
  let taxaUrgencia = 1 - prazo*0.1;
  preco *= 1 + taxaUrgencia

  document.querySelector("#preco").innerHTML = " Valor a pagar: R$" + preco.toFixed(2)
}

/*FECHANDO FUNCIONALIDADE DO ORÇAMENTO*/

/*ABRINDO FUNCIONALIDADE DO MENU DE OPINIÃO*/
/*pegando os elementos*/
var container = document.getElementById("chat-content")
var arrow = document.getElementById("arrow_up"); 
var closeArrow = document.getElementById("arrow_down")
var containerChat = document.getElementsByClassName("container_chat")[0]
var closeChat = document.getElementById("xclose")
var btnSeguinte = document.getElementById("form")
var container2 = document.getElementById("chat-content2")
var enviar = document.getElementById("form2")
/*elementos declarados em var*/

/*adicionando evento e abrindo função ao clicar nas setas*/
arrow.addEventListener("click", function() {
  container.style.display = "block"
  arrow.style.display = "none"
  closeArrow.style.display = "block"

  closeArrow.addEventListener("click", function(){
    container.style.display = "none"
    closeArrow.style.display = "none"
    arrow.style.display = "block"
  })
})
/*fechando evento*/

/*adicionando evento e abrindo função ao clicar no button seguinte e no x*/
btnSeguinte.addEventListener("submit", function(event){
  event.preventDefault()
  container.style.display = "none"
  container2.style.display = "block"
  closeArrow.style.display = "none"
  closeChat.style.display = "block"

  closeChat.addEventListener("click", function(){
    container2.style.display = "none"
    closeArrow.style.display = "none"
    containerChat.style.display = "none" 
})
})
/*fechando evento*/

/*adicionando evento e abrindo função ao clicar no button enviar*/
enviar.addEventListener("submit", function(event){
  event.preventDefault()
  containerChat.style.display = "none" 
  closeChat.style.display = "none"
  container2.style.display = "none"
})



/*ABRINDO FUNCIONALIDADE DE VALIDAÇÃO*/
/*let email = document.getElementById("email")
let nome = document.getElementById("nome")
let mensagem = document.getElementById("mensagem")
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  if(email.value == '' || nome.value == '' || mensagem.value == '')
  alert("Você precisa preencher corretamente todos os campos")

  e.preventDefault()
  
})

email.addEventListener("keyup", () => {
  if(validateEmail(email.value !== true))
  alert("O Formato do e-mail deve ser: abc@abc")
})

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validar(){
  console.clear();
  var padraoNome = /[^a-zà-ú]/gi;
  var valida_nome = nome.match(padraoNome);

  if( valida_nome || !nome ){
     console.log("Nome possui caracteres inválidos ou é vazio")
  }else{
     console.log("Nome Ok!")
  }
}*/
