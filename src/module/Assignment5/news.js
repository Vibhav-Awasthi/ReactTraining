import React from "react";
import {MobileStepper,Button,Divider,makeStyles,Typography,} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const styles = makeStyles({
  news: {
    color: "#424242",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#fff",
    width: "70%",
    margin: "20px auto",
    padding: "30px 40px 0 30px",
  },
  latestnews: {
    display: "flex",
  },
  heading: {
    fontWeight: "600",
    fontSize: "20px",
    margin: "0 10px",
  },
  about: {
    lineHeight: "1.2 !important",
    fontSize: "22px",
  },
  time: {
    fontSize: "12px",
    fontWeight: "500",
  },
  content: {
    fontSize: "14px",
    padding: "20px 0",
  },
  stepper: {
    margin: "20px 0",
  },
});

export default function LatestNews() {
  const classes = styles();
  return (
    <div>
      <Divider variant="middle" />
      <div className={classes.news}>
        <div className={classes.latestnews}>
          <NoteAddIcon color={"primary"} />
          <Typography className={classes.heading} variant={"h6"}>
            {"Latest News"}
          </Typography>
        </div>
        <Typography variant={"h5"} className={classes.about}>
          {
            "LocalMonero/AgoraDesk now allows you to import reputation from LocalBitcoins and/or Paxful!"
          }
        </Typography>
        <Typography variant={"h6"} className={classes.time}>
          {"2020-12-06 12:00 UTC"}
        </Typography>
        <br />
        <Typography variant={"p"} className={classes.content}>
          {
            "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
          }
        </Typography>

        <MobileStepper
          variant="dots"
          steps={8}
          position="static"
          className={classes.stepper}
          nextButton={
            <Button size="small">
              {"Next"}
              <KeyboardArrowRightIcon />
            </Button>
          }
          backButton={
            <Button size="small">
              <KeyboardArrowLeftIcon />
              {" Back"}
            </Button>
          }
        />
      </div>
      <Divider className={classes.divider} variant="middle" />
    </div>
  );
}