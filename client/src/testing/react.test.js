const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><body><p id="main">My First JSDOM!</p></body>`);

import App from '../App.js';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
//fixtures

// const wrapper = mount(
//   <App/>
// );
// //tests
// const p = wrapper.find('.test')
// test('App component renders text', () => {
//   // const state = [{greeting: 'hello world'}]
//   expect(p.text()).toBe("hello world")
// });

it('should render correctly with no props', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
