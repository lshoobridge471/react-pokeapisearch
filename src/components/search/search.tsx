import React from 'react';
import './search.scss';
import { Navbar, FormControl, Button, Container } from 'react-bootstrap';
import ResultsComponent, { IPokemonData } from '../results/results';

export interface ISearchComponentProps {
    inputPlaceholder: string;
    buttonText: string;
    apiUrl: string;
    onSearch?: (value: string) => void;
}

export interface ISearchComponentState {
    results: IPokemonData[];
    error?: string;
    noResults: boolean;
}

class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {
    constructor(props: ISearchComponentProps) {
        super(props);
        this.state = {
            results: [],
            error: undefined,
            noResults: false
        };
        this.onSearch = this.onSearch.bind(this);
    }

    async onSearch(value: string) {
        // if OnSearch is override
        if(this.props.onSearch !== undefined) return this.props.onSearch(value);
        // Continue with this function.
        if(value.length) {
            const { apiUrl } = this.props;
            try {
                await fetch(`${apiUrl}/search?pokemon=${value}`)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    if(result.status === 'OK') {
                        this.setState({
                            results: result.data,
                            error: undefined,
                            noResults: !result.data.length
                        });
                    }
                })
            } catch(err) {
                const error = (err as Error).message;
                this.setState({ error, noResults: false });
            }
            return;
        }
        this.setState({ results: [], error: undefined });
    }
    
    render() {
        const { inputPlaceholder, buttonText } = this.props;
        const { results, noResults, error } = this.state;
        return (
            <Container className="SearchComponent">
                <Navbar bg="light" expand="lg">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onSearch(event.target.value)} type="text" placeholder={inputPlaceholder} className="mr-3" />
                        <Button variant="outline-success">{buttonText}</Button>
                    </Navbar.Collapse>
                </Navbar>
                <ResultsComponent title="Resultados de la busqueda" data={results} noResults={noResults} error={error} />
            </Container>
        );
    }
}
export default SearchComponent;