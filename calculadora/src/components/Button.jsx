import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ numero, evento }) => (
    <button onClick={() => evento(numero)}>{numero}</button>
)

Button.defaultProps = {
    numeros: 0
}
Button.propTypes = {
    numero: PropTypes.string.isRequired,
    evento: PropTypes.func.isRequired
}

export default Button;
