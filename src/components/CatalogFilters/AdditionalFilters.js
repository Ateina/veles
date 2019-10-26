import React from 'react';

class AdditionalFilters extends React.Component {
    render() { 
        return (
            <div className="additional-filters filters-block">
                {this.props.children}
            </div>
        );
    }
}
 
export default AdditionalFilters;