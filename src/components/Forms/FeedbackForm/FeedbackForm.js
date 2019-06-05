import React, { Component } from 'react';

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userRequest: '',
            phoneNumber: ''
        };
    }
    render() {
        return (
            <form className="feedback">
                Form
            </form>
        );
    }
}

export default FeedbackForm;