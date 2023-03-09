import React from "react";
import { ActionHeaderWrapper, HeaderContainer } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface PageHeaderProps {
  menuId: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ menuId }) => {
  const toggleMenu = () => {
    const menu = document.getElementById(menuId);
    menu?.classList.toggle("active");
  };

  return (
    <HeaderContainer id="header">
      <ActionHeaderWrapper>
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </ActionHeaderWrapper>
      <Link to="/" id="logo">
        YOUR TO DO LIST
      </Link>
    </HeaderContainer>
  );
};
