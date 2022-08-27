import {React, useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Search = () => {
  const [input , setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
    
  return (
    <FormStyle onSubmit={submitHandler} className='form-mobile'>
        <div>
            <FaSearch onClick={submitHandler}></FaSearch>
            <input 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input}
            />
        </div>    
    </FormStyle>
  )
}

const FormStyle = styled.div`
    margin: 0rem 20rem;
   div{
    position: relative;
    width: 100%;
   }

    input{
        border:none;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1.5rem;
        outline:none;
        background: linear-gradient(35deg , #494949 , #313131);
        width: 100%;
    }
    svg{
        position: absolute;
        top: 40%;
        left: 2%;
        transform: translate(100%; -50%);
        color: white;
        cursor: pointer;
    }
`;

export default Search