import React from "react";
import "./flex.css";
import Sidebar from "./sidebar";
import Card from "./card";

const Flex = () => {
  function openNav() {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("list").style.display = "block";
  }


  return (
    <div className={"flexMainContainer"}>
      <div id={"sideBar"} className={"sideBar"}>
        <div className={"logo"}>
          <span className={"forNavigation"} onClick={openNav}>
            &#9776;
          </span>
          <img id="logoX" src={"./Images/Assignment4/Xcoins_Logo.png"} alt="Xcoin" />
        </div>
        <div id={"list"} className={"list"}>
          <p>{"Topics"}</p>
          <Sidebar content={"Affiliate Program"} />
          <Sidebar content={"Buy & Sell Cryptocurrencies"} />
          <Sidebar content={"Contact Us"} />
          <Sidebar content={"My Xcoins Account"} />
          <Sidebar content={"Orders"} />
          <Sidebar content={"Payment Methods"} />
          <Sidebar content={"Security"} />
          <Sidebar content={"Verification"} />
          <Sidebar content={"Wallet"} />
        </div>
      </div>
      <div className={"mainDiv"}>
        <div className={"topDiv"}>
          <div>
            <p>{"Support"}</p>
          </div>
          <div className={"mainDivRight"}>
            <button>{"BACK TO XCOINS"}</button>
          </div>
        </div>
        <div className={"selectXcoinSupport"}>
          <select>
            <option defaultValue hidden>
              {"🔍 Search Xcoins support"}
            </option>
            <option>{"Are there countries I can’t promote in?"}</option>
            <option>
              {"Can you make specific images/creative for my website?"}
            </option>
            <option>{"How does the Xcoins affiliate program work?"}</option>
            <option>{"Why can’t I access my brand new account?"}</option>
          </select>
        </div>
        <div className={"cardMain"}>
          <Card
            heading={"Affiliate Program"}
            val1={"Are there countries I can’t promote in?"}
            val2={"Can you make specific images/creative for my website?"}
            val3={"How does the Xcoins affiliate program work?"}
          />
          <Card
            heading={"Buy & Sell Cryptocurrencies"}
            val1={"How do I sell a cryptocurrency?"}
            val2={"How do I buy a cryptocurrency?"}
            val3={"What currencies do we accept?"}
            val4={"How does Xcoins lock in your crypto rate?"}
          />
          <Card
            heading={"Contact Us"}
            val1={"What are Xcoins’ business hours?"}
            val2={"How can I contact Xcoins?"}
          />
          <Card
            heading={"My Xcoins Account"}
            val1={"What countries does Xcoins service?"}
            val2={"How do I reset my password?"}
            val3={"Why can’t I access my brand new account?"}
          />
          <Card
            heading={"Orders"}
            val1={"How can I upgrade my limit level?"}
            val2={"What is my limit level?"}
            val3={
              "Why did I receive a different amount of Bitcoin than I initially purchased?"
            }
            val4={"Are there fees when buying or selling with Xcoins?"}
          />
          <Card
            heading={"Payment Methods"}
            val1={"Do you accept Paypal or bank transfer payments?"}
            val2={"What Cards can I use on Xcoins to buy or receive cash?"}
            val3={
              "Can you give me an overview of bank fees? - Cash advance & exchange rate fees"
            }
            val4={
              "Why didn't my 3-D Authentication work? And what can I do about it?"
            }
          />
          <Card
            heading={"Security"}
            val1={"What is 3-D Secure?"}
            val2={"What is 2FA - Two Factor Authentication?"}
            val3={"What is an OTP (One-time password)?"}
            val4={"How can I protect myself from scams?"}
          />
          <Card
            heading={"Verification"}
            val1={
              "What do I do once my ID verification documents are submitted?"
            }
            val2={"How can I take the perfect selfie for verification?"}
            val3={"What ID can I use to sign up with Xcoins?"}
            val4={"Why was my application to join Xcoins declined?"}
          />
          <Card
            heading={"Wallet"}
            val1={"What is a private key?"}
            val2={"What is a non-custodial wallet and how does it work?"}
            val3={"What is my wallet address?"}
            val4={
              "What is a destination tag and why does Ripple (XRP) use them?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Flex;