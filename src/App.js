import React,{useEffect , useState} from 'react'
import './App.css'
import Recipe from './Recipe'

const App = () => {
    const APP_ID = '8fbdbd7e';
    const APP_KEY = '2802826c4e6e96751a0a898209739101' 
    const [recipes , setRecipes] = useState([]);
    const [search , setSearch]  = useState('');
    const [query ,setQuery ] = useState('chicken')

    useEffect( () => {
                getRecipes();
                console.log('useeffect is run')
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
        const data = await response.json();
        console.log(data.hits)
        setRecipes(data.hits)
    }

    const updateSearch= e =>{
        setSearch(e.target.value)
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }


    return (
        <div className="App">
            <div className="header">
                My Recipe's
            </div>
            <form  onSubmit={getSearch} className="search-form">
                <input type="text" className="search_bar" placeholder='Search Recipe'
                 value={search} 
                 onChange={updateSearch}/>
                <button className="search_button" type='submit'   >Search</button>
            </form>

            <div className='recipe'>
            {
                   recipes.map((recipe)=>(
                       <Recipe 
                       key={recipe.recipe.calories}
                       title ={recipe.recipe.label} 
                       calories={recipe.recipe.calories} 
                       image={recipe.recipe.image}
                       ingredients={recipe.recipe.ingredients}
                       />
                   ))
              }
              
            </div>
            <div className="footer">
            <div className="footer_logo">
                My Recipe's
            </div>
            <div className='copyright'> &copy; Prashik Dewtale </div>
            </div>
        </div>
    )
}

export default App
