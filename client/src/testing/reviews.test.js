import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainReview from '../RatingsAndReviews/MainReview.js';
import Breakdown from '../RatingsAndReviews/RatingBreakdown/Breakdown.js'

// test if main review renders
it('should render correctly', () => {
  const wrapper = shallow(<MainReview />);
  expect(wrapper).toMatchSnapshot();
});

it('should render main review with child elements', () => {
  const wrapper = shallow(<MainReview />);
  expect(wrapper.find('.title').length).toEqual(1);
  expect(wrapper.containsMatchingElement(<Breakdown/>)).toEqual(true);
  // expect(wrapper.find('#title').length).toEqual(0);
});

