import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';
import ResultsComponent, { IResultsComponentProps } from './results';

describe('results test suite', () => {
    const defaultProps: IResultsComponentProps = {
        title: "Results",
        data: [],
        error: undefined,
        noResults: undefined,
    };

    it('should render correctly ', () => {
        const wrapper = shallow(<ResultsComponent {...defaultProps} />);
        const component = wrapper.find('.ResultsComponent');

        expect(component.find('h3').text()).toEqual(defaultProps.title);
        expect(component.find('.results').children()).toHaveLength(0);
        expect(component.find('.warningAlert')).toHaveLength(0);
        expect(component.find('.secondaryAlert')).toHaveLength(0);
    });

    it('should render data correctly ', () => {
        const item = {
            name: 'Lucas',
            url: 'urltest',
        }
        const wrapper = shallow(<ResultsComponent {...{...defaultProps, data: [item, item] }} />);
        const component = wrapper.find('.ResultsComponent');

        expect(component.find('h3').text()).toEqual(defaultProps.title);
        expect(component.find('.results').children()).toHaveLength(2);
        expect(component.find('.results').children().at(0).find(Button).props().href).toEqual(item.url);
        expect(component.find('.results').children().at(0).find(Button).text()).toEqual(item.name);
    });

    it('should render error correctly ', () => {
        const itProps = {
            error: 'Error',
        };
        const wrapper = shallow(<ResultsComponent {...{...defaultProps, ...itProps }} />);
        const component = wrapper.find('.ResultsComponent');

        expect(component.find('.warningAlert')).toHaveLength(1);
        expect(component.find('.warningAlert').text()).toEqual(itProps.error);
    });

    it('should render no results correctly ', () => {
        const itProps = {
            noResults: true,
        };
        const wrapper = shallow(<ResultsComponent {...{...defaultProps, ...itProps }} />);
        const component = wrapper.find('.ResultsComponent');

        expect(component.find('.secondaryAlert')).toHaveLength(1);
        expect(component.find('.secondaryAlert').text()).toEqual('No results found!');
    });
});