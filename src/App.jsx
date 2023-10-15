import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import Busca from "./componentes/CampoTexto";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/TituloEstilizado";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import Imagem from "./componentes/Galeria/Imagem";
import { useState, useEffect } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Footer/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; /* Ajuste o preenchimento conforme necessário */
  margin: 0 40px;
`;
const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 80%;
  margin-right: 60px;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [busca, setBusca] = useState("");
  const [imagensFiltradas, setImagensFiltradas] = useState([]);
  

  useEffect(() => {
    const resultadosDaBusca = fotosDaGaleria.filter((foto) =>
      foto.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setImagensFiltradas(resultadosDaBusca);
  }, [busca, fotosDaGaleria]);

  const aoAlternarFavorito = (foto) => {
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        if (foto.id === fotoSelecionada?.id) {
          setFotoSelecionada({
            ...fotoSelecionada,
            favorita: !fotoSelecionada.favorita,
          });
        }
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <FlexContainer>
        <Cabecalho />
        <Busca
          type="text"
          placeholder="O que você procura? "
          onChange={(evento) => setBusca(evento.target.value)}
          value={busca}
        />
      </FlexContainer>
      <BannerContainer>
        <BarraLateral />
        <ConteudoGaleria>
          <Banner />
          {/* Renderize os resultados da busca */}
          <Galeria
            aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
            aoAlternarFavorito={aoAlternarFavorito}
            fotos={imagensFiltradas} // Use imagensFiltradas em vez de fotosDaGaleria
          />
        </ConteudoGaleria>
      </BannerContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <Footer />
    </FundoGradiente>
  );
};
export default App;
