import React from 'react'

function Links() {
    const classes = {
        LinksBody: `flex items-center mx-2`,
        Lists: `p-2 mx-1`
    }

    return (
        <ul className={classes.LinksBody}>
            <li className={classes.Lists}>Home</li>
            <li className={classes.Lists}>About</li>
            <li className={classes.Lists}>Projects</li>
        </ul>
    )
}

export default Links