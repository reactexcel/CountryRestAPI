import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { CTodo } from "../../types/country";

const useountryStyles = makeStyles({
  country: {
    background: "#fff",
    width: "310px",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    borderRadius: 5,
    height: "370px",
    cursor: "pointer",
  },

  country_detail_new_darkmode: {
    width: "310px",
    borderRadius: 5,
    cursor: "pointer",
    padding: 15,
  },

  country_darkMode: {
    background: "#202c37",
    width: "310px",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    borderRadius: 5,
    height: "370px",
    cursor: "pointer",
  },

  countryDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  country_details: {
    padding: 15,
  },
  country_values: {
    color: "gray",
  },
  flag_country: {
    height: "170px",
    width: "100%",
  },
  flag_country_img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  country_detail_darkmode: {
    backgroundColor: "#2b3945",
    color: "#fff",
  },
});

const Country = (props: any) => {
  const navigate = useNavigate();
  const showDetailsHandler = (data: any) => {
    navigate("/country_details", { state: data });
  };
  console.log(props.darkMode, "props.darkMode");

  const Countryclasses = useountryStyles();
  return (
    <>
      {props?.country?.map((data: CTodo) => {
        return (
          <>
            <div
              className={
                props.darkMode
                  ? Countryclasses.country_darkMode
                  : Countryclasses.country
              }
              onClick={() => {
                showDetailsHandler(data);
              }}
            >
              <div className={Countryclasses.flag_country}>
                <img
                  src={data.flags.svg}
                  className={Countryclasses.flag_country_img}
                />
              </div>
              <div
                className={
                  props.darkMode ? Countryclasses.country_detail_darkmode : ""
                }
              >
                <div
                  className={
                    props.darkMode
                      ? Countryclasses.country_detail_new_darkmode
                      : Countryclasses.country_details
                  }
                >
                  <h3 className="name">{data.name.common}</h3>
                  <p>
                    Population:
                    <span className={Countryclasses.country_values}>
                      {data.population}
                    </span>
                  </p>
                  <p>
                    Region:
                    <span className={Countryclasses.country_values}>
                      {data.region}
                    </span>
                  </p>
                  <p>
                    Capital:
                    <span className={Countryclasses.country_values}>
                      {data?.capital?.map((data: string) => data)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Country;
