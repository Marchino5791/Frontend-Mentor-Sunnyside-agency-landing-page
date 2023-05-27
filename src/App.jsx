import React from "react";

// Style
import './scss/global/base.scss';
import './scss/global/reset.scss';

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
