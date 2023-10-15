import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
    min-width: 100%;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
    min-width: 80%;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 80%;
    
`


const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria