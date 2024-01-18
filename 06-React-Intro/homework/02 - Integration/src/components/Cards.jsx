import Card from './Card';

export default function Cards({characters,onClose}) {
 //  const {characters} = props;

   return (
   <div>
      {characters.map(char =>( 
         <Card id={char.id}
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => onClose(char.id.toString())}
         />
      ) )}
   </div>
   )
}
