import React from 'react';
import { shallow, mount, render } from 'enzyme';
import QuestionAndAnswer from '../Q&AComponents/Q&Acontainer.js';
import QandAitem from '../Q&AComponents/q&a-Item.js';
import AnswerItem from '../Q&AComponents/answerItem.js';
import AddaQuestion from '../Q&AComponents/AddaQuestion.js';

it('should render correctly', () => {
  const wrapper = shallow(<QuestionAndAnswer/>);
  expect(wrapper).toMatchSnapshot();
});


it('should render child elements within Q&Aitems' , () => {
  const wrapper = shallow(<QandAitem />);
  expect(wrapper.find('.title').length).toEqual(1);
  expect(wrapper.containsMatchingElement(<AnswerItem />)).toEqual(true);
  expect(wrapper.containsMatchingElement(<AddaQuestion />)).toEqual(true);
});

it('should properly pass props down to child components', () => {
  const wrapper = shallow(<QuestionAndAnswer />);
})


