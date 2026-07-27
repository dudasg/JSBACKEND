//1. Usando var (forma mais antiga)
var idade = 25;
var nome = "Maria";
var estudante = true;

//2. Usando let (introduzido no ES6)
let idade = 25;
let nome = "Maria";
let estudante = true;

//3. Usando const (para valores constantes)
const PI = 3.14159;
const NOME_EMPRESA = "TechSolutions";


//Tipos de Dados em JavaScript
//1. Tipos Primitivos
Number (Número)
//Representa tanto números inteiros quanto decimais
let idade = 25; //Número inteiro
let altura = 1.75; // Número decimal
let temperatura = -5; // Número negativo

String (Texto)
//Representa sequencias de caracteres (texto).
let nome = "João";
let sobrenome = 'Silva';
let endereco = 'Rua das Flores, 123', //Templatestring (ES6)

Boolean (Booleano)
//Representa valores lógicos verdadeiros: verdadedeiro ( true ) ou falso (false)
let estudantes= true;
let aprovado = false;
Udenfined
//Representa uma varialvel que foi declarada, mas não rwcwbwu um visualViewportl
let estudante = true;
letaprovado = false;
undefined
//Representa uma variavel que foi declatada. mas não recebeu um valor 40 let cidade; //



2. //Tipos Complexos
//Array (Vetor)
//Coleção ordenada de valores.
let frutas = ["Maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misturado = [ 1, "dois", true, null];

//Object (Objeto)
// Coleção de chaves-valor.
let pessoa = {
    nome: "Ana",
    idade:30,
    profissão: " desenvolvedora"
};


//Verificando o Tipo de uma varialvel

let idade = 25;
console.log(typeof idade);

let nome = "Maria";
console.log(typeof nome)

let ativo = true;
console.log(typeof ativo);


//Coversão entre Tipos
let numeroTexto = "42";
let número = Number(numerotexto)
console.log(typeof numero); // "number"

let numero1 = parseInt(numeroTexto); // Para inteiros
let numero2 = parseFloat(númeroTexto); // Para decimais

// De number para String
let numero = 42;
let texto = String(numero); // "42" (texto)
// Alternativa
let texto2 = numero.toString(); // "42" (texto)
//Para Boolean
let valor = 1;
let booleano = BooLean(valor); // true
// valores que convertem para false:
// 0, "", null, undefined, NaN, false



Exemplo Prático: Calculadora de idade

//declaração de variáveis
const anoAtual = 2026;
let anoNascimento = 1990;
//calculando a idade
let idade = anoAtual - anoNascimento;
//exibindo o resultado
//console.log("Você tem" + idade + "anos.");

console.log('Você tem ${idade} anos.');



Exemplo Prático:
//Calculadora de média de notas
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let média = (nota1 + nota2 + nota3) / 3;
console.log('A média das notas é: ${média.toFixed(1)}');

let pontos = 100;
console.log('pontuação após ganhar 50 pontos: ${pontos}');
// O jogador ganhou 50 pontos
pontos += 50; // Adiciona 50
console.log('Pontuação após ganhar 50 pontos: ${pontos]');
//Ojogador perdeu 30 pontos
pontos -= 30; // Subtrai 30 pontos
console.log('Pontuação após perder 30 pontos: ${pontos}');
