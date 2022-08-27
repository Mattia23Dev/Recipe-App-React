import React from 'react'
import {FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiNoodles , GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Category = () => {
  return (
    <div>
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiNoodles />
            <h4>Chinese</h4>
        </SLink>
    </List>
    </div>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg , #494949 , #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;

    h4{
        color: white;
        font-size: 1rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient( to right, #f27121 , #e94057);
    }
`;


export default Category