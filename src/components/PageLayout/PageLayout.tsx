import { PageFooter, PageHeader } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";

export const PageLayout: React.FC = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </React.Fragment>
  );
};
