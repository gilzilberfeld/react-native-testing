import React from 'react';
import Form from '../Form'
import {render, fireEvent } from '@testing-library/react-native'

it ('simple test', () => {
  expect(true).toBeTruthy();
})

it('renders correctly', () => {
  const { getByTestId } = render(<Form name="Gil" />);
  var theText = getByTestId("theText");
  expect(theText.props.children[1]).toBe("Gil");
  expect(theText.props.children[2]).toBe("");
});

it('adds exclamations', ()=> {
  var comp = render(<Form name="Gil" />);
  fireEvent.press(comp.getByTestId("theButton"));
  var theText = comp.getByTestId("theText");
  expect(theText.props.children[2]).toBe("!");
})