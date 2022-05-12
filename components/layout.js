import React, { useState } from "react";
import Header from "./header";
import HeadHtml from "./head";
import Main from "./main";

function Layout({ children, pageClass, noMainPadding }) {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);

  const handleCurtain = () => setCurtainOpen(true);
  const handleTease = () => setNavHover(!navHover);

  return (
    <>
      <HeadHtml />
      <Header handleCurtain={handleCurtain} handleTease={handleTease} />
      <Main
        curtainOpen={curtainOpen}
        navHover={navHover}
        pageClass={pageClass}
        noMainPadding={noMainPadding}
        handleCurtain={handleCurtain}
      >
        {children}
      </Main>
    </>
  );
}

export default Layout;
