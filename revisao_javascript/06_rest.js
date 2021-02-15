// Operador rest
const somar = (...numeros) => {numeros.reduce((a,b) => a + b, 0)};

console.log(somar(2, 3, 4));

// função reduce executa uma função emcima de todos os itens de uma lista e retorna um valor no final.
//Muito util para somar itens em uma lista