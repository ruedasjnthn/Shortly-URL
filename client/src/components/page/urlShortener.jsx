import React, { useState, useEffect } from "react";
import desktopImage from "../../images/bg-shorten-desktop.svg";
import mobileImage from "../../images/bg-shorten-mobile.svg";
import Button from "../button";
import axios from "axios";

const UrlShortener = () => {
  //state for the url input from client
  const [inputUrl, setInputUrl] = useState("");
  //state for handling the urls from the api
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState([]);
  //handle the merror message
  const [inputError, setInputError] = useState("");
  const [clickedButton, setClickedButton] = useState(false);
  //handle the image based on screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //for updating the result list
  useEffect(() => {
    if (results.length > 2) {
      results.pop();
    }
    if (urls !== "") {
      setResults([
        { full: urls.full, short: urls.short, id: urls._id, copied: false },
        ...results,
      ]);
    }
  }, [urls]);

  //for updating the button text when clicked
  useEffect(() => {
    if (clickedButton === true) {
      setTimeout(
        () =>
          setResults(
            results.map((item) => {
              return {
                ...item,
                copied: false,
              };
            })
          ),
        [2000]
      );
      setClickedButton(false);
    }
  }, [clickedButton]);

  //for screen width
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // save results to local storage
  useEffect(() => {
    saveLocalTodos();
  }, [results]);

  const HTTP_URL_VALIDATOR_REGEX =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  //handling the input url
  const handleChange = (event) => {
    setInputUrl(event.target.value);
  };

  // Link Validation Function
  const validateLink = (string) => {
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };

  //calling the url shortener api
  const getUrl = async () => {
    await axios
      .post("/api/shorten", { full: inputUrl })
      .then((res) => {
        console.log(res.data.shortUrl);
        setUrls(res.data.shortUrl);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      });
  };

  //submit url function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLink(inputUrl)) {
      getUrl(inputUrl);
      setInputError("");
      setInputUrl("");
    }
    if (inputUrl === "") {
      setInputUrl("");
      setInputError("Please add a link");
    }
    if (inputUrl !== "" && !validateLink(inputUrl)) {
      setInputUrl("");
      setInputError("Please add a valid link");
    }
  };

  // function for copy button
  const handleCopy = (id, url) => {
    setResults(
      results.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            copied: !item.copied,
          };
        }
        return item;
      })
    );
    navigator.clipboard.writeText(url);
    setClickedButton(true);
  };

  // adjusting bg image using screenwidth
  const imageUrl = windowWidth >= 1280 ? desktopImage : mobileImage;

  // function to save data to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("results", JSON.stringify(results));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("results") === null) {
      localStorage.setItem("results", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("results"));
      setResults(todoLocal);
    }
  };

  return (
    <>
      <div className="urlShortener">
        <div className="urlShortener__container">
          <div
            className="urlShortener__generator"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  className={inputError !== "" ? "inputError" : "inputUrl"}
                  type="text"
                  placeholder="Shorten a link here..."
                  onChange={handleChange}
                  value={inputUrl}
                />
                <span className="input-error">{inputError}</span>
              </div>
              <Button
                onClick={handleSubmit}
                buttonStyle="btn--edged"
                buttonSize="btn--shorten"
              >
                Shorten It!
              </Button>
            </form>
          </div>
          {results.map((result) => {
            return (
              <div key={result.id} className="displayResult">
                <span className="fullUrlResult">{result.full}</span>
                <a className="shortUrlResult" href={result.short} target="_blank">
                    {result.short}
                  </a>
                <Button
                  onClick={() => handleCopy(result.id, result.short)}
                  buttonStyle="btn--edged"
                  buttonSize={result.copied ? "btn--copied" : "btn--copy"}
                >
                  {result.copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UrlShortener;
