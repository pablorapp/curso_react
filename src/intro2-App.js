import Button from "./Button"
const arr = [
    'Chanchito feliz',
    'Chachito triste',
    'chanchito emosionado'
]
const App = () =>{
    const miVariable = false
    if(miVariable){
        return <p>Mivariable es false</p>
    }
    return (
    <div>
        <h1>Hola Mundo</h1>
        {arr.map(el => <p key={el}>{el}</p>)}
        <Button onClick={() => console.log('clickeado')}>
            Enviar
        </Button>
    </div>)
}

export default App