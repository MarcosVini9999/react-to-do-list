import React from "react";
import { SideMenuContainer } from "./SideMenu.style";

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
    </SideMenuContainer>
  );
};
