import { shallow } from 'enzyme';
import FooterComponent, { IFooterComponentProps } from './footer';
import { Button } from 'react-bootstrap';


describe('footer test suite', () => {

    const footerProps: IFooterComponentProps = {
        developer: 'Lucas Shoobridge',
        renderDeveloper: (developer) => <span>Hecho por {developer}</span>,
        repository: 'https://github.com/lshoobridge471/react-pokeapisearch',
        renderRepository: (repository) => <Button variant="secondary" href={repository}>Repositorio</Button>,
    };

    it('should render correctly ', () => {
        const wrapper = shallow(<FooterComponent {...footerProps} />);
        const container = wrapper.find('.FooterComponent');

        expect(container.find('.internalContainer')).toBeDefined();

        const internalContainer = container.find('.internalContainer');
        expect(internalContainer.find('.developer')).toBeDefined();
        expect(internalContainer.find('.repository')).toBeDefined();
    });
});