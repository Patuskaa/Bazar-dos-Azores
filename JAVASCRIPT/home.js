/*
=============
BARRRA MENU 
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});



/*
=============
BARRA FIXA
=============
 */

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

// Fix NavBar

window.addEventListener("scroll", e => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});


/*
=================
pOP UP DETALHES
=================
 */

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const close = document.querySelector('.modal__close');
const modalImg = document.querySelector('.modal__img');
const productList = document.querySelectorAll('.product');
const title = document.querySelector('.detail__title');
const details = document.querySelector ('.detail__description');
const cost = document.querySelector('.detail__price');

//const carateristica =



productList.forEach((list) => {
  const view = list.querySelector('.ver');
  const productImg = list.querySelector('.image').getAttribute('src');
  const detalhe = list.querySelector('.nome').innerText;
  const precoproducto = list.querySelector('.preco').innerText;
  const carateristica = list.querySelector('.carateristica').innerText;
  
  
  view.addEventListener('click', () => {
    modal.classList.add('modal--bg');
    modalContent.classList.add('modal__content--show');
    modalImg.setAttribute('src', productImg);
    cost.innerText = precoproducto ;
    title.innerText = detalhe;
    details.innerText = carateristica;
    
  });
});

close.addEventListener('click', () => {
  modal.classList.remove('modal--bg');
  modalContent.classList.remove('modal__content--show');
});

modal.addEventListener('click', () => {
  modal.classList.remove('modal--bg');
  modalContent.classList.remove('modal__content--show');
});

/*
=================
pOP UP CONFIRMAÇÃO
=================
 */

function subpop(){

const popSub = document.querySelector('.PopUpSub');
const popSubContent = document.querySelector('.PopUpSubContent');
const closeSub = document.querySelector('.closesub');
let emailSub =document.getElementById('emailsub').value;


  if(emailSub === ''){
    document.getElementById('newsletter').innerText = "Tem que preencher o campo"; 
    document.getElementById('newsletter').style.color = "red";
    console.log("ei");
  }else{
    popSub.classList.add('show');
    popSubContent.classList.add('showContent');
    
  }
 

closeSub.addEventListener('click', () => {
  popSub.classList.remove('show');
  popSubContent.classList.remove('showContent');
});

popSub.addEventListener('click', () => {
  popSub.classList.remove('show');
  popSubContent.classList.remove('showContent');
});
}



const attToFavBtn = document.getElementsByClassName('fav');

let favs = [];

for(let i=0; i<attToFavBtn.length; i++){
    attToFavBtn[i].addEventListener("click",function(e){

        let father = e.target.parentElement.parentElement.parentElement.parentElement;
        
        if(typeof(Storage) !== 'undefined'){
        let fav = {
            id:i+1,
            image: father.getElementsByClassName("image")[0].src, 
            name: father.getElementsByClassName("nome")[0].innerText,
            price: father.getElementsByClassName("preco")[0].innerText,
        }
        
        if(JSON.parse(localStorage.getItem('favs')) === null){
            favs.push(fav);
            localStorage.setItem("favs",JSON.stringify(favs));
            window.location.reload();
            }else{
                const localFavs = JSON.parse(localStorage.getItem("favs"));
                localFavs.map(data=>{
                    if(fav.id == data.id){
                        fav.no = data.no + 1; //adiciona mais um número ao total do carrinho
                    }else{
                        favs.push(data);
                    }
                });
            favs.push(fav);
            localStorage.setItem('favs',JSON.stringify(favs));
            window.location.reload();
            }
        }else{
            alert('local storage is not working on your browser');
        }
    })
  }