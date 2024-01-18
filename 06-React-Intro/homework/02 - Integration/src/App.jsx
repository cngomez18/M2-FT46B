import './App.css';
import axios from 'axios'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import { Routes , Route, Link } from 'react-router-dom'
import characters, { Rick } from './data.js';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';


function App() {
   
   const [characters,setCharacters] = useState([])

   {/*const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };*/}

   const onSearch=(id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({data})=>{
            if(data.name){
               setCharacters((oldChars)=> [...oldChars,data]);
            }
            else{
               window.alert('¡No hay personajes con este ID!')
            }

         }
      )
   }

   const onClose = (id) =>{
      const parsedId = parseInt(id,10)
      const filterChars = characters.filter(char => char.id !== parsedId);
      setCharacters(filterChars)  
   }

   {/* const onSearch = () =>{
      setCharacters([...characters,example])
   } */}

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         
         <Routes>

           {/*<Nav onSearch={onSearch} */} 
            <Route 
               path='/home' 
               element={<Cards characters={characters} onClose={onClose} />}/>

            <Route path='/about' element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>}/>
           
         </Routes>
         

      </div>
   );
}

export default App;
