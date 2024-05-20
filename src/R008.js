import React, { Component } from 'react';

class R008 extends Component {
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
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props,state) {
        console.log('6. shouldComponentUpdate call / tmp_state2 =' + state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[this is constuctor funcation]</h2>
        )
    }
}

export default R008;