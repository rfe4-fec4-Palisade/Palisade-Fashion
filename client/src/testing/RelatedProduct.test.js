import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RelatedItems from '../RelatedItems/relatedItems.js.js';
import Card from '../RelatedItems/Cards.js/Breakdown.js';
import PortalModal from '../RelatedItems/PortalModal.js/List.js';


// test if main review renders
it('should render correctly', () => {
  const wrapper = shallow(<RelatedItems />);
  expect(wrapper).toMatchSnapshot();
});

it('should render main review with child elements', () => {
  const wrapper = shallow(<MainReview />);
  expect(wrapper.find('.title').length).toEqual(1);
  expect(wrapper.containsMatchingElement(<Card/>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<OutfitList/>)).toEqual(true);
});

it('should properly pass props down to child components', () => {
  const wrapper = shallow(<RelatedItems />);

})