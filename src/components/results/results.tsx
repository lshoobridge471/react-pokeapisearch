import React from 'react';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import './results.scss';
import NoImage from '../../assets/images/no-image.jpg';

export interface IPokemonData {
    name: string;
    url: string;
}

export interface IResultsComponentProps {
    title?: string;
    data: IPokemonData[];
    error?: string;
    noResults?: boolean;
}
class ResultsComponent extends React.Component<IResultsComponentProps> {
    render() {
        const { title, data, error, noResults } = this.props;
        return (
            <Container className="ResultsComponent mt-3 pb-4">
                <h3>{title || 'Search results'}</h3>
                <div className="results">
                    {data.map((item: IPokemonData) => {
                            const { name, url } = item;
                            return (
                            <Card key={name}>
                                <Card.Body className="cardBody">
                                    <Card.Img src={NoImage} className="image" />
                                    <Card.Text className="pl-2">
                                        <Button variant="link" href={url}>{name}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            );
                        })
                    }
                    {error && !noResults && (
                        <Alert className='warningAlert' variant="warning">
                            {error}
                        </Alert>
                    )}
                    {noResults && !error && (
                        <Alert className='secondaryAlert' variant="secondary">
                            No results found!
                        </Alert>
                    )}
                </div>
            </Container>
        )
    }
}
export default ResultsComponent;