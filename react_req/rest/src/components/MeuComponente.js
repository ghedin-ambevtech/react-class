import React, {Component} from 'react';

class MeuComponente extends Component {
    constructor(props){
        super(props)
        // sintaxe correta aqui é this.state = objeto
        this.state = {numero:5}
    }
    // método raramente utilizado. por exemplo state dependendo do props
    // não tem acesso a instancia do componente, impedindo a utilização do this
    // o que é retornado ness método, é substituído no state     
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps..');
        //console.log(props);
        //console.log(state);
        return null
    }

    componentDidMount(){
        console.log('componentDidMount..');
    }

    shouldComponentUpdate(nextProps, nextState){
        // aqui determina se chama ou não o render
        //return false
        return true
    }

    componentDidUpdate(){
        console.log('Componente foi atualizado..');
    }

    adicionarNumero(){
        let numeroAtual = this.state.numero
        numeroAtual += 1
        this.setState({ numero: numeroAtual })
    }
    render() {
        return <div>
            <p>Sou seu componente!!</p>
            <p>{this.state.numero}</p>
            <p>{this.props.titulo}</p>
            <button onClick={this.adicionarNumero.bind(this)}>Adicionar Numero</button>
        </div>
    }
}

export default MeuComponente