import React from 'react';
import PropTypes from 'prop-types'
import ButtonList from './ButtonList';

const MathOperations = ({onClickOperation, onClickEquals}) => {
    const OperacionesDeBotones = ['+', '-', '*', '/']
    const OperacionIgual = ["="]
    return (
        <div className='math-operations'>
            <ButtonList evento={onClickOperation} lista={OperacionesDeBotones} />
            <ButtonList evento={onClickEquals} lista={OperacionIgual} />
        </div>
    );
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired
}

export default MathOperations
