// Desestruturacao

const frutas = ['laranja', 'banana', 'uva'];


let [fruta1, ,fruta3] = frutas;

console.log(fruta1);
console.log(fruta3);

//---------------
const pessoa = {
    nome: 'Alison',
    idade: 40,
    pais: 'Brasil',
    idioma: 'portugues'
}

// let {idade, idioma} = pessoa

// console.log(idade);
// console.log(idioma);

const localidade = ({pais, idioma}) => `Você mora no ${pais} e fala ${idioma}`

console.log( localidade(pessoa) );

// aqui quando executamos localidade utilizamos o parametro pessoa, mas na declaração desestruturamos e utilizamos somente os atributos que nos interessam, isso facilita na utilização