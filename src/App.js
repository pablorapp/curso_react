import { Component } from "react"
class Button extends Component {
    constructor(props){
        super(props)
        console.log('constructor', this.props);
    }
    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component Did Update', prevProps, prevState );
    }

    componentWillUnmount(){
        console.log('desmontando componente');
    }
    render(){
        console.log('ejecutando render');
        return (
            <button onClick={()=>this.setState({prop:1})}>Enviar</button>
        )
    }
}

class App extends Component {
    state = {}
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola Mundo</p>
                {this.state===3?<Button/>: null}
                <button onClick={()=>this.setState({valor:2})}>Enviar en Ap</button>
            </div>
        )
    }
}

export default App