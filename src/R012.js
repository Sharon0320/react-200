import React, { Component } from 'react';

class R12 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
            //ES6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
        }
        showNum(){
            console.log(`2. react_${this.number2}`);
        }
    }

    var cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();


    }


    render() {
        return (
            <div>
                <h2>This is class</h2>
            </div>
        );
    }
}

export default R12;