import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

  function handleIncrement(){
      setContador(contador + 1);
  }
  return (
    <>
      <h1>Contador = {contador}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </>
  );
}

export default App;
