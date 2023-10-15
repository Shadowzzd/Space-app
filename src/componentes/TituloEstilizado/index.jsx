import styled from "styled-components";


const TituloEstilizado = styled.div`
  background-image: url("./banner.png");
  border-radius: 20px;
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: center;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;

  h3 {
    align-items: center;
    padding: 30px;
  }
`;

const Banner = () => {
  return (
    <TituloEstilizado>
      <div>
        <h3>
          A galeria mais
          <br /> completa de <br />
          fotos do espaço!
        </h3>
      </div>
    </TituloEstilizado>
  );
};

export default Banner;

