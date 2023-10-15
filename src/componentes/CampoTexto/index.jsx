import styled from "styled-components";


const CampoTextoEstilizado = styled.input`
    background-image: url("./icones/search.png");
    background-repeat: no-repeat;
    background-position: center right 20px; 
    padding: 10px 40px 10px 10px; 
    border-radius: 10px;
    border: 3px solid var(--Degrad-com-rosa, #C98CF1);
    line-height: normal; 
    display: flex;
    align-items: center;
    min-width: 600px;
    color: #D9D9D9;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: black;
    
    
`;

const Busca = ()=>{
    return(
      <CampoTextoEstilizado>
        
      </CampoTextoEstilizado>
      

    )
}

export default CampoTextoEstilizado