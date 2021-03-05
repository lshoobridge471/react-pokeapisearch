import { shallow } from 'enzyme';
import HeaderComponent, { IHeaderProps } from './header';

describe('header test suite', () => {
    const headerProps: IHeaderProps = {
        title: "title",
        subtitle: "subtitle"
    }
    it('should render correctly ', () => {
        const wrapper = shallow(<HeaderComponent {...headerProps} />);
        const component = wrapper.find('.HeaderComponent');
        expect(component.find('h2').text()).toEqual(headerProps.title);
        expect(component.find('span').text()).toEqual(headerProps.subtitle);
    });
});