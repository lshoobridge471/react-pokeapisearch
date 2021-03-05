import React from 'react';
import { Container } from 'react-bootstrap';
import './header.scss';

export interface IHeaderProps {
    title: string;
    subtitle?: string;
}

class HeaderComponent extends React.Component<IHeaderProps> {
    render() {
        const { title, subtitle } = this.props;
        return (
            <Container className="HeaderComponent pt-3 pb-3">
                <h2>{title}</h2>
                {subtitle && (
                    <span>{subtitle}</span>
                )}
            </Container>
        );
    }
}
export default HeaderComponent;