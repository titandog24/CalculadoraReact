import React from 'react'
import ButtonList from './components/ButtonList';
import Function from './components/Function';
import MathOperations from './components/MathOperations';
import Result from './components/Result';


import './resources/App.css'

const clickHandler = value => {
    console.log(value);
}

const clickOperations = value => {
    console.log(value);
}
const clickEquals = value => {
    console.log('valor equal: ' + value);
}

const clickClear = value => {
    console.log(value);
}
const clickR = value => {
    console.log(value);
}

const App = () => {
    const valoresDeBotones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    return (
        <main className='react-calculator'>
            <Result></Result>
            <div className='numbers'>
                <ButtonList evento={clickHandler} lista={valoresDeBotones}></ButtonList>
            </div>
            <Function onContentClear={clickClear} onDelete={clickR}></Function>
            <MathOperations onClickOperation={clickOperations} onClickEquals={clickEquals} />
        </main>
    );
}

export default App;
