import { PageFooter, PageHeader, SideMenu } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";
import { PageLayoutContainer, PageLayoutWrapper } from "./PageLayout.style";

export const PageLayout: React.FC = () => {
  const menuId = "side-menu";

  return (
    <PageLayoutContainer>
      <SideMenu id={menuId} />
      <PageLayoutWrapper>
        <PageHeader menuId={menuId} />
        <Outlet />
        <PageFooter />
      </PageLayoutWrapper>
    </PageLayoutContainer>
  );
};
