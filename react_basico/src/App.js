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
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: 'Eugênia',
      email: 'eugenia@gmail.com',
      data: new Date(),
      mensagem: 'Boas novas!!'
    }
    // opção 1
    // let lista = this.state.comentarios
    // lista.push(novoComentario)
    // this.setState({comentarios: lista})
   // opção 2, utilização de novos conceitos e atualização via dom virtual com setState através do react
   this.setState({comentarios: [...this.state.comentarios, novoComentario]})
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
        data={comentario.data}>
        {comentario.mensagem}
      </Comentario>  
        ))}

        <button onClick={this.adicionarComentario}>Adicionar comentário</button>
      </div>
    );
  }
}

export default App;
