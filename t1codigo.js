
class Calculadora { 
sumar(num1,num2){
	return parseInt(num1) + parseInt(num2);
}
 restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}
 dividir(num1,num2){
	return parseInt(num1) / parseInt(num2);
}
 multiplicar(num1,num2){
	return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp){
	return num**exp
	}
	raizCuadrada(num,exp){
		return Math.sqrt(num);
	}
	raizCubica(num,exp){
		return Math.cbrt(num);
	}
}


const calculadora = new Calculadora();

alert ("¿Que operacion desea realizar?");
let operacion = prompt("1: sumar 2: restar 3:dividir 4:multiplicar 5:potencicion 6:raiz cuadrada 7:raiz cubica");

if (operacion == 1) {
	let numero1 = prompt("Primer numero para sumar");
	let numero2 = prompt("Segundo numero para sumar");
	resultado = calculadora.sumar(numero1,numero2);
	document.write (`El resultado es: ${resultado}`);
}

else if (operacion == 2) {
	let numero1 = prompt("Primer numero para restar");
	let numero2 = prompt("Segundo numero para restar");
	resultado = calculadora.restar(numero1,numero2);
	document.write (`El resultado es: ${resultado}`);
}

else if (operacion == 3) {
	let numero1 = prompt("Primer numero para dividir");
	let numero2 = prompt("Segundo numero para dividir");
	resultado = calculadora.dividir(numero1,numero2);
	document.write (`El resultado es: ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("Primer numero para multiplicar");
	let numero2 = prompt("Segundo numero para multiplicar");
	resultado = calculadora.multiplicar(numero1,numero2);
	document.write (`El resultado es: ${resultado}`);
}
else if (operacion == 5) {
	let numero1 = prompt("Numero a potenciar:");
	let numero2 = prompt("Exponente");
	resultado = calculadora.potenciar(numero1,numero2);
	document.write (`El resultado es: ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("Conocer raiz cuadrada de:");
	
	resultado = calculadora.raizCuadrada(numero1);
	document.write (`El resultado es: ${resultado}`);
}
else if (operacion == 7) {
	let numero1 = prompt("Conocer raiz cubica de:");
	
	resultado = calculadora.raizCubica(numero1);
	document.write (`El resultado es: ${resultado}`);
}

else {
	document.write ("No se ha encontrado la operacion, vuelva a intentar");
}
