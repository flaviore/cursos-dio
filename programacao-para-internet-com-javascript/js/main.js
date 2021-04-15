var name = "Flavio Alencar";
var idade = 42;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(name + " tem " + idade + " anos.");
//alert (idade + idade2);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil").toUpperCase());

var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
lista.reverse();
console.log(lista);
console.log(lista[0].toString());
console.log(lista.join(" - "));

var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[0].nome);

// var idade = prompt("Informe a idade: ");
// if (idade >= 18){
//     console.log("maior de idade");
// }else{
//     console.log("menor de idade");
// }

var count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

var count2;
for (count2 = 0; count2 < 5; count2++){
    console.log(count2);
}

var d = new Date();
console.log(d.toLocaleString());
console.log(d.toLocaleString());

function soma(n1, n2){
    return n1 + n2;
}

console.log("resultado da soma: " + soma(3,2));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Flavio Souza Costa", "Souza", "Alencar"));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
    
}

// var idade = prompt("Informe a sua idade");
// console.log(validaIdade(idade));

// Esta funcao está sendo usada pelo botão no index.
console.log(document.getElementById("agradecimento"));
function clicou(){
    //alert("Botão Clicado com sucesso!");
    console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado Por Clicar!!!</b>"
    console.log(document.getElementById("agradecimento"));
}

function redirecionaPagina() {
    window.open("https://www.terra.com.br");
    //window.location.href = "www.terra.com.br";
}

function trocar(elemento){
    //alert("Passou o mouse!!");
    //document.getElementById("mousemove").innerHTML = "Texto Alterado.";
    elemento.innerHTML = "Texto Alterado.";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    console.log("Pagina carregada.")
}

function funcaochange(elemento){
    console.log(elemento.value);
}