# Estado da aplicação

- Propriedades não podem ser alteradas, são somente leitura. Para trabalhar dessa forma, alteramos nossa função do componente para uma classe.
- Transformando o app em uma classe podemos adicionar o estado(state = {}) de uma aplicação. Classe não tem retorno então retira () de App.
- A classe extende Component. Deverá ser importado Component.
- A classe terá uma função render(), que retorna seu componente.
- Existe uma nova forma de trabalhar que não seja com state, trata-se de hooks.
- quando usa uma lista do state, é necessário que tenha uma chave unica.

- Quando componentes só possuem propriedades, chamamos de stateless componentes. Caso contrários, stateful components(componentes inteligentes).

-Nossa aplicação inteira só tem um estado!
