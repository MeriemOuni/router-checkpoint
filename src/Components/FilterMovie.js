import React from 'react'
import Form from 'react-bootstrap/Form'
const FilterMovie = ({inputSearch , setInputSearch}) => {
  return (
    <div>
        <Form.Control type="text" placeholder="Search Movie(s)" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
    </div>
  )
}

export default FilterMovie