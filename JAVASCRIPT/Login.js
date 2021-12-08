/*
========================================
    ABRE E FECHA LOGIN // REGISTRO 
========================================
 */



//Guarda numa variavel o botão de login e registo e a caixa do formulário
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containerform");


// Ao clicar no botão de registar, ele vai ativar uma classList "sign-up-mode" que no CSS vai fazer a transição das laterais

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});


// Ao clicar no botão de registar, ele vai remover a classList "sign-up-mode" que no CSS vai fazer a transição das laterais (anula a transição anterior)
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



/*
========================================
          LOGIN FORMULÁRIO 
========================================
 */


//////////////////////////////////VAI BUSCAR INPUTS DO REGISTO PARA CONFIRMAR LOGIN ///////////////////////////////////////



//GUARDAR VARIAVEIS: 

const form = document.getElementById('form');
const email = document.getElementById('maillogin');
const password = document.getElementById('passwordlogin');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput(){

  let testaremail = false;
  let testarpass = false; 
  //vai buscar os values dos inputs
 
  //BUSCAR DADOS DO REGISTO 

  let pessoa = JSON.parse (localStorage.getItem("Users"));
  //definir o que vai buscar a array -- 
  let pessoadata = pessoa[0];
  //buscar dados do localstorage -- 
  emailpessoa = pessoadata[8].email;
  passpessoa = pessoadata[9].pass;
 
  console.log(emailpessoa);
  console.log(passpessoa);

  const passwordValue = password.value.trim();
  
  const  emailValue = email.value.trim();
  
  //trim serve para eliminar os espaços em branco, caso a pessoa ter carregado na tecla espaço

  if(emailValue === ''){
    setErrorFor(email, 'O campo email tem que estar preenchido')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email não é válido');
  } else if (emailValue == emailpessoa){
    setSuccessFor(email);
    testaremail = true;
  } else{
    setErrorFor(email, 'Este email não está registado')
  }

  if (passwordValue === ''){
    setErrorFor(password, 'O campo password tem que estar preenchido')
  } else if (passwordValue.length <=7){
    setErrorFor(password, 'Password tem que ter pelo menos 8 carateres')
  } else if (passwordValue == passpessoa){
    setSuccessFor(password);
    testarpass = true;
  } else {
    setErrorFor(email, 'Passowrd errada')
  };



function setErrorFor(input, message){
  
  const formulario = input.parentElement; //.formulario
  const small = formulario.querySelector ('small');

  //adicionar a mensagem de error dentro do small
  small.innerText= message;

  //adicionar a classe error
  formulario.className = 'formulario error';
}

function setSuccessFor(input){
  const formulario = input.parentElement; 
  formulario.className = 'formulario success';
}

function isEmail (email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

if (testaremail == true && testarpass == true){
  showConfirmation(); // adicionar variavel de popup de confirmação 
  // adicionar ao log storage
}


function showConfirmation(){
  
  //abre popup de confirmação e ao carregar no ok vai para a página inicial. 


  let pessoa = JSON.parse (localStorage.getItem("Users"));
  let pessoadata = pessoa[0];
  
  nomepessoa= pessoadata[0].Nome;
  
  const PopUpSign = document.querySelector('.PopUpSign');
  const PopUpSignContent = document.querySelector('.PopUpSignContent');
  const closeSub = document.querySelector('.closesub');
  const ok = document.querySelector('#pagina');

   
  PopUpSign.classList.add('show');
  PopUpSignContent.classList.add('showContent');
  document.getElementById('msgpop').innerText = "Seja Bem vinda de volta  "  + nomepessoa;
 

  ok.addEventListener('click', () =>{
    window.location.href = "/HTML/Index.html"
  })

  closeSub.addEventListener('click', () => {
    PopUpSign.classList.remove('show');
    PopUpSignContent.classList.remove('showContent');
  });

  PopUpSign.addEventListener('click', () => {
    PopUpSign.classList.remove('show');
    PopUpSignContent.classList.remove('showContent');
  });
}
}





/*
========================================
    REGISTO FORMULÁRIO 
========================================
 */

//GUARDAR VARIAVEIS: 

const form1 = document.getElementById('form2');

const nome = document.getElementById ('nome');
const apelido = document.getElementById ('apelido');

const data = document.getElementById ('data');

const morada = document.getElementById ('morada');
const locas1 = document.getElementById ('locas1');
const locas2 = document.getElementById ('locas2');
const localidaderegisto = document.getElementById ('localidaderegisto');

const nif = document.getElementById ('nif');
const mailregisto = document.getElementById ('mailregisto');
const passwordRegisto = document.getElementById ( 'passregisto');



form1.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputRegisto();
});

