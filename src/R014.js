import React, { Component } from 'react';

class R014 extends Component {

    componentDidMount() {
        var For_arr = [3,2,8,8,];
        var For_newArr = [];

        for (let i = 0;i<For_arr.length;i++) {
            For_newArr.push(For_arr[i]);
        }
        console.log(`1. For_newArr : [${For_newArr}]`);



        
        var ForEach_Arr = [3,3,9,8,];
        var ForEach_newArr = [];

        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result);
        })
        console.log(`2. ForEach_newArr : [${ForEach_newArr}]`);
    }

    render() {
        return (
            <div>
                <h2>[this is Foreach]</h2>
            </div>
        );
    }
}

export default R014;