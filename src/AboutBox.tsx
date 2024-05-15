import styled from "styled-components";

const AboutBox = () => {
  return (
    <Container>
      <Div>
        <h1>Om</h1>
        <p>
          Jag är en 35-årig teknikentusiast med en stark entreprenöriell
          drivkraft, djupt passionerad för mjukvaruutveckling. Jag drivs av
          höga ambitioner och en obeveklig önskan om att skapa en varaktig karriär
          inom tech-industri.
        </p>
      </Div>
    </Container>
  );
};

export default AboutBox;

const Container = styled.div`
  z-index: 1002;
  top: 24%;
  left: 55%;
  transform: translatX(-50%);
  position: absolute;
  height: 20rem;
  min-width: 20rem;
  max-width: 20rem;
  background-color: #fff;
  opacity: 0.97;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 2px 2px 0px #313131;

  @media (max-width: 600px) {
    top: 10%;
    left: 50%;
    width: 80%;
    height: auto;
    max-width: 400px;
    min-width: 200px;
    padding: 0rem;
    transform: translateX(-50%);
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #313131;
  padding: 2rem 3rem;
  width: 100%;
  height: auto;
  text-align: center;
  @media (max-width: 600px) {

  gap: 0.5rem;
  
  padding: 2rem;


  }

  }
`;
