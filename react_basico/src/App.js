import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario'

class App extends Component {
  
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@gmail.com',
        data: new Date(2021, 2, 15),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        data: new Date(2021, 2, 14),
        mensagem: 'Outra mensagem'
      },
      {
        nome: 'José',
        email: 'jose@gmail.com',
        data: new Date(2021, 2, 15),
        mensagem: 'Sem comentários'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    // anular um evento de post em Javascript
    // fazendo isso para que o submit funcione e adicione o comentario corretamente.
    // Caso não faça isso, será executado diretamente um post
    evento.preventDefault(); // aqui anula
    // const novoComentario = {
    //   nome: 'Eugênia',
    //   email: 'eugenia@gmail.com',
    //   data: new Date(),
    //   mensagem: 'Boas novas!!'
    const novoComentario = {...this.state.novoComentario, data: new Date}
    // opção 1
    // let lista = this.state.comentarios
    // lista.push(novoComentario)
    // this.setState({comentarios: lista})
   // opção 2, utilização de novos conceitos e atualização via dom virtual com setState através do react
   this.setState({
     comentarios: [...this.state.comentarios, novoComentario],
     novoComentario: {nome: '', email: '', mensagem: ''} /*ao finalizar a lista, limpa campos de comentario*/ 
  })

  }

  //busca a lista, renderiza lista filtrada com os registros diferentes do comentario selecionado
  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }
  
  // Função chamada cada vez que alguém digita algo no formulário, está ligado ao onChange
  //target é o evento disparado cada vez que uma tecla é digitada
  digitarCampo = evento =>{
    const {name, value} = evento.target
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
        <Comentario
        key={indice} 
        nome={comentario.nome}
        email={comentario.email}
        data={comentario.data}
        //não estou executando a função aqui, estou criando um bind(ligação) que faz com que execute passando a referencia do proprio comentario.
        onRemove={this.removerComentario.bind(this, comentario)}> 
        {comentario.mensagem}
      </Comentario>  
        ))}
        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
            type="text" 
            name = "nome" 
            value = {this.state.novoComentario.nome}
            onChange={this.digitarCampo}
            placeholder="Digite seu nome"/>
          </div>
          <div>
            <input 
            type="email" 
            name = "email" 
            value = {this.state.novoComentario.email}
            onChange={this.digitarCampo}
            placeholder="Digite seu email"/>
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value = {this.state.novoComentario.mensagem}
            onChange={this.digitarCampo}
            rows="4"/>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>    
      </div>
    );
  }
}

export default App;
