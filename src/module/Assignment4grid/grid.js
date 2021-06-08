import React, { Component } from "react";
import "./grid.css";

class Assignment4 extends Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"gridview"}>
          <div className={"header1"}>
            <div class={"menu"}>
              <div className={"linetop"}></div>
              <div className={"linemiddle"}></div>
              <div className={"linebottom"}></div>
            </div>

            <img src={"./Images/Assignment4/Xcoins_Logo.png"} className={"logo1"} alt={"img"}></img>
            <img src={"./Images/Assignment4/settings.svg"} className={"setting"} alt={"img"}></img>
            <img src={"./Images/Assignment4/bellIcon.svg"} className={"notification"} alt={"img"}></img>
            <img src={"./Images/Assignment4/emoticon.png"} className={"user"} alt={"img"}></img>
          </div>
          <h1 className={"heading"}>{"Support"}</h1>
          <div className={"search-container"}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Search Xcoin support"
              className="search"
            ></input>
          </div>
          <div className={"mainContent"}>
            <div className="card">
              <h2 className="buy-currency">Affiliated Program</h2>
              <p className="what-currencies">Are there countries I can’t promote in?</p>
              <p className="what-currencies">Can you make specific images/creative for my website?</p>
              <p className="what-currencies">How does the Xcoins affiliate program work?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy & Sell Cryptocurrencies</h2>
              <p className="what-currencies">How do I sell a cryptocurrency?</p>
              <p className="what-currencies">How do I buy a cryptocurrency?</p>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">
              How does Xcoins lock in your crypto rate?
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Contact Us</h2>
              <p className="what-currencies">What are Xcoins’ business hours?</p>
              <p className="what-currencies">How can I contact Xcoins?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">My Xcoins Account</h2>
              <p className="what-currencies">What countries does Xcoins service?</p>
              <p className="what-currencies">How do I reset my password?</p>
              <p className="what-currencies">Why can't I access my brand new account?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Orders</h2>
              <p className="what-currencies">How can I upgrade my limit level?</p>
              <p className="what-currencies">What is my limit level?</p>
              <p className="what-currencies">Are there fees when buying or selling with Xcoins?</p>
              <p className="what-currencies">
              Why did I receive a different amount of Bitcoin than I initially purchased?
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Payment Methods</h2>
              <p className="what-currencies">Do you accept Paypal or bank transfer payments?</p>
              <p className="what-currencies">What cards can I use on Xcoins to buy or receive cash?</p>
              <p className="what-currencies">Can you give me an overview of bank fees? - Cash advance & exchange rate fees</p>
              <p className="what-currencies">Why didn't my 3-D Authentication work? And what can I do about it?</p>
    
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Security</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Verification</h2>
              <p className="what-currencies">What do I do once my ID verification documents are submitted?</p>
              <p className="what-currencies">What ID can I use to sign up with Xcoins?</p>
              <p className="what-currencies">Why was my application to join Xcoins declined?</p>
              <p className="see-all-article">See all article</p>
            </div>
          </div>
        </div>
        <div className={"flexview"}>
        <div className={"leftContainer"}>
          <div className={"leftheader"}>
            <img src={"./Images/Assignment4/Xcoins_Logo.png"} className={"logoflex"} alt={"img"}></img>
          </div>
          <p className={"topic"}>{"TOPICS"}</p>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Affiliate Program"}</p>
          </div>
          <div className={"leftcontent2"}>
            <p className={"lefttopic"}>{"Buy & Sell Cryptocurrencies"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Contact Us"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"My Xcoin Account"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Orders"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Payment Methods"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Security"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Verification"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Wallet"}</p>
          </div>
        </div>
        <div className={"rightContainer"}>
          <div className={"rightheader"}>
            <p className={"support2"}>{"Support"}</p>
            <select>
                    <option>🇺🇸 US</option>
                    <option>🇬🇧 ENG</option>
                </select>
            <button type={"button"} className={"headerbutton"}>
              {"BACK TO X COIN"}
            </button>
          </div>
          <div className={"searchcontainer"}>
            <input
              type="text"
              placeholder="Search Xcoin support"
              className={"search2"}
            ></input>
          </div>
          <div className={"rightcontent"}>
          <div className="card">
              <h2 className="buy-currency">Affiliated Program</h2>
              <p className="what-currencies">Are there countries I can’t promote in?</p>
              <p className="what-currencies">Can you make specific images/creative for my website?</p>
              <p className="what-currencies">How does the Xcoins affiliate program work?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy & Sell Cryptocurrencies</h2>
              <p className="what-currencies">How do I sell a cryptocurrency?</p>
              <p className="what-currencies">How do I buy a cryptocurrency?</p>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">
              How does Xcoins lock in your crypto rate?
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Contact Us</h2>
              <p className="what-currencies">What are Xcoins’ business hours?</p>
              <p className="what-currencies">How can I contact Xcoins?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">My Xcoins Account</h2>
              <p className="what-currencies">What countries does Xcoins service?</p>
              <p className="what-currencies">How do I reset my password?</p>
              <p className="what-currencies">Why can't I access my brand new account?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Orders</h2>
              <p className="what-currencies">How can I upgrade my limit level?</p>
              <p className="what-currencies">What is my limit level?</p>
              <p className="what-currencies">Are there fees when buying or selling with Xcoins?</p>
              <p className="what-currencies">
              Why did I receive a different amount of Bitcoin than I initially purchased?
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Payment Methods</h2>
              <p className="what-currencies">Do you accept Paypal or bank transfer payments?</p>
              <p className="what-currencies">What cards can I use on Xcoins to buy or receive cash?</p>
              <p className="what-currencies">Can you give me an overview of bank fees? - Cash advance & exchange rate fees</p>
              <p className="what-currencies">
              Why didn't my 3-D Authentication work? And what can I do about it?
              </p>
    
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Security</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Verification</h2>
              <p className="what-currencies">What do I do once my ID verification documents are submitted?</p>
              <p className="what-currencies">What ID can I use to sign up with Xcoins?</p>
              <p className="what-currencies">Why was my application to join Xcoins declined?</p>
              <p className="see-all-article">See all article</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Assignment4;
