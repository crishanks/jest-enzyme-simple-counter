import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Testing Frameworks
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('renders without error', () => {

});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});
