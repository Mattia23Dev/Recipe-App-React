import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";

const Popular = () => {
    const [popular , setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);


    const getPopular = async() => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=966a63e5e0064e6bb6cf3a38f6dde556&number=9`
            )
            .catch((error) => console.log(error));
        const data = await api.json();
        setPopular(data.recipes); 
    }



  return (
    <div>
                <Wrapper>
                    <h3>Popular Recipes</h3>
                <Splide options={{
                    perPage:4,
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
                    {popular.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                            <Zoom>   
                            <Card className='popular-mobile'>
                              <Link to={'/recipe/'+recipe.id} className='scale'>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                              </Link> 
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
      background-color: rgba(0,0,0,0.5);
    }

    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:-10%;
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


export default Popular