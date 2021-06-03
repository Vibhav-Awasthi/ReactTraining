import React, { Component } from "react";
import "./index.css";

class Assignment2 extends Component {
  renderBox(heading, content, src) {
    return (
      <div className={"itemContainer1"}>
        <h2>{heading}</h2>
        <p>{content}</p>
        <img alt={"logo"} src={src}></img>
      </div>
    );
  }

  renderBox2(heading, content, src) {
    return (
      <div className={"itemContainer2"}>
        <h2>{heading}</h2>
        <p>{content}</p>
        <img alt={"logo"} src={src}></img>
      </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <div className={"pageContainer"}>
          <div className={"headContainer"}>
            <div className={"mainHead"}>
              <p className={"bannerHeading"}>9 React</p>
              <p className={"bannerHeading2"}>Developer Tools</p>
              <p className={"bannerDesc1"}>to Create better</p>
              <p className={"bannerDesc2"}>Apps Faster</p>
            </div>
          </div>

          <div>
            {this.renderBox(
              "1) React Developer Tools",
              "Oficial Chrome extension for React from Facebook that lets you examin the list of components and subcomponents of the webpage.",
              "./Images/Assignment2/developer.png"
            )}

            {this.renderBox2(
              "2) Create React App",
              "Tools used in the process of setting up a IDE.",
              "./Images/Assignment2/responsive.png"
            )}

            {this.renderBox(
              "3) StoryBook",
              "Online App that lets you create UI components.",
              "./Images/Assignment2/storybook.png"
            )}

            {this.renderBox2(
              "4) React Styleguideist",
              "It offers an interactive way of creating and sharing UI.",
              "./Images/Assignment2/Document.png"
            )}

            {this.renderBox(
              "5) Bit",
              "CU tools and online platform that enables you to publish react components.",
              "./Images/Assignment2/bit.png"
            )}

            {this.renderBox2(
              "6) React Bootstrap",
              "Powerful toolkit that comprises of HTML, CSS, JavaScript tools to help you create webpages and applications.",
              "./Images/Assignment2/bootstrap.png"
            )}

            {this.renderBox(
              "7) React Sight",
              "Chrome extensions for a visual illustration of all components of your app in a live tree structure.",
              "./Images/Assignment2/web.png"
            )}

            {this.renderBox2(
              "8) Why did you render",
              "It alerts you in the console when an avoidable render occurs.",
              "./Images/Assignment2/render.png"
            )}

            {this.renderBox(
              "9) React Proto",
              "Lets you drag and drop the components your way to create a UI instead of coding.",
              "./Images/Assignment2/proto.png"
            )}

            <footer>
              <img alt={"skype"} src={"./Images/Assignment2/skype.png"}></img>
              <p>eluminous_bde10 |</p>
              <img alt={"skype"} src={"./Images/Assignment2/mail.png"}></img>
              <p>eluminoustechnologies.com</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment2;
