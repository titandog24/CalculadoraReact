import React, { useState } from 'react'
import ButtonList from './components/ButtonList';
import Function from './components/Function';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import words from 'lodash.words';

import './resources/App.css'


const clickHandler = (value, setTexto) => {
    setTexto(value)
}

const clickEquals = (value, setTexto) => {
    // eslint-disable-next-line no-eval
    setTexto(eval(value).toString())
}

const clickR = (value, setTexto) => {
    if (value.length > 0) {
        const newText = value.substring(0, value.length - 1)
        setTexto(newText)
    }
}

const App = () => {
    const valoresDeBotones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const stateApp = useState("")
    const [texto, setTexto] = stateApp
    const items = words(texto,/[^-^+^*^/]+/g)
    const resultado = items.length === 0 ? '0' : items[items.length-1]
    debugger
    return (
        <main className='react-calculator'>
            <Result>{resultado}</Result>

            <div className='numbers'>
                <ButtonList evento={number => {
                    clickHandler(texto + number, setTexto)
                }} lista={valoresDeBotones} />
            </div>

            <Function onContentClear={() => {
                setTexto('')
            }}
                onDelete={() => {
                    clickR(texto, setTexto)
                }} />

            <MathOperations onClickOperation={value => {
                clickHandler(texto + value, setTexto)
            }}
                onClickEquals={() => {
                    clickEquals(texto, setTexto)
                }} />
        </main>
    );
}

export default App;
