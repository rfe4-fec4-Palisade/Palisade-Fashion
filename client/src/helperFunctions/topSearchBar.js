import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const StyledInput = Styled.input `
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  height: 20px;
  padding: 2px 10px 2px 10px;
  width: 200px;
  background-color: #FBFCFC;
  font-family: Noto Sans, sans-serif;
  border-style: solid;
  border-color: #808B96 ;
  outline: none;
`;

const Ulist = Styled.ul`
font-family: Arial, sans-serif;
margin-right: 15px;
padding: 0px;
list-style: none;
display: block;
padding: 5px 10px;
color: #FDFEFE ;
background-color: transparent;
position: relative;
z-index: 2000;
text-align: center;
text-decoration: none;
font-weight: 300;
`;

const List = Styled.li`
  font-family: Arial, sans-serif;
  font-weight: normal;
  height: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #273746 !important;
  background: #FDFEFE !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  &:hover {
    display: block;
    background: #3498db !important;
    color: #fff !important;
  }


`;

const icon = {
  position: 'relative',
  height: '14px',
  right: '10%',
  marginTop: '8px',
  paddingTop: '10px',
  color: '#212F3C'
}





function TopSearchBar (props) {
  const [filterData, setFilterData] = useState([]);
  // console.log('filterData', filterData)
  var items = props.products;
  var searchTerm = props.search;

  const handleFilter = (event) => {

    const searchWord = event.target.value;
    // console.log('items', items)
    const newFilter = items.filter(product => {
      return product.name.toLowerCase().includes(searchWord.toLowerCase());
    })

    if (searchWord.length === 0) {
      setFilterData([]);
    }

    if (searchWord.length > 0) {
     setFilterData(newFilter);
    }

  }



  return (
    <div>
       <StyledInput type='text' placeholder='Search Products...' onChange={(event) => props.handleSearch(event)} onChange={handleFilter}></StyledInput><FaSearch style={icon} />
       {filterData.length !== 0 && (
         <Ulist>
           {filterData.map((item, index) =>
           <List key={index}><a>{item.name}</a></List>
           )}
         </Ulist>
       )}
    </div>
  )
}

export default TopSearchBar;