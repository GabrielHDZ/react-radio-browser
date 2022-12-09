import React, { useEffect, useState } from 'react'
import { radio } from '../helpers/radioList';

function RadioList() {
    let [radiol, setRadiol] = useState([]);

    useEffect(() => {
        console.log(radio());

    }, [])


    return (
        <div>data</div>
    )
}

export default RadioList