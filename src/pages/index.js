import * as React from "react";
import lizardLogo from "../images/iguanaIcon.webp";

const pageStyles = {
  backgroundColor: "pink",
  color: "white",
  padding: "12rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const headingStyles = {
  maxWidth: 200,
  padding: "1rem",
  margin: "1rem",
};
const linkStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  margin: "1rem",
  width: 200,
};
const link = {
  color: "black",
  fontSize: "1.25rem",
};

function clicked(e){
  e.target.style.color = 'red'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Check back soon, website under construction!
      </h1>
      <div style={linkStyles}>
        <a
          style={link}
          href="https://docs.google.com/document/d/1d-HHr7kkXMagSp0ExfsjbZLj3E5VT7iBVMR2WCCKXKU/export?format=pdf"
        >
          cv
        </a>
        <a style={link} href="mailto:shxpxshxftxr@gmail.com?subject=hello">
          electronic mail
        </a>
        <a style={link} href="http://www.instagram.com/dedcooter">
          ig
        </a>
      </div>
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
