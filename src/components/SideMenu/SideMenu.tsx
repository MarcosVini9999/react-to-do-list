import React from "react";
import { SideMenuContainer, SideMenuFooterWrapper } from "./SideMenu.style";

interface SideMenuProps {
  id: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ id }) => {
  return (
    <SideMenuContainer id={`${id}`} className={"unlock"}>
      <div>
        <ul>
          <li>side menu</li>
        </ul>
      </div>
      <SideMenuFooterWrapper>
        <p>Developed</p>
        <p>by</p>
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Vinicius
        </a>
      </SideMenuFooterWrapper>
    </SideMenuContainer>
  );
};
