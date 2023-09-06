var myName; // Como declara variável
// Nomes de variáveis podem ser formados por números, letras e $ ou _, mas não podem conter espaços ou começar com um número

var number;
number = 7; //Agora number significa 7, se você colocar: 1+number vai ser igual a 8

var number2;
number2 = number; //Uma variável pode ter o mesmo valor que outra variável

var rapido = 10; //Você pode criar uma variável e atribuir o valor dela na mesma linha

var letras = "Abc"; //A var{letras} agora é igual a uma string(Conjunto de caracteres)

var cameCasel = "Qualquer coisa"; //Escreva nomes de variáveis em JavaScript em camelCase. Em camelCase, nomes de variáveis com mais de uma palavra possuem a primeira palavra toda em minúscula e a primeira letra de cada palavra subsequente capitalizada.

var teste = "Teste1";
var teste = "Teste2";

console.log(teste); //Mostra no console /* Resultado: Teste2 */

/* Se você não tomar cuidado, pode acabar sobrescrevendo uma string  por isso existe o let. Uma palavra-chave chamada let foi introduzida na ES6, uma grande atualização para o JavaScript, para resolver este possível problema com a palavra-chave var, onde a palavra... faz com que a variável receba um valor apenas uma vez*/

let teste2 = "Teste";
/* let teste2 = "Teste de novo"; */ // Dá erro

const AA = "aa"; /* const possui todos os recursos maravilhosos que let tem, com o bônus adicional que variáveis declaradas usando const são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com const não pode ser atribuída novamente: */

const BB = "bb"; //Const normamlmente nomeamos todo em letra maiúscula
/* BB = "ab"; */ // Da erro no console, pois não pode aquilo

let soma = 1;
soma = soma + 2;
console.log(soma); //Console mostra o valor (3)

let recebe = 1;
recebe += 1;
console.log(recebe); //Console mostra o valor (2)
//Funciona também para subtrair "-", ou seja (-=)
//Funciona também para multiplicar "*", ou seja (*=)
//Funciona também para a divisão "/", ou seja (/=)

//E se eu quiser por uma aspa dentro de uma string? Basta por uma barra invertida(\) na frente, ou seja:
let aspaDentroDeAspa = "Desse jeito: \"teste\"";
console.log(aspaDentroDeAspa); //Resultado: Desse jeito: "teste"

/* Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript. */

const aspasDuplaStr = "This is a string"; 
const aspaSimplesStr = 'This is also a string';

let numeroDeCaracteres = 0;
const caracteres = "Aa1_ ";
numeroDeCaracteres = caracteres.length; //Length básicamente conta quantos caracteres uma string contém
console.log(numeroDeCaracteres); //Resultado: 5. (A)+(a)+(1)+(_)+( )=5

/* A maioria das linguagens de programação modernas, como JavaScript, não começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido como indexação baseada em zero. */

/* Colchetes([]) servem para encontrar tal letra na posição determinada(Definida pelo valor dentro do colchetes) */

const nome = "Pablo";
const primeiraLetra = nome[0]; //Resultado: P, pois a primeira letra de Pablo é P, e 0 é correspondente a primeira(1ª)

/* Strings são imutáveis, ou seja, não dá para mudar nada de uma string ao menos que vc retribua o valor dela. */

/* No JavaScript temos algo chamado de array, que se utiliza os colchetes([]) também, eles servem para armanezar mais de uma coisa na váriavel, é como se fosse as listas em python. */

const myArray = ["Strings", 12, "E números como ja vimos"];

/* Podemos criar uma array dentro de uma array */

const peoples = [["Gustavo", 15], ["Isabelli", 5]];

/* Para encontrarmos o valor da array, basta fazer que nem fizemos com as strings. */

const people = peoples[0];
console.log(people); //O resultado foi: [Gustavo, 15]

/* Ao contrário das strings, arrays são mutáveis, ou seja, podemos mudar algo de dentro dela. Mesmo que usemos o const ainda conseguimos mudar! */

people[0] = "Pablo";
console.log(people); //Resultado: [Pablo, 15]

