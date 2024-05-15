import { Container, Stage } from "@pixi/react";
import "@pixi/events";
import BubbleSpawner from "./BubbleSpawner";
import { Provider } from "react-redux";
import { store, useAppSelector } from "../redux/index.slices";
import {
  Button,
  GreetContainer,
  Greeting,
  Knowledge,
  Message,
  StackKnowledge,
  OuterContainer,
  CanvasContainer,
  Link,
} from "../styles/HomePage.styles";

const getSize = () => ({
  width: 350,
  height: window.innerHeight,
});

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
};

function HomePage() {
  const { height } = useAppSelector((state) => state.windowSize);
  const initialSize = getSize();
  const stageProps = {
    options: {
      width: 375,
      height: height,
      backgroundAlpha: 0,
    },
  };

  return (
    <>
      <OuterContainer>
        <GreetContainer>
          <Greeting>Hallå!</Greeting>
          <Message>Carl heter jag och är</Message>
          <Message>en fullstack bubbelblåsare.</Message>
          <StackKnowledge>
            <Knowledge>React</Knowledge>
            <Knowledge>.Net</Knowledge>
            <Knowledge>Node.js</Knowledge>
            <Knowledge>Typescript</Knowledge>
            <Knowledge>HTML</Knowledge>
            <Knowledge>CSS</Knowledge>
            <Knowledge>C#</Knowledge>
            <Knowledge>Javascript</Knowledge>
            <Knowledge>HTML</Knowledge>
            <Knowledge>CSS</Knowledge>
            <Knowledge>Cloud Services</Knowledge>
            <Link onClick={() => scrollToBottom()}>och mer...</Link>
          </StackKnowledge>
          <Button onClick={ () => scrollToBottom()}>Kontakta</Button>
        </GreetContainer>
      </OuterContainer>
      <CanvasContainer>
        <Stage {...initialSize} {...stageProps}>
          <Provider store={store}>
            <Container name={"theContainer"}>
              <BubbleSpawner />
            </Container>
          </Provider>
        </Stage>
      </CanvasContainer>
    </>
  );
}

export default HomePage;
