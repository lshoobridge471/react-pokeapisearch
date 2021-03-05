import React from 'react';
import './main-container.scss';
import Container from 'react-bootstrap/Container';
import HeaderComponent from '../../components/header/header';
import SearchComponent from '../../components/search/search';
import FooterComponent, { IFooterComponentProps } from '../../components/footer/footer';
import { Button } from 'react-bootstrap';

export interface IMainContainerProps {
    apiUrl: string;
}

class MainContainer extends React.Component<IMainContainerProps> {
    render () {
        const footerProps: IFooterComponentProps = {
            developer: 'Lucas Shoobridge',
            renderDeveloper: (developer) => <span>Hecho por {developer}</span>,
            repository: 'https://github.com/lshoobridge471/react-pokeapisearch',
            renderRepository: (repository) => <Button variant="secondary" href={repository}>Repositorio</Button>,
        };
        const { apiUrl } = this.props;
        return (
            <>
                <Container className="MainContainer pb-5">
                    <HeaderComponent title="Pokemon finder" subtitle="El que quiere Pokemon, que los busque." />
                    <SearchComponent apiUrl={apiUrl} inputPlaceholder="Ingrese el nombre a buscar..." buttonText="Buscar" />
                </Container>
                <FooterComponent {...footerProps} />
            </>
        );
    }
}

export default MainContainer;