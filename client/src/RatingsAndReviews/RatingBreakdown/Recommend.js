import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const Text = Styled.div`
font-family: Arial, sans-serif;
font-size: 12px;
padding: 5px;
`

const Recommend = ({recommended}) => {
  const [total, setTotal] = useState(0);
  const [yes, setTrue] = useState(0);

  useEffect(() => {
    setTrue(+recommended.true);
    setTotal(+recommended.false + +recommended.true)
  }, [])

  return (
    <Text>{Math.floor(yes/total * 100)}% of reviews recommend this product</Text>
  )
};

export default Recommend;