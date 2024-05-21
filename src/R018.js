import React, { Component } from 'react';
import datatype from 'prop-types';

class R018 extends Component {
    render() {
        let {
            String,Number,Boolean,Array,ObjectJson,Function
        } = this.props
        return (
            <div style = {{padding:"0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>Functionprops: {Function}</p>
            </div>
        );
    }
}

// 오류 발생하게 하기 (왜 오류가 날까?)
R018.propTypes = {
    String : datatype.number
}

export default R018;