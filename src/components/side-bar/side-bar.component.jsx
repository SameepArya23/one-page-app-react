import { Fragment, useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Bar,
  BarMenu,
  LinksWrapper,
  ProfilePic,
  SideBarStyles,
} from "./side-bar.styles";
import { Badge, Divider } from "@mui/material";
import { DataContext } from "../../context/data.context";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SideBar = () => {
  const { barToggleHandler, barOpen, dataArr } = useContext(DataContext);
  return (
    <SideBarStyles sx={{ flexGrow: 1 }}>
      <Bar position="static" color="transparent" appBarState={barOpen}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={barToggleHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {barOpen ? "News" : ""}
          </Typography>
        </Toolbar>
        <Divider />
        {barOpen ? (
          <Fragment>
            <ProfilePic src={dataArr[0].user.profilePic} />
            <Divider />
            <BarMenu>
              Profile
              <Badge badgeContent={4} color="secondary" />
            </BarMenu>
            <Divider />
            <BarMenu>Discover</BarMenu>
            <BarMenu>
              Blogs
              <Badge color="error" variant="dot" />
            </BarMenu>
            <BarMenu>Bollywood</BarMenu>
            <BarMenu>
              Hollywood
              <Badge color="primary" variant="dot" />
            </BarMenu>
            <BarMenu>Cricket</BarMenu>
            <BarMenu>
              Football
              <Badge color="success" variant="dot" />
            </BarMenu>
            <Divider />
            <BarMenu>
              <h4>About Us</h4>
            </BarMenu>
            <BarMenu>Send Feedback</BarMenu>
            <BarMenu>Our Work</BarMenu>
            <BarMenu>Privacy Policy</BarMenu>
            <Divider />
            <BarMenu>
              <h4>Contact US</h4>
            </BarMenu>
            <LinksWrapper>
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
            </LinksWrapper>
          </Fragment>
        ) : (
          ""
        )}
      </Bar>
    </SideBarStyles>
  );
};

export default SideBar;
