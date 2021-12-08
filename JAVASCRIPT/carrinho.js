/*
=====================
CARRINHO DE COMPRAS 
=====================
 */



window.onload = function(){

	if (JSON.parse(localStorage.getItem('Users')) !== null){
	let pessoa = JSON.parse (localStorage.getItem("Users"))[0];
				 
		NomePerfil = pessoa[0].Nome;
		ApelidoPerfil = pessoa[1].Apelido;
		MoradaPerfil = pessoa[3].Morada;
		Loca1Perfil = pessoa[4].Loca1;
		Loca2Perfil = pessoa[5].Loca2;
		Loca3Perfil = pessoa[6].Loca3;
		NifPerfil = pessoa[7].Nif;
		MailPerfil = pessoa[8].email;
		Telefone = pessoa[11].telefone;	


				
		document.getElementById('nomecompleto').value = NomePerfil + ApelidoPerfil;
		document.getElementById('morada1').value = MoradaPerfil;
		document.getElementById('loca1').value = Loca1Perfil;
		document.getElementById('loca2').value = Loca2Perfil;
		document.getElementById('loca3').value = Loca3Perfil;
		document.getElementById('contribuinte').value = NifPerfil;
		document.getElementById('tel').value = Telefone;
		document.getElementById('mailCompra').value = MailPerfil;
	}			
			



	//vai buscar as class do conteudo do carrinho de compras
	
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fecharcarro');
	const cartBox = document.querySelector('.cartBox');
	
	//abre e fecha a "aba" do carrinho de compras FUNCIONA
    iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});

	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});

	
	let items = [];


//ADICIONAR DA PAGINA DE SERVIÇO 

	const addtoCart = document.getElementsByClassName('addcart');
	for (let i = 0; i< addtoCart.length; i++){
		addtoCart[i].addEventListener("click", function(e){
			let detalheservico= e.target.parentElement.parentElement;
			console.log(detalheservico.getElementsByClassName("titleservico")[0].innerText)
			
			if(typeof(Storage) !== 'undefined'){
				let item = {
					id:i+1,
					image: detalheservico.getElementsByClassName("imgservico")[0].src, 
					name: detalheservico.getElementsByClassName("titleservico")[0].innerText,
					price: detalheservico.getElementsByClassName("priceservico")[0].innerText,
					no: 1
				}
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
					}else{
						const localItems = JSON.parse(localStorage.getItem("items"));
						localItems.map(data=>{
							if(item.id == data.id){
								item.no = data.no + 1; //adiciona mais um número ao total do carrinho
							}else{
								items.push(data);
							}
						});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
					}
				}else{
					alert('local storage is not working on your browser');
				}
		});
	}
	


	let postais =[];
	
	const addcart2 = document.getElementsByClassName('addcart2');
	for (let i= 0; i< addcart2.length; i++){
		addcart2[i].addEventListener("click",function(e){
			let postal2 = e.target.parentElement.parentElement;
			console.log(postal2)
			if(typeof(Storage) !== 'undefined'){
				let postal = {
					id:i+1,
					image: "/images/cartao.jpg", 
					name: "Postal Personalizado",
					price: 5.99,
					no: 1,
					escrito: document.getElementsByTagName("textarea").value
				}
				if(JSON.parse(localStorage.getItem('postal')) === null){
					postais.push(postal);
					localStorage.setItem("postais",JSON.stringify(postais));
					window.location.reload();
					}else{
						const localPostais = JSON.parse(localStorage.getItem("postais"));
						localPostais.map(data=>{
							if(postal.id == data.id){
								postal.no = data.no + 1; //adiciona mais um número ao total do carrinho
							}else{
								postais.push(data);
							}
						});
					postais.push(postal);
					localStorage.setItem('postais',JSON.stringify(postais));
					window.location.reload();
					}
				}else{
					alert('local storage is not working on your browser');
				}
		});
	}
			
	





