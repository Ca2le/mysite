import "@pixi/events";
import { Resource, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import AssetsLoader from "../utils/AssetsController";
import "./style.css";
import {
  BackgroundColor,
  Container,
  Img,
  InnerContainer,
} from "./ProjectsPage.styles";
import { Margin } from "../AboutSection/AboutPage.styles";
import Description from "./Description";


function ReferencePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      (async () => {
        const computerTexture = (await AssetsLoader.loadAssetsBundle(
          "computer"
        )) as Texture<Resource>;
        console.log(computerTexture);
        if (computerTexture) {
          setLoading(false);
        }
      })();
    }
  }, [loading]);

  return (
    <Container>
      <Margin>
        <BackgroundColor>
          <InnerContainer>
            <Description />
            <Image />
          </InnerContainer>
        </BackgroundColor>
      </Margin>
    </Container>
  );
}

export default ReferencePage;

const Image = () => {
  return (
    <div style={{ width: "auto", height: "auto", position: "relative" }}>
      <Img src="/assets/section_3/game.png" />
    </div>
  );
};
