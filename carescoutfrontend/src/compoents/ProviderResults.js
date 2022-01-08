import React from 'react'

function ProviderResults(props) {
    
    const pages = new Array(props.numberOfPages).fill(null).map((n, i) => i);

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