//ADICIONAR DA PAGINA DE DETALHE
	const addToCartBtn = document.getElementsByClassName('detail__bagBtn');
	for (let i= 0; i< addToCartBtn.length; i++){
		addToCartBtn[i].addEventListener("click",function(e){
			let detalhepagar = e.target.parentElement.parentElement.parentElement;
			console.log(detalhepagar.getElementsByClassName("inputproduto")[0].value)
			
			if(typeof(Storage) !== 'undefined'){
				let item = {
					id:i+1,
					image: detalhepagar.getElementsByClassName("modal__img")[0].src, 
					name: detalhepagar.getElementsByClassName("detail__title")[0].innerText,
					price: detalhepagar.getElementsByClassName("detail__price")[0].innerText,
					no: 1,
				}
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
					}else{
						const localItems = JSON.parse(localStorage.getItem("items"));
						localItems.map(data=>{
							if(item.id == data.id){
								item.no = data.no + 1; //adiciona mais um número ao total do carrinho
							}else{
								items.push(data);
							}
						});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
					}
				}else{
					alert('local storage is not working on your browser');
				}
		});
	}
	
    const attToCartBtn = document.getElementsByClassName('carrinho');

	 //cria a array 
	

	 //para cada butão existente para adicionar ao carrinho
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){

		//vai buscar o elemento necessário através do pai, do target (local onde cliquei) 
		let pai = e.target.parentElement.parentElement.parentElement.parentElement;

 		if(typeof(Storage) !== 'undefined'){
			let item = {
				id:i+1,
				image: pai.getElementsByClassName("image")[0].src, 
				name: pai.getElementsByClassName("nome")[0].innerText,
				price: pai.getElementsByClassName("preco")[0].innerText,
				no:1
			}
				// se o carrinho estiver vazio
			if(JSON.parse(localStorage.getItem('items')) === null){
				items.push(item);
				localStorage.setItem("items",JSON.stringify(items));
				window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1; //adiciona mais um número ao total do carrinho
						}else{
							items.push(data);
						}
					});
				items.push(item);
				localStorage.setItem('items',JSON.stringify(items));
				window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	
	// adicionar o no (quantidade de item no carrinho)
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no	
		});
	iconShoppingP.innerHTML = no; 

	//adicionar dados na tabela do carrinho 
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	
    tableData += '<tr><th><b>Produto</b></th><th><b>Detalhe</b></th><th><b>Qt.</b></th><th><b>Preço</b></th><th></th></tr>';
	
    if(JSON.parse(localStorage.getItem('items'))[0] !== null){
		JSON.parse(localStorage.getItem('items')).map(data=>{
			tableData += '<tr class="linhatabela"><th><img src='+data.image+' alt="produto" width="20px"></th><th class="titulo" id="titulo">'+data.name+'</th><th> <input class="inputno" type="number" value="'+data.no+'"></th><th class="pricepd">'+data.price+'</th><th><a href="#" onclick= "Delete(this)";><i class="fas fa-trash-alt"></i></a></th></tr>';
			});}
	 if(JSON.parse(localStorage.getItem('postais'))[0] !== null){
			JSON.parse(localStorage.getItem('postais')).map (data => {
				tableData += '<tr class="linhatabela"><th><img src='+data.image+' alt="produto" width="20px"></th><th class="titulo" id="titulo">'+data.name+'</th><th> <input class="inputno" type="number" value="'+data.no+'"></th><th class="pricepd">'+data.price+'</th><th><a href="#" onclick= "Delete(this)";><i class="fas fa-trash-alt"></i></a></th></tr>'
			});
		}

	cardBoxTable.innerHTML = tableData;
    totalatualiza();

	//ATUALIZAR QUANDO MUDA O INPUT DA QUANTIDADE 

	let noinput = document.getElementsByClassName('inputno'); 
		for(let i= 0 ; i < noinput.length; i++){
			let input = noinput[i];
			input.addEventListener('change', mudaquantidade);
			totalatualiza();
		}
	  
	function mudaquantidade(e){
		var input = e.target;
		//se valor inferior a 0 o input volta para 1
		if(input.value <= 0){
			input.value = 1;
		}
		totalatualiza();
	}
	
	
	}

	//REMOVER ITEM 
	function Delete(e){
		let linha= e.parentElement.parentElement;
		linha.remove();
		totalatualiza(); 
		// não elimina nada do localstorage :c 
		
	  };

	//ATUALIZAR TOTAL 

	function totalatualiza(){

    	let total = 0.00;
    	let envio = 0.00;
    	let tabelacart= document.getElementsByClassName("tablecart")[0];
    	let linhatabela= tabelacart.getElementsByClassName("linhatabela");

    	for (let i=0; i < linhatabela.length; i++){
        	//let linhatabela = linhatabela[i];
        	let precopd = parseFloat(document.getElementsByClassName('pricepd')[i].innerText);
        	var quantidadepd = document.getElementsByClassName('inputno')[i];
			var quantidade = quantidadepd.value;

        	total = total + quantidade * precopd;
    	}

		//arredonda o total 
		total = Math.round(total*100)/100;
    
		//arredondar total
		document.getElementsByClassName('subtotal')[0].innerText = total + "€";
	
		//determina o subtotal, total e envio
	
		if (total >= 50){
			envio = 0.00;
			document.getElementsByClassName('envio1')[0].innerText = envio + "€"; 
			document.getElementsByClassName('totalCarro')[0].innerText = total + "€";
		}
		if (total <= 50){
			envio = 5.00;
			document.getElementsByClassName('envio1')[0].innerText = envio + "€";
			document.getElementsByClassName('totalCarro')[0].innerText= Math.round((total+envio) *100)/100 + "€";
		}
		
		}


		//Busca os dados do localstorage "USERS" retirados do registo ---- 
		const users = JSON.parse (localStorage.getItem("Users"))[0];

		let ApelidoPerfil = users[1].Apelido;
		let NomePerfil = users[0].Nome;
		let MoradaPerfil = users[3].Morada;
		let DataPerfil = users[2].DataN;
		let Loca2Perfil = users[5].Loca2;
		let Loca1Perfil = users[4].Loca1;
		let passPerfil = users[9].pass;
		let NifPerfil = users[7].Nif;
		let Loca3Perfil = users[6].Loca3;
		let MailPerfil = users[8].email;

		//Adiciona esses dados nos values desejados ---- 



		function compraPayPal(){

			const name = document.getElementById('nomecompleto');
			const morada2= document.getElementById('morada1');
			const loca1= document.getElementById('loca1');
			const loca2= document.getElementById('loca2');
			const loca3= document.getElementById('loca3');
			const contribuinte= document.getElementById('contribuinte');
			const telefone= document.getElementById('tel');
			const mailCompra = document.getElementById('mailCompra');
			
			const nameValue= name.value.trim();
			const moradaValue1 = morada2.value.trim();
			const loca1Value = loca1.value.trim();
			const loca2Value = loca2.value.trim();
			const locas3Value = loca3.value.trim();
			const contribuinteValue = contribuinte.value.trim();
			const telefoneValue = telefone.value.trim();
			const mailCompraValue= mailCompra.value.trim();

			let testarnomeCompleto = false; 
			let testarmoradaCompra = false; 
			let testarloca1 = false;
			let testarloca2 = false;
			let testarloca3 = false; 
			let testarcontribuinte = false;
			let testartelefone = false;
			let testarmailCompra = false;
			
			if(nameValue === ''){
				setErrorFor(name, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(name);
				testarnomeCompleto = true;
			  };

			  if(moradaValue1 === ''){
				setErrorFor(morada2, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(morada2);
				testarmoradaCompra = true;
			  };

			  if (loca1Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  } else if (loca1Value.length != 4){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (loca2Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  }else if (loca2Value.length != 3){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (locas3Value === '') {
				setErrorFor (loca3, 'Preencha o campo localidade');
			  } else {
				setSuccessFor (loca3);
				testarloca1 = true;
				testarloca2 = true;
				testarloca3 = true; 
			  }

			  if (contribuinteValue === ''){
				setErrorFor (contribuinte, 'Preencha o campo');
			  } else if (contribuinteValue.length != 9){
				setErrorFor (contribuinte, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (contribuinte)
				testarcontribuinte = true;
			  }
			
			  if (telefoneValue === ''){
				setErrorFor (telefone, 'Preencha o campo');
			  } else if (telefoneValue.length != 9){
				setErrorFor (telefone, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (telefone)
				testartelefone = true;
			  }
			  
			  if(mailCompraValue === ''){
				setErrorFor(mailCompra, 'O campo email tem que estar preenchido')
			  } else if (!isEmail(mailCompraValue)) {
				setErrorFor(mailCompra, 'Email não é válido');
			  } else {
				// adiciona a class success
				setSuccessFor(mailCompra);
				testarmailCompra = true;
			  };


			  function setErrorFor(input, message){
  
				const formCompra = input.parentElement; //.formCompra
				const small = formCompra.querySelector ('small');
			  
				//adicionar a mensagem de error dentro do small
				small.innerText= message;
			  
				//adicionar a classe error
				formCompra.className = 'formCompra error';
			  }

			  function setSuccessFor(input){
				const formCompra = input.parentElement; 
				formCompra.className = 'formCompra success';
			  }
			
			  function isEmail (email){
				return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
			  }
 

			  if (testarnomeCompleto == true && testarmoradaCompra == true && testarloca1 == true &&  testarloca2 == true && testarloca3 ==true && testarcontribuinte == true && testartelefone == true &&  testarmailCompra == true){
				

				//NAO GUARDA TODOS OS PRODUTOS NA FATURA ---> VER !!
				const tabelacart= document.getElementsByClassName("tablecart")[0];
    			const linhatabela= tabelacart.getElementsByClassName("linhatabela");
				let elementoscompra= ''; 
				

				for (let i=0; i < linhatabela.length; i++){
					let preco = document.getElementsByClassName('pricepd')[i].innerText;
					let noproduto = document.getElementsByClassName('inputno')[i].value;
					let titulo = document.getElementsByClassName('titulo')[i].innerText;
				
				elementoscompra +=  noproduto + "de" + titulo +  "a preço individual de:" + preco +"\n"; 
				
			}
			
			
				
				let totalcarrinho = document.getElementsByClassName('totalCarro')[0].innerText;

			
				let faturaPayPal =
				'Fatura emitida por Bazar dos Açores' + "\n" + "\n"  + "\n" +
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜'  + "\n" + "\n"  + "\n" +
				'Cliente: ' + nameValue + "\n" + 
				'Contribuinte: ' + contribuinteValue + "\n" +
				'telefone: ' +  telefoneValue + "\n" + 
				'email: ' + mailCompraValue  + "\n"  + "\n" +
				'Encomenda a ser entregue: ' + "\n" + 
				moradaValue1 + "\n" + 
				loca1Value + '-' + loca2Value + + "\n" + 
				locas3Value   + "\n"  + "\n" +
				'Itens comprados por PayPal: '  + "\n"  + "\n" +
				elementoscompra
				 
				
				
				'Total pago: '+ totalcarrinho  + "\n"  + "\n" + 
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜' 
				
			
				let textFileAsBlob= new Blob ([faturaPayPal], {
					type:'text/plain' });
					
				let fileNameToSaveAs = "FaturaBazardosAçores"
				let downloadLink= document.createElement("a");
			
			
				downloadLink.download = fileNameToSaveAs;
					if(window.webkitURL!=null){
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					}
				downloadLink.click();
				}
				
			
			}
		

		function compraCC(){

			
				

			const name = document.getElementById('nomecompleto');
			const morada2= document.getElementById('morada1');
			const loca1= document.getElementById('loca1');
			const loca2= document.getElementById('loca2');
			const loca3= document.getElementById('loca3');
			const contribuinte= document.getElementById('contribuinte');
			const telefone= document.getElementById('tel');
			const mailCompra = document.getElementById('mailCompra');
			
			const nameValue= name.value.trim();
			const moradaValue1 = morada2.value.trim();
			const loca1Value = loca1.value.trim();
			const loca2Value = loca2.value.trim();
			const locas3Value = loca3.value.trim();
			const contribuinteValue = contribuinte.value.trim();
			const telefoneValue = telefone.value.trim();
			const mailCompraValue= mailCompra.value.trim();

			let testarnomeCompleto = false; 
			let testarmoradaCompra = false; 
			let testarloca1 = false;
			let testarloca2 = false;
			let testarloca3 = false; 
			let testarcontribuinte = false;
			let testartelefone = false;
			let testarmailCompra = false;
			
			if(nameValue === ''){
				setErrorFor(name, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(name);
				testarnomeCompleto = true;
			  };

			  if(moradaValue1 === ''){
				setErrorFor(morada2, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(morada2);
				testarmoradaCompra = true;
			  };

			  if (loca1Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  } else if (loca1Value.length != 4){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (loca2Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  }else if (loca2Value.length != 3){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (locas3Value === '') {
				setErrorFor (loca3, 'Preencha o campo localidade');
			  } else {
				setSuccessFor (loca3);
				testarloca1 = true;
				testarloca2 = true;
				testarloca3 = true; 
			  }

			  if (contribuinteValue === ''){
				setErrorFor (contribuinte, 'Preencha o campo');
			  } else if (contribuinteValue.length != 9){
				setErrorFor (contribuinte, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (contribuinte)
				testarcontribuinte = true;
			  }
			
			  if (telefoneValue === ''){
				setErrorFor (telefone, 'Preencha o campo');
			  } else if (telefoneValue.length != 9){
				setErrorFor (telefone, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (telefone)
				testartelefone = true;
			  }
			  
			  if(mailCompraValue === ''){
				setErrorFor(mailCompra, 'O campo email tem que estar preenchido')
			  } else if (!isEmail(mailCompraValue)) {
				setErrorFor(mailCompra, 'Email não é válido');
			  } else {
				// adiciona a class success
				setSuccessFor(mailCompra);
				testarmailCompra = true;
			  };


			  function setErrorFor(input, message){
  
				const formCompra = input.parentElement; //.formCompra
				const small = formCompra.querySelector ('small');
			  
				//adicionar a mensagem de error dentro do small
				small.innerText= message;
			  
				//adicionar a classe error
				formCompra.className = 'formCompra error';
			  }

			  function setSuccessFor(input){
				const formCompra = input.parentElement; 
				formCompra.className = 'formCompra success';
			  }
			
			  function isEmail (email){
				return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
			  }
 
			const nomecartao = document.getElementById('nc');
			const numerocartao= document.getElementById('noc');
			const datavalidade= document.getElementById('dv');
			const cvv = document.getElementById ('cvv');

			const nomecartaoValue = nomecartao.value.trim();
			const numerocartaoValue = numerocartao.value.trim();
			const datavalidadeValue = datavalidade.value.trim();
			const cvvValue = cvv.value.trim();

			let testnc = false;
			let testnoc = false;
			let testdv = false;
			let testcvv = false;


			if(nomecartaoValue === ''){
				setErrorFor(nomecartao, 'Preencha o campo')
			  } else if (nomecartaoValue == "Não tenho dinheiro"){
				  localStorage.clear()
				  window.location = "/HTML/ContaRemovida.html"
			  }
			  else {
				// adiciona a class success
				setSuccessFor(nomecartao);
				testnc = true;
			  };

			if (numerocartaoValue === ''){
				setErrorFor (numerocartao, 'Preencha o campo');
			  } else if (numerocartaoValue.length != 12){
				setErrorFor (numerocartao, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (numerocartao)
				testnoc = true;
			  }
			
			  if(datavalidadeValue === ''){
				setErrorFor(datavalidade, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(datavalidade);
				testdv = true;
			  };

			  if (cvvValue === ''){
				setErrorFor (cvv, 'Preencha o campo');
			  } else if (cvvValue.length != 3){
				setErrorFor (cvv, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (cvv)
				testcvv = true;
			  }

			  function setErrorFor(input, message){
  
				const formCompra = input.parentElement; //.formCompra
				const small = formCompra.querySelector ('small');
			  
				//adicionar a mensagem de error dentro do small
				small.innerText= message;
			  
				//adicionar a classe error
				formCompra.className = 'formCompra error';
			  }

			  function setSuccessFor(input){
				const formCompra = input.parentElement; 
				formCompra.className = 'formCompra success';
			  }		


			  if (testarnomeCompleto == true && testarmoradaCompra == true && testarloca1 == true &&  testarloca2 == true && testarloca3 ==true && testarcontribuinte == true && testartelefone == true &&  testarmailCompra == true && testnc ==true && testnoc == true && testdv == true && testcvv ==true){
				
				
				titulo = document.getElementById('titulo').innerText;
				preco = document.getElementsByClassName('pricepd')[0].innerText;
				noproduto = document.getElementsByClassName('inputno')[0].value;
				totalcarrinho = document.getElementsByClassName('totalCarro')[0].innerText;
				let elementoscompra= ''; 
				

				for (let i=0; i < linhatabela.length; i++){
					let preco = document.getElementsByClassName('pricepd')[i].innerText;
					let noproduto = document.getElementsByClassName('inputno')[i].value;
					let titulo = document.getElementsByClassName('titulo')[i].innerText;
				
				elementoscompra +=  noproduto + "de" + titulo +  "a preço individual de:" + preco +"\n";

				}
				let faturaCC =
				'Fatura emitida por Bazar dos Açores' + "\n" + "\n"  + "\n" +
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜'  + "\n" + "\n"  + "\n" +
				'Cliente: ' + nameValue + "\n" + 
				'Contribuinte: ' + contribuinteValue + "\n" +
				'telefone: ' +  telefoneValue + "\n" + 
				'email: ' + mailCompraValue  + "\n"  + "\n" +
				'Encomenda a ser entregue: ' + "\n" + 
				moradaValue1 + "\n" + 
				loca1Value + '-' + loca2Value + + "\n" + 
				locas3Value   + "\n"  + "\n" +
				'Itens comprados através do Cartão de Crédito de : '  + "\n"  + 
				nomecartaoValue + "\n" +
				'Número do Cartão: ' + numerocartaoValue + "\n" +
				'com data de validade de: ' +  datavalidadeValue + "\n" + 
				'e cvv: ' + cvvValue + "\n"  + "\n" +
				'Lista de itens comprados: ' + "\n"  + 
				elementoscompra  + "\n" +
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜' 
			
				let textFileAsBlob= new Blob ([faturaCC], {
					type:'text/plain' });
				let fileNameToSaveAs = "FaturaBazardosAçores"
				let downloadLink= document.createElement("a");
				
					downloadLink.download = fileNameToSaveAs;
					if(window.webkitURL!=null){
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					}
					downloadLink.click();
			}
			

		};


		function compraMbWay(){

			const name = document.getElementById('nomecompleto');
			const morada2= document.getElementById('morada1');
			const loca1= document.getElementById('loca1');
			const loca2= document.getElementById('loca2');
			const loca3= document.getElementById('loca3');
			const contribuinte= document.getElementById('contribuinte');
			const telefone= document.getElementById('tel');
			const mailCompra = document.getElementById('mailCompra');
			
			const nameValue= name.value.trim();
			const moradaValue1 = morada2.value.trim();
			const loca1Value = loca1.value.trim();
			const loca2Value = loca2.value.trim();
			const locas3Value = loca3.value.trim();
			const contribuinteValue = contribuinte.value.trim();
			const telefoneValue = telefone.value.trim();
			const mailCompraValue= mailCompra.value.trim();

			let testarnomeCompleto = false; 
			let testarmoradaCompra = false; 
			let testarloca1 = false;
			let testarloca2 = false;
			let testarloca3 = false; 
			let testarcontribuinte = false;
			let testartelefone = false;
			let testarmailCompra = false;
			
			if(nameValue === ''){
				setErrorFor(name, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(name);
				testarnomeCompleto = true;
			  };

			  if(moradaValue1 === ''){
				setErrorFor(morada2, 'Preencha o campo')
			  } else {
				// adiciona a class success
				setSuccessFor(morada2);
				testarmoradaCompra = true;
			  };

			  if (loca1Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  } else if (loca1Value.length != 4){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (loca2Value === ''){
				setErrorFor (loca3, 'Preencha o código Postal');
			  }else if (loca2Value.length != 3){
				setErrorFor (loca3, 'Preencha corretamente o código Postal')
			  }else if (locas3Value === '') {
				setErrorFor (loca3, 'Preencha o campo localidade');
			  } else {
				setSuccessFor (loca3);
				testarloca1 = true;
				testarloca2 = true;
				testarloca3 = true; 
			  }

			  if (contribuinteValue === ''){
				setErrorFor (contribuinte, 'Preencha o campo');
			  } else if (contribuinteValue.length != 9){
				setErrorFor (contribuinte, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (contribuinte)
				testarcontribuinte = true;
			  }
			
			  if (telefoneValue === ''){
				setErrorFor (telefone, 'Preencha o campo');
			  } else if (telefoneValue.length != 9){
				setErrorFor (telefone, 'Preencha corretamente o campo');
			  } else {
				setSuccessFor (telefone)
				testartelefone = true;
			  }
			  
			  if(mailCompraValue === ''){
				setErrorFor(mailCompra, 'O campo email tem que estar preenchido')
			  } else if (!isEmail(mailCompraValue)) {
				setErrorFor(mailCompra, 'Email não é válido');
			  } else {
				// adiciona a class success
				setSuccessFor(mailCompra);
				testarmailCompra = true;
			  };


			  function setErrorFor(input, message){
  
				const formCompra = input.parentElement; //.formCompra
				const small = formCompra.querySelector ('small');
			  
				//adicionar a mensagem de error dentro do small
				small.innerText= message;
			  
				//adicionar a classe error
				formCompra.className = 'formCompra error';
			  }

			  function setSuccessFor(input){
				const formCompra = input.parentElement; 
				formCompra.className = 'formCompra success';
			  }
			
			  function isEmail (email){
				return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
			  }
 

			  if (testarnomeCompleto == true && testarmoradaCompra == true && testarloca1 == true &&  testarloca2 == true && testarloca3 ==true && testarcontribuinte == true && testartelefone == true &&  testarmailCompra == true){


				titulo = document.getElementById('titulo').innerText;
				preco = document.getElementsByClassName('pricepd')[0].innerText;
				noproduto = document.getElementsByClassName('inputno')[0].value;
				totalcarrinho = document.getElementsByClassName('totalCarro')[0].innerText;
				let elementoscompra= ''; 
				

				for (let i=0; i < linhatabela.length; i++){
					let preco = document.getElementsByClassName('pricepd')[i].innerText;
					let noproduto = document.getElementsByClassName('inputno')[i].value;
					let titulo = document.getElementsByClassName('titulo')[i].innerText;
				
				elementoscompra +=  noproduto + "de" + titulo +  "a preço individual de:" + preco +"\n";
				}

			
				let faturaMbWay =
				'Fatura emitida por Bazar dos Açores' + "\n" + "\n"  + "\n" +
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜'  + "\n" + "\n"  + "\n" +
				'Cliente: ' + nameValue + "\n" + 
				'Contribuinte: ' + contribuinteValue + "\n" +
				'telefone: ' +  telefoneValue + "\n" + 
				'email: ' + mailCompraValue  + "\n"  + "\n" +
				'Encomenda a ser entregue: ' + "\n" + 
				moradaValue1 + "\n" + 
				loca1Value + '-' + loca2Value + + "\n" + 
				locas3Value   + "\n"  + "\n" +
				'Itens comprados por PayPal: '  + "\n"  + elementoscompra + "\n" + 
				'Total pago: '+ totalcarrinho  + "\n"  + "\n" +
				'˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜˜”*°•.˜”*°••°*”˜.•°*”˜ .•*˜' 
			
				let textFileAsBlob= new Blob ([faturaMbWay], {
					type:'text/plain' });
				let fileNameToSaveAs = "FaturaBazardosAçores"
				let downloadLink= document.createElement("a");
				
					downloadLink.download = fileNameToSaveAs;
					if(window.webkitURL!=null){
						downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
					}
					downloadLink.click();
			}
		}
	
	
	
	
