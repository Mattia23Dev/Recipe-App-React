import {React, useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";

const Search = () => {
  const [input , setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
    
  return (
    <Bounce>
    <form onSubmit={submitHandler} className='form'>
        <div>
            <FaSearch onClick={submitHandler}></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}
            onSubmit={submitHandler}
            />
        </div>    
    </form>
    </Bounce>
  )
}

export default Search