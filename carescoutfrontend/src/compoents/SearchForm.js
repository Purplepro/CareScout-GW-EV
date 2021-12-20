import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function SearchForm(props) { 
    const [providerData, setProviderData] = useState([])   
    const [providerName, setProviderName] = useState("")
    const [providerZipCode, setProviderZipCode] = useState("");
    const [providerCity, setProviderCity] = useState("");
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    const ProviderNameChange = (e) => {
        setProviderName(e.target.value)
    }
    const ProviderCityChange = (e) => {
        setProviderCity(e.target.value)
    }
    const ProviderZipCodeChange = (e) => {
        setProviderZipCode(e.target.value)
    }

 


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        let url = `http://localhost:9000/provider?pageSize=&page=${pageNumber}&ProviderName=${providerName}&ProviderCity=${providerCity}&ProviderZipCode=${providerZipCode}`;

        

       await Axios
            .get(
                    url,
                    {
                    headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }
                )
            
            .then((response) => {
                console.log(response.data.provider)
                // return response.data.provider
                props.history?.push({
                    pathname: "/results",
                    search: {
                        name: providerName,
                        city: providerCity,
                        zipCode: providerZipCode
                    },
                    state: {
                        results: response.data.provider
                    }
                })
                
            })
            .then(({ totalPages, provider }) => {
                    setProviderData(provider)
                    setNumberOfPages(totalPages)

            })
            .catch(error => {
                console.log(error)
                console.log("error seaching data")
            })

    };





    





    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="search-field-container">
                    <div>
                    <label>Provider Name</label>
                    <input className="input" placeholder="Name" value={providerName} onChange={ProviderNameChange}/>
                    </div>

                    <div>
                    <label>Provider City</label>
                    <input className="input" placeholder="City"  value={providerCity} onChange={ProviderCityChange}/>
                    </div>

                    <div>
                    <label>Provider Zip Code</label>
                    <input className="input" placeholder="Zip Code"  value={providerZipCode} onChange={ProviderZipCodeChange}/>
                    </div>

                    <div>
                   <button id="submit-button" type='submit'>Submit</button>
                    </div>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default SearchForm
