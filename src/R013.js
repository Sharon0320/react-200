import React, { Component } from 'react';

class R013 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num:3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1) {
            return console.log(num1+'. Es5 Function');
        }
    }

    Function2 = (num1,num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num+'. Es5 Callback Funciton no Bind : ');
            console.log(this.state.arrowFuc);
        },10000);
    }

    Function4() {
        setTimeout(function() {console.log('4. Es5 Callback Function Bind : '+this.state.arrowFuc);}.bind(this),10000)
    }

    Function5 = (num1,num2,num3) => {
        const num4 = num1+num2+num3;
        setTimeout(()=> {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
        },10000);
    }

    render() {
        return (
            <div>
                <h2>This is arrowfunction</h2>
            </div>
        );
    }
}

export default R013;