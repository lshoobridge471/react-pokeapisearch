import { shallow, mount } from 'enzyme';
import SearchComponent, { ISearchComponentProps } from './search';
import { Navbar, FormControl, Button } from 'react-bootstrap';

describe('search test suite', () => {
    const defaultProps: ISearchComponentProps = {
        inputPlaceholder: "placeholder",
        buttonText: "button",
        apiUrl: "url",
    }

    it('should render correctly ', () => {
        const wrapper = shallow(<SearchComponent {...defaultProps} />);
        const component = wrapper.find('.SearchComponent');

        expect(component.find(Navbar)).toHaveLength(1);
        expect(component.find(Navbar).find(FormControl)).toHaveLength(1);
        expect(component.find(Navbar).find(FormControl).props().placeholder).toEqual(defaultProps.inputPlaceholder);
        expect(component.find(Navbar).find(Button)).toHaveLength(1);
        expect(component.find(Navbar).find(Button).text()).toEqual(defaultProps.buttonText);
    });

    it('should search function works correctly ', () => {
        const onSearchMock = jest.fn();
        const wrapper = mount(<SearchComponent {...{...defaultProps, onSearch: onSearchMock}} />);

        const event = {
            preventDefault() {},
            target: { value: 'value' }
        };
        wrapper.find(Navbar).find(FormControl).simulate('change', event);
        expect(onSearchMock).toBeCalledWith(event.target.value);
    });
});