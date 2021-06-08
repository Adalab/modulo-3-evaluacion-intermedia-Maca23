function Pokemon(props){
    return(
        <>
        <img src={props.url} alt={props.name}/>
        <h2>{props.name}</h2>
        <ul>{props.types.map((element, id) => (<li key={id}>{element}</li>))}</ul>
        </>
    );
}

export default Pokemon;