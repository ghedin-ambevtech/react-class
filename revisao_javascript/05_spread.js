// Em js quando atuamos como abaixo, numeros e novosNumeros acabam ficando com os mesmos valores

// const numeros = [1, 2, 3, 4]

// const novosNumeros = numeros
// novosNumeros.push(5)

// console.log(numeros);
// console.log(novosNumeros);

//Utilizando spread. Faz com q a segunda lista receba os itens da primeira, as não iguale as duas
//é uma cópia, propagação
const numeros = [1, 2, 3, 4]

const novosNumeros = [...numeros]
novosNumeros.push(5)
//outra forma 
//const novosNumeros = [...numeros, 5]

console.log(numeros);
console.log(novosNumeros);

// Utilizando spread com objetos
const rex = {
    nome: 'Rex'
}

const max = {...rex, idade: 2, familia: 'mamifero'};
max.nome = "Max"

console.log(rex);
console.log(max);

