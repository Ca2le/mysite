import { useState } from "react";
import { DescriptionDiv, StyledButton } from "./ProjectsPage.styles";

const Description = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <DescriptionDiv>
      <h1
        style={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          fontSize: "32px",
          marginBottom: "-12px",
          opacity: 1.0,
          paddingBottom: "0.5rem",
        }}
      >
        Projects
      </h1>
      <p
        style={{
          fontFamily: "Lato",
          fontWeight: 300,
          fontSize: "18px",
          paddingBottom: "1rem",
        }}
      >
        Kolla in min github profil för att se lite av mina nuvarande projekt.
      </p>

      <StyledButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          window.location.href = "https://www.example.com";
        }}
      >
        <p>GITHUB</p>
        <svg
          width={15}
          viewBox="0 0 20 20"
          style={{
            paddingBottom: "1px",
            position: "absolute",
            top: "50%",
            left: "65%",
            transform: "translateY(-50%)",
            fill: isHovered ? "#fff" : "#313131",
          }}
        >
          <path d="M10,0c5.52,0,10,4.59,10,10.25,0,4.53-2.86,8.37-6.83,9.73-.51.1-.69-.22-.69-.49,0-.34.01-1.44.01-2.81,0-.96-.32-1.58-.68-1.9,2.23-.25,4.57-1.12,4.57-5.06,0-1.12-.39-2.03-1.03-2.75.1-.26.45-1.3-.1-2.71,0,0-.84-.27-2.75,1.05-.8-.23-1.65-.34-2.5-.35-.85,0-1.71.12-2.5.35-1.91-1.33-2.75-1.05-2.75-1.05-.54,1.41-.2,2.46-.1,2.71-.64.72-1.03,1.63-1.03,2.75,0,3.93,2.33,4.81,4.56,5.07-.29.26-.55.71-.64,1.37-.57.26-2.02.72-2.91-.85,0,0-.53-.99-1.53-1.06,0,0-.97-.01-.07.62,0,0,.65.31,1.11,1.5,0,0,.59,1.83,3.37,1.21,0,.86.01,1.67.01,1.91,0,.27-.18.59-.68.49C2.86,18.63,0,14.78,0,10.25,0,4.59,4.48,0,10,0" />
        </svg>
      </StyledButton>
    </DescriptionDiv>
  );
};

export default Description;
