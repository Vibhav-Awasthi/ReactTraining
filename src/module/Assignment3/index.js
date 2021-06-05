import React, { Component } from "react";
import Button from "./Components/login_btn";
import Cvalue from "./Components/cvalue"
import Community from "./Components/community";
import Feat from "./Components/feature"
import Crypto from "./Components/crypto";
import Crypto2 from "./Components/crypto2";
import Feat2 from "./Components/feature2";
import "./index.css";

class Assignment3 extends Component {

    render() {
    return(
        <div className={"mainContainer"}>
            <header>
                <img alt={"logo"} src={"./Images/Assignment3/Xcoins_Logo.png"} className={"Xcoins-logo"}></img>
                <div className={"partition"}></div>
                <ul>
                    <li>Buy Bitcoin</li>
                    <li>Sell Bitcoin</li>
                    <li>Blog</li>
                    <li>About Us</li>
                </ul>
                <select>
                    <option>🇺🇸 US</option>
                    <option>🇬🇧 ENG</option>
                </select>
                <Button content={"Login"}/>
                <Button content={"Signup"}/>
            </header>
            <div className={"adSection"}>
                <div className={"para"}>
                <p id={"bitCoin"}>Buy and store Bitcoin now</p>
                <p> Simply, Securely & without the wait, Xcoins is your
                    gateway to cryptocurrency. Start buying and keeping 
                    cryptocurrencies in your Xcoins wallet today.</p>
                </div>
                <div className="card">
                    <h3>Get your crypto now!</h3>
                    <Cvalue src={"./Images/Assignment3/US.png"} value={"1,200"} change={"US"}/>
                    <p>______________________________________________________________________________</p>
                    <Cvalue src={"./Images/Assignment3/bitcoin-btc-logo.png"} value={"0.10546074"} change={"BTC"}/>
                    <button className={"buyBitcoins"}>{"Buy Bitcoins"}</button>
                </div>
            </div>
            <div className={"community"}>
                <p>{"LOVED BY OUR CUSTOMERS. TRUSTED BY THE COMMUNITY."}</p>
                <div className={"cName"}>
                <Community src={"./Images/Assignment3/bcash.png"} name={"Bcash"}/>
                <Community src={"./Images/Assignment3/ripple.png"} name={"Ripple"}/>
                <Community src={"./Images/Assignment3/etherium.png"} name={"Etherium"}/>
                <Community src={"./Images/Assignment3/bitcoin.png"} name={"Bitcoin"}/>
                <Community src={"./Images/Assignment3/litecoin.png"} name={"Litecoin"}/>
                <Community src={"./Images/Assignment3/monero.png"} name={"Monero"}/>
                <Community src={"./Images/Assignment3/zcoin.png"} name={"Zcoin"}/>
                </div>
            </div>


            <div className={"trust"}>
                <div className={"trustedBy"}>
                    <p id={"customers"}>{"Trusted by 1,300+ customers"}</p>
                    <div className={"rateReview"}>
                        <div className={"rate"}>
                            <h2>{"4.80"}</h2>
                            <p id={"average"}>{"Average (Excellent)"}</p>
                        </div>
                        <div className={"partition"}></div>
                        <div className={"rate"}>
                            <h2>{"120"}</h2>
                            <p id={"average"}>{"Reviews in total"}</p>
                        </div>
                    </div>
                    <img id={"review"} alt={"review"} src={"./Images/Assignment3/REVIEWS.png"}></img>
                </div >


                <div className={"reviewCard"}>
                    <p className={"reviewPara"}>{"<<The customer support level is the best I've ever seen, and they're constantly adding new features and improving the existing ones>>"}</p>
                    <p id={"name"}>{"Kevin.D ⭐⭐⭐⭐⭐"}</p>
                    <p className={"underScore"}>{"____   ____   ____   ____   ____ "}</p>
                </div>
            </div>

            <div className={"features"}>
                <h1 className={"featureHeading"}>{"Why Xcoins"}</h1>
                <div className={"featureSection"}>
                <Feat src={"./Images/Assignment3/tab1.png"} head={"Sign up to Xcoins now"} para={"We’ll send your Bitcoin within 15 minutes of payment approval or your next transaction is Fee FREE!"}/>
                <Feat src={"./Images/Assignment3/bitSheild.png"} head={"Get Instant Delivery "} para={"We offer a safe, secure and easy-to-use platform that features instant crypto delivery to your wallet"}/>
                <Feat src={"./Images/Assignment3/telephone.png"} head={"World Class Support"} para={"We specialize in live support 24/7 via instant chat, email and phone so you are never alone"}/>
                </div>
            </div>

            <div className={"program"}>
                <div className={"refferal"}>
                    <img id={"connection"} alt={"connection"} src={"./Images/Assignment3/connection.png"}></img>
                    <h1>Join the Triple 10 referral program</h1>
                    <ul>
                        <li>{"Refer a friend and everyone get rewarded "}</li>
                        <li>{"You get: $10 and 10% of the fees for life"}</li>
                        <li>{"They get: $10"}</li>
                    </ul>
                </div>

                <div className={"refferal"}>
                    <img id={"connection"} alt={"connection"} src={"./Images/Assignment3/mail.png"}></img>
                    <h1>Xcoins World Class Support</h1>
                    <ul className={"refferal2"}>
                        <li>{"4.8 satisfaction rating "}</li>
                        <li>{"24/7 support"}</li>
                        <li>{"Multichannel: phone, email, chat"}</li>
                    </ul>
                </div>
            </div>
            <div className={"buyBitcoin"}>
                <div>
                <h2 id={"startBit"}>{"Start buying Bitcoin for free"}</h2>
                <p>{"We put the power in your hands to buy, sell and trade digital currency."}</p>
                </div>
                <button>SIGN UP</button>
            </div>

            <Crypto src={"./Images/Assignment3/buy.png"} head={"Buy cryptocurrencies with credit cards"} content={"Xcoins provides you with quick and easy access to cryptocurrency, allowing you to keep your tokens in a secure wallet. Buy bitcoins, Ethereum and Litecoins with your debit or credit card now."} label={"BUY CRYPTO"}/>
            <Crypto2 src={"./Images/Assignment3/wallet.png"} head={"The Xcoins crypto wallet "} content={"Xcoins provides easy access to the cryptocurrency world, allowing you to buy and store your cryptocurrency in a secure online wallet. Buy Bitcoins, Ethereum and Litecoins with your debit or credit card."} label={"CREATE YOUR WALLET"}/>
            <Crypto src={"./Images/Assignment3/exchange.png"} head={"Exchange cryptocurrencies now"} content={"Once you have bought cryptocurrencies you can easily swap them for other coins via our exchange, or alternatively exchange your tokens into fiat. "} label={"EXCHANGE CRYPTOCURRENCIES"}/>


            <div className={"features"}>
                <h1 className={"featureHeading"}>{"How it works?"}</h1>
                <div className={"featureSection"}>
                <Feat2 src={"./Images/Assignment3/laptop.png"} head={"1. Sign up and get verified"} para={"Just sign up, upload your ID doc and open your account today - it’s super quick"}/>
                <Feat2 src={"./Images/Assignment3/bitCursor.png"} head={"2. Buy tokens"} para={"Select which tokens you would like to buy - we currently sell BTC, ETH and LTC"}/>
                <Feat2 src={"./Images/Assignment3/bitHand.png"} head={"3. Receive tokens"} para={"We will send tokens to your wallet within 15 minutes of payment approval"}/>
                </div>
            </div>

            <div className={"signUpNow"}>
                <h1>{"Start buying Bitcoin now"}</h1>
                <button>SIGN UP NOW</button>
            </div>
            <div className={"footer"}>
                <div className={"footerImg"}>
                    <img id={"logoX"} src={"./Images/Assignment3/Xcoins_Logo.png"} alt={"footerLogo"}></img>
                    <img id={"reviews"} src={"./Images/Assignment3/REVIEWS.png"} alt={"footerLogo"}></img>
                    <p>14 East, Level 8, Sliema Road, GZR1639, Malta</p>
                </div>
                <ul>
                    <h4>COMPANY</h4>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Kit</li>
                </ul>

                <ul>
                    <h4>SUPPORT</h4>
                    <li>Help Center</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <h4>SOCIAL</h4>
                    <li><img id="socialLogo" src={"./Images/Assignment3/instagram.png"} alt={"blog"}></img>BLog</li>
                    <li><img id="socialLogo" src={"./Images/Assignment3/twitter.png"} alt={"blog"}></img>Twitter</li>
                    <li><img id="socialLogo" src={"./Images/Assignment3/fb.png"} alt={"blog"}></img>Facebook</li>
                </ul>
            </div>
            <div className={"footerNav"}>
                <div>
                        <span>&copy;XCoins.com</span>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Legal notice</span>
                        <span>Sitemap</span>
                </div>
                <select>
                    <option>Language</option>
                    <option>English</option>
                </select>
                </div>
                <div className={"final"}>
                <p className={"finalPara"}>{"Xcoins is property of CF Technologies Ltd - Company #204616970 4 East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and copyrights belong to their respective owners. All rights reserved."}</p>
                </div>
        </div>
    );
    };
};
export default Assignment3;