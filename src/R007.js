import React, { Component } from 'react';

class R007 extends Component {
    static getDerivedStateFromProps(props,state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    componentDidMount() {
        console.log('4. componentDidMount call');
        console.log('5. tmp_state :' + this.state.tmp_state);
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[this is constuctor funcation]</h2>
        )
    }
}

export default R007;