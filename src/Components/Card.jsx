const Card = ({datos}) => {
    
    return (
    <div className="card">
        <h2>Hola {datos.nombre}!</h2>
        <p>Sabemos que tu libro favorito es:</p>
        <p>{datos.libro}</p>
    </div>
    )
}

export default Card;