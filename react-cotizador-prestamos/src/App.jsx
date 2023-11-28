import { useState } from "react";
import Header from "./components/Header";

/* ------ Sintaxis JAVASCRIPT ------ */

function App() {
  const [cantidad, setCantidad] = useState(10000); //para poder cambiar el valor de cantidad se debe utilizar setCantidad.
  console.log(cantidad);
  const MIN = 200;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) { //colocar signo de + para convertir a numero en lugar de parseInt.
    setCantidad(+e.target.value);
    console.log(+e.target.value);

  }

  function handleClickDecrement() {
    const valor = cantidad - STEP;
    if (valor < MIN){
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncrement() {
    const valor = cantidad + STEP;
    if (valor > MAX){
      return;
    }
    setCantidad(valor);
  }






 
  return (
    /* ------ Sintaxis HTML ------ */
    <div className="my-20 max-w-lg mx-auto bg shadow p-10">
      <Header/>
      <div className="flex justify-between my-6">
        <button 
        type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-white
        text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2
        hover:ring-offset-2 hover:ring-lime-500"
        onClick={handleClickDecrement}
        >-</button>
        <button 
        type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-white
        text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2
        hover:ring-offset-2 hover:ring-lime-500"
        onClick={handleClickIncrement}
        >+</button>

      </div>
      <input 
      type="range"
      className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      onChange={ handleChange }
      min={MIN}
      max={MAX}
      step={STEP}
      value={cantidad}
       />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>
  )
}

export default App
