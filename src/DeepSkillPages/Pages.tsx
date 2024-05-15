import styled from "styled-components";
import data from "./data.json";
import Star from "./Star";
import { setIsActive } from "../redux/pager.slice";
import { useAppDispatch } from "../redux/index.slices";

interface IData {
  title: string;
  description: string;
  subject: Subject[];
}

interface Subject {
  name: string;
  list: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const numberToStarList = (level: number): JSX.Element[] => {
  const stars = [];
  for (let i = 0; i < level; i++) {
    stars.push(<Star isEmpty={false} />);
  }
  while (stars.length < 10) {
    stars.push(<Star isEmpty={true} />);
  }
  console.log(stars);
  return stars;
};

interface PagesProps {
  currentPage: number;
}

const Pages = ({ currentPage }: PagesProps) => {
  const dispatch = useAppDispatch();
  return (
    <ExitDiv
      onClick={() => {
        console.log("exit");
        dispatch(setIsActive(false));
      }}
    >
      <InnerDiv>
        <Container>
          <Exit
            onClick={() => {
              console.log("exit");
              dispatch(setIsActive(false));
            }}
          />
          {data.map((item: IData, index) => {
            if (index === currentPage) {
              return (
                <>
                  <TitleContainer>
                    <Title>{item.title}</Title>
                    <SubTitle>{item.description}</SubTitle>
                  </TitleContainer>

                  {item.subject.map((subject: Subject) => {
                    return (
                      <MyRatingContainer>
                        <MiniTitleContainer>
                          <MiniTitle>{subject.name}</MiniTitle>
                        </MiniTitleContainer>
                        {subject.list.map((skill: Skill) => {
                          return (
                            <Rating>
                              <RatingTitle>{skill.name}</RatingTitle>
                              <ValueContainer>
                                {numberToStarList(skill.level).map((star) => {
                                  return star;
                                })}
                              </ValueContainer>
                            </Rating>
                          );
                        })}
                      </MyRatingContainer>
                    );
                  })}
                </>
              );
            }
          })}
        </Container>
      </InnerDiv>
    </ExitDiv>
  );
};

export default Pages;

const Exit = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
  }

  &::before {
    width: 70%;
    height: 1px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    width: 1px;
    height: 70%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 55vh;
  height: 90vh;
  max-width: 1100px;
  min-width: 375px;
  position: relative;
  background-color: white;
  overflow-x: hidden;
  border: 1px solid black;
  opacity: 0.99;
`;

const ExitDiv = styled.div`
  z-index: 2000;
  height: 100vh;
  width: 100%;
  z-index: 2000;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
`;

const InnerDiv = styled.div`
  z-index: 2001;
  opacity: 0.98;

  width: 100%;

  background-color: none;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  font-style: normal;
  font-family: "Playfair Display", sans-serif;
  color: #313131;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  color: #313131;
  font-family: "Lato", sans-serif;
`;

const MiniTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 900;
  font-style: normal;
  color: #313131;
  font-family: "Playfair Display", sans-serif;
`;

const MyRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;

const RatingTitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  font-style: normal;
  color: #313131;
  font-family: inherit;
`;

const ValueContainer = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const MiniTitleContainer = styled.div`
  max-width: 250px;
`;
