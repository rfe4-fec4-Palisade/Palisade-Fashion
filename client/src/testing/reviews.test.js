import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainReview from '../RatingsAndReviews/MainReview.js';
import Breakdown from '../RatingsAndReviews/RatingBreakdown/Breakdown.js'
import List from '../RatingsAndReviews/ReviewList/List.js'
import Sort from '../RatingsAndReviews/SortComponents/Sort.js'
import NewReview from '../RatingsAndReviews/WriteNewReview/NewReview.js'

// test if main review renders
it('should render correctly', () => {
  const wrapper = shallow(<MainReview />);
  expect(wrapper).toMatchSnapshot();
});

it('should render main review with child elements', () => {
  const wrapper = shallow(<MainReview />);
  expect(wrapper.find('.title').length).toEqual(1);
  expect(wrapper.containsMatchingElement(<Breakdown/>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<List/>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<Sort/>)).toEqual(true);
  expect(wrapper.containsMatchingElement(<NewReview/>)).toEqual(true);
  // expect(wrapper.find('#title').length).toEqual(0);
});

