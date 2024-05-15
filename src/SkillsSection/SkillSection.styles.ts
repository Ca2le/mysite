import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 6rem;
  font-family: Roboto;
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 30px;
  }
`;

export const TitleContainer = styled.div`
  z-index: 1001;
  position: absolute;
  left: 50%;
  top: 3rem;
  transform: translateX(-50%);
  @media (max-width: 600px) {
    top: 1rem;
    height: 100px;
  }
`;

export const Header = styled.h1`
  font-family: Lato;
  font-size: 44px;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 38px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  z-index: 1000;
  margin-top: 50px;
  height: 470px;
  width: auto;
  @media (max-width: 600px) {
    height: 500px;
  }
`;

export const CardFrame = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 470px;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 500px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 80%;
  max-width: 700px;
  height: 450px;

  border: 1px solid #000;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    height: 500px;
    gap: 0;
  }
`;

export const LeftArrow = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 50%;
  display: flex;
  width: 50px;
  height: 50px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  display: flex;
  width: 50px;
  height: 50px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BackgroundFiller = styled.div<{ opacity: number }>`
  z-index: 1000;
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
`;

export const Content = styled.div`
  opacity: 1;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 2rem;
  position: absolute;
  color: #313131;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: auto;
    gap: 1rem;
  }
`;

export const StageContainer = styled.div`
  opacity: 0.7;
`;
