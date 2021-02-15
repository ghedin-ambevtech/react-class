# Passos iniciais ao criar um projeto REACT

- Certificar de que tem node e npm instalados
- abrir o terminal na pasta onde se deseja criar o app e digitar:
  ```js
      npx create-reatc-app react-basico
  ```
- Começar a trabalhar com o projeto:
  ```js
    cd react-basico
    npm-start
  ```
- Já abre direto o navegador rodando a aplicação react

# Estrutura do projeto

- Dentro da pasta do projeto temos:
  - node modules(onde ficam os modulos necessários)
  - public
    - onde tem o arquivo index.html, tudo que for feito no react ficará dentro da div com id = "root"
    - manifest.json tem parametros de configurações muito usado por navegadores de celular.
    - robots.txt configuração dos motores de busca
  - src é onde fica o código da aplicação
  - gitignore, pq já gera um repositorio git automaticamente
  - package-lock.json não mexer
  - package.json tem todas as dependencias que a aplicação precisa
