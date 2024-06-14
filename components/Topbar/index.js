import React from 'react'
import Links from './Links'

function TopBar() {
    const classes = {
        TopBarBody: `w-[100%] h-[4rem] flex`,
        TopBarLeftBody: `lg:w-[50%] h-full hidden lg:flex bg-yellow-200`,
        TopBarRightBody: `w-[100%] lg:w-[50%] h-full flex justify-end bg-blue-200`

    }

    return (
        <div className={classes.TopBarBody}>
            <div className={classes.TopBarLeftBody}>

            </div>

            <div className={classes.TopBarRightBody}>
                <Links />
            </div>
        </div>
    )
}

export default TopBar