import React from 'react'

const Details = ({ status, premiered, network }) => (
      <Details>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </Details>
    );  

export default Details
