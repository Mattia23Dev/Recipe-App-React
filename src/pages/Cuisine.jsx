import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import {useState , useEffect} from 'react';

function Cuisine () {
    const [cuisine , setCuisine] = useState([]);
    let params = useParams();  //Per far caricare ricette a seconda della pagina in cui si sta

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    const getCuisine = async(name) => {
         const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=966a63e5e0064e6bb6cf3a38f6dde556&cuisine=${name}`
            );
         const recipes = await data.json();
         setCuisine(recipes.results);   
    };

  return (
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            {cuisine.map ((item) => {
                return (
                    <Card key={item.id}>
                      <Link to={'/recipe/'+item.id}> 
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                      </Link>   
                    </Card>
                );
            })}
        </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine