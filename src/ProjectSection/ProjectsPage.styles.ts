import styled from "styled-components";

export const Container = styled.div`
z-index: 1000;
display: flex;
height: auto;
width: 100%;
position: relative;
margin: 0;
padding: 0;
justify-content: center;
`;

export const OverflowHidden = styled.div`
width: 100%;
height: 100%;
`;

export const BackgroundColor = styled.div`
background-color: none;
width: 100%;
height: 470px;
opacity: 0.9;
border-bottom: 1px solid black; 
border-left: 1px solid black; 
border-right: 1px solid black; 
@media (max-width: 600px) {
height: auto;
}
`;

export const InnerContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
gap: 1rem;
padding: 0 2rem;
align-items: center;
justify-content: center;

@media (max-width: 600px) {
flex-direction: column-reverse;
justify-content: center;
gap: 0rem;
padding: 1rem;
`;

export const Img = styled.img`
opacity: 0.9;
height: auto;
width: auto;
max-width: 500px;
min-width: 300px;
margin: 0;
padding: 0;
z-index: 1002;

@media (max-width: 800px) {
    width: 350px;
}

@media (max-width: 600px) {
width: 100%;
height: auto;
margin: 2rem 0;

}
`;

export const StyledButton = styled.button`
  color: #313131;
  background: none;
  position: relative;
  width: 10rem;
  height: 2rem;
  display: flex;
  padding-left: 2.5rem;
  align-items: center;
  border: 1px solid #313131;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #313131;
  }
`;

export const DescriptionDiv = styled.div`
opacity: 1;
z-index: 1000;
height: auto;
width: auto;
max-height: 300px;
max-width: 400px;
min-width: 100px;
color: #313131;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid #000;
padding: 0.5rem;

background-color: #fff;

@media (max-width: 600px) {
height: auto;
width: 100%;
`;