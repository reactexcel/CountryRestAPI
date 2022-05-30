import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { DarkModeType } from "../../types/country";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountryCodeListRequest } from "../../redux/actions/countryAction";

const useCountryDetailsStyles = makeStyles({
  country_details: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: 1400,
    minHeight: "100vh",
    fontSize: 16,
  },

  country_details_darkMode: {
    margin: "0px auto 0",
    padding: "15px",
    maxWidth: 1400,
    minHeight: "100vh",
  },
  back: {
    backgroundColor: "#fff",
    border: 0,
    outline: 0,
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: 10,
    fontWeight: "bold",
    cursor: "pointer",
  },
  back_darkMode: {
    backgroundColor: "#2b3945",
    border: 0,
    outline: 0,
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    width: "150px",
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: 10,
    fontWeight: "bold",
    cursor: "pointer",
  },
  country_details_body: {
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: 1400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  country_details_small_body: {
    flexDirection: "column",
    margin: "15px auto 0",
    padding: "15px",
    maxWidth: 1400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  img_container: {
    flex: 0.5,
  },
  img_container_images: {
    width: "100%",
    objectFit: "cover",
  },
  info: {
    flex: 0.5,
  },
  info_h2: {
    marginBottom: 15,
    fontWeight: 800,
  },
  info_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "45px",
  },
  info_container_small: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "45px",
  },
  info_values: {
    color: "#808080",
  },
  info_values_darkMode: {
    color: "#fff",
  },
  border_country: {
    padding: "5px 10px",
    backgroundColor: "#fff",
    display: "inline-block",
    margin: 10,
    cursor: "pointer",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
  border_country_darkMode: {
    backgroundColor: "#2b3945",
    color: "#fff",
    padding: "5px 10px",
    display: "inline-block",
    margin: 10,
    cursor: "pointer",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
  left_info: {
    marginBottom: 20,
  },
  countrydetailsdivmode: {
    backgroundColor: "#202c37",
    color: "#fff",
  },
});

export const CountryDetails = ({ mode }: DarkModeType) => {
  const CountryDetailsClasses = useCountryDetailsStyles();

  const location = useLocation();
  const dataset: any = location.state;
  const matches = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();
  const countrycodeDetails = useSelector(
    (state: any) => state.CountryCodeReducers
  );

  const [countrycodeData, setCountryCodeData] = useState<any | null>();
  const [toggle, setToggle] = useState<boolean>(false);
  const navigates = useNavigate();
  const goBack = () => {
    navigates("/");
    setToggle(false);
  };
  const handleCountryCodeClick = (data: any) => {
    dispatch(getAllCountryCodeListRequest(data));
    setToggle(true);
  };

  useEffect(() => {
    if (countrycodeDetails?.countryCode?.countryCode) {
      setCountryCodeData(countrycodeDetails?.countryCode?.countryCode);
    }
  }, [countrycodeDetails]);

  return (
    <div className={mode ? CountryDetailsClasses.countrydetailsdivmode : ""}>
      <div
        className={
          mode
            ? CountryDetailsClasses.country_details_darkMode
            : CountryDetailsClasses.country_details
        }
      >
        <button
          className={
            mode
              ? CountryDetailsClasses.back_darkMode
              : CountryDetailsClasses.back
          }
          onClick={goBack}
        >
          <ArrowBackIcon />
          <p>Back</p>
        </button>

        {toggle && countrycodeData?.length && countrycodeData ? (
          <>
            <div
              className={
                matches
                  ? CountryDetailsClasses.country_details_small_body
                  : CountryDetailsClasses.country_details_body
              }
            >
              <div className={CountryDetailsClasses.img_container}>
                <img
                  src={countrycodeData[0]?.flags?.svg}
                  className={CountryDetailsClasses.img_container_images}
                />
              </div>

              <div className={CountryDetailsClasses.info}>
                <div className={CountryDetailsClasses.info_h2}>
                  {countrycodeData[0]?.name?.common}
                </div>
                <div
                  className={
                    matches
                      ? CountryDetailsClasses.info_container_small
                      : CountryDetailsClasses.info_container
                  }
                >
                  <div
                    className={matches ? CountryDetailsClasses.left_info : ""}
                  >
                    <p>
                      Population:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {countrycodeData[0]?.population}
                      </span>
                    </p>
                    <p>
                      Region:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {countrycodeData[0]?.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {countrycodeData[0]?.subregion}
                      </span>
                    </p>
                  </div>
                  <div className="right_info">
                    <p>
                      Capital:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {countrycodeData[0]?.capital?.length
                          ? countrycodeData[0]?.capital[0]
                          : ""}
                      </span>
                    </p>
                    <p>
                      Languages:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {/* @ts-ignore */}
                        {countrycodeData[0]?.languages
                          ? Object.values(countrycodeData[0]?.languages)[0]
                          : ""}
                      </span>
                    </p>
                  </div>
                </div>
                Border Countries :
                {countrycodeData[0]?.borders?.map((data: string) => (
                  <div
                    className={
                      mode
                        ? CountryDetailsClasses.border_country_darkMode
                        : CountryDetailsClasses.border_country
                    }
                    onClick={() => {
                      handleCountryCodeClick(data);
                    }}
                  >
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={
                matches
                  ? CountryDetailsClasses.country_details_small_body
                  : CountryDetailsClasses.country_details_body
              }
            >
              <div className={CountryDetailsClasses.img_container}>
                <img
                  src={dataset?.flags.svg}
                  className={CountryDetailsClasses.img_container_images}
                />{" "}
              </div>
              <div className={CountryDetailsClasses.info}>
                <div className={CountryDetailsClasses.info_h2}>
                  {dataset?.name?.common}
                </div>
                <div
                  className={
                    matches
                      ? CountryDetailsClasses.info_container_small
                      : CountryDetailsClasses.info_container
                  }
                >
                  <div
                    className={matches ? CountryDetailsClasses.left_info : ""}
                  >
                    <p>
                      Population:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {dataset?.population}
                      </span>
                    </p>
                    <p>
                      Region:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {dataset?.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {dataset?.subregion}
                      </span>
                    </p>
                  </div>
                  <div className="right_info">
                    <p>
                      Capital:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {dataset?.capital?.length ? dataset?.capital[0] : ""}
                      </span>
                    </p>
                    <p>
                      Languages:
                      <span
                        className={
                          mode
                            ? CountryDetailsClasses.info_values_darkMode
                            : CountryDetailsClasses.info_values
                        }
                      >
                        {/* @ts-ignore */}
                        {dataset?.languages
                          ? Object.values(dataset?.languages)[0]
                          : ""}
                      </span>
                    </p>
                  </div>
                </div>
                Border Countries :
                {dataset?.borders?.map((data: string) => (
                  <div
                    className={
                      mode
                        ? CountryDetailsClasses.border_country_darkMode
                        : CountryDetailsClasses.border_country
                    }
                    onClick={() => {
                      handleCountryCodeClick(data);
                    }}
                  >
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
