import { Link } from "react-router-dom";

export default function Card({id,onClose,name,status,species,gender,origin,image,}) {

   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{id}</h2>
         <Link to={`/detail/${id}`}>
            <h2 className="card-name">{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}