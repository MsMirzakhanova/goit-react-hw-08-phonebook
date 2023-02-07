import styled from 'styled-components';

export const ContactInputForm = styled.form`
border: 1px solid black;  
display: block;
padding: 10px;
display:flex;
flex-direction: column;
gap:20px;
width: 320px;
margin-bottom: 20px;
`;

export const Button = styled.button`
padding: 5px;
  text-align: center;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  &:hover,
  &:focus {
    background-color:  #f27e30;
`;