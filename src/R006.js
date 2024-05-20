import React from "react";
import { Component } from "react";

class R006 extends Component {
    static getDerivedStateFromProps(props,state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1.constructor call');
    }
    render() {
        console.log('3.render call');
        return (
            <h2>[this is constuctor funcation]</h2>
        )
    }
}

export default R006;