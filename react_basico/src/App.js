import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="João" email="joao@gmail.com" data={new Date(2021, 2, 15)}>
        Olá, tudo bem?
      </Comentario>  
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2021, 2, 15)}>
      Trocando mensagem
      </Comentario>  
      <Comentario nome="José" email="josé@gmail.com" data={new Date(2021, 2, 14)}>
      Olá, tudo bem?
      </Comentario>  

    </div>
  );
}

export default App;