function checkInputRegisto(){

  //testar inputs 
  let testnome = false; 
  let testapelido = false; 
  let testdata = false; 
  let testmorada = false;
  let testlocas1 = false; 
  let testlocas2 = false; 
  let testlocalidadeRegisto = false; 
  let testnif = false; 
  let testmailRegisto = false; 
  let testpassRegisto = false; 


  //vai buscar os values dos inputs

  const nomeValue = nome.value.trim();
  const apelidoValue = apelido.value.trim();
  const dateValue = data.value.trim();
  const moradaValue = morada.value.trim(); 
  const locas1Value = locas1.value.trim();
  const locas2Value = locas2.value.trim();
  const localidadeRegistoValue = localidaderegisto.value.trim();
  const nifValue = nif.value.trim();
  const mailRegistoValue = mailregisto.value.trim();
  const passRegistoValue = passwordRegisto.value.trim();

  //VALIDAÇÕES --- ERROS


  // NOME E APELIDO 
  if(nomeValue === ''){
    setErrorFor(nome, 'O campo nome tem que estar preenchido')
  } else if (apelidoValue === "") {
    setErrorFor(nome, 'O campo apelido tem que estar preenchido')
  } else {
    // adiciona a class success
    setSuccessFor(nome);
    testnome = true;
    testapelido = true; 
  };

  if (dateValue === ''){
    setErrorFor (data, 'O campo tem que estar preenchido');
  } else {
    setSuccessFor (data);
    testdata = true; 
  }

  if (moradaValue === ''){
    setErrorFor (morada, 'O campo tem que estar preenchido');
  } else {
    setSuccessFor (morada);
    testmorada = true; 
  }

  if (locas1Value === ''){
    setErrorFor (localidaderegisto, 'Preencha o código Postal');
  } else if (locas1Value.length != 4){
    setErrorFor (localidaderegisto, 'Preencha corretamente o código Postal')
  }else if (locas2Value === ''){
    setErrorFor (localidaderegisto, 'Preencha o código Postal');
  }else if (locas2Value.length != 3){
    setErrorFor (localidaderegisto, 'Preencha corretamente o código Postal')
  }else if (localidadeRegistoValue === '') {
    setErrorFor (localidaderegisto, 'Preencha o campo localidade');
  } else {
    setSuccessFor (localidaderegisto);
    testlocas1 = true; 
    testlocas2 = true;
    testlocalidadeRegisto = true;
  }

  if (nifValue === ''){
    setErrorFor (nif, 'Preencha o campo');
  } else if (nifValue.length != 9){
    setErrorFor (nif, 'Preencha corretamente o campo');
  } else {
    setSuccessFor (nif)
    testnif=true;
  }

  if(mailRegistoValue === ''){
    setErrorFor(mailregisto, 'O campo email tem que estar preenchido')
  } else if (!isEmail(mailRegistoValue)) {
    setErrorFor(mailregisto, 'Email não é válido');
  } else {
    // adiciona a class success
    setSuccessFor(mailregisto);
    testmailRegisto = true;
  };

  if (passRegistoValue === ''){
    setErrorFor(passwordRegisto, 'O campo password tem que estar preenchido')
  } else if (passRegistoValue.length <=7){
    setErrorFor(passwordRegisto, 'Password tem que ter pelo menos 8 carateres')
  } else{
    setSuccessFor(passwordRegisto);
    testpassRegisto = true;
  };





function setErrorFor(input, message){
  
  const formulario1 = input.parentElement; //.formulario1
  const small = formulario1.querySelector ('small');

  //adicionar a mensagem de error dentro do small
  small.innerText= message;

  //adicionar a classe error
  formulario1.className = 'formulario1 error2';
}

function setSuccessFor(input){
  const formulario1 = input.parentElement; 
  formulario1.className = 'formulario1 success2';
}

function isEmail (mailregisto){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mailregisto)
}

if (testnome == true && testapelido == true  && testmorada == true && testlocas1 == true && testlocas2 == true && testlocalidadeRegisto == true && testnif == true && testmailRegisto == true && testpassRegisto == true){
  ShowConfirmation2(); 
  
  
  
  // adicionar ao log storage

  let users = JSON.parse(localStorage.getItem('Users')) || [];
  let userData = [
    {Nome: nomeValue},
    {Apelido: apelidoValue},
    {DataN: dateValue},
    {Morada: moradaValue},
    {Loca1: locas1Value},
    {Loca2: locas2Value},
    {Loca3: localidadeRegistoValue},
    {Nif: nifValue},
    {email: mailRegistoValue},
    {pass: passRegistoValue},
    {email2: ""},
    {telefone : ""},
    {telefone2: ""},
    {image: "/images/profile.jpg"}];

    users.push(userData);
    localStorage.setItem('Users',JSON.stringify(users));
  
}


function ShowConfirmation2(){
  //abre popup de confirmação e ao carregar no ok vai para a página inicial. 

  
  const PopUpSign = document.querySelector('.PopUpSign');
  const PopUpSignContent = document.querySelector('.PopUpSignContent');
  const closeSub = document.querySelector('.closesub');
  const ok = document.querySelector('#pagina');

   
  PopUpSign.classList.add('show');
  PopUpSignContent.classList.add('showContent');
  document.getElementById('msgpop').innerText = "O seu registo foi executado com sucesso "  
  

  closeSub.addEventListener('click', () => {
    PopUpSign.classList.remove('show');
    PopUpSignContent.classList.remove('showContent');
  });

  PopUpSign.addEventListener('click', () => {
    PopUpSign.classList.remove('show');
    PopUpSignContent.classList.remove('showContent');
  });

  ok.addEventListener('click', () =>{
    location.reload();
});


}

}

