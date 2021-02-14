//Arrow functions

// função padrão
function soma(a, b){
    return `O resultado da função é: ${a + b}`
}

console.log(soma(5, 6));


// função arrow
// const xxxx = () => {}
const soma2 = (a, b) => {
    return `O resultado da arrow function é: ${a + b}` 
}

console.log(soma2(10, 6));


// Se houver somente um parâmetro, não é necessário o parentesis indicando a função
const pessoa = nome => `Olá ${nome}, seja bem-vindo!`
console.log(pessoa("João"));
