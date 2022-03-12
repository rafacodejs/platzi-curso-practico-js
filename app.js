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
  alert(perimetro); 
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
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
  alert(perimetro); 
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value
  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

// Funciones para con el circulo

function calcularDiametroCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const diametro = diametroCirculo(valueRadio);
  alert(diametro); 
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro); 
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const valueRadio = input.value;
  const area = areaCirculo(valueRadio);
  alert(area); 
}
