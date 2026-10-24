// TODO 2: importar useState y useEffect desde react.
import { useState, useEffect } from "react";
import TarjetaPerro from "./components/TarjetaPerro";
import "./styles.css";

function App() {
  // TODO 2: reemplazar estas constantes por estados con useState.
  // Crear también sus setters: setImagen, setCargando y setError.
  const [imagen, setImage] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  async function buscarPerro() {

  setCargando(true);
  setError("")
  try {
    const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(respuesta);
    if(!respuesta.ok) {
      // entro aca si hubo un error
      throw new Error("Fallo consulta");
    
    }  


    const datos = await respuesta.json();
    console.log(datos);
    setImage(datos.message);

    } catch {
    setError("Fallo consulta");

    } finally {
      setCargando(false);


    }
   













    // TODO 3: consultar https://dog.ceo/api/breeds/image/random con fetch.
    // Convertir la respuesta a JSON y observarla con console.log.
    // Guardar datos.message usando setImagen.
    // TODO 4: manejar cargando y error con try / catch / finally.
    // Revisar respuesta.ok antes de leer el JSON.
    console.log("Acá vamos a consultar la API");
  }


  useEffect(() => {
    buscarPerro();
    }, []);
  // TODO 5: agregar un useEffect con [] que llame a buscarPerro.
  // Antes, hacer funcionar la consulta solamente con el botón.

  return (
    <main>
      <h1>Explorador de perros</h1>
      <p>Descubrí un nuevo perro con cada clic.</p>

      {cargando && <p role="status">Buscando un perro...</p>}
      {error && <p role="alert">{error}</p>}

      {/* TODO 1: pasar las props titulo e imagen a la tarjeta. */}
      <TarjetaPerro imagen={imagen} />

      <button onClick={buscarPerro} disabled={cargando}>
        {cargando ? "Cargando..." : "Ver otro perro"}
      </button>
    </main>
  );
}

export default App;
