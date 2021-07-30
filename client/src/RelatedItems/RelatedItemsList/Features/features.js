import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Table = styled.table `
  border-spacing: 4em .1em;
`;

const Row = styled.tr `

`;



const Features = ({currentProduct, card}) => {

  const currentCompare = currentProduct.features.map((item) => {
    console.log('feature', item.feature);
    let cardValue = (thing) => {
      for (var i = 0; i < card.features.length; i++) {
        if (card.features[i].feature === thing) {
          return card.features[i].value;
        }
      }
    }
    return (
      <Row>
        <td> {item.value}</td>
        <td>{item.feature}</td>
        <td>{cardValue(item.feature)}</td>
      </Row>
    )
  })


  return (
    <Table>
      <tr>
        <th>{currentProduct.name}</th>
        <th>Features</th>
        <th>{card.name}</th>
      </tr>
      {currentCompare}
    </Table>
  )
}

export default Features;