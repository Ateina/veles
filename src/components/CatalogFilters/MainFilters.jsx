import React from 'react';

class MainFilters extends React.Component {
    render() { 
        return (
            <div className="main-filters filters-block">
                {this.props.children}
            </div>
        );
    }
}
 
export default MainFilters;