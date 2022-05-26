import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DarkModeHeaderType } from "../../types/country";
const useStyles = makeStyles({
  header: {
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },

  header_DarkMode: {
    backgroundColor: "#2b3945",
    color: "#fff",
  },
  header_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header_darkmodes: {
    padding: "15px",
    backgroundColor: "#2b3945",
    color: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  switch_mode: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    cursor: "pointer",
    userSelect: "none",
  },
  small_switch_mode: {
    fontSize: 12,
    justifyContent: "center",
  },
  logo: {
    flex: 0.5,
    fontSize: 17,
  },
});

const Header = ({ onClick, darkMode }: DarkModeHeaderType) => {
  const classes = useStyles();
  const homesMatches = useMediaQuery("(max-width:720px)");
  return (
    <>
      {" "}
      <div className={darkMode ? classes.header_DarkMode : classes.header}>
        <div
          className={
            darkMode ? classes.header_darkmodes : classes.header_container
          }
        >
          <h2 className={homesMatches ? classes.logo : ""}>
            Where in the world?
          </h2>
          <div
            className={
              homesMatches ? classes.small_switch_mode : classes.switch_mode
            }
            onClick={onClick}
          >
            {" "}
            {darkMode ? <DarkModeIcon /> : <NightlightOutlinedIcon />}
            <h3>Dark Mode</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