/* se quisermos nem precisamos da const people, basta usar 1 colchete para cada "camada" */

const camada = peoples[1][1];
console.log(camada); //Resultado: 5

/* Um metódo fácil de adicionar um item a uma array, é com o ".push" que empurra o que você quer para a o final do array */

const arraySimples = [1, 2, 3];
arraySimples.push(4); //Agora "arraySimples" tem os seguintes valor: [1, 2, 3, 4]

/* Também temos o ".unshift", que basicamnete faz a mesma coisa, só que com o primeiro elemento. */

/* O ".pop" apaga o último elemento do array, e atribui a uma nova váriavel. */

const popArray = [1, 2, "Três"];
const tres = popArray.pop();

/* Agora, popArray é igual: [1, 2], e tres é igual a ["Três"] */

/* Também temos o ".shift", que basicamnete faz a mesma coisa, só que com o primeiro elemento. */

/* Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis chamadas de funções. */

function myFunction() { //function é para podermos fazer a função, myFunction() é o nome que usamos para poder invocar ela
    console.log("Hello World!")    //Aqui é a nossa função, nesse caso é escrever algo no console
}
myFunction() //Aqui invocamos nossa função

//Os parênteses são os parâmetros /* Parâmetros são variáveis que atuam como espaços reservados para os valores que são passados para uma função, quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são entradas de (ou "passadas" para) uma função quando ela é chamada são conhecidos como argumentos. */

//Exemplo:

function mySoma(param1, param2) {
    console.log(param1 + param2)
}
mySoma(3, 4) //Resultado no console: 7

/* Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor para fora de uma função. */
//Exemplo: 

function quintuplo(num) {
    return num * 5
}
console.log(quintuplo(4)) //Resultado: 20, pois ele pegou o número 4(num) e multiplicou por 5(return)

/* instruções if são usadas para tomar decisões no código. A palavra-chave if diz ao JavaScript para executar o código nas chaves sob certas condições, definidas nos parênteses. Essas condições são conhecidas como condições Boolean e elas só podem ser true ou false. */

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
}
  
test(true);
test(false);

/* test(true) retorna a string It was true e test(false) retorna a string It was false. */

//É igual ao python, temos o IF, Else e o Else if(Tipo o elif).

//Operadores;

//Igual ==(=== Não converte '3' para 3), 1 == 1 Yes, 1 == 2 Not.
//Diferente !=(!== Não converte '3' para 3), 1 != 1 Not, 1 != 2 Yes.
//Maior >, 1 > 1 Not, 1 > 2 Not, 2 > 1 Yes. 
//Menor <, 1 < 1 Not, 1 < 2 Yes, 2 < 1 Not.
//Maior ou  igual >=, 1 >= 1 Yes, 1 >= 2 Not, 2 >= 1 Yes.
//Menor ou  igual <=, 1 <= 1 Yes, 1 <= 2 Yes, 2 <= 1 Not.

//And(e) &&, ex: A=2 B=1 C=3, a > b && a < c Yes. 
//Or(ou) ||, ex: A=2 B=5 C=3, a > b || a < c Yes.

/* Se você precisar corresponder um valor a muitas opções, pode usar uma instrução switch. Uma instrução switch compara o valor a uma instrução de caso, que define os diversos valores possíveis. Quaisquer instruções JavaScript válidas podem ser executadas dentro de um bloco de caso (case) e serão executadas a partir do primeiro valor de case correspondente até que um break seja encontrado. */

switch (fruit) {
    case "apple": //Avalia se fruit é igual´à "apple", fruit === "apple".
        console.log("The fruit is an apple");
        break; //Encerra caso for disparado
    case "orange":
        console.log("The fruit is an orange");
        break;
    default:
        console.log('Undefined');
        break;
}

/* Na instrução switch, você não deve ser capaz de especificar todos os possíveis valores como instruções case. Ao invés disso, você pode adicionar a instrução default, que será executada se nenhuma instrução case correspondente for encontrada. Pense nisso como a instrução final else em uma cadeia de if/else. */