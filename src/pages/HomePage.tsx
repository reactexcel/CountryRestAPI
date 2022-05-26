import React, { useRef, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Country from "../component/Country/Index";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountryListRequest } from "../redux/actions/countryAction";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  app_body: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: "1400px",
  },
  app_body_dark_dark: {
    margin: "0px auto 0",
    padding: "15px",
    maxWidth: "1400px",
  },
  inputs: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  small_inputs: {
    flexDirection: "column",
    marginBottom: 15,
  },
  search_inputs: {
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "300px",
    padding: 9,
    borderRadius: "5px",
    gap: "5px",
  },
  search_inputs_small: {
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "250px",
    padding: 9,
    borderRadius: "5px",
    gap: "5px",
  },
  search_inputs_input: {
    border: 0,
    backgroundColor: "transparent",
    outline: "none",
    fontSize: "15px",
  },
  search_inputs_input_dark: {
    border: 0,
    backgroundColor: "transparent",
    outline: "none",
    fontSize: "15px",
    color: "white",
  },

  select_region: {
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    padding: 9,
    borderRadius: 5,
  },
  select_region_small: {
    width: "250px",
    backgroundColor: "#fff",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    padding: 9,
    borderRadius: 5,
  },
  select_region_dark: {
    backgroundColor: "#2b3945",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    padding: 9,
    borderRadius: 5,
    width: "250px",
    color: "#fff",
  },

  select_region_small_dark: {
    width: "250px",
    backgroundColor: "#2b3945",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    padding: 9,
    color: "#fff",
    borderRadius: 5,
  },

  select_region_select: {
    padding: 5,
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
  },

  select_region_select_dark: {
    padding: 5,
    width: "100%",
    color: "#fff",
    backgroundColor: "#2b3945",
    border: "none",
    outline: "none",
  },

  countries: {
    maxWidth: 1400,
    padding: "15px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 53,
    marginTop: 20,
    height: "100vh",
  },
  loaderStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    height: "100vh",
  },
  app_body_dark: {
    backgroundColor: "#202c37",
    color: "#fff",
    height: "100vh",
    position: "relative",
    overflow: "auto",
  },
});

const HomePage = ({ mode }: any) => {
  const classes = useStyles();
  const [countries, setCountries] = useState<any>();
  const countriesInputRef = useRef<any>();
  const regionRef = useRef<any>();
  const noCountries = countries?.message || countries?.status;
  const homeMatches = useMediaQuery("(max-width:720px)");
  const dispatch = useDispatch();
  const countrylistdata = useSelector((state: any) => state.CountryDetails);

  useEffect(() => {
    dispatch(getAllCountryListRequest());
  }, []);

  useEffect(() => {
    setCountries(countrylistdata.countryDetails.country);
  }, [countrylistdata.countryDetails]);

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const responseSearch = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await responseSearch.json();
        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(getAllCountryListRequest());
    }
  };

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectValue}`
        );
        const data = await response.json();

        if (selectValue == "All") {
          try {
            dispatch(getAllCountryListRequest());
          } catch (error) {
            console.log(error);
          }
          return;
        }
        setCountries(data);
      };

      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {mode ? (
        <>
          {" "}
          <div className={classes.app_body_dark}>
            <div className={classes.app_body_dark_dark}>
              <div
                className={homeMatches ? classes.small_inputs : classes.inputs}
              >
                {" "}
                <div
                  className={
                    homeMatches
                      ? classes.search_inputs_small
                      : classes.search_inputs
                  }
                >
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search for a Country ..."
                    className={classes.search_inputs_input_dark}
                    ref={countriesInputRef}
                    onChange={searchCountries}
                  />
                </div>
                <div
                  className={
                    homeMatches
                      ? classes.select_region_small_dark
                      : classes.select_region_dark
                  }
                >
                  <select
                    className={classes.select_region_select_dark}
                    ref={regionRef}
                    onChange={selectRegion}
                  >
                    <option>All</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>europe</option>
                  </select>
                </div>
              </div>
              {countrylistdata.isLoading ? (
                <div className={classes.loaderStyle}>
                  <CircularProgress />
                </div>
              ) : (
                <div className={classes.countries}>
                  {" "}
                  {!noCountries ? (
                    <Country country={countries} darkMode={mode} />
                  ) : (
                    <p>No Countries Found...</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={classes.app_body}>
            <div
              className={homeMatches ? classes.small_inputs : classes.inputs}
            >
              {" "}
              <div
                className={
                  homeMatches
                    ? classes.search_inputs_small
                    : classes.search_inputs
                }
              >
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for a Country ..."
                  className={classes.search_inputs_input}
                  ref={countriesInputRef}
                  onChange={searchCountries}
                />
              </div>
              <div
                className={
                  homeMatches
                    ? classes.select_region_small
                    : classes.select_region
                }
              >
                <select
                  className={classes.select_region_select}
                  ref={regionRef}
                  onChange={selectRegion}
                >
                  <option>All</option>
                  <option>Africa</option>
                  <option>America</option>
                  <option>Asia</option>
                  <option>europe</option>
                </select>
              </div>
            </div>
            {countrylistdata.isLoading ? (
              <div className={classes.loaderStyle}>
                <CircularProgress />
              </div>
            ) : (
              <div className={classes.countries}>
                {" "}
                {!noCountries ? (
                  <Country country={countries} darkMode={mode} />
                ) : (
                  <p>No Countries Found...</p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
