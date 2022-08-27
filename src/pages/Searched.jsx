import React from 'react';
import { useState , useEffect } from 'react';
import {useParams , Link } from 'react-router-dom';
import styled from 'styled-components';

const Searched = () => {
    const [searchedRecipes , setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
       getSearched(params.search);
    }, [params.search]);

    const getSearched = async(name) => {
        const data = await fetch(
           `https://api.spoonacular.com/recipes/complexSearch?apiKey=966a63e5e0064e6bb6cf3a38f6dde556&query=${name}`
           );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);   
   }


  return (
    <Grid>
        {searchedRecipes.map((item) =>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    grid-gap: 1rem;
    margin: 100px 6%;
`
const Card = styled.div`
    img{
        width:100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem
    }
`

export default Searched