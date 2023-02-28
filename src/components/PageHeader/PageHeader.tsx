import React from "react";
import { HeaderContainer } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
      <Button id="btn-mobile" onClick={toggleMenu}>
        button
      </Button>
      <Link to="/" id="logo">
        YOUR TO DO LIST
      </Link>
    </HeaderContainer>
  );
};
