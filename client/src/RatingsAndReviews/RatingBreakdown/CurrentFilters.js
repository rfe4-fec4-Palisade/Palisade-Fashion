import React from 'react';
import Styled from 'styled-components'

const Container = Styled.div`
  width: 100%;
`

const CurrentFilters = ({rating}) => {

  return (
    <Container>
      {rating} Stars
    </Container>
  )
}

export default CurrentFilters;