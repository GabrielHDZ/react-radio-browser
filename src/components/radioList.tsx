import React, { useEffect } from 'react'
import { start } from '../helpers/radioList';

function RadioList() {

    useEffect(() => {
        const response = start();

        return () => {
            console.log(response.then(e => console.log(e)));

        }
    }, [])


    return (
        <div>data</div>
    )
}

export default RadioList