import React from 'react'

import { Link } from 'react-router-dom'

function Hospital() {
  return (
    <div>
        <h1>Hospital</h1>

        <Link to={"/HospitalForm"} >Hospitalform</Link>
    </div>
  )
}

export default Hospital