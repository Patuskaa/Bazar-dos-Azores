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


//  A SEMELHANÇA DO CARRINHO, 



    const favcontainer = document.querySelector('.favbox');
	let favconteudo = '';
	
    if(JSON.parse(localStorage.getItem('favs'))[0] === null){
		favconteudo += '<p>Não tem nenhum favorito adicionado</p>'
		}else{
			JSON.parse(localStorage.getItem('favs')).map(data=>{
			favconteudo += '<div class="product"><div class="product__header"><img class="image" src='+data.image+' alt="product"></div><div class="btn"><ul> <li><button class="ver"><i class="fas fa-eye"></i></button></li><li><button class="fav activef"><i class="fas fa-heart"></i></button></li> <li><button class="carrinho"><i class="fas fa-cart-plus"></i></button></li></ul></div> <div class="product__footer"><h3 class="nome">'+data.name+'</h3><div class="product__price"><h4><span class="preco">'+data.price+'</span>€</h4></div></div></div>'
			});
		}
        favcontainer.innerHTML = favconteudo;
    


// SE BOTAO FOR CARREGADO NOVAMENTE ENTÃO REMOVIDO

    const removeFavBtn = document.getElementsByClassName('fav');
    for(let i=0; i<removeFavBtn.length; i++){
    removeFavBtn[i].addEventListener("click",function(e){
        let box = e.target.parentElement.parentElement.parentElement.parentElement;
        box.remove();
    })
}
