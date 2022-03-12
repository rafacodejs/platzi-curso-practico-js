// Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

// Triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Cícurlo
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}
 
// Aquí interactuamos con HTML

// Funciones para con el cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert("El perimetro del cuadrado es: " + perimetro + "cm"); 
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert("El area del cuadrado es: " + area + "cm");
}

// Funciones para con el triángulo

function calcularPerimetroTriangulo() {
  const inputA = document.getElementById("InputTrianguloLadoA");
  const inputB = document.getElementById("InputTrianguloLadoB");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueA = Number(inputA.value);
  const valueB = Number(inputB.value);
  const valueBase = Number(inputBase.value);
  const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
  alert("El perimetro del triángulo es: " + perimetro + "cm"); 
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value
  const area = areaTriangulo(valueBase, valueAltura);
  alert("El area del triángulo es: " + area + "cm");
}

// Funciones para con el circulo

function calcularDiametroCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const diametro = diametroCirculo(valueRadio);
  alert("El area del círculo es: " + diametro + "cm^2"); 
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const perimetro = perimetroCirculo(valueRadio);
  alert("El perimetro del círculo es: " + perimetro + "cm^2"); 
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const area = areaCirculo(valueRadio);
  alert("El perimetro del círculo es: " + area + "cm"); 
}
