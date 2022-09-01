import { Chip } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/data.context";
import MaterialCard from "../card/card.component";
import {
  CardsContainerStyles,
  ComponentWrapper,
  Heading,
  HeadingContainer,
} from "./cards-container.styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CardsContainer = () => {
  const { dataArr, barOpen } = useContext(DataContext);
  return (
    <ComponentWrapper appBarState={barOpen}>
      <HeadingContainer>
        <Heading>Discover</Heading>
        <AddCircleIcon color="primary" />
      </HeadingContainer>
      <CardsContainerStyles>
        {dataArr.map((arr, index) => {
          const { title, coverImageUrl } = arr;
          return (
            <MaterialCard key={index} title={title} image={coverImageUrl} />
          );
        })}
      </CardsContainerStyles>
    </ComponentWrapper>
  );
};

export default CardsContainer;
