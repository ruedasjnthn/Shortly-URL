import React from "react";
import Nav from "./components/nav";
import Page from "./components/page/index";
import Footer from './components/footer'
import "./components/fontAwesome";
import "./scss/App.scss";

function App() {
  return (
    <>
      <Nav />
      <Page />
      <Footer />
    </>
  );
}

export default App;
