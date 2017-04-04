import React from 'react';
import { connect } from 'react-redux';
import { fetchPages } from '../../actions/index';

class PageIndex extends React.Component {
    componentWillMount() {
        this.props.fetchPages();
    }

    renderPagesTitle(pages) {
        return pages.map((page) => {
            return (
                <h2 key={page.id}>{page.title.rendered}</h2>
            )
        });
    }

    render() {
        const { pages } = this.props;

        if (pages.length === 0) {
            return (<div> Loading ... </div>);
        }
        return (
            <div>
                {this.renderPagesTitle(pages)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { pages: state.pages.all };
}

export default connect(mapStateToProps, { fetchPages })(PageIndex);
