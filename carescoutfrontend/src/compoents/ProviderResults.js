import React from 'react'

function ProviderResults(props) {
    
    const pages = new Array(props.numberOfPages).fill(null).map((n, i) => i);

    const { ProviderName, ProviderCity, ProviderZipCode } = (props.location && props.location.state) || {};
    return (
        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {props.numberOfPages}

        </div>
    )
}

export default ProviderResults
