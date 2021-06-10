import {Button, FormControlLabel, makeStyles, Switch , Typography, TextField } from "@material-ui/core";
import React from "react";
import{List,ListItem} from "@material-ui/core"
import ControlCameraOutlinedIcon from '@material-ui/icons/ControlCameraOutlined';
import FiberSmartRecordOutlinedIcon from '@material-ui/icons/FiberSmartRecordOutlined';
import FilterBAndWOutlinedIcon from '@material-ui/icons/FilterBAndWOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import GamepadOutlinedIcon from '@material-ui/icons/GamepadOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import {AppBar, Toolbar} from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";
import Country from "./country";
import Table from "./table1"
import Table2 from "./table2"
import About from "./about"
import Post from "./post"
import News from "./news"
import Footer from "./footer"
import FooterList from "./listFooter"


const greenTheme = createMuiTheme({ palette: { primary: green } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })
const inr = [
  {
    label: "AED",
  },
  {
    label: "AEON",
  },
  {
    label: "AFN",
  },
  {
    label: "ALL",
  },
];



const styles = makeStyles({
  addbar:{
      backgroundColor:"white",
      width:"100%",
      height:"80px",
      position:"fixed",
  },

  toolbar:{
    backgorundColor:"white",
    display:"flex",
    justifyContent:"space-between",
  },
  
  switch:{
    fontSize:"0.8rem",
    color:"black",
  },

  button:{
    
    padding:"4px 16px",
    fontSize:"13px",
    fontWeight:"500",
    margin:"0 5px",
  },
  mainWrapper:{
    backgroundColor:"#f0f5f5",
  },
  list:{
    backgroundColor:"#1565c0",
    color:"white",
    height:"100%",
    width:"5%",
    position:"static",
  },

  listContainer:{
    margin:"30px 0 0 0 ",
  },

  drawer:{
    backgroundColor:"#1565c0",
    height:"100vh",
    position:"fixed"
    

  },

  formmain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  button1: {
    backgroundColor: "#388539",
    color:"white",
    margin: "20px",
  },
  button2: {
    backgroundColor: "#0000cc",
    color:"white",
    margin: "20px",
  },
  form: {
    textAlign: "center",
    margin: "110px 2px 20px 90px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    padding: "20px 20px",
    backgroundColor: "white",
  },
  amount:{
    width:"300px",
    position:"relative",
    right:"2px",
  },
  form2: {
  
    textAlign: "center",
    margin: "110px 2px 20px 10px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    padding: "20px 20px",
    backgroundColor: "white",
  },

  typography: {
    color: "#424242",
    fontFamily: "Roboto",
  },

  inputContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "15px",
    marginBottom: "10px",
  },
  buttonBuy: {
    backgroundColor: "#1565c0",
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
  },
  buttonSell: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
  },
  search: {
    backgroundColor: "#1565c0",
    fontSize:"12px",
    fontWeight:"600",
    padding:"15px",
  },

  table:{
    width:"97%",
    margin:"20px 0 0 45px"
  },

  news:{
    margin:"100px 0px 0px 20px",
  },

  
 
});

export default function Assignment5() {
  const classes = styles();
  return (
    <div className={classes.mainWrapper}>
    <AppBar position="static" className={classes.addbar}>
      <Toolbar className={classes.toolbar}>
          <div>
            <FormControlLabel
            value="bottom"
            control={
              <Switch
              color="primary"
              size="small"
              checked={true}
              className={classes.switch}
              />
            }
            label="On"
            labelPlacement="bottom"
            />
          </div>
          <div>
          <MuiThemeProvider theme={greenTheme}>
            <Button
            vaiant="contained"
            size="large"
            startIcon={<PersonAddIcon/>}
            className={classes.button1}
            >Sign UP Free</Button>
            </MuiThemeProvider>
            
            <MuiThemeProvider theme={blueTheme}>
            <Button
            vaiant="contained"
            className={classes.button2}
            size="large"
            startIcon={<FingerprintOutlinedIcon/>}
            >Login</Button>
            </MuiThemeProvider>
          </div>  
      </Toolbar>
    </AppBar>

    <div className={classes.drawer}>
      <div className={classes.listContainer}>
      <List className={classes.list}>
        <ListItem button>
        <AddCircleOutlinedIcon fontSize={"large"}/>
        </ListItem>
        <ListItem button>
          <ControlCameraOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FiberSmartRecordOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FilterBAndWOutlinedIcon  fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FingerprintOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GpsFixedOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GamepadOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GroupAddOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <LanguageOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <LaptopMacOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GpsFixedOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FilterBAndWOutlinedIcon  fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FiberSmartRecordOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <ControlCameraOutlinedIcon fontSize={"large"}/>

        </ListItem>
      </List>
      </div>
      </div>
      <div className={classes.formmain}>
        <div className={classes.form}>
          <div className={classes.inputContainer}>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonBuy}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                Buy
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                className={classes.buttonSell}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                sell
              </Button>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                className={classes.amount}
              />
            </div>
            <div>
              <TextField
                id="outlined-select-currency-native"
                fullWidth={true}
                placeholder={"INR"}
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {inr.map((option) => (
                  <option>{option.label}</option>
                ))}
              </TextField>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
            <Country/>
            </div>
            <div>
              
              <TextField
                id="outlined-select-currency-native"
                fullWidth={true}
                placeholder={" All India Offers"}
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
             <LanguageIcon/>{" All India Offers"}
              </TextField>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.search}
              startIcon={<SearchIcon />}
              fullWidth={true}
            >
              search
            </Button>
          </div>
        </div>
        <div className={classes.form2}>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Buy Monero."}
          </Typography>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Cash or online."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Anywhere."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            size="large"
            startIcon={<PersonAddIcon />}
          >
            Sign up free
          </Button>
        </div>
      </div>
      <div className={classes.table}>
            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Buy Monero Online in India"}
          </Typography>
            <Table/>
            </div>
            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero Online in India"}
          </Typography>
            <Table2/>
            </div>

            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero For Cash in India"}
          </Typography>
            <Table/>
            </div>
      </div>

      <div>
        <Post/>
      </div>
      <div className={classes.about}>
        <About/>
      </div>
      <div className={classes.news}>
        <News/>
      </div>
      <div className={classes.footerList}>
        <FooterList/>
      </div>
      <div className={classes.footer}>
        <Footer/>
      </div>
      </div>
      
  );
}