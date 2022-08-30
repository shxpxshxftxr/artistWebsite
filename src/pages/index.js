
import * as React from "react";
import lizardLogo from "../images/iguanaIcon.webp";

const pageStyles = {
  backgroundColor: "pink",
  color: "white",
  padding: "19rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  maxWidth: 540,

};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Check back soon, website under construction!
      </h1>

    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <link rel="icon" href={lizardLogo} />
    <title> Cara Dodge</title>
  </>
);
