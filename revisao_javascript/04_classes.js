class Animal{
    constructor(f){
        this.familia = f
    }
    andar = () => `andando...`
}

//super, passa uma variável para a classe mãe
class Cachorro extends Animal{
    constructor(n, i){
        super('mamifero')
        this.nome = n
        this.idade = i
    }
    latir = () => `${this.nome} está latindo!` //this faz referência a essa classe
}

let rex = new Cachorro('Snoopy', 5);
console.log(rex);
console.log(rex.latir());

let chuck = new Cachorro('Chuck', 10);

console.log(chuck.latir());
console.log(chuck.andar());
console.log(chuck.familia);