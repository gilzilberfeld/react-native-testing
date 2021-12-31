import {fireEvent, render,  } from '@testing-library/react-native'
import {StaticMonoText, ChangableText, textToShow} from '../components/TextBoxComponents'
import EditScreenInfo from '../components/EditScreenInfo'

import '@testing-library/jest-dom'
import ChangableTextScreen from '../screens/ChangableTextScreen';

describe ('component tests example suite', ()=>{
    test('render to JSON', ()=>{
        const { toJSON } = render(<StaticMonoText/>); 
        expect(toJSON()).toMatchSnapshot();
    })

    test('getbyText example', ()=> {
        const { getAllByRole, getByRole , findByRole, getByTestId, getByText} = render(<EditScreenInfo/>);
        const elementText = getByText("InnerText");
        expect(elementText.props.children).toEqual('InnerText');
    })


    // note that there's only one Text element with AccessibilityRole
    test('getAllbyRole example', ()=> {
        const { getAllByRole, getByRole , findByRole, getByTestId, getByText} = render(<EditScreenInfo/>);
        const elementText = getAllByRole("text")[0];
        expect(elementText.props.children).toEqual('InnerText');
    })

    test('getAllbyRole example', ()=> {
        const { getAllByRole, getByRole , findByRole, getByTestId, getByText} = render(<EditScreenInfo/>);
        const elementText = getAllByRole("text")[0];
        expect(elementText.props.children).toEqual('InnerText');
    })

    test('getByTestID example', ()=> {
        const { getAllByRole, getByRole , findByRole, getByTestId, getByText} = render(<EditScreenInfo/>);
        const elementText = getByTestId("theTestID");
        expect(elementText.props.children).toEqual('UpperText');
    })

    it('checking internal component', ()=>{
        const { getAllByRole, getByRole , findByRole, getByTestId, getByText} = render(<EditScreenInfo/>);
        const theStaticMonoTextElement = getByTestId("theMonoTestID");
        expect(theStaticMonoTextElement.props.children).toEqual('StaticText');
    })

    beforeEach(()=>{
        fetch.resetMocks();
    });

    it ('mock fetch and wait for promise to end', async()=>{
        const {getByTestId, update} = render(<ChangableTextScreen/>); 
        theText = getByTestId("changableText");
        expect(theText.props.children).toEqual("Before");
        fetch.mockResponseOnce(JSON.stringify(
            {
                "amazonData":   {
                    "product": "theProduct"
                }
            }));
        
        await fireEvent.press(theText);  
        expect(textToShow).toEqual("theProduct");
    })    
});
