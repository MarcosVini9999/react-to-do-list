import React from "react";
import { ActionHeaderWrapper, HeaderContainer } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";

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
        <EditIcon />
        YOUR TO DO LIST
        <EditIcon />
      </Link>
    </HeaderContainer>
  );
};
