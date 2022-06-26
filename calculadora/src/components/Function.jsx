import React from 'react'
import Button from './Button';


const Function = ({ onContentClear, onDelete }) => (
    <div className='functions'>
        <Button numero={"clear"} evento={onContentClear} />
        <Button numero={"r"} evento={onDelete} />
    </div>
)

export default Function
