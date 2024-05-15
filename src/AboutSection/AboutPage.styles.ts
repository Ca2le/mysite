import styled from "styled-components";

export const Container = styled.div`
  max-height: auto;
  height: 750px;
  position: relative;
  zindex: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 100vh;
  }
  // background-color: #fcdbe9;
`;

export const ImageContainer = styled.div`
  opacity: 0.7;
  z-index: 1001;
  height: 390px;
  width: 820px;
  //   background-color: blue;
  left: calc(50% + 138px);
  top: 0%;
  transform: translateX(-50%);
  position: absolute;

  @media (max-width: 450px) {
    width: auto;
    left:calc(50% + 1px);
    top: -1%;
  }
`;

export const Photo = styled.img`
opacity: 0.85;
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  
  max-height: 300px;
  min-height: 250px;
`;

export const Margin = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  min-width: 600px;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    min-width: 300px;
  }
`;
