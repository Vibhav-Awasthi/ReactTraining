import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import AboutContent from "./aboutContent";

const styles = makeStyles({
//   divider: {
//     "&.MuiDivider-middle": {
//       margin: "50px 20px !important",
//     },
//   },
});

export default function SideBar() {
  const classes = styles();
  return (
    <div className={classes.about}>
      <Divider className={classes.divider} variant="middle" />
      <AboutContent
        heading={"Protect your right to privacy - buy Monero."}
        content={
          "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind.Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
        }
      />

      <AboutContent
        heading={
          "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency."
        }
        content={
          "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
        }
      />
    </div>
  );
}