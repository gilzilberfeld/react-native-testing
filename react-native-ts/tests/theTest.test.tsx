import React from 'react';
import Intro from '../Intro'
import {render, fireEvent } from '@testing-library/react-native'

it ('simple test', () => {
  expect(true).toBeTruthy();
})

it('renders correctly', () => {
  const { getByTestId } = render(<Intro name="Gil" />);
  var theText = getByTestId("theText");
  expect(theText.props.children[1]).toBe("Gil");
  expect(theText.props.children[2]).toBe("");
});

it('adds exclamations', ()=> {
  var comp = render(<Intro name="Gil" />);
  
  fireEvent.press(comp.getByTestId("theButton"));
  var theText = comp.getByTestId("theText");
  expect(theText.props.children[2]).toBe("!");
})