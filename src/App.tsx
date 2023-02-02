import { Router } from "@/components";
import React from "react";
import { AppContainer } from "./App.style";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};
