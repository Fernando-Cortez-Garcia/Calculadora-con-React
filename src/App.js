import './App.css';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={'https://d33wubrfki0l68.cloudfront.net/78278bdf3a25d3e5558190b140cca9cbe86471e8/05e51/img/misuse-6.png'}
        className='logo' alt='Logo de la empresa' />
      </div>
      <div className='contenedor-calculadora'>
        
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          
        </div>

      </div>
    </div>
  );
}
export default App;
