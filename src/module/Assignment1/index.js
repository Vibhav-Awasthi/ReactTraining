import React, { Component } from "react";
import "./index.css";
class Assignment1 extends Component {
  render() {
    return (
      <div class="WebWrapper">
        <div class={"WebContainer"}>
          <div class={"MainWrapper"}>
            <div class={"ContentWrapper1"}>
              <p id={"SaveYour"}>Save your</p>
              <p id={"MoneyNow"}> money now.</p>
              <p id={"Para1"}>
                Manage your company Bot in few easy steps, join our Pro plan to
                try a 360° experience of our service.
              </p>
              <p id={"Para2"}>
                Start your 14 days of free Pro plan, you can always upgrade it
                or stay with the Lite version for free.{" "}
              </p>
              <img id={"CoinImg"} src="./Images/coin_image.png"></img>
            </div>
            <div class={"ContentWrapper2"}>
              <p id={"StartNow"}>Start now</p>
              <p id={"FreePlan"}>
                your <b>free plan.</b>
              </p>
              <h2 id={"Free"}>Free</h2>
              <p id={"Restrictions"}>with restrictions</p>
              <h2 id={"Lite"}>Lite</h2>
              <h2 id={"LiteUnder"}>__</h2>
              <p id={"Plan"}>Plan includes:</p>
              <ul class={"List1"}>
                <li>
                  <p>Manage conversations directly from your website.</p>
                </li>
                <li>
                  <p>Bot without the AI service.</p>
                </li>
                <li>
                  <p>Achieved chat for 30 days.</p>
                </li>
                <li>
                  <p>Free, for always.</p>
                </li>
              </ul>
              <p id={"FeatureView"}>view all the features</p>
              <button id={"PlanBtn"}>Start 14 days of free Pro plan</button>
            </div>
            <div class={"ContentWrapper3"}>
              <p id={"Contact"}>Are you a corporate?</p>
              <a id={"ContactLink"} href="#">
                Contact Us
              </a>
              <h2 id={"Pro"}>Pro</h2>
              <h2 id={"ProUnder"}>__</h2>
              <h2 id={"Dollar"}>29$</h2>
              <p id={"Monthly"}>monthly</p>
              <p id={"LitePlus"}>All of Lite plus:</p>
              <ul class={"List2"}>
                <li>
                  <p>
                    Bot with AI that can recognize the user's behaviour and can
                    automatize the sentences.
                  </p>
                </li>
                <li>
                  <p>Unlimited conversational flows.</p>
                </li>
                <li>
                  <p>Facebook, Twitter, Instagram and Linkedin integration.</p>
                </li>
                <li>
                  <p>Achieved chat without limits.</p>
                </li>
              </ul>
              <p id={"FeatureView2"}>view all the features</p>
              <button id={"PlanBtn2"}>Start 14 days of free Pro plan</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
