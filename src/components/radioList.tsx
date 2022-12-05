import React, { useEffect } from 'react'
import { start } from '../helpers/radioList';

function RadioList() {

    useEffect(() => {
        let results = start()
        console.log(results);
        const data = await Promise.all(
            console.log(results);
            
            )
        )

    /* results.forEach(e => console.log(e.name)
    ) */
}, [])


return (
    <div>data</div>
)
}

export default RadioList