import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { PageLayout } from "@/components";
import { Inbox } from "@/views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Inbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
