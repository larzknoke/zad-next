import React, { useState } from "react";
import Header from "./header";
import HeadHtml from "./head";
import Main from "./main";

function Layout({ children }) {
  const [curtainOpen, setCurtainOpen] = useState(false);

  const handleCurtain = () => setCurtainOpen(true);

  return (
    <>
      <HeadHtml />
      <Header handleCurtain={handleCurtain} />
      <Main curtainOpen={curtainOpen}>{children}</Main>
    </>
  );
}

export default Layout;
