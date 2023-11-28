import Header from "./components/Header";

function App() {

/* ------ Sintaxis JAVASCRIPT ------ */

 
  return (
    /* ------ Sintaxis HTML ------ */
    <div className="my-20 max-w-lg mx-auto bg shadow p-10">
      <Header/>
      <input 
      type="range"
      className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
       />
    </div>
  )
}

export default App
