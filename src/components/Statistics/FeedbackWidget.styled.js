import styled from 'styled-components';


export const ButonsWrapp = styled.div`
  text-align: center;
 border: solid 2px orange;
 padding: 10px;
 border-radius: 5px;
 width: 270px;
 margin: 0 auto;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; 
`;

export const ButtonForFeedback = styled.button`
  width: 60px;
  :not(:last-child) {
    margin-right: 10px;
  }
  
  border-radius: 10px;
  padding: 5px;
  font-weight: 700;
  background-color: lightblue;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: orange;
    color: black;
    border-radius: 10px;
  }
`;