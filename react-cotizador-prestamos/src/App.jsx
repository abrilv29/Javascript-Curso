import { useState, useEffect } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import { formMoney, calulateTotalPayment } from "./utils";


/* ------ Sintaxis JAVASCRIPT ------ */

function App() {
  const [cantidad, setCantidad] = useState(10000); //para poder cambiar el valor de cantidad se debe utilizar setCantidad.
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);
  

  useEffect (() => {
    const resultTotalPayment = calulateTotalPayment(cantidad,meses,total);
    setTotal(resultTotalPayment);
  },[cantidad, meses]);

  useEffect(() => {
    //Calcular el pago mensual
    setPayment(total/meses);
  },[total]);



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
    if (valor < MIN) {
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncrement() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      return;
    }
    setCantidad(valor);
  }

  return (
    /* ------ Sintaxis HTML ------ */
    <div className="my-20 max-w-lg mx-auto bg shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Buttons
          operator="-"
          fn={handleClickDecrement}
        />
        <Buttons
          operator="+"
          fn={handleClickIncrement}
        />

      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formMoney(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>
      <select 
      className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold"
      value={meses}
      onChange={ e => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
      <div className="my-5 space-y-3 bg-gray-50 p-5">
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span className="text-indigo-600">de pagos</span>
      </h2>
      <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formMoney(total)} Total a pagar</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formMoney(payment)} Mensuales</p>

      </div>

    </div>
  )
}

export default App
