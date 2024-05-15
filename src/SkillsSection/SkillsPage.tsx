import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "./style.css";
import {
  BackgroundFiller,
  Card,
  CardFrame,
  Container,
  Content,
  Header,
  LeftArrow,
  RightArrow,
  SliderContainer,
  StageContainer,
  TitleContainer,
} from "./SkillSection.styles";
import { Margin } from "../AboutSection/AboutPage.styles";
import { Stage, useApp } from "@pixi/react";
import JiggleBoxComponent from "./JiggleBox";
import { useAppSelector } from "../redux/index.slices";
import TextBox from "./TextBox";

function SamplePrevArrow({ onClick }: props) {
  return <LeftArrow className="arrow-left" onClick={onClick} />;
}

function SampleNextArrow({ onClick }: props) {
  return <RightArrow className="arrow-right" onClick={onClick} />;
}

const SkillsPage = () => {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth < 450);
  const { width } = useAppSelector((state) => state.windowSize);
  const [currentCube, setCurrentCube] = useState(0);
  const numberOfCards = Array(4).fill(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (width < 450) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [width]);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: () => {
      setIsSliding(true)
    },
    afterChange: (index) => {
      setIsSliding(false)
      setCurrentCube(index);
    },
  };

  const stageConfig = {
    width: isPhone ? 200 : 250,
    height: isPhone ? 209 : 259,
    options: { backgroundAlpha: 0 },
  };

  const paths = ["/assets/front.png", "/assets/back.png", "/assets/usef.png", "/assets/game102.png"];

  return (
    <Container>
      <TitleContainer>
        <Header style={{ marginBottom: "-12px" }}>{`Kunskap &`}</Header>
        <Header>{`Erfarenhet`}</Header>
      </TitleContainer>
      <Margin>
        ¨
        <SliderContainer>
          <Slider {...settings}>
            {numberOfCards.map((e, i) => {
              return (
                <div>
                  <CardFrame>
                    <Card>
                      <BackgroundFiller opacity={0.4} />
                      <Content>
                        <StageContainer>
                          <Stage {...stageConfig}>
                            <JiggleBoxComponent
                              jiggleOnce={currentCube === i}
                              imgPath={paths[i]}
                              x={10}
                              y={0}
                              w={isPhone ? 180 : 230}
                              h={isPhone ? 209 : 259}
                              isSliding={isSliding}
                            />
                          </Stage>
                        </StageContainer>
                        <TextBox stage={i} />
                      </Content>
                    </Card>
                  </CardFrame>
                </div>
              );
            })}
          </Slider>
        </SliderContainer>
      </Margin>
    </Container>
  );
};

export default SkillsPage;
