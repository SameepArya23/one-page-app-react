import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const SideBarStyles = styled(Box)`
  width: ${({ appBarState }) => (appBarState ? "15%" : "4%")};
  @media (max-width: 400px) {
    width: ${({ appBarState }) => (appBarState ? "70%" : "15%")};
  }
`;
export const Bar = styled(AppBar)`
  border-radius: 3px;
`;

export const BarMenu = styled.div`
  width: 82%;
  height: 35px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(213, 210, 210, 0.607);
    transition: all 0.5s ease;
  }
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  align-self: center;
  margin: 10px 0;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 0;
`;
