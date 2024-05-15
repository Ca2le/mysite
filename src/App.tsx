import { useAppDispatch, useAppSelector } from "./redux/index.slices";
import HomePage from "./HomeSection/HomePage";
import { useEffect } from "react";
import AssetsLoader from "./utils/AssetsController";
import "./global.style.css";
import { setDevice, setSize } from "./redux/windowSize.slice";
import AboutPage from "./AboutSection/AboutPage";
import Loading from "./Loading";
import { reSizing } from "./redux/loading.slice";
import GrainScreen from "./ScreenView/GrainScreen";
import ReferencePage from "./ProjectSection/ProjectsPage";
import SkillsPage from "./SkillsSection/SkillsPage";
import { Container, InnerContainer } from "./App.styles";
import ContactFooter from "./ContactFooter";
import Pages from "./DeepSkillPages/Pages";

function App() {
  const { isLoading, assetsImported, resizing } = useAppSelector(
    (state) => state.loading
  );

  const { pageIsActive, currentPage } = useAppSelector((state) => state.pager);

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (!assetsImported) {
        AssetsLoader.loadAllAssets();
      }
    })();
  }, []);

  useEffect(() => {
    const onResize = () => {
      requestAnimationFrame(() => {
        if (window.innerWidth < 450) {
          dispatch(setDevice("phone/tablet"));
        } else {
          dispatch(setDevice("desktop"));
        }
        dispatch(reSizing(true));
        dispatch(
          setSize({ width: window.innerWidth, height: window.innerHeight })
        );
      });
    };

    window.addEventListener("resize", onResize);
    const onLoad = () => {
      if (window.innerWidth < 450) {
        dispatch(setDevice("phone/tablet"));
      } else {
        dispatch(setDevice("desktop"));
      }
      dispatch(
        setSize({ width: window.innerWidth, height: window.innerHeight })
      );
    };
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);

  return isLoading || resizing ? (
    <Loading />
  ) : (
    <Container >
      <InnerContainer>
        <HomePage />
        <AboutPage />
        <ReferencePage />
        <SkillsPage />
        <ContactFooter />
      </InnerContainer>
      {pageIsActive ? <Pages currentPage={currentPage} /> : null}
      <GrainScreen />
    </Container>
  );
}

export default App;
