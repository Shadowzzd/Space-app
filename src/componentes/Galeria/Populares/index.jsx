import styled from "styled-components";
import Titulo from "../../Titulo"

const PopularesEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  img{
    cursor: pointer;
    border-radius: 20px;
    
  }
  button{
    color: #FFF;
    font-size: 24px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #c98cf1);
    background-color: transparent;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    padding: 20px 0;
    cursor: pointer;
  }

`


const Populares = () => {
    const imagensPopulares = Array.from({ length: 5 }, (_, i) => `imagens/populares/foto-${i + 1}.png`);

    return <div style={{ minWidth: 250 }}>
        <Titulo $alinhamento="center">Populares</Titulo>
        <PopularesEstilizado>
        {imagensPopulares.map((caminho, indice) => (
          <img
            key={indice}
            src={caminho}
            alt={`Imagem Popular ${indice + 1}`}
          />
        ))}
        <button>Ver mais</button>
        </PopularesEstilizado>
    </div>
}

export default Populares