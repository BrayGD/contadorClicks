import '../src/App.css';
import brayDevLogo from './imagenes/BrayDevLogo.svg';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
  setNumClicks(numClicks +1);
}

const reiniciarContador = () =>{
  setNumClicks(0);
}

  return (
    <div className="App">
      <div className='braydev-logo-contenedor'>
      <img 
        className='braydev-logo'
        src={brayDevLogo}
        alt='mi logo bray dev'
      /> 
      </div>
      <div className="contenedor-principal">
      <Contador numClicks = {numClicks} />
      <Boton 
        texto='Click'
        esBotonDeClick= { true } 
        manejarClick={ manejarClick } />
      <Boton 
        texto='Reiniciar'
        esBotonDeClick= {false} 
        manejarClick={ reiniciarContador } />
      </div>
              
    </div>
  );
}

export default App;
