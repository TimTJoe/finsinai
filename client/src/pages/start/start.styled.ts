import styled from "styled-components";
import bgImg from "@assets/start_background.jpg";
import { Text } from "@fluentui/react-components";

export const StartMain = styled.div`
  width: 99.98vw;
  height: 99.98vh;
  display: grid;
  place-items: center;
  background: no-repeat center url(${bgImg});
`;

export const StartSection = styled.section`
  max-height: 75vh;
  max-width: 85vw;
  border: solid red;
  display: flex;

  & > * {
    flex-basis: 100%;
  }

  & > :first-child {
  }
  & > :last-child {
  }
`;

export const SectionCopy = styled.section``;
export const SectionFigure = styled.figure``;
export const SectionButtons = styled.section`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const SectionText = styled(Text)``;
