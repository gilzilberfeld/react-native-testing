import Intro from '../Intro'
import {render, fireEvent } from '@testing-library/react-native'

it ('first test', () => {
  expect(true).toBeTruthy();
  
})

it('renders correctly', () => {
  const { getByText, getAllByText } = render(
    <Intro />
  );
//   fireEvent
//   expect(tree).toMatchSnapshot();
});