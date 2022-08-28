import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import { Fade , Slide } from "react-awesome-reveal";

const Recipe = () => {

    let params = useParams();
    const [details , setDetails] = useState([]);

    const [activeButton , setActiveButton] = useState('instructions');  //stato del bottone attivo

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    const fetchDetails = async() => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/${params.name}/information?apiKey=966a63e5e0064e6bb6cf3a38f6dde556`
        )
        .catch((error) => console.log(error));
        const detailData = await data.json();
        setDetails(detailData);
    };


  return (
    
    <DetailWrapper className='recipe-mobile'>
        <div className='div1-recipe'>
            <h2 key={details.id}>{details.title}</h2>
            <Slide>
            <img src={details.image} alt="Details image" />
            </Slide>
        </div>
        
        <Information className='div2-recipe'>
            <Button
            className={activeButton === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveButton('instructions')}>Instructions</Button>
            <Button 
            className={activeButton === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveButton('ingredients')}>Ingredients</Button>

            {activeButton === 'instructions' && (
            <div>
                <Fade cascade>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h2>Preparation:</h2>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </Fade>
             </div>
            )}

            {activeButton === 'ingredients' && (
            <ul>
                <Fade cascade>
                {details.extendedIngredients.map((ingredient) =>{
                    return(
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )
                })}
                </Fade>
            </ul>
            )}

        </Information>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin: 8rem 5% 5rem 5%;
    display: flex;

    .active{
        background: linear-gradient(35deg , #494949 , #313131);
        color: white;
    }
    img{
        border-radius: 2rem;
    }
    h2{
        margin-bottom 2rem;
    }
    h3{
        font-size: 1.2rem;
    }
    li{
        font-size: 1.2rem;
        line-height:2rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.div`
    padding: 1rem 3rem;
    color : #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    display: inline;
`

;
const Information = styled.div`
    margin-left: 10rem;
    margin-right: 0;
`;

export default Recipe