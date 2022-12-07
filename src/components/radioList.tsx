import React, { useEffect, useState } from 'react'
import { start } from '../helpers/radioList';

function RadioList() {
    let [radiol, setRadiol] = useState([]);

    useEffect(() => {
        start().then(e => setRadiol(e))

        /* results.forEach(e => console.log(e.name)
        ) */
    }, [])


    return (
        <div>data</div>
    )
}

export default RadioList