import React, { useState, useEffect } from 'react';

const Recommend = ({recommended}) => {
  const [total, setTotal] = useState(0);
  const [yes, setTrue] = useState(0);

  useEffect(() => {
    setTrue(+recommended.true);
    setTotal(+recommended.false + +recommended.true)
  }, [])

  return (
    <div>{Math.floor(yes/total * 100)}% of reviews recommend this product</div>
  )
};

export default Recommend;