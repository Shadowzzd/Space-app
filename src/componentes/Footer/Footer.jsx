import styled from "styled-components";

const Rodape =styled.footer`
     display: flex;
     line-height: center;
     justify-content: space-between;
     background-color: #04244F;
     margin-top: 50px;
     p{
        padding: 0 20px 0 0;
        color:#FFFFFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
     }

`
const RodapeDiv = styled.div`
    display: flex;
    width: 7%;
    justify-content: space-between;
    padding: 10px 0 0 20px;
    
`

const Footer = () => {
    return (
        <Rodape>
            <RodapeDiv>
            <a href="">
                <img src="/imagens/sociais/facebook.svg" alt="" style={{height: '25px'}}/>
            </a>
            <a href="#">
                <img src="/imagens/sociais/twitter.svg"style={{height: '26px'}}/>
            </a>
            <a href="#">
                <img src="/imagens/sociais/instagram.svg"style={{height: '25px'}}/>
            </a>
            </RodapeDiv>
            <p>Desenvolvido por Alura</p>
        </Rodape>
    );
}


export default Footer