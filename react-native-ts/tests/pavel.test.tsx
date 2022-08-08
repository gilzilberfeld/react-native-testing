import React from 'react';
import { Button, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { render, RenderOptions } from '@testing-library/react-native';

const Button1: React.FC<TouchableOpacityProps> = props => (
  <TouchableOpacity {...props}>
    <Text>{'123'}</Text>
  </TouchableOpacity>
);

const TestComponent = () => {
  return (
    <View>
      <Button1 testID="test" />
    </View>
  );
};

const renderOptions: RenderOptions = {
  wrapper: ({ children }) => <View>{children}</View>,
};

// it.skip('is a non working test', async () => {
//   const { getByTestId } = render(<TestComponent />, renderOptions);

//   const button = getByTestId('test');
//   console.log(button.props.source);
//   //expect(button).toMatchSnapshot();
// });

it('is a working test', () => {
  const { getByTestId , toJSON} = render(
    <View>
      <Button1 testID="test" title='title'/>
    </View>,
    renderOptions
  );

  const button = getByTestId('test');
  const buttonjson = toJSON();

  const the_text= buttonjson;

  console.log( the_text);
  //expect(button).toMatchSnapshot();
});
