import React from 'react';
import PropTypes from 'prop-types'

const Result = ({children}) => (
    <div className='result'>
        <span>{children}</span>
    </div>
)

Result.defaultProps = {
    children: "0"
}
Result.propTypes = {
    children: PropTypes.string.isRequired
}

export default Result;
