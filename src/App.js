import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';
import data from "./data";
import './local.css';

import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // const recipes = data.recipes;

  // ComponentDidMount ComponentWillMount for counter
  useEffect( async() => {
    getRecipes();

  },[query])

  const getRecipes = async () => {
    const options = {
      url: `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // data: { a: 10, b: 20 }
    };
    
     const response = await axios(options);
     const data  = response.data;
     setRecipes(data.hits); 
  }
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
    <Container className="Container" >    
      <form onSubmit={getSearch} className="search-form" >
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <Button variant="dark" type="submit" className="search-button" >
            Search
        </Button>
        

      </form>
      <Row>
      {
        recipes.map( recipe => (
          <Recipe 
              key = {recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image} 
              ingredients={recipe.recipe.ingredients}
          />
        ))
        
      }

    </Row>
  </Container>
  </div>
  )
}

export default App;
