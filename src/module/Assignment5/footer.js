import React from "react";
import {Avatar,Button,makeStyles,Typography,
} from "@material-ui/core";
import Listfooter from "./listFooter";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";

const styles = makeStyles({
  footer: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  listmain: {
    display: "flex",
    margin: "20px",
  },
  avatar: { margin: "0 10px" },
  button: { margin: "0 10px", color: "#1565c0", fontWeight: "bold" },
  icons: {
    display: "flex",
    margin: "0 20px",
  },
  icon:{
    margin: "0 8px",
  }
});

export default function Footer() {
  const classes = styles();
  return (
    <div className={classes.footer}>
      <Typography variant="p">{"© 2021 Blue Sunday Limited"}</Typography>
      <div className={classes.listmain}>
        <Listfooter
          val1={"About us"}
          val2={"Terms of Condition"}
          val3={"Fees"}
          val4={"Contact us"}
        />
        <Listfooter
        val1={"Security bounty"}
        val2={"Affiliate"}
        val3={"Statistics"}
        val4={"API docs"}
          
        />
        <Listfooter
          val1={"LocalBitcoins Alternative"}
          val2={"Monero News"}
          val3={"Knowledge"}
          val4={"Monero Block Explorer"}
        />
        <Listfooter
          val1={"Tor hidden service"}
          val2={"I2P"}
          val3={"B32 I2p"}
          val4={"AgoraDesk"}
        />
      </div>
      <Button className={classes.button}>
        <Avatar
          className={classes.avatar}
          alt={"Flag"}
          src={"./Images/Assignment3/US.png"}
        />
        {"Change language"}
      </Button>
      <div className={classes.icons}>
        <TwitterIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <RedditIcon className={classes.icon} />
        <TelegramIcon className={classes.icon} />
        <GitHubIcon className={classes.icon} />
      </div>
    </div>
  );
}