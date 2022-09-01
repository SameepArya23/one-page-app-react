import { style } from "@mui/system/Stack/createStack";
import styled from "styled-components";

export const CardsContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${(props) => (props.appBarState ? "15px" : "30px")};
  row-gap: 15px;
  margin: 10px 15px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Heading = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 20px 15px 0 15px;
`;

export const ComponentWrapper = styled.div`
  width: ${(props) => (props.appBarState ? "85%" : "96%")};
  margin: 0px 0px;

  @media (max-width: 400px) {
    opacity: ${(props) => (props.appBarState ? "0" : "1")};
    width: ${(props) => (props.appBarState ? "30%" : "85%")};
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
