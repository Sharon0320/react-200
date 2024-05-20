import React, { Component } from 'react';

class R010 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : '+varName);
        var varName = '200'; // varName은 이미 선언되어서 다시 선언할 수 없음 하지만 실행했을 때는 오류를 출력하지 않고 그대로 실행되는데, var 변수는 재할당 재선언을 허용한다 --> var 변수를 이제 사용하지 않는 이유
        console.log('varName2 : '+varName);

        let letName = 'react'
        console.log('letName1 : '+letName);
        //let letName = '200'
        //letName은 이미 선언되었다
        letName = 'react200';
        console.log('letName2 : '+letName);

        const constName = 'react';
        console.log('constName : '+constName);
        //const constName = '200'
        //constName은 이미 선언되었다.
        //constName = 'react200'
        //const로 선언한 변수는 재할당이 불가하다.

    }



    render() {
        return (
            <div>
                <h2>This is variable</h2>
            </div>
        );
    }
}

export default R010;