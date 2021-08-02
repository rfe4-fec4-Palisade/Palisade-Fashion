import React from 'react';
import Styled from 'styled-components'

const Container = Styled.div`
padding-top: 10px;
`

const Filter = Styled.div`
background-color: #F0F0F0;
font-size: 12px;
padding: 5px;
width: 50px;
text-align:center;
`

const CurrentFilters = ({rating}) => {

  return (
    <Container>
      <Filter>{rating} Stars</Filter>
    </Container>
  )
}

export default CurrentFilters;