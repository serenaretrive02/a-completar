// TODO 1: recibir titulo e imagen como props y usarlas en el JSX.
function TarjetaPerro({ imagen }) {
  return (
    <article className="tarjeta">
      <h2>Título de ejemplo</h2>

      {imagen ? (

      <img src={imagen} alt="imagen de un perrito"></img>

      ) : (

      <p className="placeholder">Acá aparecerá la imagen del perro.</p>

      )}

    </article>
  );
}

export default TarjetaPerro;
