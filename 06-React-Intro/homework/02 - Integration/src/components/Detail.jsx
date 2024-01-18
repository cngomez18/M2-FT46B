import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail(){
    
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div>
        {character.id === parseInt(id, 10) ?  (
            <div>
              <h2>Name: {character.name} </h2>
              <h4>Status: {character.status}</h4>
              <h4>Specie: {character.species}</h4>
              <h4>Gender: {character.gender}</h4>
              <h4>Origin: {character.origin?.name}</h4>
              <img src={character.image} alt={character.name} />
            </div>
        ) : (
            <p>
              Character ID {id} not found
            </p>
        )}
        </div>
    )
}