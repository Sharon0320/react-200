import { Component } from "react";
import React from "react";

class R005 extends Component {
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

export default R005;