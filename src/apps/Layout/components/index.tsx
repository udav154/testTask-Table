import React from "react";
import Header from "./Header";
import { layoutProps } from "../interfaces";

const Layout: React.FC<layoutProps> = ({ children }) => {


  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <footer />
    </>
  )
}

export default Layout