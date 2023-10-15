import styled from 'styled-components'
import tags from './tags.json'


const TagEstilizada = styled.div`
  display: flex;
  gap: 24px;
  margin: 40px 0;
  button {
    color: #FFF;
    font-size: 24px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #c98cf1);
    background: rgba(217, 217, 217, 0.3);
    cursor: pointer;
  }
  p {
    font-size: 24px;
    color: #fff;
  }
`;



const Tags =()=>{
    return(
        <TagEstilizada>
        <p>Busque por tags:</p>
        {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
        </TagEstilizada>
    )
}


export default Tags