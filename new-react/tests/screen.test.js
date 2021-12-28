import TabOneScreen from '..//screens/TabOneScreen'
import {fireEvent, render} from '@testing-library/react-native'
import NotFoundScreen from '../screens/NotFoundScreen';

describe('screen tests', ()=>{

    it('screen renders to json', ()=>{
        const { toJSON } = render(<TabOneScreen/>); 
        expect(toJSON()).toMatchSnapshot();
    })

    it('screen renders correctly', ()=> {
        const { getByText } = render(<TabOneScreen/>); 
        const tab = getByText('Tab One');
        
        const title = tab.children[0].children[0];
        expect(title).toEqual('Tab One');
    })

    it('search by TestID in component', ()=> {
        const { getByTestId } = render(<TabOneScreen/>); 
        const tab = getByTestId('theTestID');
        const textComponent = tab.props.children;
        expect(textComponent).toEqual('UpperText');
    })

    it('inject mock navigation', ()=>{
        testNavigation = {
            replace : jest.fn()
        }
        const mockReplace = testNavigation.replace;
        
        const { getByTestId } = render(<NotFoundScreen navigation={testNavigation} />); 
        const touchOp = getByTestId('touchable');
        fireEvent(touchOp, 'onPress');

        // Check that replace was called
        expect(mockReplace.mock.calls.length).toBe(1);
        expect(mockReplace).toHaveBeenCalledTimes(1);

        // Check that replace was called with the right arg
        expect(mockReplace.mock.calls[0][0]).toBe('Root');
        expect(mockReplace).toHaveBeenCalledWith('Root');
    })
})