import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function SearchForm(props) {
  const [providerData, setProviderData] = useState([]);
  const [providerName, setProviderName] = useState("");
  const [providerZipCode, setProviderZipCode] = useState("");
  const [providerCity, setProviderCity] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);  

  const ProviderNameChange = (e) => {
    setProviderName(e.target.value);
    console.log(e.target.value);
  };
  const ProviderCityChange = (e) => {
    setProviderCity(e.target.value);
    console.log(e.target.value);
  };
  const ProviderZipCodeChange = (e) => {
    setProviderZipCode(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //need to be able to find a way
    //to put a search specifier in the url that connects to all input fields
    const url = `http://localhost:9000/provider?${providerName}`; //trying to hit the endpoint with special
    //request to get back specified data that matches what the user inputs into the field

    await Axios.get(url, { 
      headers: {     //brining headers to bring in the data as json format
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: {  //because I am making a post request through the api I put the key as body
        ProviderName: providerName, //because the json format has the beginning letter of Provider capitalized
        ProviderCity: providerCity, //I set the Capitalized name as key and our state is the value
        providerZipCode: providerZipCode,
      },
    })

      .then((response) => {  //I am able to set the data that we bring in through the REST API as our state which is provider data
        setProviderData(response.data.provider);
        console.log(providerData); //I am also able to set the number of pages for pagination as our other state which is numberOfPages
        setNumberOfPages(response.data.totalPages); 
        console.log(numberOfPages);
        props.history?.push({ //this is were I want to push our results to with is the page results
          pathname: "/results",
          search: {
                providerName, //we are searching through 3 inputs
                providerCity,
                providerZipCode
          },
          state: { //our states
            providerData,
            numberOfPages,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error seaching data");
      });
  };

  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="search-field-container">
            <div>
              <label>Provider Name</label>
              <input
                className="input"
                placeholder="Name"
                value={providerName}
                onChange={ProviderNameChange}
              />
            </div>

            <div>
              <label>Provider City</label>
              <input
                className="input"
                placeholder="City"
                value={providerCity}
                onChange={ProviderCityChange}
              />
            </div>

            <div>
              <label>Provider Zip Code</label>
              <input
                className="input"
                placeholder="Zip Code"
                value={providerZipCode}
                onChange={ProviderZipCodeChange}
              />
            </div>

            <div>
              <button id="submit-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
