import React from 'react'
import Form from 'react-bootstrap/Form'

const FilterRate = ({setRateSearch , rateSearch}) => {

  
  return (
    <div>
        <Form.Control type="number" placeholder="Search by Rate" onChange={(e) => setRateSearch(e.target.value)} value={rateSearch}/>

    </div>
  )
}

export default FilterRate