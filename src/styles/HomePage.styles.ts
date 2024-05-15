import styled from "styled-components";
export const GreetContainer = styled.div`
  
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
//   background-color: blue;
  padding: 2rem;

`;
export const Greeting = styled.p`

  color: #313131;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 2.6rem;
  font-weight: 900;
  font-family: Playfair Display;
`;
export const Message = styled.p`
  color: #0c0909;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  font-optical-sizing: auto;
  font-style: normal;

`;
export const StackKnowledge = styled.div`
  padding-top: 0.5rem;
  display: flex;
  width: auto;
  justify-content: start;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #313131;
`;

export const Knowledge = styled.p`
  font-family: "Roboto", sans-serif;
  color: #313131;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const Link = styled.p`
  font-family: "Roboto", sans-serif;
  color: blue;
  font-size: 0.9rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: underline;
  &:hover {
    color: #000;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 0;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  align-items: center;
    justify-content: center;
  flex-direction: column;
  z-index: 1001;
  @media (max-width: 600px) {

    justify-content: start;
    padding-top: 40%;
   }

`;

export const CanvasContainer = styled.div`
  position: absolute;
  opacity: 0.9;
  width: auto;
  max-width: 600px;
  height: 100%;
  top: 50%;
  left: 50%;
//   background-color: pink;
  transform: translate(-50%, -50%);
  z-index: 1000;
  overflow: hidden;
`;
// export const InnerContainer = styled.div`
//     // flex: 4;
//     `;
