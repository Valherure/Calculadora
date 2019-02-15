class Operacion {
	constructor(num1,num2)
	{
		console.log(num2);
		this.numero1=num1;
		this.numero2=num2;
		console.log(this.numero2);
	}
	sumar(){
		let objetoutilizar=this;
		return new Promise(function (resolve,reject){
			try{
				resolve(objetoutilizar.numero1 + objetoutilizar.numero2)
			}
			catch(err)
			{
				reject(Error)
			}
		})
	}
	restar()
	{
		let objetoutilizar=this;
		return new Promise(function (resolve,reject){
			try{
				resolve(objetoutilizar.numero1 - objetoutilizar.numero2)
			}
			catch(err)
			{
				reject(Error)
			}
		})
	}
	multiplicar(){
		let objetoutilizar=this;
		return new Promise(function (resolve,reject){
			try{
				resolve(objetoutilizar.numero1 * objetoutilizar.numero2)
			}
			catch(err)
			{
				reject(Error)
			}
		})
	}
	dividir()
	{
		let objetoutilizar=this;
		return new Promise(function (resolve,reject){
			try{
				resolve(objetoutilizar.numero1 / objetoutilizar.numero2)
			}
			catch(err)
			{
				reject(Error)
			}
		})
	}
}

let conc="";

function num(n){ //concatenaa los numeros//
	conc+=n;
	document.getElementById("respuesta").innerHTML=conc;
}

let tiposigno="";
let numero1=0;
let numero2=0;



function operar(o){
	tiposigno=o;
	numero1=Number(conc);
	document.getElementById("respuesta").innerHTML=conc;
	conc="";
}
function resultado(){
	numero2=Number(conc)
	document.getElementById("respuesta").innerHTML=numero2;
	conc="";
	let classoperaciones= new Operacion(numero1,numero2);
	switch (tiposigno){
	case"+":
	classoperaciones.sumar().then(function(response)
	{
	document.getElementById("respuesta").innerHTML=response;
	},function(error)
	{
	document.getElementById("respuesta").innerHTML="hay algo mal";
	})
	break;
	case"-":
	classoperaciones.restar().then(function(response)
	{
	document.getElementById("respuesta").innerHTML=response;
	},function(error)
	{
	document.getElementById("respuesta").innerHTML="hay algo mal";
	})
	break;
	case"/":
	classoperaciones.dividir().then(function(response)
	{
	document.getElementById("respuesta").innerHTML=response;
	},function(error)
	{
	document.getElementById("respuesta").innerHTML="hay algo mal";
	})
	break;
	case"*":
	classoperaciones.multiplicar().then(function(response)
	{
	document.getElementById("respuesta").innerHTML=response;
	},function(error)
	{
	document.getElementById("respuesta").innerHTML="hay algo mal";
	})
	break;
	default:
	console.log("default");
	break;
}
}
//onclick boton igual// 
