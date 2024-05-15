import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/index.slices";
import { setPage } from "../redux/pager.slice";

interface textBoxProps {
  stage: number;
}

const TextBox = ({ stage }: textBoxProps) => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState(
    "Att optimera, integrera och förgylla gränssnittet för användaren är något jag bland annat brinner för, oavsett om det är hemsida, webb- eller mobilapplikation."
  );
  const [Title, setTitle] = useState("FRONTEND");

  useEffect(() => {
    switch (stage) {
      case 0:
        setTitle("FRONTEND");
        setText(
          "Att optimera, integrera och förgylla gränssnittet för användaren är något jag bland annat brinner för, oavsett om det är hemsida, webb- eller mobilapplikation utveckling."
        );
        break;
      case 1:
        setTitle("BACKEND");
        setText(
          `
          Oavsett om det är serversidad rendering, API'er eller databas querring så är min målsättning stabilitet, säkerhet och noggranhet.
          `
        );
        break;
      case 2:
        setTitle("ANVÄNDBART");
        setText(
          "I gruppprojekt är agil utveckling något som jag värdesätter högt. Jag är van att arbeta i team och att ta ansvar för mina uppgifter."
        );
        break;
      case 3:
        setTitle("CREATIVITY");
        setText(
          "Kreativ utveckling skapar unika och minnesvärda upplevelser. Min passion för att integrera med användaren präglars i varje projekt och mitt nästa. "
        );
        
        break;
      default:
        setText("");
    }
  }, [stage]);

  return (
    <TextContainer>
      <h1
        style={{
          fontSize: "29px",
          color: "#313131",
          transform: "scaleY(1.2)",
          letterSpacing: "0.02em",
          fontFamily: "Playfair Display",
          fontOpticalSizing: "auto",
          fontWeight: 900,
          fontStyle: "normal",
          marginBottom: "0.5rem",
        }}
      >
        {Title}
      </h1>
      <Text>{text}</Text>
      <Link
        onClick={() => {
          dispatch(setPage(stage));
        }}
      >
        Läs mer...
      </Link>
    </TextContainer>
  );
};

export default TextBox;

const TextContainer = styled.div`
  z-index: 1002;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 250px;
  height: auto;
  gap: 0.5rem;

  @media (max-width: 600px) {
    margin: 0;
    width: 250px;
    align-items: center;
    text-align: center;
    padding: auto;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-family: Lato;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
`;

const Link = styled.a`
  font-size: 16px;
  font-family: Lato;
  font-weight: 300;
  font-style: normal;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #000;
  }
`;
