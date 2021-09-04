import React from "react";
import { Fragment } from "react";
import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AboutContent } from "../AboutContent/AboutContent";


export const About = (props) => {
  var hideButtons = true;
  return (
    <Fragment>
      <Header hideButtons={hideButtons} />
      <AboutContent />
      <Footer />
    </Fragment>
  );
};
