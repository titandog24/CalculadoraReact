import React from 'react';
import Button from './Button';

const ButtonList = ({ lista, evento }) => {
    return (
        <>
            {
                lista.map(number => {
                    return <Button evento={evento} numero={number} key={number}></Button>
                })
            }
        </>

    );
}

export default ButtonList;
