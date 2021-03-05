import { shallow } from 'enzyme';
import FooterComponent from '../../components/footer/footer';
import HeaderComponent from '../../components/header/header';
import SearchComponent from '../../components/search/search';
import MainContainer from './main-container';

describe('main-container test suite', () => {
    const API_URL = 'https://localhost:3000';

    it('should render correctly ', () => {
        const wrapper = shallow(<MainContainer apiUrl={API_URL} />);
        const container = wrapper.find('.MainContainer');

        expect(container.find(HeaderComponent).props().title).toEqual('Pokemon finder');
        expect(container.find(HeaderComponent).props().subtitle).toEqual('El que quiere Pokemon, que los busque.');

        expect(container.find(SearchComponent).props().apiUrl).toEqual(API_URL);
        expect(container.find(SearchComponent).props().inputPlaceholder).toEqual('Ingrese el nombre a buscar...');
        expect(container.find(SearchComponent).props().buttonText).toEqual('Buscar');
        
        expect(wrapper.find(FooterComponent).props().developer).toEqual('Lucas Shoobridge');
        expect(wrapper.find(FooterComponent).props().repository).toEqual('https://github.com/lshoobridge471/react-pokeapisearch');
    });
});