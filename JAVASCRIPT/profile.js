//Se não existir dados de registo então direciona para registo

if(JSON.parse(localStorage.getItem('Users')) === null){
    window.location.href = "/HTML/Registo.html"
}
//Buscar dados no localStorage


let pessoa = JSON.parse (localStorage.getItem("Users"))[0];
//let pessoadata = pessoa[0];

//buscar dados do localstorage -- 
 
NomePerfil = pessoa[0].Nome;
ApelidoPerfil = pessoa[1].Apelido;
DataPerfil = pessoa[2].DataN;
MoradaPerfil = pessoa[3].Morada;
Loca1Perfil = pessoa[4].Loca1;
Loca2Perfil = pessoa[5].Loca2;
Loca3Perfil = pessoa[6].Loca3;
NifPerfil = pessoa[7].Nif;
MailPerfil = pessoa[8].email;
passPerfil = pessoa[9].pass;
MailPerfil2 = pessoa[10].email2;
Telefone = pessoa[11].telefone;
Telefone2 = pessoa[12].telefone2;
ImagePerfil = pessoa[13].image;



// Dados da caixa a esquerda, coloca os dados do LocalStorage: 

let NomePerfilTitutlo = NomePerfil + " " + ApelidoPerfil;

document.getElementsByClassName('user-name')[0].innerText = NomePerfilTitutlo;
document.getElementById('databthd').innerText = DataPerfil;
document.getElementById("morada12").innerText = MoradaPerfil;
document.getElementById('loc1').innerText = Loca1Perfil;
document.getElementById('loc2').innerText = Loca2Perfil;
document.getElementById('localidadenome').innerText = Loca3Perfil;

console.log(Loca1Perfil)
console.log(Loca2Perfil)

let loadFile = function(event){
    let image = document.getElementById('profile-img-img');
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(image.src);  
}

function eliminar(){
    document.getElementById('telefoneprofile').value = '';  
}

function eliminar2(){
    document.getElementById('tel2profile').value = '';  
}

function eliminar3(){
    document.getElementById('mail2profile').value = '';  
}

//dados no form: 

document.getElementById('nomeprofile').value = NomePerfil;
document.getElementById('apelidoprofile').value = ApelidoPerfil;
document.getElementById('date').value = DataPerfil;
document.getElementById('moradaprofile').value = MoradaPerfil;
document.getElementById('loc1profile').value = Loca1Perfil;
document.getElementById('loc2profile').value = Loca2Perfil;
document.getElementById('localidadeprofile').value = Loca3Perfil;
document.getElementById('nifprofile').value = NifPerfil;
document.getElementById('mailprofile').value = MailPerfil;
document.getElementById('mail2profile').value = MailPerfil2;
document.getElementById('telefoneprofile').value = Telefone;
document.getElementById('tel2profile').value = Telefone2;
document.getElementsByClassName('passprofile').value =passPerfil;
document.getElementById('profile-img-img').src = ImagePerfil;


let validar = document.querySelector('#Change')

validar.addEventListener('click', () =>{ 
    
    let moradaprofile = document.getElementById('moradaprofile').value;    
    let testarmorada = ""; 
    if(moradaprofile === ''){
        testarmorada = false;
    }else {
        testarmorada = true; 
    }

    let loca1profile = document.getElementById('loc1profile').value;
    let testarloca1 = ""; 
    if(loca1profile === ''){
        testarloca1 = false;
    }else if (loca1profile.lenght = 4){
        testarloca1 = true;
    }
   

    let loca2profile = document.getElementById('loc2profile').value;
    let testarloca2 = ""; 
    if(loca2profile === ''){
        testarloca2 = false;
    }else if (loca2profile.lenght = 3){
        testarloca2 = true;
    }
    

    let loca3profile =document.getElementById('localidadeprofile').value;
    let testarloca3 = ""
    if(loca3profile === ''){
        testarloca3 = false;
    }else{
        testarloca3 = true;
    }

    let mailprofile = document.getElementById('mailprofile').value;
    let testarmail1 = ""; 
    if (mailprofile === ''){
        testarmail1 = false;
    }else{
        testarmail1 = true; 
    }

    let passprofile = document.getElementsByClassName('passprofile').value;
    let passprofile2 = document.getElementById('passprofile2').value; 
    let testarnewpass = ""; 
    if (passprofile2.lenght >7 && passprofile.value == passPerfil) {
        testarnewpass = true; 
    }
    
    console.log(passPerfil);
    console.log(testarnewpass);
    console.log(testarmail1);
    console.log(testarloca1);
    console.log(testarloca2);
    console.log(testarloca3);
    console.log(testarmorada);


    // Se algo estiver falso - aparece mensagem 
    if (testarmorada == false || testarloca1==false || testarloca2 ==false || testarloca3 == false || testarmail1 == false ||testarnewpass == false ){
    
    const PopUpVer = document.querySelector('.PopUpVer');
    const PopUpVerContent = document.querySelector('.PopUpVerContent');
    const closeSub = document.querySelector('.closesub');
    let text = document.getElementById('textprof');


    PopUpVer.classList.add('show');
    PopUpVerContent.classList.add('showContent');
    text.innerText = "Tem que preencher corretamente todos os campos";
    text.style.color= "red";
        

 

closeSub.addEventListener('click', () => {
    PopUpVer.classList.remove('show');
    PopUpVerContent.classList.remove('showContent');
});

PopUpVer.addEventListener('click', () => {
    PopUpVer.classList.remove('show');
    PopUpVerContent.classList.remove('showContent');
});
    }

    if(testarmorada == true && testarloca1==true && testarloca2 ==true && testarloca3 == true && testarmail1 == true || testarnewpass == true){

        
    const PopUpVer = document.querySelector('.PopUpVer');
    const PopUpVerContent = document.querySelector('.PopUpVerContent');
    const closeSub = document.querySelector('.closesub');
    let text = document.getElementById('textprof');


    PopUpVer.classList.add('show');
    PopUpVerContent.classList.add('showContent');
    text.innerText = "Os seus dados foram guardados com sucesso";
    
    closeSub.addEventListener('click', () => {
    PopUpVer.classList.remove('show');
    PopUpVerContent.classList.remove('showContent');
    });

    PopUpVer.addEventListener('click', () => {
    PopUpVer.classList.remove('show');
    PopUpVerContent.classList.remove('showContent');
    });

        // push new object USERS. 
        let users = JSON.parse(localStorage.getItem('Users')) || [];
        let userData = [
            {Nome: document.getElementById('nomeprofile').value},
            {Apelido: document.getElementById('apelidoprofile').value},
            {DataN: document.getElementById('date').value},
            {Morada: document.getElementById('moradaprofile').value},
            {Loca1: document.getElementById('loc1profile').value},
            {Loca2: document.getElementById('loc2profile').value},
            {Loca3: document.getElementById('localidadeprofile').value},
            {Nif: document.getElementById('nifprofile').value},
            {email: document.getElementById('mailprofile').value},
            {pass: document.getElementById('passprofile2').value},{email2: document.getElementById('mail2profile').value},
            {telefone: document.getElementById('telefoneprofile').value},
            {telefone2:  document.getElementById('tel2profile').value},
            {image: document.getElementById ('profile-img-img').src}]
            

        users.push(userData);
        localStorage.setItem('Users',JSON.stringify(users));
    }

  
  
});



