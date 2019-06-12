import React from 'react';
import App from './App';

// Testing Frameworks
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});
