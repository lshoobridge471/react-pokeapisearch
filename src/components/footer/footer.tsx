import React from 'react';
import './footer.scss';

export interface IFooterComponentProps {
    developer: string;
    renderDeveloper: (developer: string) => React.ReactElement;
    repository: string;
    renderRepository: (url: string) => React.ReactElement;
}

class FooterComponent extends React.Component<IFooterComponentProps> {
    render() {
        const { developer, renderDeveloper, repository, renderRepository } = this.props;
        return (
            <div className="FooterComponent">
                <div className="internalContainer">
                    <div className="developer">
                        {renderDeveloper(developer)}
                    </div>
                    <div className="repository">
                        {renderRepository(repository)}
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterComponent;