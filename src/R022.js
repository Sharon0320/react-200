import React, { Component } from 'react';

class R022 extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style = {{padding : '0px'}}>
                {ReactString}{ReactNumber}
            </div>
        );
    }
}

R022.defaultProps = {
    ReactString : "리액트",
    ReactNumber : 400
}

export default R022;