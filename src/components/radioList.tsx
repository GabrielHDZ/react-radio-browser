import React, { useEffect } from 'react'
import { start } from '../helpers/radioList';

function RadioList() {

    useEffect(() => {
        const response = start();

        return () => {
            console.log(response);

        }
    }, [])


    return (
        <div>data</div>
    )
}

export default RadioList