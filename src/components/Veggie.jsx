import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";

const Veggie = () => {
    const [vegetarian , setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    }, []);


    const getVegetarian = async() => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=966a63e5e0064e6bb6cf3a38f6dde556&number=9&tags=vegetarian`
            )
            .catch((error) => console.log(error));
        const data = await api.json();
        setVegetarian(data.recipes); 
    }



  return (
    <div>
                <Wrapper>
                    <h3>Our Vegetarian Recipes</h3>
                <Splide options={{
                    perPage:3,
                    pagination: false,
                    arrows: false,
                    drag: 'free',
                    gap: '2rem',
                    breakpoints: {
                        640: {
                            perPage: 1,
                            drag: true,
                        },}
                }}>
                    {vegetarian.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                            <Zoom>    
                            <Card className='veggie-mobile'>
                              <Link to={'/recipe/'+recipe.id} className='scale'>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                              </Link>
                                <Gradient />
                            </Card>
                            </Zoom>
                            </SplideSlide>
                        )
                    })}
                </Splide>
                </Wrapper>
    </div>
  )
}

//STYLE
const Wrapper = styled.div`
    margin: 20px 5%;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius 2rem;
    overflow: hidden;
    position: relative;

    img{
      border-radius:2rem;
      width:100%;
      heigth:100%;
      position:absolute;
      left: 0;
      object-fit:cover;
    }

    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:-30%;
        transform: translate(-50%, 0);
        color: black;
        text-align:center;
        font-weight: 800;
        justify-content: center;
        align-items:center;
        display:flex;
        font-size:1rem;
        height:80%;
    }
`;

const Gradient = styled.div`
    z.index:3;
    position:absolute;
    width:100%;
    heigth:100%;
    background: linear-gradient(rgba(0,0,0,0)), (rgba(0,0,0,0.5));
`

export default Veggie