import logo from './logo.svg';
import './main.css';
const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo = (bg = '#333') => ( {
  backgroundColor: bg,
  color:'#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li = (props) => {
  console.log(props);
  return (
    <li className="clase-li">valor de li</li>
  )
}

function App() {
  const valor = 'feliz'
  return (
    <ul >Canchito Feliz {valor}
      <Li estado ="Feliz">valor de li</Li>
    </ul>
  );
}

export default App;
