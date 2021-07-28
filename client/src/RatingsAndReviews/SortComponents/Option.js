import React, { useState, useEffect } from 'react';

const Option = ({option, changeSortOption}) => {
  return (
    <option value={option}>{option}</option>
  )

}

export default Option;